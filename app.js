// ==========================================
// アプリケーション全体データ・設定
// ==========================================

const appData = {
  // 都営浅草線
  'asakusa-line': {
    title: '都営浅草線',
    icon: 'A',
    themeClass: 'asakusa-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'a-nishimagome', name: '西馬込', lat: 35.5866, lng: 139.7047, terminal: true, routes: ['main'] },
      { id: 'a-gotanda', name: '五反田', lat: 35.6264, lng: 139.7234, terminal: false, routes: ['main'] },
      { id: 'a-sengakuji', name: '泉岳寺', lat: 35.6384, lng: 139.7405, terminal: false, routes: ['main'] },
      { id: 'a-shimbashi', name: '新橋', lat: 35.6664, lng: 139.7583, terminal: false, routes: ['main'] },
      { id: 'a-nihombashi', name: '日本橋', lat: 35.6822, lng: 139.7747, terminal: false, routes: ['main'] },
      { id: 'a-asakusa', name: '浅草', lat: 35.7107, lng: 139.7977, terminal: false, routes: ['main'] },
      { id: 'a-oshiage', name: '押上', lat: 35.7107, lng: 139.8130, terminal: true, routes: ['main'] }
    ],
    routePatterns: {
      main: { name: '都営浅草線', color: '#E85298', glowColor: 'rgba(232, 82, 152, 0.4)', isLoop: false, stations: ['a-nishimagome', 'a-gotanda', 'a-sengakuji', 'a-shimbashi', 'a-nihombashi', 'a-asakusa', 'a-oshiage'] }
    },
    renderDetails() { return `<div class="modal-section"><p>西馬込から押上を結ぶ路線。京急・京成と直通運転。</p></div>`; },
    renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#E85298"></div><span>都営浅草線</span></div>`; }
  }
};

// サイドバー上のグループ化
const lineGroups = [
  {
    name: '東武線・特急',
    collapsible: true,
    collapsed: false,
    lines: ['tobu-nikko', 'tobu-kinugawa', 'tobu-skytree', 'tobu-urban', 'tobu-isesaki', 'tobu-nikko-kinugawa', 'tobu-sano-kiryu-koizumi', 'tobu-utsunomiya', 'tobu-kameido-daishi']
  },
  {
    name: 'JR線',
    collapsible: true,
    collapsed: false,
    lines: ['yamanote', 'keihintohoku', 'tokaido', 'yokosuka', 'saikyo', 'shonan-shinjuku', 'nambu', 'keiyo', 'chuo-rapid', 'chuo-sobu', 'sobu-rapid', 'ueno-tokyo', 'yokohama', 'tsurumi', 'kawagoe', 'musashino', 'joban-rapid', 'joban-local', 'sobu-main', 'sotobo', 'uchibo', 'narita', 'togane', 'kururi', 'mito', 'kashima', 'utsunomiya', 'nikko', 'karasuyama', 'takasaki', 'ryomo', 'agatsuma']
  },
  {
    name: '新幹線',
    collapsible: true,
    collapsed: false,
    lines: ['shinkansen-tokaido', 'shinkansen-sanyo', 'shinkansen-kyushu', 'shinkansen-nishikyushu', 'shinkansen-tohoku', 'shinkansen-hokkaido', 'shinkansen-joetsu', 'shinkansen-hokuriku', 'shinkansen-yamagata', 'shinkansen-akita']
  },
  {
    name: '都営地下鉄',
    collapsible: true,
    collapsed: true,
    lines: ['asakusa-line', 'toei-mita', 'toei-shinjuku', 'toei-oedo']
  },
  {
    name: '東京メトロ',
    collapsible: true,
    collapsed: true,
    lines: ['metro-ginza', 'metro-marunouchi', 'metro-hibiya', 'metro-tozai', 'metro-chiyoda', 'metro-yurakucho', 'metro-hanzomon', 'metro-namboku', 'metro-fukutoshin']
  },
  {
    name: '京急線',
    collapsible: true,
    collapsed: false,
    lines: ['keikyu-main', 'keikyu-airport', 'keikyu-kurihama', 'keikyu-daishi', 'keikyu-zushi']
  }
];

