const tobuData = {
  'tobu-nikko': {
    title: 'スペーシア東武日光線',
    icon: 'TN',
    themeClass: 'tobu-nikko-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'tn-asakusa', name: '浅草', lat: 35.711883, lng: 139.798214, terminal: true, routes: ['main'], info: 'スペーシア始発駅' },
      { id: 'tn-skytree', name: 'とうきょうスカイツリー', lat: 35.71043, lng: 139.809332, terminal: false, routes: ['main'], info: '' },
      { id: 'tn-kitasenju', name: '北千住', lat: 35.749891, lng: 139.805564, terminal: false, routes: ['main'], info: '' },
      { id: 'tn-kasukabe', name: '春日部', lat: 35.980095, lng: 139.752345, terminal: false, routes: ['main'], info: '' },
      { id: 'tn-tochigi', name: '栃木', lat: 36.371912, lng: 139.731037, terminal: false, routes: ['main'], info: '' },
      { id: 'tn-shinkamura', name: '新鹿沼', lat: 36.556998, lng: 139.74478, terminal: false, routes: ['main'], info: '' },
      { id: 'tn-shimoimaichi', name: '下今市', lat: 36.72563, lng: 139.692666, terminal: false, routes: ['main'], info: '鬼怒川線分岐' },
      { id: 'tn-tobunikko', name: '東武日光', lat: 36.748233, lng: 139.61975, terminal: true, routes: ['main'], info: '日光エリアの玄関口' }
    ],
    routePatterns: {
      main: {
        name: 'スペーシア東武日光線',
        color: '#E60012',
        glowColor: 'rgba(230, 0, 18, 0.4)',
        isLoop: false,
        stations: ['tn-asakusa', 'tn-skytree', 'tn-kitasenju', 'tn-kasukabe', 'tn-tochigi', 'tn-shinkamura', 'tn-shimoimaichi', 'tn-tobunikko']
      }
    },
    renderDetails() {
      return `
        <div class="modal-section">
          <h3><span class="section-icon">🚄</span>スペーシア東武日光線 概要</h3>
          <div class="time-cards" style="margin-bottom:12px;">
            <div class="time-card"><div class="route-name" style="color:#E60012;">所要時間</div><div class="time-value">108</div><div class="time-unit">浅草〜東武日光 (約1時間48分)</div></div>
            <div class="time-card"><div class="route-name" style="color:#E60012;">停車駅</div><div class="time-value">8</div><div class="time-unit">特急停車駅 8駅</div></div>
          </div>
        </div>
      `;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line" style="background:#E60012"></div><span>スペーシア東武日光線</span></div>`;
    }
  },

  'tobu-kinugawa': {
    title: 'スペーシア東武鬼怒川線',
    icon: 'TK',
    themeClass: 'tobu-kinugawa-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'tk-asakusa', name: '浅草', lat: 35.711883, lng: 139.798214, terminal: true, routes: ['main'], info: 'スペーシア始発駅' },
      { id: 'tk-skytree', name: 'とうきょうスカイツリー', lat: 35.71043, lng: 139.809332, terminal: false, routes: ['main'], info: '' },
      { id: 'tk-kitasenju', name: '北千住', lat: 35.749891, lng: 139.805564, terminal: false, routes: ['main'], info: '' },
      { id: 'tk-kasukabe', name: '春日部', lat: 35.980095, lng: 139.752345, terminal: false, routes: ['main'], info: '' },
      { id: 'tk-tochigi', name: '栃木', lat: 36.371912, lng: 139.731037, terminal: false, routes: ['main'], info: '' },
      { id: 'tk-shinkamura', name: '新鹿沼', lat: 36.556998, lng: 139.74478, terminal: false, routes: ['main'], info: '' },
      { id: 'tk-shimoimaichi', name: '下今市', lat: 36.72563, lng: 139.692666, terminal: false, routes: ['main'], info: '日光線分岐' },
      { id: 'tk-worldsquare', name: '東武ワールドスクウェア', lat: 36.808333, lng: 139.709083, terminal: false, routes: ['main'], info: '東武ワールドスクウェア最寄駅' },
      { id: 'tk-kinugawa', name: '鬼怒川温泉', lat: 36.822622, lng: 139.716552, terminal: true, routes: ['main'], info: '鬼怒川温泉郷の最寄駅' }
    ],
    routePatterns: {
      main: {
        name: 'スペーシア東武鬼怒川線',
        color: '#F39800',
        glowColor: 'rgba(243, 152, 0, 0.4)',
        isLoop: false,
        stations: ['tk-asakusa', 'tk-skytree', 'tk-kitasenju', 'tk-kasukabe', 'tk-tochigi', 'tk-shinkamura', 'tk-shimoimaichi', 'tk-worldsquare', 'tk-kinugawa']
      }
    },
    renderDetails() {
      return `
        <div class="modal-section">
          <h3><span class="section-icon">🚄</span>スペーシア東武鬼怒川線 概要</h3>
          <div class="time-cards" style="margin-bottom:12px;">
            <div class="time-card"><div class="route-name" style="color:#F39800;">所要時間</div><div class="time-value">120</div><div class="time-unit">浅草〜鬼怒川温泉 (約2時間)</div></div>
            <div class="time-card"><div class="route-name" style="color:#F39800;">停車駅</div><div class="time-value">9</div><div class="time-unit">特急停車駅 9駅</div></div>
          </div>
        </div>
      `;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line" style="background:#F39800"></div><span>スペーシア東武鬼怒川線</span></div>`;
    }
  },

  'tobu-skytree': {
    title: '東武スカイツリーライン',
    icon: 'TS',
    themeClass: 'tobu-skytree-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'ts-asakusa', name: '浅草', lat: 35.711883, lng: 139.798214, terminal: true, routes: ['main'] },
      { id: 'ts-skytree', name: 'とうきょうスカイツリー', lat: 35.71043, lng: 139.809332, terminal: false, routes: ['main'] },
      { id: 'ts-hikifune', name: '曳舟', lat: 35.718418, lng: 139.816634, terminal: false, routes: ['main'] },
      { id: 'ts-higashimukojima', name: '東向島', lat: 35.724324, lng: 139.819306, terminal: false, routes: ['main'] },
      { id: 'ts-kanegafuchi', name: '鐘ヶ淵', lat: 35.733712, lng: 139.820344, terminal: false, routes: ['main'] },
      { id: 'ts-horikiri', name: '堀切', lat: 35.742977, lng: 139.817727, terminal: false, routes: ['main'] },
      { id: 'ts-ushida', name: '牛田', lat: 35.744555, lng: 139.811816, terminal: false, routes: ['main'] },
      { id: 'ts-kitasenju', name: '北千住', lat: 35.749891, lng: 139.805564, terminal: false, routes: ['main'], info: '日比谷線・千代田線・JR常磐線乗換' },
      { id: 'ts-kosuge', name: '小菅', lat: 35.759039, lng: 139.812935, terminal: false, routes: ['main'] },
      { id: 'ts-gotanno', name: '五反野', lat: 35.765852, lng: 139.809643, terminal: false, routes: ['main'] },
      { id: 'ts-umejima', name: '梅島', lat: 35.772437, lng: 139.797916, terminal: false, routes: ['main'] },
      { id: 'ts-nishiarai', name: '西新井', lat: 35.777323, lng: 139.790372, terminal: false, routes: ['main'], info: '大師線乗換' },
      { id: 'ts-takenotsuka', name: '竹ノ塚', lat: 35.794368, lng: 139.790788, terminal: false, routes: ['main'] },
      { id: 'ts-yatsuka', name: '谷塚', lat: 35.814926, lng: 139.801483, terminal: false, routes: ['main'] },
      { id: 'ts-soka', name: '草加', lat: 35.828476, lng: 139.803397, terminal: false, routes: ['main'] },
      { id: 'ts-dokkyodaigakumae', name: '獨協大学前', lat: 35.84333, lng: 139.800622, terminal: false, routes: ['main'] },
      { id: 'ts-shinden', name: '新田', lat: 35.854086, lng: 139.795391, terminal: false, routes: ['main'] },
      { id: 'ts-gamo', name: '蒲生', lat: 35.866851, lng: 139.791686, terminal: false, routes: ['main'] },
      { id: 'ts-shinkoshigaya', name: '新越谷', lat: 35.875186, lng: 139.789905, terminal: false, routes: ['main'], info: 'JR武蔵野線南越谷駅乗換' },
      { id: 'ts-koshigaya', name: '越谷', lat: 35.887529, lng: 139.786213, terminal: false, routes: ['main'] },
      { id: 'ts-kitakoshigaya', name: '北越谷', lat: 35.901724, lng: 139.780008, terminal: false, routes: ['main'] },
      { id: 'ts-obukuro', name: '大袋', lat: 35.92437, lng: 139.777868, terminal: false, routes: ['main'] },
      { id: 'ts-sengendai', name: 'せんげん台', lat: 35.935832, lng: 139.774478, terminal: false, routes: ['main'] },
      { id: 'ts-takesato', name: '武里', lat: 35.949102, lng: 139.770675, terminal: false, routes: ['main'] },
      { id: 'ts-ichinowari', name: '一ノ割', lat: 35.96412, lng: 139.766219, terminal: false, routes: ['main'] },
      { id: 'ts-kasukabe', name: '春日部', lat: 35.980095, lng: 139.752345, terminal: false, routes: ['main'], info: 'アーバンパークライン乗換' },
      { id: 'ts-kitakasukabe', name: '北春日部', lat: 35.990655, lng: 139.744012, terminal: false, routes: ['main'] },
      { id: 'ts-himemiya', name: '姫宮', lat: 36.004384, lng: 139.738674, terminal: false, routes: ['main'] },
      { id: 'ts-tobuzoo', name: '東武動物公園', lat: 36.024604, lng: 139.726901, terminal: true, routes: ['main'], info: '日光線・伊勢崎線分岐' }
    ],
    routePatterns: {
      main: {
        name: '東武スカイツリーライン',
        color: '#0068B7',
        glowColor: 'rgba(0, 104, 183, 0.4)',
        isLoop: false,
        stations: ['ts-asakusa', 'ts-skytree', 'ts-hikifune', 'ts-higashimukojima', 'ts-kanegafuchi', 'ts-horikiri', 'ts-ushida', 'ts-kitasenju', 'ts-kosuge', 'ts-gotanno', 'ts-umejima', 'ts-nishiarai', 'ts-takenotsuka', 'ts-yatsuka', 'ts-soka', 'ts-dokkyodaigakumae', 'ts-shinden', 'ts-gamo', 'ts-shinkoshigaya', 'ts-koshigaya', 'ts-kitakoshigaya', 'ts-obukuro', 'ts-sengendai', 'ts-takesato', 'ts-ichinowari', 'ts-kasukabe', 'ts-kitakasukabe', 'ts-himemiya', 'ts-tobuzoo']
      }
    },
    renderDetails() {
      return `
        <div class="modal-section">
          <h3><span class="section-icon">🚉</span>東武スカイツリーライン 概要</h3>
          <div class="time-cards" style="margin-bottom:12px;">
            <div class="time-card"><div class="route-name" style="color:#0068B7;">営業距離</div><div class="time-value">48.7</div><div class="time-unit">浅草〜東武動物公園 (48.7km)</div></div>
            <div class="time-card"><div class="route-name" style="color:#0068B7;">駅数</div><div class="time-value">29</div><div class="time-unit">全29駅</div></div>
          </div>
        </div>
      `;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line" style="background:#0068B7"></div><span>東武スカイツリーライン</span></div>`;
    }
  },

  'tobu-urban': {
    title: '東武アーバンパークライン',
    icon: 'TD',
    themeClass: 'tobu-urban-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'td-omiya', name: '大宮', lat: 35.907599, lng: 139.624458, terminal: true, routes: ['main'], info: 'JR各線・ニューシャトル乗換' },
      { id: 'td-kitaomiya', name: '北大宮', lat: 35.91716, lng: 139.624726, terminal: false, routes: ['main'] },
      { id: 'td-omiyakoen', name: '大宮公園', lat: 35.92374, lng: 139.632903, terminal: false, routes: ['main'] },
      { id: 'td-owada', name: '大和田', lat: 35.929359, lng: 139.65051, terminal: false, routes: ['main'] },
      { id: 'td-nanasato', name: '七里', lat: 35.936464, lng: 139.665948, terminal: false, routes: ['main'] },
      { id: 'td-iwatsuki', name: '岩槻', lat: 35.950239, lng: 139.693197, terminal: false, routes: ['main'] },
      { id: 'td-higashiiwatsuki', name: '東岩槻', lat: 35.963273, lng: 139.712192, terminal: false, routes: ['main'] },
      { id: 'td-toyoharu', name: '豊春', lat: 35.968014, lng: 139.72601, terminal: false, routes: ['main'] },
      { id: 'td-yagisaki', name: '八木崎', lat: 35.978376, lng: 139.741785, terminal: false, routes: ['main'] },
      { id: 'td-kasukabe', name: '春日部', lat: 35.980095, lng: 139.752345, terminal: false, routes: ['main'], info: 'スカイツリーライン乗換' },
      { id: 'td-fujinouchijima', name: '藤の牛島', lat: 35.98026, lng: 139.778038, terminal: false, routes: ['main'] },
      { id: 'td-minamisakurai', name: '南桜井', lat: 35.980441, lng: 139.807988, terminal: false, routes: ['main'] },
      { id: 'td-kawama', name: '川間', lat: 35.979172, lng: 139.83385, terminal: false, routes: ['main'] },
      { id: 'td-nanakoudai', name: '七光台', lat: 35.970884, lng: 139.852906, terminal: false, routes: ['main'] },
      { id: 'td-shimizukoen', name: '清水公園', lat: 35.959364, lng: 139.85967, terminal: false, routes: ['main'] },
      { id: 'td-atago', name: '愛宕', lat: 35.950154, lng: 139.864817, terminal: false, routes: ['main'] },
      { id: 'td-nodashi', name: '野田市', lat: 35.943652, lng: 139.870728, terminal: false, routes: ['main'] },
      { id: 'td-umesato', name: '梅郷', lat: 35.931575, lng: 139.891086, terminal: false, routes: ['main'] },
      { id: 'td-unga', name: '運河', lat: 35.914392, lng: 139.906063, terminal: false, routes: ['main'] },
      { id: 'td-edogawadai', name: '江戸川台', lat: 35.897344, lng: 139.91045, terminal: false, routes: ['main'] },
      { id: 'td-hatsuishi', name: '初石', lat: 35.883783, lng: 139.917861, terminal: false, routes: ['main'] },
      { id: 'td-otakanomori', name: '流山おおたかの森', lat: 35.872051, lng: 139.925898, terminal: false, routes: ['main'], info: 'TX線乗換' },
      { id: 'td-toyoshiki', name: '豊四季', lat: 35.86657, lng: 139.93929, terminal: false, routes: ['main'] },
      { id: 'td-kashiwa', name: '柏', lat: 35.862316, lng: 139.971148, terminal: false, routes: ['main'], info: 'JR常磐線乗換' },
      { id: 'td-shinkashiwa', name: '新柏', lat: 35.838128, lng: 139.966994, terminal: false, routes: ['main'] },
      { id: 'td-masuo', name: '増尾', lat: 35.829704, lng: 139.976604, terminal: false, routes: ['main'] },
      { id: 'td-sakasai', name: '逆井', lat: 35.823336, lng: 139.983812, terminal: false, routes: ['main'] },
      { id: 'td-takayanagi', name: '高柳', lat: 35.808211, lng: 139.998936, terminal: false, routes: ['main'] },
      { id: 'td-mutsumi', name: '六実', lat: 35.793715, lng: 139.999195, terminal: false, routes: ['main'] },
      { id: 'td-shinkamagaya', name: '新鎌ケ谷', lat: 35.780221, lng: 139.999455, terminal: false, routes: ['main'], info: '北総線・新京成線乗換' },
      { id: 'td-kamagaya', name: '鎌ケ谷', lat: 35.763765, lng: 139.997266, terminal: false, routes: ['main'] },
      { id: 'td-magomezawa', name: '馬込沢', lat: 35.741586, lng: 139.992199, terminal: false, routes: ['main'] },
      { id: 'td-tsukada', name: '塚田', lat: 35.722102, lng: 139.982859, terminal: false, routes: ['main'] },
      { id: 'td-shinfunabashi', name: '新船橋', lat: 35.710993, lng: 139.979765, terminal: false, routes: ['main'] },
      { id: 'td-funabashi', name: '船橋', lat: 35.7021, lng: 139.98436, terminal: true, routes: ['main'], info: 'JR総武線乗換' }
    ],
    routePatterns: {
      main: {
        name: '東武アーバンパークライン',
        color: '#00A960',
        glowColor: 'rgba(0, 169, 96, 0.4)',
        isLoop: false,
        stations: ['td-omiya', 'td-kitaomiya', 'td-omiyakoen', 'td-owada', 'td-nanasato', 'td-iwatsuki', 'td-higashiiwatsuki', 'td-toyoharu', 'td-yagisaki', 'td-kasukabe', 'td-fujinouchijima', 'td-minamisakurai', 'td-kawama', 'td-nanakoudai', 'td-shimizukoen', 'td-atago', 'td-nodashi', 'td-umesato', 'td-unga', 'td-edogawadai', 'td-hatsuishi', 'td-otakanomori', 'td-toyoshiki', 'td-kashiwa', 'td-shinkashiwa', 'td-masuo', 'td-sakasai', 'td-takayanagi', 'td-mutsumi', 'td-shinkamagaya', 'td-kamagaya', 'td-magomezawa', 'td-tsukada', 'td-shinfunabashi', 'td-funabashi']
      }
    },
    renderDetails() {
      return `
        <div class="modal-section">
          <h3><span class="section-icon">🚉</span>東武アーバンパークライン 概要</h3>
          <div class="time-cards" style="margin-bottom:12px;">
            <div class="time-card"><div class="route-name" style="color:#00A960;">営業距離</div><div class="time-value">62.7</div><div class="time-unit">大宮〜船橋 (62.7km)</div></div>
            <div class="time-card"><div class="route-name" style="color:#00A960;">駅数</div><div class="time-value">35</div><div class="time-unit">全35駅</div></div>
          </div>
        </div>
      `;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line" style="background:#00A960"></div><span>東武アーバンパークライン</span></div>`;
    }
  }
};

// app.js の appData に結合する
if (typeof appData !== 'undefined') {
  Object.assign(appData, tobuData);
}

