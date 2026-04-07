const fs = require('fs');

async function geocode(stationName) {
  // 過去のクエリによる結果キャッシュ（エラーや変な場所を避けるための手動調整含む）
  const manualFixes = {
    '府中': { lat: 35.67225, lng: 139.48024 },
    '南平': { lat: 35.65685, lng: 139.40200 },
    '浦和': { lat: 35.8584, lng: 139.6513 },
    '鶴見': { lat: 35.5050, lng: 139.6766 },
    '藤沢': { lat: 35.3388, lng: 139.4900 },
    '辻堂': { lat: 35.3349, lng: 139.4538 },
    '熱海': { lat: 35.1043, lng: 139.0779 },
    '武蔵小杉': { lat: 35.5764, lng: 139.6597 },
    '東京': { lat: 35.6812, lng: 139.7671 },
    '新宿': { lat: 35.69018, lng: 139.69970 },
    '品川': { lat: 35.63065, lng: 139.73740 },
    '西船橋': { lat: 35.7074, lng: 139.9592 }
  };
  
  if (manualFixes[stationName]) return manualFixes[stationName];

  // クエリの工夫
  let query = stationName + '駅';
  if (['大宮','立川','八王子','横浜','千葉'].includes(stationName)) query = stationName + '駅 JR';

  console.log(`Fetching ${query}...`);
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&countrycodes=jp&limit=1`, {
      headers: { 'User-Agent': 'TrainLineApp/1.0' }
    });
    const data = await res.json();
    if (data.length > 0) {
      return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
    }
  } catch (e) {
    console.error(e);
  }
  return null;
}

async function processFile(filename) {
  if (!fs.existsSync(filename)) return;
  let content = fs.readFileSync(filename, 'utf8');
  
  // マッチ: { id: '...', name: '駅名', lat: xxx, lng: yyy ... }
  const regex = /\{[^}]*name:\s*'([^']+)'[^}]*lat:\s*([\d.]+)[^}]*lng:\s*([\d.]+)[^}]*\}/g;
  
  let match;
  let matches = [];
  while ((match = regex.exec(content)) !== null) {
      matches.push({
          full: match[0],
          name: match[1],
          lat: parseFloat(match[2]),
          lng: parseFloat(match[3])
      });
  }

  let updatedContent = content;
  for (const m of matches) {
      // 少し待機 (API制限回避)
      await new Promise(r => setTimeout(r, 1100));
      const coords = await geocode(m.name);
      if (coords) {
          // 元のテキストを新しい座標で置換
          const newText = m.full
              .replace(/lat:\s*[\d.]+/, `lat: ${coords.lat.toFixed(5)}`)
              .replace(/lng:\s*[\d.]+/, `lng: ${coords.lng.toFixed(5)}`);
          updatedContent = updatedContent.replace(m.full, newText);
          console.log(`Updated ${m.name}: ${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`);
      }
  }

  fs.writeFileSync(filename, updatedContent);
  console.log(`Finished ${filename}`);
}

async function main() {
  const files = ['metro.js', 'toei.js', 'tobu.js', 'keikyu.js', 'kansen.js', 'jr.js', 'keio.js'];
  for (const file of files) {
      await processFile(file);
  }
}

main();
