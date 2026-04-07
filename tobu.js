const tobuData = {
  'tobu-nikko': {
    title: 'スペーシア東武日光線',
    icon: 'TN',
    themeClass: 'tobu-nikko-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'tn-asakusa', name: '浅草', lat: 35.71228, lng: 139.794907, terminal: true, routes: ['main'], info: 'スペーシア始発駅' },
      { id: 'tn-skytree', name: 'とうきょうスカイツリー', lat: 35.710777, lng: 139.813828, terminal: false, routes: ['main'], info: '' },
      { id: 'tn-kitasenju', name: '北千住', lat: 35.784065, lng: 139.82843, terminal: false, routes: ['main'], info: '' },
      { id: 'tn-kasukabe', name: '春日部', lat: 35.974045, lng: 139.754761, terminal: false, routes: ['main'], info: '' },
      { id: 'tn-tochigi', name: '栃木', lat: 36.382435, lng: 139.7341, terminal: false, routes: ['main'], info: '' },
      { id: 'tn-shinkamura', name: '新鹿沼', lat: 36.566681, lng: 139.745041, terminal: false, routes: ['main'], info: '' },
      { id: 'tn-shimoimaichi', name: '下今市', lat: 36.704021, lng: 139.687698, terminal: false, routes: ['main'], info: '鬼怒川線分岐' },
      { id: 'tn-tobunikko', name: '東武日光', lat: 36.696762, lng: 139.621918, terminal: true, routes: ['main'], info: '日光エリアの玄関口' }
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
      { id: 'tk-asakusa', name: '浅草', lat: 35.71228, lng: 139.794907, terminal: true, routes: ['main'], info: 'スペーシア始発駅' },
      { id: 'tk-skytree', name: 'とうきょうスカイツリー', lat: 35.710777, lng: 139.813828, terminal: false, routes: ['main'], info: '' },
      { id: 'tk-kitasenju', name: '北千住', lat: 35.784065, lng: 139.82843, terminal: false, routes: ['main'], info: '' },
      { id: 'tk-kasukabe', name: '春日部', lat: 35.974045, lng: 139.754761, terminal: false, routes: ['main'], info: '' },
      { id: 'tk-tochigi', name: '栃木', lat: 36.382435, lng: 139.7341, terminal: false, routes: ['main'], info: '' },
      { id: 'tk-shinkamura', name: '新鹿沼', lat: 36.566681, lng: 139.745041, terminal: false, routes: ['main'], info: '' },
      { id: 'tk-shimoimaichi', name: '下今市', lat: 36.704021, lng: 139.687698, terminal: false, routes: ['main'], info: '日光線分岐' },
      { id: 'tk-worldsquare', name: '東武ワールドスクウェア', lat: 36.7893, lng: 139.7088, terminal: false, routes: ['main'], info: '東武ワールドスクウェア最寄駅' },
      { id: 'tk-kinugawa', name: '鬼怒川温泉', lat: 36.813736, lng: 139.717804, terminal: true, routes: ['main'], info: '鬼怒川温泉郷の最寄駅' }
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
      { id: 'ts-asakusa', name: '浅草', lat: 35.71228, lng: 139.7949, terminal: true, routes: ['main'] },
      { id: 'ts-skytree', name: 'とうきょうスカイツリー', lat: 35.7108, lng: 139.8138, terminal: false, routes: ['main'] },
      { id: 'ts-hikifune', name: '曳舟', lat: 35.7173, lng: 139.8164, terminal: false, routes: ['main'] },
      { id: 'ts-higashimukojima', name: '東向島', lat: 35.7210, lng: 139.8138, terminal: false, routes: ['main'] },
      { id: 'ts-kanegafuchi', name: '鐘ヶ淵', lat: 35.7285, lng: 139.8134, terminal: false, routes: ['main'] },
      { id: 'ts-horikiri', name: '堀切', lat: 35.7388, lng: 139.8121, terminal: false, routes: ['main'] },
      { id: 'ts-ushida', name: '牛田', lat: 35.7472, lng: 139.8128, terminal: false, routes: ['main'] },
      { id: 'ts-kitasenju', name: '北千住', lat: 35.7496, lng: 139.8052, terminal: false, routes: ['main'], info: '日比谷線・千代田線・JR常磐線乗換' },
      { id: 'ts-kosuge', name: '小菅', lat: 35.7588, lng: 139.8091, terminal: false, routes: ['main'] },
      { id: 'ts-gotanno', name: '五反野', lat: 35.7662, lng: 139.8078, terminal: false, routes: ['main'] },
      { id: 'ts-umejima', name: '梅島', lat: 35.7725, lng: 139.8007, terminal: false, routes: ['main'] },
      { id: 'ts-nishiarai', name: '西新井', lat: 35.7803, lng: 139.7910, terminal: false, routes: ['main'], info: '大師線乗換' },
      { id: 'ts-takenotsuka', name: '竹ノ塚', lat: 35.7944, lng: 139.7917, terminal: false, routes: ['main'] },
      { id: 'ts-yatsuka', name: '谷塚', lat: 35.8117, lng: 139.8011, terminal: false, routes: ['main'] },
      { id: 'ts-soka', name: '草加', lat: 35.8260, lng: 139.8054, terminal: false, routes: ['main'] },
      { id: 'ts-dokkyodaigakumae', name: '獨協大学前', lat: 35.8375, lng: 139.8004, terminal: false, routes: ['main'] },
      { id: 'ts-shinden', name: '新田', lat: 35.8476, lng: 139.7962, terminal: false, routes: ['main'] },
      { id: 'ts-gamo', name: '蒲生', lat: 35.8604, lng: 139.7909, terminal: false, routes: ['main'] },
      { id: 'ts-shinkoshigaya', name: '新越谷', lat: 35.8743, lng: 139.7925, terminal: false, routes: ['main'], info: 'JR武蔵野線南越谷駅乗換' },
      { id: 'ts-koshigaya', name: '越谷', lat: 35.8874, lng: 139.7890, terminal: false, routes: ['main'] },
      { id: 'ts-kitakoshigaya', name: '北越谷', lat: 35.8966, lng: 139.7894, terminal: false, routes: ['main'] },
      { id: 'ts-obukuro', name: '大袋', lat: 35.9113, lng: 139.7915, terminal: false, routes: ['main'] },
      { id: 'ts-sengendai', name: 'せんげん台', lat: 35.9233, lng: 139.7880, terminal: false, routes: ['main'] },
      { id: 'ts-takesato', name: '武里', lat: 35.9385, lng: 139.7798, terminal: false, routes: ['main'] },
      { id: 'ts-ichinowari', name: '一ノ割', lat: 35.9517, lng: 139.7728, terminal: false, routes: ['main'] },
      { id: 'ts-kasukabe', name: '春日部', lat: 35.9740, lng: 139.7548, terminal: false, routes: ['main'], info: 'アーバンパークライン乗換' },
      { id: 'ts-kitakasukabe', name: '北春日部', lat: 35.9854, lng: 139.7526, terminal: false, routes: ['main'] },
      { id: 'ts-himemiya', name: '姫宮', lat: 36.0008, lng: 139.7399, terminal: false, routes: ['main'] },
      { id: 'ts-tobuzoo', name: '東武動物公園', lat: 36.0153, lng: 139.7175, terminal: true, routes: ['main'], info: '日光線・伊勢崎線分岐' }
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
      { id: 'td-omiya', name: '大宮', lat: 35.9063, lng: 139.6238, terminal: true, routes: ['main'], info: 'JR各線・ニューシャトル乗換' },
      { id: 'td-kitaomiya', name: '北大宮', lat: 35.9136, lng: 139.6284, terminal: false, routes: ['main'] },
      { id: 'td-omiyakoen', name: '大宮公園', lat: 35.9186, lng: 139.6326, terminal: false, routes: ['main'] },
      { id: 'td-owada', name: '大和田', lat: 35.9275, lng: 139.6479, terminal: false, routes: ['main'] },
      { id: 'td-nanasato', name: '七里', lat: 35.9342, lng: 139.6657, terminal: false, routes: ['main'] },
      { id: 'td-iwatsuki', name: '岩槻', lat: 35.9497, lng: 139.6942, terminal: false, routes: ['main'] },
      { id: 'td-higashiiwatsuki', name: '東岩槻', lat: 35.9543, lng: 139.7124, terminal: false, routes: ['main'] },
      { id: 'td-toyoharu', name: '豊春', lat: 35.9614, lng: 139.7294, terminal: false, routes: ['main'] },
      { id: 'td-yagisaki', name: '八木崎', lat: 35.9695, lng: 139.7443, terminal: false, routes: ['main'] },
      { id: 'td-kasukabe', name: '春日部', lat: 35.9740, lng: 139.7548, terminal: false, routes: ['main'], info: 'スカイツリーライン乗換' },
      { id: 'td-fujinouchijima', name: '藤の牛島', lat: 35.9711, lng: 139.7734, terminal: false, routes: ['main'] },
      { id: 'td-minamisakurai', name: '南桜井', lat: 35.9672, lng: 139.8042, terminal: false, routes: ['main'] },
      { id: 'td-kawama', name: '川間', lat: 35.9659, lng: 139.8380, terminal: false, routes: ['main'] },
      { id: 'td-nanakoudai', name: '七光台', lat: 35.9610, lng: 139.8572, terminal: false, routes: ['main'] },
      { id: 'td-shimizukoen', name: '清水公園', lat: 35.9551, lng: 139.8679, terminal: false, routes: ['main'] },
      { id: 'td-atago', name: '愛宕', lat: 35.9524, lng: 139.8744, terminal: false, routes: ['main'] },
      { id: 'td-nodashi', name: '野田市', lat: 35.9505, lng: 139.8749, terminal: false, routes: ['main'] },
      { id: 'td-umesato', name: '梅郷', lat: 35.9425, lng: 139.8843, terminal: false, routes: ['main'] },
      { id: 'td-unga', name: '運河', lat: 35.9144, lng: 139.9063, terminal: false, routes: ['main'] },
      { id: 'td-edogawadai', name: '江戸川台', lat: 35.8966, lng: 139.9136, terminal: false, routes: ['main'] },
      { id: 'td-hatsuishi', name: '初石', lat: 35.8841, lng: 139.9180, terminal: false, routes: ['main'] },
      { id: 'td-otakanomori', name: '流山おおたかの森', lat: 35.8717, lng: 139.9265, terminal: false, routes: ['main'], info: 'TX線乗換' },
      { id: 'td-toyoshiki', name: '豊四季', lat: 35.8647, lng: 139.9446, terminal: false, routes: ['main'] },
      { id: 'td-kashiwa', name: '柏', lat: 35.8580, lng: 139.9710, terminal: false, routes: ['main'], info: 'JR常磐線乗換' },
      { id: 'td-shinkashiwa', name: '新柏', lat: 35.8484, lng: 139.9725, terminal: false, routes: ['main'] },
      { id: 'td-masuo', name: '増尾', lat: 35.8393, lng: 139.9720, terminal: false, routes: ['main'] },
      { id: 'td-sakasai', name: '逆井', lat: 35.8268, lng: 139.9752, terminal: false, routes: ['main'] },
      { id: 'td-takayanagi', name: '高柳', lat: 35.8126, lng: 139.9813, terminal: false, routes: ['main'] },
      { id: 'td-mutsumi', name: '六実', lat: 35.7993, lng: 139.9864, terminal: false, routes: ['main'] },
      { id: 'td-shinkamagaya', name: '新鎌ケ谷', lat: 35.7799, lng: 139.9986, terminal: false, routes: ['main'], info: '北総線・新京成線乗換' },
      { id: 'td-kamagaya', name: '鎌ケ谷', lat: 35.7694, lng: 140.0008, terminal: false, routes: ['main'] },
      { id: 'td-magomezawa', name: '馬込沢', lat: 35.7537, lng: 139.9914, terminal: false, routes: ['main'] },
      { id: 'td-tsukada', name: '塚田', lat: 35.7360, lng: 139.9853, terminal: false, routes: ['main'] },
      { id: 'td-shinfunabashi', name: '新船橋', lat: 35.7195, lng: 139.9784, terminal: false, routes: ['main'] },
      { id: 'td-funabashi', name: '船橋', lat: 35.7019, lng: 139.9853, terminal: true, routes: ['main'], info: 'JR総武線乗換' }
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
