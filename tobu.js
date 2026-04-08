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



tobuData['tobu-isesaki'] = { title: 'スカイツリーライン（伊勢崎線）', icon: 'TI', themeClass: 'tobu-theme', hasSubRoutes: false,
  stations: [
      { id: 'tobu-ise-浅草', name: '浅草', lat: 35.711883, lng: 139.798214, terminal: true, routes: ['main'] },
      { id: 'tobu-ise-とうきょうスカイツリー', name: 'とうきょうスカイツリー', lat: 35.71043, lng: 139.809332, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-押上', name: '押上', lat: 35.710702, lng: 139.812935, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-曳舟', name: '曳舟', lat: 35.718418, lng: 139.816634, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-東向島', name: '東向島', lat: 35.724324, lng: 139.819306, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-鐘ヶ淵', name: '鐘ヶ淵', lat: 35.733712, lng: 139.820344, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-堀切', name: '堀切', lat: 35.742977, lng: 139.817727, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-牛田', name: '牛田', lat: 35.744555, lng: 139.811816, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-北千住', name: '北千住', lat: 35.749891, lng: 139.805564, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-小菅', name: '小菅', lat: 35.759039, lng: 139.812935, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-五反野', name: '五反野', lat: 35.765852, lng: 139.809643, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-梅島', name: '梅島', lat: 35.772437, lng: 139.797916, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-西新井', name: '西新井', lat: 35.777323, lng: 139.790372, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-竹ノ塚', name: '竹ノ塚', lat: 35.794368, lng: 139.790788, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-谷塚', name: '谷塚', lat: 35.814926, lng: 139.801483, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-草加', name: '草加', lat: 35.828476, lng: 139.803397, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-獨協大学前', name: '獨協大学前', lat: 35.84333, lng: 139.800622, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-新田', name: '新田', lat: 35.854086, lng: 139.795391, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-蒲生', name: '蒲生', lat: 35.866851, lng: 139.791686, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-新越谷', name: '新越谷', lat: 35.875186, lng: 139.789905, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-越谷', name: '越谷', lat: 35.887529, lng: 139.786213, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-北越谷', name: '北越谷', lat: 35.901724, lng: 139.780008, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-大袋', name: '大袋', lat: 35.92437, lng: 139.777868, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-せんげん台', name: 'せんげん台', lat: 35.935832, lng: 139.774478, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-武里', name: '武里', lat: 35.949102, lng: 139.770675, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-一ノ割', name: '一ノ割', lat: 35.96412, lng: 139.766219, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-春日部', name: '春日部', lat: 35.980095, lng: 139.752345, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-北春日部', name: '北春日部', lat: 35.990655, lng: 139.744012, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-姫宮', name: '姫宮', lat: 36.004384, lng: 139.738674, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-東武動物公園', name: '東武動物公園', lat: 36.024604, lng: 139.726901, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-和戸', name: '和戸', lat: 36.039562, lng: 139.701156, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-久喜', name: '久喜', lat: 36.065684, lng: 139.67727, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-鷲宮', name: '鷲宮', lat: 36.09626, lng: 139.656945, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-花崎', name: '花崎', lat: 36.109891, lng: 139.633522, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-加須', name: '加須', lat: 36.122992, lng: 139.595584, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-南羽生', name: '南羽生', lat: 36.14959, lng: 139.55696, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-羽生', name: '羽生', lat: 36.170345, lng: 139.533949, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-川俣', name: '川俣', lat: 36.208778, lng: 139.52652, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-茂林寺前', name: '茂林寺前', lat: 36.226331, lng: 139.527058, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-館林', name: '館林', lat: 36.246606, lng: 139.527811, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-多々良', name: '多々良', lat: 36.273732, lng: 139.500179, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-県', name: '県', lat: 36.290615, lng: 139.472336, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-福居', name: '福居', lat: 36.305208, lng: 139.458634, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-東武和泉', name: '東武和泉', lat: 36.315595, lng: 139.45509, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-足利市', name: '足利市', lat: 36.32948, lng: 139.448113, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-野州山辺', name: '野州山辺', lat: 36.32633, lng: 139.431981, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-韮川', name: '韮川', lat: 36.307913, lng: 139.401704, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-太田', name: '太田', lat: 36.294228, lng: 139.378779, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-細谷', name: '細谷', lat: 36.282523, lng: 139.348509, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-木崎', name: '木崎', lat: 36.271393, lng: 139.312988, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-世良田', name: '世良田', lat: 36.272931, lng: 139.282038, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-境町', name: '境町', lat: 36.277191, lng: 139.256177, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-剛志', name: '剛志', lat: 36.295428, lng: 139.223792, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-新伊勢崎', name: '新伊勢崎', lat: 36.318052, lng: 139.201816, terminal: false, routes: ['main'] },
      { id: 'tobu-ise-伊勢崎', name: '伊勢崎', lat: 36.326622, lng: 139.194559, terminal: true, routes: ['main'] }
  ], routePatterns: { main: { name: 'スカイツリーライン（伊勢崎線）', color: '#0068B7', glowColor: 'rgba(0, 104, 183, 0.4)', isLoop: false, stations: ['tobu-ise-浅草', 'tobu-ise-とうきょうスカイツリー', 'tobu-ise-押上', 'tobu-ise-曳舟', 'tobu-ise-東向島', 'tobu-ise-鐘ヶ淵', 'tobu-ise-堀切', 'tobu-ise-牛田', 'tobu-ise-北千住', 'tobu-ise-小菅', 'tobu-ise-五反野', 'tobu-ise-梅島', 'tobu-ise-西新井', 'tobu-ise-竹ノ塚', 'tobu-ise-谷塚', 'tobu-ise-草加', 'tobu-ise-獨協大学前', 'tobu-ise-新田', 'tobu-ise-蒲生', 'tobu-ise-新越谷', 'tobu-ise-越谷', 'tobu-ise-北越谷', 'tobu-ise-大袋', 'tobu-ise-せんげん台', 'tobu-ise-武里', 'tobu-ise-一ノ割', 'tobu-ise-春日部', 'tobu-ise-北春日部', 'tobu-ise-姫宮', 'tobu-ise-東武動物公園', 'tobu-ise-和戸', 'tobu-ise-久喜', 'tobu-ise-鷲宮', 'tobu-ise-花崎', 'tobu-ise-加須', 'tobu-ise-南羽生', 'tobu-ise-羽生', 'tobu-ise-川俣', 'tobu-ise-茂林寺前', 'tobu-ise-館林', 'tobu-ise-多々良', 'tobu-ise-県', 'tobu-ise-福居', 'tobu-ise-東武和泉', 'tobu-ise-足利市', 'tobu-ise-野州山辺', 'tobu-ise-韮川', 'tobu-ise-太田', 'tobu-ise-細谷', 'tobu-ise-木崎', 'tobu-ise-世良田', 'tobu-ise-境町', 'tobu-ise-剛志', 'tobu-ise-新伊勢崎', 'tobu-ise-伊勢崎'] } },
  renderDetails() { return `<div class="modal-section"><p>スカイツリーライン（伊勢崎線）</p></div>`; }, renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#0068B7"></div><span>スカイツリーライン（伊勢崎線）</span></div>`; } };

tobuData['tobu-nikko-kinugawa'] = { title: '日光線・鬼怒川線', icon: 'TN', themeClass: 'tobu-theme', hasSubRoutes: true,
  stations: [
      { id: 'tobu-nk-東武動物公園', name: '東武動物公園', lat: 36.024604, lng: 139.726901, terminal: true, routes: ['nikko'] },
      { id: 'tobu-nk-杉戸高野台', name: '杉戸高野台', lat: 36.051536, lng: 139.714582, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-幸手', name: '幸手', lat: 36.074297, lng: 139.714937, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-南栗橋', name: '南栗橋', lat: 36.113157, lng: 139.713004, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-栗橋', name: '栗橋', lat: 36.137034, lng: 139.693855, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-新古河', name: '新古河', lat: 36.192686, lng: 139.686904, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-柳生', name: '柳生', lat: 36.206756, lng: 139.659645, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-板倉東洋大前', name: '板倉東洋大前', lat: 36.222404, lng: 139.648493, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-藤岡', name: '藤岡', lat: 36.255628, lng: 139.64555, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-静和', name: '静和', lat: 36.31651, lng: 139.684864, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-新大平下', name: '新大平下', lat: 36.339024, lng: 139.701886, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-栃木', name: '栃木', lat: 36.371912, lng: 139.731037, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-新栃木', name: '新栃木', lat: 36.390149, lng: 139.742308, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-合戦場', name: '合戦場', lat: 36.407647, lng: 139.741057, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-家中', name: '家中', lat: 36.429783, lng: 139.747344, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-東武金崎', name: '東武金崎', lat: 36.466288, lng: 139.749468, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-楡木', name: '楡木', lat: 36.507497, lng: 139.745164, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-樅山', name: '樅山', lat: 36.532667, lng: 139.741875, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-新鹿沼', name: '新鹿沼', lat: 36.556998, lng: 139.74478, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-北鹿沼', name: '北鹿沼', lat: 36.580811, lng: 139.737646, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-板荷', name: '板荷', lat: 36.619476, lng: 139.707739, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-下小代', name: '下小代', lat: 36.651303, lng: 139.713849, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-明神', name: '明神', lat: 36.676566, lng: 139.712301, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-下今市', name: '下今市', lat: 36.72563, lng: 139.692666, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-上今市', name: '上今市', lat: 36.727962, lng: 139.681026, terminal: false, routes: ['nikko'] },
      { id: 'tobu-nk-東武日光', name: '東武日光', lat: 36.748233, lng: 139.61975, terminal: true, routes: ['nikko'] },
      { id: 'tobu-nk-大谷向', name: '大谷向', lat: 36.73224, lng: 139.691916, terminal: false, routes: ['kinugawa'] },
      { id: 'tobu-nk-大桑', name: '大桑', lat: 36.76079, lng: 139.713546, terminal: false, routes: ['kinugawa'] },
      { id: 'tobu-nk-新高徳', name: '新高徳', lat: 36.779816, lng: 139.710623, terminal: false, routes: ['kinugawa'] },
      { id: 'tobu-nk-小佐越', name: '小佐越', lat: 36.802252, lng: 139.706465, terminal: false, routes: ['kinugawa'] },
      { id: 'tobu-nk-東武ワールドスクウェア', name: '東武ワールドスクウェア', lat: 36.808333, lng: 139.709083, terminal: false, routes: ['kinugawa'] },
      { id: 'tobu-nk-鬼怒川温泉', name: '鬼怒川温泉', lat: 36.822622, lng: 139.716552, terminal: false, routes: ['kinugawa'] },
      { id: 'tobu-nk-鬼怒川公園', name: '鬼怒川公園', lat: 36.841, lng: 139.72287, terminal: false, routes: ['kinugawa'] },
      { id: 'tobu-nk-新藤原', name: '新藤原', lat: 36.852505, lng: 139.732963, terminal: true, routes: ['kinugawa'] }
  ], routePatterns: { 
    nikko: { name: '日光線', color: '#F39800', isLoop: false, stations: ['tobu-nk-東武動物公園', 'tobu-nk-杉戸高野台', 'tobu-nk-幸手', 'tobu-nk-南栗橋', 'tobu-nk-栗橋', 'tobu-nk-新古河', 'tobu-nk-柳生', 'tobu-nk-板倉東洋大前', 'tobu-nk-藤岡', 'tobu-nk-静和', 'tobu-nk-新大平下', 'tobu-nk-栃木', 'tobu-nk-新栃木', 'tobu-nk-合戦場', 'tobu-nk-家中', 'tobu-nk-東武金崎', 'tobu-nk-楡木', 'tobu-nk-樅山', 'tobu-nk-新鹿沼', 'tobu-nk-北鹿沼', 'tobu-nk-板荷', 'tobu-nk-下小代', 'tobu-nk-明神', 'tobu-nk-下今市', 'tobu-nk-上今市', 'tobu-nk-東武日光'] },
    kinugawa: { name: '鬼怒川線', color: '#F39800', isLoop: false, stations: ['tobu-nk-下今市', 'tobu-nk-大谷向', 'tobu-nk-大桑', 'tobu-nk-新高徳', 'tobu-nk-小佐越', 'tobu-nk-東武ワールドスクウェア', 'tobu-nk-鬼怒川温泉', 'tobu-nk-鬼怒川公園', 'tobu-nk-新藤原'] }
  }, renderDetails() { return `<div class="modal-section"><p>日光線・鬼怒川線</p></div>`; }, renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#F39800"></div><span>日光線・鬼怒川線</span></div>`; } };

tobuData['tobu-sano-kiryu-koizumi'] = { title: '佐野線・桐生線・小泉線', icon: 'TI', themeClass: 'tobu-theme', hasSubRoutes: true,
  stations: [
      { id: 'tobu-skk-館林', name: '館林', lat: 36.246606, lng: 139.527811, terminal: false, routes: ['sano'] },
      { id: 'tobu-skk-渡瀬', name: '渡瀬', lat: 36.261807, lng: 139.537515, terminal: false, routes: ['sano'] },
      { id: 'tobu-skk-田島', name: '田島', lat: 36.290229, lng: 139.564943, terminal: false, routes: ['sano'] },
      { id: 'tobu-skk-佐野市', name: '佐野市', lat: 36.306153, lng: 139.57583, terminal: false, routes: ['sano'] },
      { id: 'tobu-skk-佐野', name: '佐野', lat: 36.316884, lng: 139.578826, terminal: false, routes: ['sano'] },
      { id: 'tobu-skk-堀米', name: '堀米', lat: 36.328467, lng: 139.580279, terminal: false, routes: ['sano'] },
      { id: 'tobu-skk-吉水', name: '吉水', lat: 36.345621, lng: 139.579337, terminal: false, routes: ['sano'] },
      { id: 'tobu-skk-田沼', name: '田沼', lat: 36.367094, lng: 139.581919, terminal: false, routes: ['sano'] },
      { id: 'tobu-skk-多田', name: '多田', lat: 36.37809, lng: 139.592984, terminal: false, routes: ['sano'] },
      { id: 'tobu-skk-葛生', name: '葛生', lat: 36.397937, lng: 139.609207, terminal: false, routes: ['sano'] },
      { id: 'tobu-skk-太田', name: '太田', lat: 36.294228, lng: 139.378779, terminal: false, routes: ['kiryu'] },
      { id: 'tobu-skk-三枚橋', name: '三枚橋', lat: 36.313369, lng: 139.354938, terminal: false, routes: ['kiryu'] },
      { id: 'tobu-skk-治良門橋', name: '治良門橋', lat: 36.333039, lng: 139.341328, terminal: false, routes: ['kiryu'] },
      { id: 'tobu-skk-藪塚', name: '藪塚', lat: 36.358737, lng: 139.315737, terminal: false, routes: ['kiryu'] },
      { id: 'tobu-skk-阿左美', name: '阿左美', lat: 36.387116, lng: 139.308726, terminal: false, routes: ['kiryu'] },
      { id: 'tobu-skk-新桐生', name: '新桐生', lat: 36.39505, lng: 139.320078, terminal: false, routes: ['kiryu'] },
      { id: 'tobu-skk-相老', name: '相老', lat: 36.410261, lng: 139.304178, terminal: false, routes: ['kiryu'] },
      { id: 'tobu-skk-赤城', name: '赤城', lat: 36.425615, lng: 139.276784, terminal: false, routes: ['kiryu'] },
      { id: 'tobu-skk-成島', name: '成島', lat: 36.249171, lng: 139.505682, terminal: false, routes: ['koizumi'] },
      { id: 'tobu-skk-本中野', name: '本中野', lat: 36.25843, lng: 139.469546, terminal: false, routes: ['koizumi'] },
      { id: 'tobu-skk-篠塚', name: '篠塚', lat: 36.256788, lng: 139.446077, terminal: false, routes: ['koizumi'] },
      { id: 'tobu-skk-東小泉', name: '東小泉', lat: 36.259696, lng: 139.428456, terminal: false, routes: ['koizumi'] },
      { id: 'tobu-skk-小泉町', name: '小泉町', lat: 36.261562, lng: 139.42021, terminal: false, routes: ['koizumi'] },
      { id: 'tobu-skk-西小泉', name: '西小泉', lat: 36.258712, lng: 139.408525, terminal: false, routes: ['koizumi'] },
      { id: 'tobu-skk-竜舞', name: '竜舞', lat: 36.278894, lng: 139.409002, terminal: false, routes: ['koizumi'] },
  ], routePatterns: { 
    sano: { name: '佐野線', color: '#E60012', isLoop: false, stations: ['tobu-skk-館林', 'tobu-skk-渡瀬', 'tobu-skk-田島', 'tobu-skk-佐野市', 'tobu-skk-佐野', 'tobu-skk-堀米', 'tobu-skk-吉水', 'tobu-skk-田沼', 'tobu-skk-多田', 'tobu-skk-葛生'] },
    kiryu: { name: '桐生線', color: '#E60012', isLoop: false, stations: ['tobu-skk-太田', 'tobu-skk-三枚橋', 'tobu-skk-治良門橋', 'tobu-skk-藪塚', 'tobu-skk-阿左美', 'tobu-skk-新桐生', 'tobu-skk-相老', 'tobu-skk-赤城'] },
    koizumi: { name: '小泉線', color: '#E60012', isLoop: false, stations: ['tobu-skk-館林', 'tobu-skk-成島', 'tobu-skk-本中野', 'tobu-skk-篠塚', 'tobu-skk-東小泉', 'tobu-skk-小泉町', 'tobu-skk-西小泉', 'tobu-skk-竜舞', 'tobu-skk-太田'] }
  }, renderDetails() { return `<div class="modal-section"><p>佐野線・桐生線・小泉線</p></div>`; }, renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#E60012"></div><span>佐野線・桐生線・小泉線</span></div>`; } };

tobuData['tobu-utsunomiya'] = { title: '宇都宮線', icon: 'TN', themeClass: 'tobu-theme', hasSubRoutes: false,
  stations: [
      { id: 'tobu-tu-新栃木', name: '新栃木', lat: 36.390149, lng: 139.742308, terminal: true, routes: ['main'] },
      { id: 'tobu-tu-野州平川', name: '野州平川', lat: 36.401554, lng: 139.753764, terminal: false, routes: ['main'] },
      { id: 'tobu-tu-野州大塚', name: '野州大塚', lat: 36.408759, lng: 139.772574, terminal: false, routes: ['main'] },
      { id: 'tobu-tu-壬生', name: '壬生', lat: 36.422472, lng: 139.80496, terminal: false, routes: ['main'] },
      { id: 'tobu-tu-国谷', name: '国谷', lat: 36.451442, lng: 139.823824, terminal: false, routes: ['main'] },
      { id: 'tobu-tu-おもちゃのまち', name: 'おもちゃのまち', lat: 36.466774, lng: 139.829506, terminal: false, routes: ['main'] },
      { id: 'tobu-tu-安塚', name: '安塚', lat: 36.485678, lng: 139.835572, terminal: false, routes: ['main'] },
      { id: 'tobu-tu-西川田', name: '西川田', lat: 36.514227, lng: 139.850247, terminal: false, routes: ['main'] },
      { id: 'tobu-tu-江曽島', name: '江曽島', lat: 36.530951, lng: 139.860818, terminal: false, routes: ['main'] },
      { id: 'tobu-tu-南宇都宮', name: '南宇都宮', lat: 36.543783, lng: 139.872017, terminal: false, routes: ['main'] },
      { id: 'tobu-tu-東武宇都宮', name: '東武宇都宮', lat: 36.559373, lng: 139.880427, terminal: true, routes: ['main'] },
  ], routePatterns: { main: { name: '宇都宮線', color: '#F39800', isLoop: false, stations: ['tobu-tu-新栃木', 'tobu-tu-野州平川', 'tobu-tu-野州大塚', 'tobu-tu-壬生', 'tobu-tu-国谷', 'tobu-tu-おもちゃのまち', 'tobu-tu-安塚', 'tobu-tu-西川田', 'tobu-tu-江曽島', 'tobu-tu-南宇都宮', 'tobu-tu-東武宇都宮'] } },
  renderDetails() { return `<div class="modal-section"><p>宇都宮線</p></div>`; }, renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#F39800"></div><span>宇都宮線</span></div>`; } };

tobuData['tobu-kameido-daishi'] = { title: '亀戸線・大師線', icon: 'TS', themeClass: 'tobu-theme', hasSubRoutes: true,
  stations: [
      { id: 'tobu-kd-亀戸', name: '亀戸', lat: 35.697708, lng: 139.826791, terminal: false, routes: ['kameido'] },
      { id: 'tobu-kd-亀戸水神', name: '亀戸水神', lat: 35.699976, lng: 139.833422, terminal: false, routes: ['kameido'] },
      { id: 'tobu-kd-東あずま', name: '東あずま', lat: 35.707067, lng: 139.831883, terminal: false, routes: ['kameido'] },
      { id: 'tobu-kd-小村井', name: '小村井', lat: 35.710316, lng: 139.827595, terminal: false, routes: ['kameido'] },
      { id: 'tobu-kd-曳舟', name: '曳舟', lat: 35.718418, lng: 139.816634, terminal: false, routes: ['kameido'] },
      { id: 'tobu-kd-西新井', name: '西新井', lat: 35.777323, lng: 139.790372, terminal: false, routes: ['daishi'] },
      { id: 'tobu-kd-大師前', name: '大師前', lat: 35.778989, lng: 139.781647, terminal: false, routes: ['daishi'] },
  ], routePatterns: { 
    kameido: { name: '亀戸線', color: '#0068B7', isLoop: false, stations: ['tobu-kd-亀戸', 'tobu-kd-亀戸水神', 'tobu-kd-東あずま', 'tobu-kd-小村井', 'tobu-kd-曳舟'] },
    daishi: { name: '大師線', color: '#0068B7', isLoop: false, stations: ['tobu-kd-西新井', 'tobu-kd-大師前'] }
  }, renderDetails() { return `<div class="modal-section"><p>亀戸線・大師線</p></div>`; }, renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#0068B7"></div><span>亀戸線・大師線</span></div>`; } };




// app.js の appData に結合する
if (typeof appData !== 'undefined') {
  Object.assign(appData, tobuData);
}
