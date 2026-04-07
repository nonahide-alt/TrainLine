const keikyuData = {
  // ==========================================
  // 京急本線（泉岳寺・品川〜浦賀）全50駅
  // ==========================================
  'keikyu-main': {
    title: '京急本線',
    icon: 'KK',
    themeClass: 'keikyu-main-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'kk-sengakuji', name: '泉岳寺', lat: 35.638692, lng: 139.74002, terminal: true, routes: ['main'], info: '都営浅草線直通' },
      { id: 'kk-shinagawa', name: '品川', lat: 35.628284, lng: 139.73809, terminal: false, routes: ['main'], info: 'JR各線・新幹線乗換' },
      { id: 'kk-kitashinagawa', name: '北品川', lat: 35.622458, lng: 139.739191, terminal: false, routes: ['main'] },
      { id: 'kk-shimbanba', name: '新馬場', lat: 35.61762, lng: 139.741366, terminal: false, routes: ['main'] },
      { id: 'kk-aomono', name: '青物横丁', lat: 35.609351, lng: 139.742958, terminal: false, routes: ['main'] },
      { id: 'kk-samezu', name: '鮫洲', lat: 35.604977, lng: 139.742227, terminal: false, routes: ['main'] },
      { id: 'kk-tachiaigawa', name: '立会川', lat: 35.598489, lng: 139.738886, terminal: false, routes: ['main'] },
      { id: 'kk-omorikaigan', name: '大森海岸', lat: 35.587576, lng: 139.73544, terminal: false, routes: ['main'] },
      { id: 'kk-heiwajima', name: '平和島', lat: 35.57868, lng: 139.73491, terminal: false, routes: ['main'] },
      { id: 'kk-omorimachi', name: '大森町', lat: 35.572431, lng: 139.732027, terminal: false, routes: ['main'] },
      { id: 'kk-umeyashiki', name: '梅屋敷', lat: 35.566873, lng: 139.728266, terminal: false, routes: ['main'] },
      { id: 'kk-kamata', name: '京急蒲田', lat: 35.560796, lng: 139.723681, terminal: false, routes: ['main'], info: '空港線分岐' },
      { id: 'kk-zoshiki', name: '雑色', lat: 35.549725, lng: 139.715005, terminal: false, routes: ['main'] },
      { id: 'kk-rokugodote', name: '六郷土手', lat: 35.540577, lng: 139.7076, terminal: false, routes: ['main'] },
      { id: 'kk-kawasaki', name: '京急川崎', lat: 35.53285, lng: 139.700893, terminal: false, routes: ['main'], info: '大師線分岐・JR川崎駅乗換' },
      { id: 'kk-hatcho', name: '八丁畷', lat: 35.523054, lng: 139.691346, terminal: false, routes: ['main'] },
      { id: 'kk-tsurumishijo', name: '鶴見市場', lat: 35.517594, lng: 139.68642, terminal: false, routes: ['main'] },
      { id: 'kk-tsurumi', name: '京急鶴見', lat: 35.507032, lng: 139.677743, terminal: false, routes: ['main'] },
      { id: 'kk-kagetsu', name: '花月総持寺', lat: 35.500358, lng: 139.672813, terminal: false, routes: ['main'] },
      { id: 'kk-namamugi', name: '生麦', lat: 35.4956, lng: 139.6673, terminal: false, routes: ['main'] },
      { id: 'kk-shinkoyasu', name: '京急新子安', lat: 35.487242, lng: 139.655848, terminal: false, routes: ['main'] },
      { id: 'kk-koyasu', name: '子安', lat: 35.484556, lng: 139.644965, terminal: false, routes: ['main'] },
      { id: 'kk-shinmachi', name: '神奈川新町', lat: 35.481559, lng: 139.640152, terminal: false, routes: ['main'] },
      { id: 'kk-higashikanagawa', name: '京急東神奈川', lat: 35.477412, lng: 139.634669, terminal: false, routes: ['main'] },
      { id: 'kk-kanagawa', name: '神奈川', lat: 35.471304, lng: 139.627364, terminal: false, routes: ['main'] },
      { id: 'kk-yokohama', name: '横浜', lat: 35.466066, lng: 139.623055, terminal: false, routes: ['main'], info: 'JR各線・東急・相鉄・市営地下鉄乗換' },
      { id: 'kk-tobe', name: '戸部', lat: 35.456631, lng: 139.61956, terminal: false, routes: ['main'] },
      { id: 'kk-hinodecho', name: '日ノ出町', lat: 35.445524, lng: 139.626696, terminal: false, routes: ['main'] },
      { id: 'kk-koganecho', name: '黄金町', lat: 35.439694, lng: 139.62246, terminal: false, routes: ['main'] },
      { id: 'kk-minamiota', name: '南太田', lat: 35.436923, lng: 139.613408, terminal: false, routes: ['main'] },
      { id: 'kk-idogaya', name: '井土ヶ谷', lat: 35.433895, lng: 139.60061, terminal: false, routes: ['main'] },
      { id: 'kk-gumyoji', name: '弘明寺', lat: 35.42437, lng: 139.596791, terminal: false, routes: ['main'] },
      { id: 'kk-kamioooka', name: '上大岡', lat: 35.409418, lng: 139.596552, terminal: false, routes: ['main'], info: '市営地下鉄乗換' },
      { id: 'kk-byobugaura', name: '屏風浦', lat: 35.394176, lng: 139.610387, terminal: false, routes: ['main'] },
      { id: 'kk-sugita', name: '杉田', lat: 35.383796, lng: 139.615734, terminal: false, routes: ['main'] },
      { id: 'kk-tomioka', name: '京急富岡', lat: 35.366743, lng: 139.629772, terminal: false, routes: ['main'] },
      { id: 'kk-nomidai', name: '能見台', lat: 35.360528, lng: 139.629233, terminal: false, routes: ['main'] },
      { id: 'kk-bunko', name: '金沢文庫', lat: 35.342966, lng: 139.621606, terminal: false, routes: ['main'] },
      { id: 'kk-hakkei', name: '金沢八景', lat: 35.331223, lng: 139.62018, terminal: false, routes: ['main'], info: '逗子線分岐・シーサイドライン乗換' },
      { id: 'kk-oppama', name: '追浜', lat: 35.315461, lng: 139.624905, terminal: false, routes: ['main'] },
      { id: 'kk-taura', name: '京急田浦', lat: 35.300892, lng: 139.625252, terminal: false, routes: ['main'] },
      { id: 'kk-anjinzuka', name: '安針塚', lat: 35.286641, lng: 139.64292, terminal: false, routes: ['main'] },
      { id: 'kk-hemmi', name: '逸見', lat: 35.28048, lng: 139.653149, terminal: false, routes: ['main'] },
      { id: 'kk-shioiri', name: '汐入', lat: 35.280241, lng: 139.662443, terminal: false, routes: ['main'] },
      { id: 'kk-yokosukachuo', name: '横須賀中央', lat: 35.27858, lng: 139.670217, terminal: false, routes: ['main'] },
      { id: 'kk-kenritsudaigaku', name: '県立大学', lat: 35.269731, lng: 139.677033, terminal: false, routes: ['main'] },
      { id: 'kk-horinouchi', name: '堀ノ内', lat: 35.26322, lng: 139.686932, terminal: false, routes: ['main'], info: '久里浜線分岐' },
      { id: 'kk-ootsu', name: '京急大津', lat: 35.261068, lng: 139.695334, terminal: false, routes: ['main'] },
      { id: 'kk-maborikaiganl', name: '馬堀海岸', lat: 35.259651, lng: 139.707328, terminal: false, routes: ['main'] },
      { id: 'kk-uraga', name: '浦賀', lat: 35.250933, lng: 139.714999, terminal: true, routes: ['main'] }
    ],
    routePatterns: {
      main: {
        name: '京急本線',
        color: '#E5171F',
        glowColor: 'rgba(229, 23, 31, 0.4)',
        isLoop: false,
        stations: ['kk-sengakuji','kk-shinagawa','kk-kitashinagawa','kk-shimbanba','kk-aomono','kk-samezu','kk-tachiaigawa','kk-omorikaigan','kk-heiwajima','kk-omorimachi','kk-umeyashiki','kk-kamata','kk-zoshiki','kk-rokugodote','kk-kawasaki','kk-hatcho','kk-tsurumishijo','kk-tsurumi','kk-kagetsu','kk-namamugi','kk-shinkoyasu','kk-koyasu','kk-shinmachi','kk-higashikanagawa','kk-kanagawa','kk-yokohama','kk-tobe','kk-hinodecho','kk-koganecho','kk-minamiota','kk-idogaya','kk-gumyoji','kk-kamioooka','kk-byobugaura','kk-sugita','kk-tomioka','kk-nomidai','kk-bunko','kk-hakkei','kk-oppama','kk-taura','kk-anjinzuka','kk-hemmi','kk-shioiri','kk-yokosukachuo','kk-kenritsudaigaku','kk-horinouchi','kk-ootsu','kk-maborikaiganl','kk-uraga']
      }
    },
    renderDetails() {
      return `<div class="modal-section"><h3><span class="section-icon">🚉</span>京急本線 概要</h3>
        <div class="time-cards" style="margin-bottom:12px;">
          <div class="time-card"><div class="route-name" style="color:#E5171F;">営業距離</div><div class="time-value">56.7</div><div class="time-unit">泉岳寺〜浦賀 (56.7km)</div></div>
          <div class="time-card"><div class="route-name" style="color:#E5171F;">駅数</div><div class="time-value">50</div><div class="time-unit">全50駅</div></div>
        </div></div>`;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line" style="background:#E5171F"></div><span>京急本線</span></div>`;
    }
  },

  // ==========================================
  // 京急空港線（京急蒲田〜羽田空港）全7駅
  // ==========================================
  'keikyu-airport': {
    title: '京急空港線',
    icon: 'KK',
    themeClass: 'keikyu-airport-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'ka-kamata', name: '京急蒲田', lat: 35.560796, lng: 139.723681, terminal: true, routes: ['main'], info: '本線乗換' },
      { id: 'ka-kojiya', name: '糀谷', lat: 35.5545, lng: 139.72962, terminal: false, routes: ['main'] },
      { id: 'ka-otorii', name: '大鳥居', lat: 35.552531, lng: 139.739356, terminal: false, routes: ['main'] },
      { id: 'ka-anamori', name: '穴守稲荷', lat: 35.550326, lng: 139.746669, terminal: false, routes: ['main'] },
      { id: 'ka-tenkubashi', name: '天空橋', lat: 35.548908, lng: 139.75423, terminal: false, routes: ['main'], info: '東京モノレール乗換' },
      { id: 'ka-haneda3', name: '羽田空港第3ターミナル', lat: 35.544676, lng: 139.768968, terminal: false, routes: ['main'], info: '国際線ターミナル' },
      { id: 'ka-haneda12', name: '羽田空港第1・第2ターミナル', lat: 35.549809, lng: 139.785962, terminal: true, routes: ['main'], info: '国内線ターミナル' }
    ],
    routePatterns: {
      main: {
        name: '京急空港線',
        color: '#00AEEF',
        glowColor: 'rgba(0, 174, 239, 0.4)',
        isLoop: false,
        stations: ['ka-kamata','ka-kojiya','ka-otorii','ka-anamori','ka-tenkubashi','ka-haneda3','ka-haneda12']
      }
    },
    renderDetails() {
      return `<div class="modal-section"><h3><span class="section-icon">✈️</span>京急空港線 概要</h3>
        <div class="time-cards" style="margin-bottom:12px;">
          <div class="time-card"><div class="route-name" style="color:#00AEEF;">営業距離</div><div class="time-value">6.5</div><div class="time-unit">京急蒲田〜羽田空港 (6.5km)</div></div>
          <div class="time-card"><div class="route-name" style="color:#00AEEF;">駅数</div><div class="time-value">7</div><div class="time-unit">全7駅</div></div>
        </div></div>`;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line" style="background:#00AEEF"></div><span>京急空港線</span></div>`;
    }
  },

  // ==========================================
  // 京急久里浜線（堀ノ内〜三崎口）全9駅
  // ==========================================
  'keikyu-kurihama': {
    title: '京急久里浜線',
    icon: 'KK',
    themeClass: 'keikyu-kurihama-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'kr-horinouchi', name: '堀ノ内', lat: 35.26322, lng: 139.686932, terminal: true, routes: ['main'], info: '本線分岐' },
      { id: 'kr-shinohtsu', name: '新大津', lat: 35.257013, lng: 139.69016, terminal: false, routes: ['main'] },
      { id: 'kr-kitakurihama', name: '北久里浜', lat: 35.249355, lng: 139.686368, terminal: false, routes: ['main'] },
      { id: 'kr-kurihama', name: '京急久里浜', lat: 35.231332, lng: 139.702139, terminal: false, routes: ['main'] },
      { id: 'kr-yrpnobi', name: 'YRP野比', lat: 35.212229, lng: 139.685068, terminal: false, routes: ['main'] },
      { id: 'kr-nagasawa', name: '京急長沢', lat: 35.20548, lng: 139.674048, terminal: false, routes: ['main'] },
      { id: 'kr-tsukuihama', name: '津久井浜', lat: 35.198419, lng: 139.665279, terminal: false, routes: ['main'] },
      { id: 'kr-miurakaigan', name: '三浦海岸', lat: 35.188084, lng: 139.653138, terminal: false, routes: ['main'] },
      { id: 'kr-misakiguchi', name: '三崎口', lat: 35.177515, lng: 139.633207, terminal: true, routes: ['main'], info: '三浦半島の玄関口' }
    ],
    routePatterns: {
      main: {
        name: '京急久里浜線',
        color: '#008D56',
        glowColor: 'rgba(0, 141, 86, 0.4)',
        isLoop: false,
        stations: ['kr-horinouchi','kr-shinohtsu','kr-kitakurihama','kr-kurihama','kr-yrpnobi','kr-nagasawa','kr-tsukuihama','kr-miurakaigan','kr-misakiguchi']
      }
    },
    renderDetails() {
      return `<div class="modal-section"><h3><span class="section-icon">🚉</span>京急久里浜線 概要</h3>
        <div class="time-cards" style="margin-bottom:12px;">
          <div class="time-card"><div class="route-name" style="color:#008D56;">営業距離</div><div class="time-value">13.4</div><div class="time-unit">堀ノ内〜三崎口 (13.4km)</div></div>
          <div class="time-card"><div class="route-name" style="color:#008D56;">駅数</div><div class="time-value">9</div><div class="time-unit">全9駅</div></div>
        </div></div>`;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line" style="background:#008D56"></div><span>京急久里浜線</span></div>`;
    }
  },

  // ==========================================
  // 京急大師線（京急川崎〜小島新田）全7駅
  // ==========================================
  'keikyu-daishi': {
    title: '京急大師線',
    icon: 'KK',
    themeClass: 'keikyu-daishi-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'kd-kawasaki', name: '京急川崎', lat: 35.532833, lng: 139.700896, terminal: true, routes: ['main'], info: '本線乗換' },
      { id: 'kd-minatomachi', name: '港町', lat: 35.534964, lng: 139.712283, terminal: false, routes: ['main'] },
      { id: 'kd-suzukicho', name: '鈴木町', lat: 35.535350, lng: 139.720380, terminal: false, routes: ['main'] },
      { id: 'kd-kawasakidaishi', name: '川崎大師', lat: 35.535650, lng: 139.726168, terminal: false, routes: ['main'], info: '川崎大師平間寺最寄駅' },
      { id: 'kd-higashimonzen', name: '東門前', lat: 35.536639, lng: 139.734371, terminal: false, routes: ['main'] },
      { id: 'kd-daishibashi', name: '大師橋', lat: 35.536611, lng: 139.740381, terminal: false, routes: ['main'] },
      { id: 'kd-kojimashinden', name: '小島新田', lat: 35.536642, lng: 139.746147, terminal: true, routes: ['main'] }
    ],
    routePatterns: {
      main: {
        name: '京急大師線',
        color: '#F5A623',
        glowColor: 'rgba(245, 166, 35, 0.4)',
        isLoop: false,
        stations: ['kd-kawasaki','kd-minatomachi','kd-suzukicho','kd-kawasakidaishi','kd-higashimonzen','kd-daishibashi','kd-kojimashinden']
      }
    },
    renderDetails() {
      return `<div class="modal-section"><h3><span class="section-icon">🚉</span>京急大師線 概要</h3>
        <div class="time-cards" style="margin-bottom:12px;">
          <div class="time-card"><div class="route-name" style="color:#F5A623;">営業距離</div><div class="time-value">4.5</div><div class="time-unit">京急川崎〜小島新田 (4.5km)</div></div>
          <div class="time-card"><div class="route-name" style="color:#F5A623;">駅数</div><div class="time-value">7</div><div class="time-unit">全7駅</div></div>
        </div></div>`;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line" style="background:#F5A623"></div><span>京急大師線</span></div>`;
    }
  },

  // ==========================================
  // 京急逗子線（金沢八景〜逗子・葉山）全4駅
  // ==========================================
  'keikyu-zushi': {
    title: '京急逗子線',
    icon: 'KK',
    themeClass: 'keikyu-zushi-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'kz-hakkei', name: '金沢八景', lat: 35.331223, lng: 139.62018, terminal: true, routes: ['main'], info: '本線乗換' },
      { id: 'kz-mutsuura', name: '六浦', lat: 35.32269, lng: 139.611532, terminal: false, routes: ['main'] },
      { id: 'kz-jimmuji', name: '神武寺', lat: 35.306233, lng: 139.592947, terminal: false, routes: ['main'] },
      { id: 'kz-zushi', name: '逗子・葉山', lat: 35.294189, lng: 139.580359, terminal: true, routes: ['main'], info: 'JR逗子駅乗換' }
    ],
    routePatterns: {
      main: {
        name: '京急逗子線',
        color: '#9B59B6',
        glowColor: 'rgba(155, 89, 182, 0.4)',
        isLoop: false,
        stations: ['kz-hakkei','kz-mutsuura','kz-jimmuji','kz-zushi']
      }
    },
    renderDetails() {
      return `<div class="modal-section"><h3><span class="section-icon">🚉</span>京急逗子線 概要</h3>
        <div class="time-cards" style="margin-bottom:12px;">
          <div class="time-card"><div class="route-name" style="color:#9B59B6;">営業距離</div><div class="time-value">5.9</div><div class="time-unit">金沢八景〜逗子・葉山 (5.9km)</div></div>
          <div class="time-card"><div class="route-name" style="color:#9B59B6;">駅数</div><div class="time-value">4</div><div class="time-unit">全4駅</div></div>
        </div></div>`;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line" style="background:#9B59B6"></div><span>京急逗子線</span></div>`;
    }
  }
};

// app.js の appData に結合する
if (typeof appData !== 'undefined') {
  Object.assign(appData, keikyuData);
}