// ==========================================
// 地図・UI制御
// ==========================================
let map;
let activeLines = new Set();
let markers = [];
let routeLines = [];
let activeLandmarks = new Set();
let landmarkMarkers = [];

document.addEventListener('DOMContentLoaded', () => {
  initMap();
  renderSidebar();
  initSettingsModal();

  document.getElementById('clear-all-btn').addEventListener('click', clearAllLines);
});

function clearAllLines() {
  activeLines.forEach(lineId => {
    const btn = document.getElementById(`btn-${lineId}`);
    if (btn) {
      btn.classList.remove('active');
      btn.style.borderColor = 'transparent';
    }
  });
  activeLines.clear();
  renderAllActiveLines();
  
  activeLandmarks.forEach(lmId => {
    const btn = document.getElementById(`lm-btn-${lmId}`);
    if (btn) {
      btn.classList.remove('active');
    }
  });
  activeLandmarks.clear();
  if (typeof renderActiveLandmarks === 'function') {
    renderActiveLandmarks();
  }

  updateInfoPanel();
  updateLegendPanel();
}

function initMap() {
  map = L.map('map', {
    zoomControl: false,
    attributionControl: false
  }).setView([35.6812, 139.7671], 10);

  L.control.zoom({ position: 'topright' }).addTo(map);

  L.tileLayer('https://{s}.tile.openstreetmap.jp/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
}

function renderSidebar() {
  const container = document.getElementById('line-groups-container');
  container.innerHTML = '';

  lineGroups.forEach(group => {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'line-group';

    const header = document.createElement('div');
    header.className = 'line-group-header' + (group.collapsed ? ' collapsed' : '');
    header.innerHTML = `<span class="group-title">${group.name}</span><span class="group-toggle">▼</span>`;
    groupDiv.appendChild(header);

    const body = document.createElement('div');
    body.className = 'line-group-body';
    if (group.collapsed) {
      body.style.display = 'none';
    }

    header.addEventListener('click', () => {
      const isCollapsed = header.classList.toggle('collapsed');
      body.style.display = isCollapsed ? 'none' : 'block';
    });

    // 常に通常路線の描画
    group.lines.forEach(lineId => {
      if (!appData[lineId]) return;

      const lineDef = appData[lineId];
      const btn = document.createElement('button');
      btn.className = 'line-toggle-btn';
      btn.id = `btn-${lineId}`;
      const firstPattern = lineDef.routePatterns.main || lineDef.routePatterns.sub1 || Object.values(lineDef.routePatterns)[0];
      const color = firstPattern ? firstPattern.color : '#666';
      btn.style.setProperty('--btn-color', color);

      const letter = lineDef.stationLetter || null;
      const dotHtml = letter
        ? `<span class="line-metro-icon" style="background:${color};">${letter}</span>`
        : `<span class="line-dot"></span>`;
      
      btn.innerHTML = `
        ${dotHtml}
        <span class="line-btn-text">${lineDef.title}</span>
        <span class="line-check">✓</span>
      `;
      
      btn.addEventListener('click', () => {
        toggleLine(lineId);
      });
      body.appendChild(btn);
    });

    groupDiv.appendChild(body);
    container.appendChild(groupDiv);
  });
}

function toggleLine(lineId) {
  const btn = document.getElementById(`btn-${lineId}`);
  if (!btn) return;
  
  if (activeLines.has(lineId)) {
    activeLines.delete(lineId);
    btn.classList.remove('active');
    btn.style.borderColor = 'transparent';
  } else {
    activeLines.add(lineId);
    btn.classList.add('active');
    const color = appData[lineId].routePatterns.main ? appData[lineId].routePatterns.main.color : 'transparent';
    btn.style.borderColor = color;
  }
  
  renderAllActiveLines();
  updateInfoPanel();
  updateLegendPanel();
}

function renderAllActiveLines() {
  // 古い線の削除
  markers.forEach(m => map.removeLayer(m));
  routeLines.forEach(l => map.removeLayer(l));
  markers = [];
  routeLines = [];

  if (activeLines.size === 0) return;

  const bounds = L.latLngBounds();

  activeLines.forEach(lineId => {
    const lineDef = appData[lineId];
    if (!lineDef) return;

    // 駅マーカー
    lineDef.stations.forEach(st => {
      const isTerminal = st.terminal || false;
      const firstPattern = lineDef.routePatterns.main || lineDef.routePatterns.sub1 || Object.values(lineDef.routePatterns)[0];
      const color = firstPattern ? firstPattern.color : '#fff';
      const glowColor = firstPattern ? firstPattern.glowColor : '#fff';
      const letter = lineDef.stationLetter || null;

      let iconHtml;
      let iconSize;
      let iconAnchor;

      if (letter) {
        // 東京メトロ風：丸にアルファベット
        const size = isTerminal ? 26 : 20;
        iconHtml = `<div class="metro-letter-marker ${isTerminal ? 'terminal' : ''}" style="--metro-color: ${color}; width:${size}px; height:${size}px;">${letter}</div>`;
        iconSize = [size, size];
        iconAnchor = [size / 2, size / 2];
      } else {
        // 通常マーカー
        iconHtml = `<div class="premium-station-marker ${isTerminal ? 'terminal' : ''}" style="--border-color: ${color}; --glow-color: ${glowColor};"></div>`;
        iconSize = [isTerminal ? 24 : 18];
        iconAnchor = [isTerminal ? 12 : 9];
      }

      const m = L.marker([st.lat, st.lng], {
        icon: L.divIcon({
          className: 'premium-station-icon-wrapper',
          html: iconHtml,
          iconSize: iconSize,
          iconAnchor: iconAnchor
        }),
        zIndexOffset: isTerminal ? 100 : 0
      }).addTo(map);

      m.bindTooltip(st.name, {
        permanent: true,
        direction: 'right',
        className: 'station-tooltip'
      });
      markers.push(m);
      bounds.extend([st.lat, st.lng]);
    });

    // 路線描画
    Object.keys(lineDef.routePatterns).forEach(pKey => {
      const pattern = lineDef.routePatterns[pKey];
      const latlngs = pattern.stations.map(sid => {
        const st = lineDef.stations.find(s => s.id === sid);
        return st ? [st.lat, st.lng] : null;
      }).filter(x => x !== null);

      if (latlngs.length > 1) {
        // グロウ効果
        const gL = L.polyline(latlngs, {
          color: pattern.glowColor || pattern.color,
          weight: 12,
          opacity: 0.6,
          lineJoin: 'round'
        }).addTo(map);
        routeLines.push(gL);

        // Core線
        const mL = L.polyline(latlngs, {
          color: pattern.color,
          weight: 4,
          opacity: 1,
          lineJoin: 'round'
        }).addTo(map);
        routeLines.push(mL);
        

      }
    });
  });

  if (activeLines.size > 0 && bounds.isValid()) {
    map.fitBounds(bounds, { padding: [30, 30], maxZoom: 14 });
  }
}

function updateInfoPanel() {
  const panel = document.getElementById('info-panel');
  if (activeLines.size === 0) {
    panel.innerHTML = '路線を選択してください';
    panel.style.display = 'block';
    return;
  }
  
  let stCount = 0;
  activeLines.forEach(id => {
    if (appData[id]) stCount += appData[id].stations.length;
  });
  
  panel.innerHTML = `表示中: ${activeLines.size}路線 (${stCount}駅)`;
  panel.style.display = 'block';
}

function updateLegendPanel() {
  const panel = document.getElementById('legend-panel');
  if (activeLines.size === 0) {
    panel.style.display = 'none';
    return;
  }
  
  let html = '<h4>凡例</h4>';
  activeLines.forEach(id => {
    if (appData[id] && typeof appData[id].renderLegend === 'function') {
      html += appData[id].renderLegend();
    }
  });
  panel.innerHTML = html;
  panel.style.display = 'block';
}

// ==========================================
// ランドマーク・設定モーダル制御
// ==========================================
function initSettingsModal() {
  const modal = document.getElementById('settings-modal');
  const openBtn = document.getElementById('open-settings-btn');
  const closeBtn = document.getElementById('close-settings-btn');
  
  if (!modal || !openBtn || !closeBtn) return;

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
  
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  const allOnBtn = document.getElementById('landmark-all-on-btn');
  const allOffBtn = document.getElementById('landmark-all-off-btn');
  
  if (allOnBtn && allOffBtn) {
    allOnBtn.addEventListener('click', () => {
      if (typeof landmarkData !== 'undefined') {
        landmarkData.forEach(lm => {
          activeLandmarks.add(lm.id);
          const lmBtn = document.getElementById(`lm-btn-${lm.id}`);
          if (lmBtn) lmBtn.classList.add('active');
        });
        renderActiveLandmarks();
      }
    });

    allOffBtn.addEventListener('click', () => {
      activeLandmarks.clear();
      if (typeof landmarkData !== 'undefined') {
        landmarkData.forEach(lm => {
          const lmBtn = document.getElementById(`lm-btn-${lm.id}`);
          if (lmBtn) lmBtn.classList.remove('active');
        });
        renderActiveLandmarks();
      }
    });
  }

  // 県境トグル
  const togglePrefsBtn = document.getElementById('toggle-prefectures-btn');
  if (togglePrefsBtn) {
    togglePrefsBtn.addEventListener('change', (e) => {
      if (e.target.checked) {
        showPrefectures();
      } else {
        hidePrefectures();
      }
    });
  }

  // ランドマーク一覧の生成
  const controlsContainer = document.getElementById('landmark-controls');
  if (controlsContainer && typeof landmarkData !== 'undefined') {
    landmarkData.forEach(lm => {
      const btn = document.createElement('div');
      btn.className = 'landmark-toggle';
      btn.id = `lm-btn-${lm.id}`;
      btn.innerHTML = `
        <span class="landmark-icon">${lm.icon}</span>
        <span class="landmark-name">${lm.name}</span>
      `;
      btn.addEventListener('click', () => toggleLandmark(lm.id));
      controlsContainer.appendChild(btn);
    });
  }
}

function toggleLandmark(lmId) {
  const modalBtn = document.getElementById(`lm-btn-${lmId}`);
  
  if (activeLandmarks.has(lmId)) {
    activeLandmarks.delete(lmId);
    if (modalBtn) modalBtn.classList.remove('active');
  } else {
    activeLandmarks.add(lmId);
    if (modalBtn) modalBtn.classList.add('active');
  }
  renderActiveLandmarks();
}

function renderActiveLandmarks() {
  landmarkMarkers.forEach(m => map.removeLayer(m));
  landmarkMarkers = [];
  
  activeLandmarks.forEach(id => {
    const lm = landmarkData.find(x => x.id === id);
    if (!lm) return;
    
    const icon = L.divIcon({
      className: 'landmark-icon-wrapper',
      html: `<div class="landmark-marker">${lm.icon}</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });
    
    const m = L.marker([lm.lat, lm.lng], {
      icon: icon,
      zIndexOffset: 1000
    }).addTo(map);
    
    m.bindTooltip(lm.name, {
      direction: 'right',
      permanent: true,
      className: 'landmark-tooltip',
      offset: [10, 0]
    });
    
    landmarkMarkers.push(m);
  });
}

// ==========================================
// 県境表示機能
// ==========================================
let prefecturesLayer = null;

function showPrefectures() {
  if (prefecturesLayer) {
    if (!map.hasLayer(prefecturesLayer)) {
      prefecturesLayer.addTo(map);
    }
    return;
  }
  
  // 陸地の県境（海岸線を除いた内部境界のみ）を表示
  fetch('japan_land_borders.geojson')
    .then(response => response.json())
    .then(data => {
      prefecturesLayer = L.geoJSON(data, {
        style: function () {
          return {
            color: '#FFFFFF',    // 白色の境界線
            weight: 1.5,         // 細めの実線（太くしすぎない）
            opacity: 0.85,       // 適度な透明度で背景に馴染ませる
            lineJoin: 'round',   // 角を丸くして繋がりを滑らかにする
            lineCap: 'round',    // 線の端を丸くする
            fill: false
          };
        },
        interactive: false
      }).addTo(map);
    })
    .catch(err => console.error('県境データの読み込みに失敗しました', err));
}

function hidePrefectures() {
  if (prefecturesLayer && map.hasLayer(prefecturesLayer)) {
    map.removeLayer(prefecturesLayer);
  }
}
