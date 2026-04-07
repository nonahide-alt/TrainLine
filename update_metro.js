const fs = require('fs');
const coordsData = JSON.parse(fs.readFileSync('metro_coords.json', 'utf8'));

let metroJs = fs.readFileSync('metro.js', 'utf8');
const lines = metroJs.split('\n');

const lineMapping = {
    'metro-ginza': '東京メトロ銀座線',
    'metro-marunouchi': '東京メトロ丸ノ内線',
    'metro-hibiya': '東京メトロ日比谷線',
    'metro-tozai': '東京メトロ東西線',
    'metro-chiyoda': '東京メトロ千代田線',
    'metro-yurakucho': '東京メトロ有楽町線',
    'metro-hanzomon': '東京メトロ半蔵門線',
    'metro-namboku': '東京メトロ南北線',
    'metro-fukutoshin': '東京メトロ副都心線'
};

let currentLineKey = null;

const nameFixes = {
    '明治神宮前〈原宿〉': '明治神宮前',
    '二重橋前〈丸の内〉': '二重橋前',
    '南阿佐ケ谷': '南阿佐ヶ谷',
    '霞ケ関': '霞ケ関',
    '市ケ谷': '市ヶ谷',
    '四谷三丁目': '四谷三丁目',
    '四ツ谷': '四ツ谷',
    '雑司が谷': '雑司が谷',
    '千駄木': '千駄木',
};

const processedLines = lines.map(line => {
    const lineKeyMatch = line.match(/^  '(metro-[a-z]+)':/);
    if (lineKeyMatch) {
        currentLineKey = lineKeyMatch[1];
    }
    
    const stMatch = line.match(/name:\s*'([^']+)'/);
    if (stMatch && line.includes('lat:') && line.includes('lng:')) {
        let stName = stMatch[1];
        let searchName = nameFixes[stName] || stName;
        searchName = searchName.replace(/〈.*〉/g, ''); // default cleanup if not in fixes

        const hrLine = lineMapping[currentLineKey];
        if (hrLine) {
            const coord = coordsData.find(c => c.Line === hrLine && c.Name === searchName);
            if (coord) {
                line = line.replace(/lat:\s*[\d\.]+/, lat: );
                line = line.replace(/lng:\s*[\d\.]+/, lng: );
            } else {
                console.log(Coord not found:  (Search: ) in );
            }
        }
    }
    return line;
});

fs.writeFileSync('metro.js', processedLines.join('\n'), 'utf8');
console.log('Update complete.');
