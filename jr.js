const jrData = {
  // ==========================================
  // JR山手線（環状線・全30駅）
  // ==========================================
  'yamanote': {
    title: 'JR山手線',
    icon: 'JY',
    themeClass: 'yamanote-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'jy-tokyo', name: '東京', lat: 35.681391, lng: 139.766103, terminal: false, routes: ['main'], info: '新幹線・JR各線乗換' },
      { id: 'jy-kanda', name: '神田', lat: 35.691173, lng: 139.770641, terminal: false, routes: ['main'] },
      { id: 'jy-akihabara', name: '秋葉原', lat: 35.698619, lng: 139.773288, terminal: false, routes: ['main'] },
      { id: 'jy-okachimachi', name: '御徒町', lat: 35.707282, lng: 139.774727, terminal: false, routes: ['main'] },
      { id: 'jy-ueno', name: '上野', lat: 35.71379, lng: 139.777043, terminal: false, routes: ['main'], info: '京成・メトロ乗換' },
      { id: 'jy-uguisudani', name: '鶯谷', lat: 35.721484, lng: 139.778015, terminal: false, routes: ['main'] },
      { id: 'jy-nippori', name: '日暮里', lat: 35.727908, lng: 139.771287, terminal: false, routes: ['main'] },
      { id: 'jy-nishinippori', name: '西日暮里', lat: 35.731954, lng: 139.766857, terminal: false, routes: ['main'] },
      { id: 'jy-tabata', name: '田端', lat: 35.737781, lng: 139.761229, terminal: false, routes: ['main'] },
      { id: 'jy-komagome', name: '駒込', lat: 35.736825, lng: 139.748053, terminal: false, routes: ['main'] },
      { id: 'jy-sugamo', name: '巣鴨', lat: 35.733445, lng: 139.739303, terminal: false, routes: ['main'] },
      { id: 'jy-otsuka', name: '大塚', lat: 35.731412, lng: 139.728584, terminal: false, routes: ['main'] },
      { id: 'jy-ikebukuro', name: '池袋', lat: 35.730256, lng: 139.711085, terminal: false, routes: ['main'], info: '西武・東武・メトロ乗換' },
      { id: 'jy-mejiro', name: '目白', lat: 35.720476, lng: 139.706228, terminal: false, routes: ['main'] },
      { id: 'jy-takadanobaba', name: '高田馬場', lat: 35.712677, lng: 139.703715, terminal: false, routes: ['main'] },
      { id: 'jy-shinokubo', name: '新大久保', lat: 35.700875, lng: 139.700261, terminal: false, routes: ['main'] },
      { id: 'jy-shinjuku', name: '新宿', lat: 35.689729, lng: 139.700464, terminal: false, routes: ['main'], info: '小田急・京王・メトロ・都営乗換' },
      { id: 'jy-yoyogi', name: '代々木', lat: 35.683061, lng: 139.702042, terminal: false, routes: ['main'] },
      { id: 'jy-harajuku', name: '原宿', lat: 35.670646, lng: 139.702592, terminal: false, routes: ['main'] },
      { id: 'jy-shibuya', name: '渋谷', lat: 35.658871, lng: 139.701238, terminal: false, routes: ['main'], info: '東急・メトロ・京王乗換' },
      { id: 'jy-ebisu', name: '恵比寿', lat: 35.646684, lng: 139.71007, terminal: false, routes: ['main'] },
      { id: 'jy-meguro', name: '目黒', lat: 35.633923, lng: 139.715775, terminal: false, routes: ['main'] },
      { id: 'jy-gotanda', name: '五反田', lat: 35.625974, lng: 139.723822, terminal: false, routes: ['main'] },
      { id: 'jy-osaki', name: '大崎', lat: 35.619772, lng: 139.728439, terminal: false, routes: ['main'] },
      { id: 'jy-shinagawa', name: '品川', lat: 35.62876, lng: 139.738999, terminal: false, routes: ['main'], info: '新幹線・京急乗換' },
      { id: 'jy-takanawa', name: '高輪ゲートウェイ', lat: 35.635476, lng: 139.740651, terminal: false, routes: ['main'] },
      { id: 'jy-tamachi', name: '田町', lat: 35.645737, lng: 139.747575, terminal: false, routes: ['main'] },
      { id: 'jy-hamamatsucho', name: '浜松町', lat: 35.655391, lng: 139.757135, terminal: false, routes: ['main'], info: 'モノレール乗換' },
      { id: 'jy-shimbashi', name: '新橋', lat: 35.666195, lng: 139.758587, terminal: false, routes: ['main'] },
      { id: 'jy-yurakucho', name: '有楽町', lat: 35.675441, lng: 139.763806, terminal: false, routes: ['main'] }
    ],
    routePatterns: {
      main: {
        name: 'JR山手線',
        color: '#80C241',
        glowColor: 'rgba(128, 194, 65, 0.4)',
        isLoop: true,
        stations: ['jy-tokyo','jy-kanda','jy-akihabara','jy-okachimachi','jy-ueno','jy-uguisudani','jy-nippori','jy-nishinippori','jy-tabata','jy-komagome','jy-sugamo','jy-otsuka','jy-ikebukuro','jy-mejiro','jy-takadanobaba','jy-shinokubo','jy-shinjuku','jy-yoyogi','jy-harajuku','jy-shibuya','jy-ebisu','jy-meguro','jy-gotanda','jy-osaki','jy-shinagawa','jy-takanawa','jy-tamachi','jy-hamamatsucho','jy-shimbashi','jy-yurakucho','jy-tokyo']
      }
    },
    renderDetails() {
      return `<div class="modal-section"><h3><span class="section-icon">🚃</span>JR山手線 概要</h3>
        <div class="time-cards" style="margin-bottom:12px;">
          <div class="time-card"><div class="route-name" style="color:#80C241;">営業距離</div><div class="time-value">34.5</div><div class="time-unit">環状線 (34.5km)</div></div>
          <div class="time-card"><div class="route-name" style="color:#80C241;">駅数</div><div class="time-value">30</div><div class="time-unit">全30駅</div></div>
        </div></div>`;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line" style="background:#80C241"></div><span>JR山手線</span></div>`;
    }
  },

  // ==========================================
  // JR京浜東北線・根岸線（大宮〜大船・全47駅）
  // ==========================================
  'keihintohoku': {
    title: 'JR京浜東北線',
    icon: 'JK',
    themeClass: 'keihintohoku-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'jk-omiya', name: '大宮', lat: 35.906439, lng: 139.62405, terminal: true, routes: ['main'], info: '新幹線・各線乗換' },
      { id: 'jk-saitamashintoshin', name: 'さいたま新都心', lat: 35.893867, lng: 139.633587, terminal: false, routes: ['main'] },
      { id: 'jk-yono', name: '与野', lat: 35.884393, lng: 139.639085, terminal: false, routes: ['main'] },
      { id: 'jk-kitaurawa', name: '北浦和', lat: 35.872053, lng: 139.645951, terminal: false, routes: ['main'] },
      { id: 'jk-urawa', name: '浦和', lat: 35.858496, lng: 139.657109, terminal: false, routes: ['main'] },
      { id: 'jk-minamiurawa', name: '南浦和', lat: 35.847648, lng: 139.669125, terminal: false, routes: ['main'] },
      { id: 'jk-warabi', name: '蕨', lat: 35.827959, lng: 139.690357, terminal: false, routes: ['main'] },
      { id: 'jk-nishikawaguchi', name: '西川口', lat: 35.815514, lng: 139.704312, terminal: false, routes: ['main'] },
      { id: 'jk-kawaguchi', name: '川口', lat: 35.801869, lng: 139.717472, terminal: false, routes: ['main'] },
      { id: 'jk-akabane', name: '赤羽', lat: 35.778026, lng: 139.720928, terminal: false, routes: ['main'] },
      { id: 'jk-higashijujo', name: '東十条', lat: 35.763803, lng: 139.726858, terminal: false, routes: ['main'] },
      { id: 'jk-oji', name: '王子', lat: 35.752538, lng: 139.73809, terminal: false, routes: ['main'] },
      { id: 'jk-kaminakazato', name: '上中里', lat: 35.74728, lng: 139.745769, terminal: false, routes: ['main'] },
      { id: 'jk-tabata', name: '田端', lat: 35.737781, lng: 139.761229, terminal: false, routes: ['main'] },
      { id: 'jk-nishinippori', name: '西日暮里', lat: 35.731954, lng: 139.766857, terminal: false, routes: ['main'] },
      { id: 'jk-nippori', name: '日暮里', lat: 35.727908, lng: 139.771287, terminal: false, routes: ['main'] },
      { id: 'jk-uguisudani', name: '鶯谷', lat: 35.721484, lng: 139.778015, terminal: false, routes: ['main'] },
      { id: 'jk-ueno', name: '上野', lat: 35.71379, lng: 139.777043, terminal: false, routes: ['main'] },
      { id: 'jk-okachimachi', name: '御徒町', lat: 35.707282, lng: 139.774727, terminal: false, routes: ['main'] },
      { id: 'jk-akihabara', name: '秋葉原', lat: 35.698619, lng: 139.773288, terminal: false, routes: ['main'] },
      { id: 'jk-kanda', name: '神田', lat: 35.691173, lng: 139.770641, terminal: false, routes: ['main'] },
      { id: 'jk-tokyo', name: '東京', lat: 35.681391, lng: 139.766103, terminal: false, routes: ['main'] },
      { id: 'jk-yurakucho', name: '有楽町', lat: 35.675441, lng: 139.763806, terminal: false, routes: ['main'] },
      { id: 'jk-shimbashi', name: '新橋', lat: 35.666195, lng: 139.758587, terminal: false, routes: ['main'] },
      { id: 'jk-hamamatsucho', name: '浜松町', lat: 35.655391, lng: 139.757135, terminal: false, routes: ['main'] },
      { id: 'jk-tamachi', name: '田町', lat: 35.645737, lng: 139.747575, terminal: false, routes: ['main'] },
      { id: 'jk-takanawa', name: '高輪ゲートウェイ', lat: 35.635476, lng: 139.740651, terminal: false, routes: ['main'] },
      { id: 'jk-shinagawa', name: '品川', lat: 35.62876, lng: 139.738999, terminal: false, routes: ['main'] },
      { id: 'jk-oimachi', name: '大井町', lat: 35.606257, lng: 139.73485, terminal: false, routes: ['main'] },
      { id: 'jk-omori', name: '大森', lat: 35.588903, lng: 139.728079, terminal: false, routes: ['main'] },
      { id: 'jk-kamata', name: '蒲田', lat: 35.562517, lng: 139.716032, terminal: false, routes: ['main'] },
      { id: 'jk-kawasaki', name: '川崎', lat: 35.531311, lng: 139.697485, terminal: false, routes: ['main'] },
      { id: 'jk-tsurumi', name: '鶴見', lat: 35.508387, lng: 139.67614, terminal: false, routes: ['main'] },
      { id: 'jk-shinkoyasu', name: '新子安', lat: 35.487064, lng: 139.654776, terminal: false, routes: ['main'] },
      { id: 'jk-higashikanagawa', name: '東神奈川', lat: 35.47804, lng: 139.633466, terminal: false, routes: ['main'] },
      { id: 'jk-yokohama', name: '横浜', lat: 35.466195, lng: 139.622704, terminal: false, routes: ['main'] },
      { id: 'jk-sakuragicho', name: '桜木町', lat: 35.451112, lng: 139.63088, terminal: false, routes: ['main'] },
      { id: 'jk-kannai', name: '関内', lat: 35.443336, lng: 139.636984, terminal: false, routes: ['main'] },
      { id: 'jk-ishikawacho', name: '石川町', lat: 35.438808, lng: 139.642934, terminal: false, routes: ['main'] },
      { id: 'jk-yamate', name: '山手', lat: 35.426891, lng: 139.646425, terminal: false, routes: ['main'] },
      { id: 'jk-negishi', name: '根岸', lat: 35.415887, lng: 139.636034, terminal: false, routes: ['main'] },
      { id: 'jk-isogo', name: '磯子', lat: 35.399881, lng: 139.617916, terminal: false, routes: ['main'] },
      { id: 'jk-shinsugita', name: '新杉田', lat: 35.386863, lng: 139.619483, terminal: false, routes: ['main'] },
      { id: 'jk-yokodai', name: '洋光台', lat: 35.378785, lng: 139.596852, terminal: false, routes: ['main'] },
      { id: 'jk-konandai', name: '港南台', lat: 35.375183, lng: 139.576243, terminal: false, routes: ['main'] },
      { id: 'jk-hongodai', name: '本郷台', lat: 35.36787, lng: 139.550159, terminal: false, routes: ['main'] },
      { id: 'jk-ofuna', name: '大船', lat: 35.353466, lng: 139.531127, terminal: true, routes: ['main'] }
    ],
    routePatterns: {
      main: {
        name: 'JR京浜東北線',
        color: '#00B2E5',
        glowColor: 'rgba(0, 178, 229, 0.4)',
        isLoop: false,
        stations: ['jk-omiya','jk-saitamashintoshin','jk-yono','jk-kitaurawa','jk-urawa','jk-minamiurawa','jk-warabi','jk-nishikawaguchi','jk-kawaguchi','jk-akabane','jk-higashijujo','jk-oji','jk-kaminakazato','jk-tabata','jk-nishinippori','jk-nippori','jk-uguisudani','jk-ueno','jk-okachimachi','jk-akihabara','jk-kanda','jk-tokyo','jk-yurakucho','jk-shimbashi','jk-hamamatsucho','jk-tamachi','jk-takanawa','jk-shinagawa','jk-oimachi','jk-omori','jk-kamata','jk-kawasaki','jk-tsurumi','jk-shinkoyasu','jk-higashikanagawa','jk-yokohama','jk-sakuragicho','jk-kannai','jk-ishikawacho','jk-yamate','jk-negishi','jk-isogo','jk-shinsugita','jk-yokodai','jk-konandai','jk-hongodai','jk-ofuna']
      }
    },
    renderDetails() {
      return `<div class="modal-section"><h3><span class="section-icon">🚃</span>JR京浜東北線 概要</h3>
        <div class="time-cards" style="margin-bottom:12px;">
          <div class="time-card"><div class="route-name" style="color:#00B2E5;">営業距離</div><div class="time-value">81.2</div><div class="time-unit">大宮〜大船 (81.2km)</div></div>
          <div class="time-card"><div class="route-name" style="color:#00B2E5;">駅数</div><div class="time-value">47</div><div class="time-unit">全47駅</div></div>
        </div></div>`;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line" style="background:#00B2E5"></div><span>JR京浜東北線</span></div>`;
    }
  },

  // ==========================================
  // JR東海道線（東京〜熱海・全21駅）
  // ==========================================
  'tokaido': {
    title: 'JR東海道線',
    icon: 'JT',
    themeClass: 'tokaido-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'jt-tokyo', name: '東京', lat: 35.681391, lng: 139.766103, terminal: true, routes: ['main'], info: '新幹線・JR各線乗換' },
      { id: 'jt-shimbashi', name: '新橋', lat: 35.666195, lng: 139.758587, terminal: false, routes: ['main'] },
      { id: 'jt-shinagawa', name: '品川', lat: 35.62876, lng: 139.738999, terminal: false, routes: ['main'], info: '新幹線・京急乗換' },
      { id: 'jt-kawasaki', name: '川崎', lat: 35.531311, lng: 139.697485, terminal: false, routes: ['main'] },
      { id: 'jt-yokohama', name: '横浜', lat: 35.466195, lng: 139.622704, terminal: false, routes: ['main'] },
      { id: 'jt-totsuka', name: '戸塚', lat: 35.400432, lng: 139.534282, terminal: false, routes: ['main'] },
      { id: 'jt-ofuna', name: '大船', lat: 35.353466, lng: 139.531127, terminal: false, routes: ['main'] },
      { id: 'jt-fujisawa', name: '藤沢', lat: 35.338882, lng: 139.487293, terminal: false, routes: ['main'] },
      { id: 'jt-tsujido', name: '辻堂', lat: 35.336846, lng: 139.447106, terminal: false, routes: ['main'] },
      { id: 'jt-chigasaki', name: '茅ケ崎', lat: 35.330741, lng: 139.407197, terminal: false, routes: ['main'] },
      { id: 'jt-hiratsuka', name: '平塚', lat: 35.327647, lng: 139.349063, terminal: false, routes: ['main'] },
      { id: 'jt-oiso', name: '大磯', lat: 35.311299, lng: 139.313388, terminal: false, routes: ['main'] },
      { id: 'jt-ninomiya', name: '二宮', lat: 35.298644, lng: 139.256925, terminal: false, routes: ['main'] },
      { id: 'jt-kozu', name: '国府津', lat: 35.280832, lng: 139.212932, terminal: false, routes: ['main'] },
      { id: 'jt-kamonomiya', name: '鴨宮', lat: 35.275744, lng: 139.180147, terminal: false, routes: ['main'] },
      { id: 'jt-odawara', name: '小田原', lat: 35.256225, lng: 139.155772, terminal: false, routes: ['main'], info: '新幹線・小田急・箱根登山乗換' },
      { id: 'jt-hayakawa', name: '早川', lat: 35.238875, lng: 139.145014, terminal: false, routes: ['main'] },
      { id: 'jt-nebukawa', name: '根府川', lat: 35.202455, lng: 139.138504, terminal: false, routes: ['main'] },
      { id: 'jt-manazuru', name: '真鶴', lat: 35.156837, lng: 139.132148, terminal: false, routes: ['main'] },
      { id: 'jt-yugawara', name: '湯河原', lat: 35.146178, lng: 139.102142, terminal: false, routes: ['main'] },
      { id: 'jt-atami', name: '熱海', lat: 35.103573, lng: 139.077679, terminal: true, routes: ['main'], info: '新幹線・伊東線乗換' }
    ],
    routePatterns: {
      main: {
        name: 'JR東海道線',
        color: '#F68B1E',
        glowColor: 'rgba(246, 139, 30, 0.4)',
        isLoop: false,
        stations: ['jt-tokyo','jt-shimbashi','jt-shinagawa','jt-kawasaki','jt-yokohama','jt-totsuka','jt-ofuna','jt-fujisawa','jt-tsujido','jt-chigasaki','jt-hiratsuka','jt-oiso','jt-ninomiya','jt-kozu','jt-kamonomiya','jt-odawara','jt-hayakawa','jt-nebukawa','jt-manazuru','jt-yugawara','jt-atami']
      }
    },
    renderDetails() {
      return `<div class="modal-section"><h3><span class="section-icon">🚃</span>JR東海道線 概要</h3>
        <div class="time-cards" style="margin-bottom:12px;">
          <div class="time-card"><div class="route-name" style="color:#F68B1E;">営業距離</div><div class="time-value">104.6</div><div class="time-unit">東京〜熱海 (104.6km)</div></div>
          <div class="time-card"><div class="route-name" style="color:#F68B1E;">駅数</div><div class="time-value">21</div><div class="time-unit">全21駅</div></div>
        </div></div>`;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line" style="background:#F68B1E"></div><span>JR東海道線</span></div>`;
    }
  },

  // ==========================================
  // JR南武線（川崎〜立川・全26駅）
  // ==========================================
  'nambu': {
    title: 'JR南武線',
    icon: 'JN',
    themeClass: 'nambu-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'jn-kawasaki', name: '川崎', lat: 35.531311, lng: 139.697485, terminal: true, routes: ['main'], info: 'JR各線・京急乗換' },
      { id: 'jn-shitte', name: '尻手', lat: 35.530939, lng: 139.684233, terminal: false, routes: ['main'] },
      { id: 'jn-yako', name: '矢向', lat: 35.539408, lng: 139.68055, terminal: false, routes: ['main'] },
      { id: 'jn-kashimada', name: '鹿島田', lat: 35.551459, lng: 139.674964, terminal: false, routes: ['main'] },
      { id: 'jn-hirama', name: '平間', lat: 35.560564, lng: 139.671039, terminal: false, routes: ['main'] },
      { id: 'jn-mukaigawara', name: '向河原', lat: 35.572891, lng: 139.66725, terminal: false, routes: ['main'] },
      { id: 'jn-musashikosugi', name: '武蔵小杉', lat: 35.57669, lng: 139.65963, terminal: false, routes: ['main'], info: '東急・横須賀線乗換' },
      { id: 'jn-musashinakahara', name: '武蔵中原', lat: 35.581498, lng: 139.640613, terminal: false, routes: ['main'] },
      { id: 'jn-musashishinjo', name: '武蔵新城', lat: 35.587369, lng: 139.629419, terminal: false, routes: ['main'] },
      { id: 'jn-musashimizonokuchi', name: '武蔵溝ノ口', lat: 35.598923, lng: 139.61139, terminal: false, routes: ['main'], info: '東急溝の口駅乗換' },
      { id: 'jn-tsudayama', name: '津田山', lat: 35.604259, lng: 139.600002, terminal: false, routes: ['main'] },
      { id: 'jn-kuji', name: '久地', lat: 35.610363, lng: 139.592714, terminal: false, routes: ['main'] },
      { id: 'jn-shukugawara', name: '宿河原', lat: 35.615429, lng: 139.579565, terminal: false, routes: ['main'] },
      { id: 'jn-noborito', name: '登戸', lat: 35.620889, lng: 139.570028, terminal: false, routes: ['main'], info: '小田急乗換' },
      { id: 'jn-nakanoshima', name: '中野島', lat: 35.630135, lng: 139.5501, terminal: false, routes: ['main'] },
      { id: 'jn-inadazutsumi', name: '稲田堤', lat: 35.633701, lng: 139.535173, terminal: false, routes: ['main'], info: '京王稲田堤駅乗換' },
      { id: 'jn-yanokuchi', name: '矢野口', lat: 35.641305, lng: 139.520849, terminal: false, routes: ['main'] },
      { id: 'jn-inaginaganuma', name: '稲城長沼', lat: 35.644184, lng: 139.502811, terminal: false, routes: ['main'] },
      { id: 'jn-minamitama', name: '南多摩', lat: 35.649249, lng: 139.489781, terminal: false, routes: ['main'] },
      { id: 'jn-fuchuhommachi', name: '府中本町', lat: 35.665766, lng: 139.477142, terminal: false, routes: ['main'], info: '武蔵野線乗換' },
      { id: 'jn-bubaigawara', name: '分倍河原', lat: 35.668493, lng: 139.468798, terminal: false, routes: ['main'], info: '京王線乗換' },
      { id: 'jn-nishifu', name: '西府', lat: 35.670912, lng: 139.457477, terminal: false, routes: ['main'] },
      { id: 'jn-yaho', name: '谷保', lat: 35.681377, lng: 139.446724, terminal: false, routes: ['main'] },
      { id: 'jn-yagawa', name: '矢川', lat: 35.685079, lng: 139.431611, terminal: false, routes: ['main'] },
      { id: 'jn-nishikunitachi', name: '西国立', lat: 35.69375, lng: 139.423887, terminal: false, routes: ['main'] },
      { id: 'jn-tachikawa', name: '立川', lat: 35.698202, lng: 139.413704, terminal: true, routes: ['main'], info: '中央線・青梅線・多摩モノレール乗換' }
    ],
    routePatterns: {
      main: {
        name: 'JR南武線',
        color: '#FFD400',
        glowColor: 'rgba(255, 212, 0, 0.4)',
        isLoop: false,
        stations: ['jn-kawasaki','jn-shitte','jn-yako','jn-kashimada','jn-hirama','jn-mukaigawara','jn-musashikosugi','jn-musashinakahara','jn-musashishinjo','jn-musashimizonokuchi','jn-tsudayama','jn-kuji','jn-shukugawara','jn-noborito','jn-nakanoshima','jn-inadazutsumi','jn-yanokuchi','jn-inaginaganuma','jn-minamitama','jn-fuchuhommachi','jn-bubaigawara','jn-nishifu','jn-yaho','jn-yagawa','jn-nishikunitachi','jn-tachikawa']
      }
    },
    renderDetails() {
      return `<div class="modal-section"><h3><span class="section-icon">🚃</span>JR南武線 概要</h3>
        <div class="time-cards" style="margin-bottom:12px;">
          <div class="time-card"><div class="route-name" style="color:#FFD400;">営業距離</div><div class="time-value">35.5</div><div class="time-unit">川崎〜立川 (35.5km)</div></div>
          <div class="time-card"><div class="route-name" style="color:#FFD400;">駅数</div><div class="time-value">26</div><div class="time-unit">全26駅</div></div>
        </div></div>`;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line" style="background:#FFD400"></div><span>JR南武線</span></div>`;
    }
  },

  // ==========================================
  // JR横須賀線（東京〜久里浜・全19駅）
  // ==========================================
  'yokosuka': {
    title: 'JR横須賀線',
    icon: 'JO',
    themeClass: 'yokosuka-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'jo-tokyo', name: '東京', lat: 35.681391, lng: 139.766103, terminal: true, routes: ['main'], info: '新幹線・JR各線乗換' },
      { id: 'jo-shimbashi', name: '新橋', lat: 35.666195, lng: 139.758587, terminal: false, routes: ['main'] },
      { id: 'jo-shinagawa', name: '品川', lat: 35.62876, lng: 139.738999, terminal: false, routes: ['main'] },
      { id: 'jo-nishioi', name: '西大井', lat: 35.601616, lng: 139.721729, terminal: false, routes: ['main'] },
      { id: 'jo-musashikosugi', name: '武蔵小杉', lat: 35.575965, lng: 139.663278, terminal: false, routes: ['main'] },
      { id: 'jo-shinkawasaki', name: '新川崎', lat: 35.551784, lng: 139.671481, terminal: false, routes: ['main'] },
      { id: 'jo-yokohama', name: '横浜', lat: 35.466195, lng: 139.622704, terminal: false, routes: ['main'] },
      { id: 'jo-hodogaya', name: '保土ケ谷', lat: 35.446746, lng: 139.599671, terminal: false, routes: ['main'] },
      { id: 'jo-higashitotsuka', name: '東戸塚', lat: 35.430353, lng: 139.556794, terminal: false, routes: ['main'] },
      { id: 'jo-totsuka', name: '戸塚', lat: 35.400432, lng: 139.534282, terminal: false, routes: ['main'] },
      { id: 'jo-ofuna', name: '大船', lat: 35.353466, lng: 139.531127, terminal: false, routes: ['main'] },
      { id: 'jo-kitakamakura', name: '北鎌倉', lat: 35.337198, lng: 139.545134, terminal: false, routes: ['main'] },
      { id: 'jo-kamakura', name: '鎌倉', lat: 35.318793, lng: 139.550428, terminal: false, routes: ['main'] },
      { id: 'jo-zushi', name: '逗子', lat: 35.297392, lng: 139.578292, terminal: false, routes: ['main'] },
      { id: 'jo-higashizushi', name: '東逗子', lat: 35.298781, lng: 139.601768, terminal: false, routes: ['main'] },
      { id: 'jo-taura', name: '田浦', lat: 35.29271, lng: 139.637726, terminal: false, routes: ['main'] },
      { id: 'jo-yokosuka', name: '横須賀', lat: 35.284022, lng: 139.655855, terminal: false, routes: ['main'] },
      { id: 'jo-kinugasa', name: '衣笠', lat: 35.257091, lng: 139.661193, terminal: false, routes: ['main'] },
      { id: 'jo-kurihama', name: '久里浜', lat: 35.233107, lng: 139.700862, terminal: true, routes: ['main'] }
    ],
    routePatterns: {
      main: {
        name: 'JR横須賀線',
        color: '#0067C0',
        glowColor: 'rgba(0, 103, 192, 0.4)',
        isLoop: false,
        stations: ['jo-tokyo','jo-shimbashi','jo-shinagawa','jo-nishioi','jo-musashikosugi','jo-shinkawasaki','jo-yokohama','jo-hodogaya','jo-higashitotsuka','jo-totsuka','jo-ofuna','jo-kitakamakura','jo-kamakura','jo-zushi','jo-higashizushi','jo-taura','jo-yokosuka','jo-kinugasa','jo-kurihama']
      }
    },
    renderDetails() {
      return `<div class="modal-section"><h3><span class="section-icon">🚃</span>JR横須賀線 概要</h3>
        <div class="time-cards" style="margin-bottom:12px;">
          <div class="time-card"><div class="route-name" style="color:#0067C0;">営業距離</div><div class="time-value">73.7</div><div class="time-unit">東京〜久里浜 (73.7km)</div></div>
          <div class="time-card"><div class="route-name" style="color:#0067C0;">駅数</div><div class="time-value">19</div><div class="time-unit">全19駅</div></div>
        </div></div>`;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line" style="background:#0067C0"></div><span>JR横須賀線</span></div>`;
    }
  },

  // ==========================================
  // JR埼京線（大崎〜大宮・全19駅）
  // ==========================================
  'saikyo': {
    title: 'JR埼京線',
    icon: 'JA',
    themeClass: 'saikyo-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'ja-osaki', name: '大崎', lat: 35.619772, lng: 139.728439, terminal: true, routes: ['main'], info: 'りんかい線直通' },
      { id: 'ja-ebisu', name: '恵比寿', lat: 35.646684, lng: 139.71007, terminal: false, routes: ['main'] },
      { id: 'ja-shibuya', name: '渋谷', lat: 35.658871, lng: 139.701238, terminal: false, routes: ['main'] },
      { id: 'ja-shinjuku', name: '新宿', lat: 35.689729, lng: 139.700464, terminal: false, routes: ['main'] },
      { id: 'ja-ikebukuro', name: '池袋', lat: 35.730256, lng: 139.711085, terminal: false, routes: ['main'] },
      { id: 'ja-itabashi', name: '板橋', lat: 35.745435, lng: 139.719507, terminal: false, routes: ['main'] },
      { id: 'ja-jujo', name: '十条', lat: 35.760321, lng: 139.722233, terminal: false, routes: ['main'] },
      { id: 'ja-akabane', name: '赤羽', lat: 35.778026, lng: 139.720928, terminal: false, routes: ['main'] },
      { id: 'ja-kitaakabane', name: '北赤羽', lat: 35.787007, lng: 139.70569, terminal: false, routes: ['main'] },
      { id: 'ja-ukimafunado', name: '浮間舟渡', lat: 35.791209, lng: 139.691341, terminal: false, routes: ['main'] },
      { id: 'ja-todakoen', name: '戸田公園', lat: 35.807906, lng: 139.678203, terminal: false, routes: ['main'] },
      { id: 'ja-toda', name: '戸田', lat: 35.817665, lng: 139.669548, terminal: false, routes: ['main'] },
      { id: 'ja-kitatoda', name: '北戸田', lat: 35.826883, lng: 139.661201, terminal: false, routes: ['main'] },
      { id: 'ja-musashiurawa', name: '武蔵浦和', lat: 35.845422, lng: 139.646809, terminal: false, routes: ['main'], info: '武蔵野線乗換' },
      { id: 'ja-nakaurawa', name: '中浦和', lat: 35.853769, lng: 139.6375, terminal: false, routes: ['main'] },
      { id: 'ja-minamiyono', name: '南与野', lat: 35.867456, lng: 139.631117, terminal: false, routes: ['main'] },
      { id: 'ja-yonohommachi', name: '与野本町', lat: 35.880968, lng: 139.626075, terminal: false, routes: ['main'] },
      { id: 'ja-kitayono', name: '北与野', lat: 35.890678, lng: 139.628521, terminal: false, routes: ['main'] },
      { id: 'ja-omiya', name: '大宮', lat: 35.906439, lng: 139.62405, terminal: true, routes: ['main'] }
    ],
    routePatterns: {
      main: {
        name: 'JR埼京線',
        color: '#00AC9A',
        glowColor: 'rgba(0, 172, 154, 0.4)',
        isLoop: false,
        stations: ['ja-osaki','ja-ebisu','ja-shibuya','ja-shinjuku','ja-ikebukuro','ja-itabashi','ja-jujo','ja-akabane','ja-kitaakabane','ja-ukimafunado','ja-todakoen','ja-toda','ja-kitatoda','ja-musashiurawa','ja-nakaurawa','ja-minamiyono','ja-yonohommachi','ja-kitayono','ja-omiya']
      }
    },
    renderDetails() {
      return `<div class="modal-section"><h3><span class="section-icon">🚃</span>JR埼京線 概要</h3>
        <div class="time-cards" style="margin-bottom:12px;">
          <div class="time-card"><div class="route-name" style="color:#00AC9A;">営業距離</div><div class="time-value">36.9</div><div class="time-unit">大崎〜大宮 (36.9km)</div></div>
          <div class="time-card"><div class="route-name" style="color:#00AC9A;">駅数</div><div class="time-value">19</div><div class="time-unit">全19駅</div></div>
        </div></div>`;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line" style="background:#00AC9A"></div><span>JR埼京線</span></div>`;
    }
  },

  // ==========================================
  // 湘南新宿ライン（大宮〜大船 経由主要駅・全15駅）
  // ==========================================
  'shonan-shinjuku': {
    title: '湘南新宿ライン',
    icon: 'JS',
    themeClass: 'shonan-shinjuku-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'js-omiya', name: '大宮', lat: 35.906439, lng: 139.62405, terminal: true, routes: ['main'] },
      { id: 'js-urawa', name: '浦和', lat: 35.858496, lng: 139.657109, terminal: false, routes: ['main'] },
      { id: 'js-akabane', name: '赤羽', lat: 35.778026, lng: 139.720928, terminal: false, routes: ['main'] },
      { id: 'js-ikebukuro', name: '池袋', lat: 35.730256, lng: 139.711085, terminal: false, routes: ['main'] },
      { id: 'js-shinjuku', name: '新宿', lat: 35.689729, lng: 139.700464, terminal: false, routes: ['main'] },
      { id: 'js-shibuya', name: '渋谷', lat: 35.658871, lng: 139.701238, terminal: false, routes: ['main'] },
      { id: 'js-ebisu', name: '恵比寿', lat: 35.646684, lng: 139.71007, terminal: false, routes: ['main'] },
      { id: 'js-osaki', name: '大崎', lat: 35.619772, lng: 139.728439, terminal: false, routes: ['main'] },
      { id: 'js-nishioi', name: '西大井', lat: 35.601616, lng: 139.721729, terminal: false, routes: ['main'] },
      { id: 'js-musashikosugi', name: '武蔵小杉', lat: 35.57669, lng: 139.65963, terminal: false, routes: ['main'] },
      { id: 'js-shinkawasaki', name: '新川崎', lat: 35.551784, lng: 139.671481, terminal: false, routes: ['main'] },
      { id: 'js-yokohama', name: '横浜', lat: 35.466195, lng: 139.622704, terminal: false, routes: ['main'] },
      { id: 'js-totsuka', name: '戸塚', lat: 35.400432, lng: 139.534282, terminal: false, routes: ['main'] },
      { id: 'js-ofuna', name: '大船', lat: 35.353466, lng: 139.531127, terminal: false, routes: ['main'] },
      { id: 'js-fujisawa', name: '藤沢', lat: 35.338908, lng: 139.488345, terminal: true, routes: ['main'] }
    ],
    routePatterns: {
      main: {
        name: '湘南新宿ライン',
        color: '#E44D2A',
        glowColor: 'rgba(228, 77, 42, 0.4)',
        isLoop: false,
        stations: ['js-omiya','js-urawa','js-akabane','js-ikebukuro','js-shinjuku','js-shibuya','js-ebisu','js-osaki','js-nishioi','js-musashikosugi','js-shinkawasaki','js-yokohama','js-totsuka','js-ofuna','js-fujisawa']
      }
    },
    renderDetails() {
      return `<div class="modal-section"><h3><span class="section-icon">🚃</span>湘南新宿ライン 概要</h3>
        <div class="time-cards" style="margin-bottom:12px;">
          <div class="time-card"><div class="route-name" style="color:#E44D2A;">営業距離</div><div class="time-value">91.1</div><div class="time-unit">大宮〜藤沢 (主要停車駅)</div></div>
          <div class="time-card"><div class="route-name" style="color:#E44D2A;">駅数</div><div class="time-value">15</div><div class="time-unit">主要15駅</div></div>
        </div></div>`;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line" style="background:#E44D2A"></div><span>湘南新宿ライン</span></div>`;
    }
  },

  // ==========================================
  // JR京葉線（東京〜蘇我・全18駅）
  // ==========================================
  'keiyo': {
    title: 'JR京葉線',
    icon: 'JE',
    themeClass: 'keiyo-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'je-tokyo', name: '東京', lat: 35.681391, lng: 139.766103, terminal: true, routes: ['main'], info: '新幹線・JR各線乗換' },
      { id: 'je-hatchobori', name: '八丁堀', lat: 35.674617, lng: 139.777705, terminal: false, routes: ['main'] },
      { id: 'je-ecchujima', name: '越中島', lat: 35.667946, lng: 139.792713, terminal: false, routes: ['main'] },
      { id: 'je-shiomi', name: '潮見', lat: 35.658702, lng: 139.817341, terminal: false, routes: ['main'] },
      { id: 'je-shinkiba', name: '新木場', lat: 35.646172, lng: 139.827402, terminal: false, routes: ['main'], info: '有楽町線・りんかい線乗換' },
      { id: 'je-kasairinkai', name: '葛西臨海公園', lat: 35.644392, lng: 139.861529, terminal: false, routes: ['main'] },
      { id: 'je-maihama', name: '舞浜', lat: 35.636115, lng: 139.883714, terminal: false, routes: ['main'], info: '東京ディズニーリゾート最寄駅' },
      { id: 'je-shinurayasu', name: '新浦安', lat: 35.649526, lng: 139.912553, terminal: false, routes: ['main'] },
      { id: 'je-ichikawashiohama', name: '市川塩浜', lat: 35.666554, lng: 139.923684, terminal: false, routes: ['main'] },
      { id: 'je-futamatashimmachi', name: '二俣新町', lat: 35.691273, lng: 139.959525, terminal: false, routes: ['main'] },
      { id: 'je-minamifunabashi', name: '南船橋', lat: 35.681804, lng: 139.995773, terminal: false, routes: ['main'] },
      { id: 'je-shinnarashino', name: '新習志野', lat: 35.667342, lng: 140.012825, terminal: false, routes: ['main'] },
      { id: 'je-makuharitoyosuna', name: '幕張豊砂', lat: 35.657991, lng: 140.027061, terminal: false, routes: ['main'] },
      { id: 'je-kaihinmakuhari', name: '海浜幕張', lat: 35.648373, lng: 140.041917, terminal: false, routes: ['main'], info: '幕張メッセ最寄駅' },
      { id: 'je-kemigawahama', name: '検見川浜', lat: 35.637291, lng: 140.058888, terminal: false, routes: ['main'] },
      { id: 'je-inagekaigan', name: '稲毛海岸', lat: 35.629501, lng: 140.074034, terminal: false, routes: ['main'] },
      { id: 'je-chibaminato', name: '千葉みなと', lat: 35.606172, lng: 140.10341, terminal: false, routes: ['main'], info: '千葉都市モノレール乗換' },
      { id: 'je-soga', name: '蘇我', lat: 35.582065, lng: 140.130767, terminal: true, routes: ['main'], info: '内房線・外房線乗換' }
    ],
    routePatterns: {
      main: {
        name: 'JR京葉線',
        color: '#C9252F',
        glowColor: 'rgba(201, 37, 47, 0.4)',
        isLoop: false,
        stations: ['je-tokyo','je-hatchobori','je-ecchujima','je-shiomi','je-shinkiba','je-kasairinkai','je-maihama','je-shinurayasu','je-ichikawashiohama','je-futamatashimmachi','je-minamifunabashi','je-shinnarashino','je-makuharitoyosuna','je-kaihinmakuhari','je-kemigawahama','je-inagekaigan','je-chibaminato','je-soga']
      }
    },
    renderDetails() {
      return `<div class="modal-section"><h3><span class="section-icon">🚃</span>JR京葉線 概要</h3>
        <div class="time-cards" style="margin-bottom:12px;">
          <div class="time-card"><div class="route-name" style="color:#C9252F;">営業距離</div><div class="time-value">43.0</div><div class="time-unit">東京〜蘇我 (43.0km)</div></div>
          <div class="time-card"><div class="route-name" style="color:#C9252F;">駅数</div><div class="time-value">18</div><div class="time-unit">全18駅</div></div>
        </div></div>`;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line" style="background:#C9252F"></div><span>JR京葉線</span></div>`;
    }
  }
};


jrData['ueno-tokyo'] = {  title: '上野東京ライン',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-ueno-tokyo-大宮', name: '大宮', lat: 35.906439, lng: 139.62405, terminal: true, routes: ['main'] },
      { id: 'jr-ueno-tokyo-さいたま新都心', name: 'さいたま新都心', lat: 35.893867, lng: 139.633587, terminal: false, routes: ['main'] },
      { id: 'jr-ueno-tokyo-浦和', name: '浦和', lat: 35.858496, lng: 139.657109, terminal: false, routes: ['main'] },
      { id: 'jr-ueno-tokyo-赤羽', name: '赤羽', lat: 35.778026, lng: 139.720928, terminal: false, routes: ['main'] },
      { id: 'jr-ueno-tokyo-尾久', name: '尾久', lat: 35.74683, lng: 139.753846, terminal: false, routes: ['main'] },
      { id: 'jr-ueno-tokyo-日暮里', name: '日暮里', lat: 35.727908, lng: 139.771287, terminal: false, routes: ['main'] },
      { id: 'jr-ueno-tokyo-上野', name: '上野', lat: 35.71379, lng: 139.777043, terminal: false, routes: ['main'] },
      { id: 'jr-ueno-tokyo-東京', name: '東京', lat: 35.681391, lng: 139.766103, terminal: false, routes: ['main'] },
      { id: 'jr-ueno-tokyo-新橋', name: '新橋', lat: 35.666195, lng: 139.758587, terminal: false, routes: ['main'] },
      { id: 'jr-ueno-tokyo-品川', name: '品川', lat: 35.62876, lng: 139.738999, terminal: false, routes: ['main'] },
      { id: 'jr-ueno-tokyo-川崎', name: '川崎', lat: 35.531311, lng: 139.697485, terminal: false, routes: ['main'] },
      { id: 'jr-ueno-tokyo-横浜', name: '横浜', lat: 35.466195, lng: 139.622704, terminal: false, routes: ['main'] },
      { id: 'jr-ueno-tokyo-戸塚', name: '戸塚', lat: 35.400432, lng: 139.534282, terminal: false, routes: ['main'] },
      { id: 'jr-ueno-tokyo-大船', name: '大船', lat: 35.353466, lng: 139.531127, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '上野東京ライン', color: '#800080', glowColor: 'rgba(128, 0, 128, 0.4)', isLoop: false, stations: ['jr-ueno-tokyo-大宮', 'jr-ueno-tokyo-さいたま新都心', 'jr-ueno-tokyo-浦和', 'jr-ueno-tokyo-赤羽', 'jr-ueno-tokyo-尾久', 'jr-ueno-tokyo-日暮里', 'jr-ueno-tokyo-上野', 'jr-ueno-tokyo-東京', 'jr-ueno-tokyo-新橋', 'jr-ueno-tokyo-品川', 'jr-ueno-tokyo-川崎', 'jr-ueno-tokyo-横浜', 'jr-ueno-tokyo-戸塚', 'jr-ueno-tokyo-大船'] }  },  renderDetails() { return `<div class="modal-section"><p>上野東京ライン</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#800080"></div><span>上野東京ライン</span></div>`; }};

jrData['chuo-sobu'] = {  title: '中央・総武線（各駅停車）',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-chuo-sobu-三鷹', name: '三鷹', lat: 35.702683, lng: 139.560325, terminal: true, routes: ['main'] },
      { id: 'jr-chuo-sobu-吉祥寺', name: '吉祥寺', lat: 35.703119, lng: 139.579765, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-西荻窪', name: '西荻窪', lat: 35.703842, lng: 139.599361, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-荻窪', name: '荻窪', lat: 35.704523, lng: 139.620109, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-阿佐ケ谷', name: '阿佐ケ谷', lat: 35.704818, lng: 139.635868, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-高円寺', name: '高円寺', lat: 35.705327, lng: 139.649664, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-中野', name: '中野', lat: 35.705765, lng: 139.665835, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-東中野', name: '東中野', lat: 35.706529, lng: 139.684436, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-大久保', name: '大久保', lat: 35.700784, lng: 139.69732, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-新宿', name: '新宿', lat: 35.689729, lng: 139.700464, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-代々木', name: '代々木', lat: 35.683061, lng: 139.702042, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-千駄ケ谷', name: '千駄ケ谷', lat: 35.681231, lng: 139.711644, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-信濃町', name: '信濃町', lat: 35.680031, lng: 139.720729, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-四ツ谷', name: '四ツ谷', lat: 35.686041, lng: 139.730644, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-市ヶ谷', name: '市ヶ谷', lat: 35.692594, lng: 139.735794, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-飯田橋', name: '飯田橋', lat: 35.701835, lng: 139.745143, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-水道橋', name: '水道橋', lat: 35.702039, lng: 139.754312, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-御茶ノ水', name: '御茶ノ水', lat: 35.699604, lng: 139.764955, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-秋葉原', name: '秋葉原', lat: 35.698619, lng: 139.773288, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-浅草橋', name: '浅草橋', lat: 35.697403, lng: 139.784427, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-両国', name: '両国', lat: 35.69579, lng: 139.793334, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-錦糸町', name: '錦糸町', lat: 35.696802, lng: 139.814136, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-亀戸', name: '亀戸', lat: 35.697345, lng: 139.826262, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-平井', name: '平井', lat: 35.70643, lng: 139.842181, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-新小岩', name: '新小岩', lat: 35.716903, lng: 139.857777, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-小岩', name: '小岩', lat: 35.733207, lng: 139.881755, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-市川', name: '市川', lat: 35.728903, lng: 139.908142, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-本八幡', name: '本八幡', lat: 35.720898, lng: 139.92741, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-下総中山', name: '下総中山', lat: 35.714276, lng: 139.943092, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-西船橋', name: '西船橋', lat: 35.707283, lng: 139.959536, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-船橋', name: '船橋', lat: 35.701865, lng: 139.984707, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-東船橋', name: '東船橋', lat: 35.699811, lng: 140.00393, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-津田沼', name: '津田沼', lat: 35.691367, lng: 140.020179, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-幕張本郷', name: '幕張本郷', lat: 35.672664, lng: 140.042241, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-幕張', name: '幕張', lat: 35.6594, lng: 140.0579, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-新検見川', name: '新検見川', lat: 35.65169, lng: 140.073025, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-稲毛', name: '稲毛', lat: 35.637264, lng: 140.09256, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-西千葉', name: '西千葉', lat: 35.622639, lng: 140.103337, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-sobu-千葉', name: '千葉', lat: 35.613425, lng: 140.112837, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '中央・総武線（各駅停車）', color: '#FFD400', glowColor: 'rgba(255, 212, 0, 0.4)', isLoop: false, stations: ['jr-chuo-sobu-三鷹', 'jr-chuo-sobu-吉祥寺', 'jr-chuo-sobu-西荻窪', 'jr-chuo-sobu-荻窪', 'jr-chuo-sobu-阿佐ケ谷', 'jr-chuo-sobu-高円寺', 'jr-chuo-sobu-中野', 'jr-chuo-sobu-東中野', 'jr-chuo-sobu-大久保', 'jr-chuo-sobu-新宿', 'jr-chuo-sobu-代々木', 'jr-chuo-sobu-千駄ケ谷', 'jr-chuo-sobu-信濃町', 'jr-chuo-sobu-四ツ谷', 'jr-chuo-sobu-市ヶ谷', 'jr-chuo-sobu-飯田橋', 'jr-chuo-sobu-水道橋', 'jr-chuo-sobu-御茶ノ水', 'jr-chuo-sobu-秋葉原', 'jr-chuo-sobu-浅草橋', 'jr-chuo-sobu-両国', 'jr-chuo-sobu-錦糸町', 'jr-chuo-sobu-亀戸', 'jr-chuo-sobu-平井', 'jr-chuo-sobu-新小岩', 'jr-chuo-sobu-小岩', 'jr-chuo-sobu-市川', 'jr-chuo-sobu-本八幡', 'jr-chuo-sobu-下総中山', 'jr-chuo-sobu-西船橋', 'jr-chuo-sobu-船橋', 'jr-chuo-sobu-東船橋', 'jr-chuo-sobu-津田沼', 'jr-chuo-sobu-幕張本郷', 'jr-chuo-sobu-幕張', 'jr-chuo-sobu-新検見川', 'jr-chuo-sobu-稲毛', 'jr-chuo-sobu-西千葉', 'jr-chuo-sobu-千葉'] }  },  renderDetails() { return `<div class="modal-section"><p>中央・総武線（各駅停車）</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#FFD400"></div><span>中央・総武線（各駅停車）</span></div>`; }};

jrData['musashino'] = {  title: '武蔵野線',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-musashino-府中本町', name: '府中本町', lat: 35.665766, lng: 139.477142, terminal: true, routes: ['main'] },
      { id: 'jr-musashino-北府中', name: '北府中', lat: 35.68088, lng: 139.471792, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-西国分寺', name: '西国分寺', lat: 35.699744, lng: 139.465994, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-新小平', name: '新小平', lat: 35.73128, lng: 139.470745, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-新秋津', name: '新秋津', lat: 35.778331, lng: 139.493592, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-東所沢', name: '東所沢', lat: 35.79461, lng: 139.513878, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-新座', name: '新座', lat: 35.80381, lng: 139.556328, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-北朝霞', name: '北朝霞', lat: 35.815475, lng: 139.587322, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-西浦和', name: '西浦和', lat: 35.844139, lng: 139.627707, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-武蔵浦和', name: '武蔵浦和', lat: 35.846047, lng: 139.647974, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-南浦和', name: '南浦和', lat: 35.847648, lng: 139.669125, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-東浦和', name: '東浦和', lat: 35.864079, lng: 139.704627, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-東川口', name: '東川口', lat: 35.875246, lng: 139.744087, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-南越谷', name: '南越谷', lat: 35.876106, lng: 139.790499, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-越谷レイクタウン', name: '越谷レイクタウン', lat: 35.87622, lng: 139.820219, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-吉川', name: '吉川', lat: 35.87662, lng: 139.843162, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-吉川美南', name: '吉川美南', lat: 35.868056, lng: 139.858167, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-新三郷', name: '新三郷', lat: 35.858667, lng: 139.869341, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-三郷', name: '三郷', lat: 35.845004, lng: 139.886341, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-南流山', name: '南流山', lat: 35.838035, lng: 139.903865, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-新松戸', name: '新松戸', lat: 35.825467, lng: 139.921076, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-新八柱', name: '新八柱', lat: 35.792013, lng: 139.938393, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-東松戸', name: '東松戸', lat: 35.770611, lng: 139.943848, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-市川大野', name: '市川大野', lat: 35.755432, lng: 139.951227, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-船橋法典', name: '船橋法典', lat: 35.730435, lng: 139.966771, terminal: false, routes: ['main'] },
      { id: 'jr-musashino-西船橋', name: '西船橋', lat: 35.707283, lng: 139.959536, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '武蔵野線', color: '#F15A22', glowColor: 'rgba(241, 90, 34, 0.4)', isLoop: false, stations: ['jr-musashino-府中本町', 'jr-musashino-北府中', 'jr-musashino-西国分寺', 'jr-musashino-新小平', 'jr-musashino-新秋津', 'jr-musashino-東所沢', 'jr-musashino-新座', 'jr-musashino-北朝霞', 'jr-musashino-西浦和', 'jr-musashino-武蔵浦和', 'jr-musashino-南浦和', 'jr-musashino-東浦和', 'jr-musashino-東川口', 'jr-musashino-南越谷', 'jr-musashino-越谷レイクタウン', 'jr-musashino-吉川', 'jr-musashino-吉川美南', 'jr-musashino-新三郷', 'jr-musashino-三郷', 'jr-musashino-南流山', 'jr-musashino-新松戸', 'jr-musashino-新八柱', 'jr-musashino-東松戸', 'jr-musashino-市川大野', 'jr-musashino-船橋法典', 'jr-musashino-西船橋'] }  },  renderDetails() { return `<div class="modal-section"><p>武蔵野線</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#F15A22"></div><span>武蔵野線</span></div>`; }};

jrData['tsurumi'] = {
  title: '鶴見線',
  icon: 'JR',
  themeClass: 'jr-theme',
  hasSubRoutes: true,
  stations: [
      { id: 'jr-tsurumi-鶴見', name: '鶴見', lat: 35.508387, lng: 139.67614, terminal: true, routes: ['main'] },
      { id: 'jr-tsurumi-国道', name: '国道', lat: 35.50083, lng: 139.675599, terminal: false, routes: ['main'] },
      { id: 'jr-tsurumi-鶴見小野', name: '鶴見小野', lat: 35.497005, lng: 139.681226, terminal: false, routes: ['main'] },
      { id: 'jr-tsurumi-弁天橋', name: '弁天橋', lat: 35.495758, lng: 139.689451, terminal: false, routes: ['main'] },
      { id: 'jr-tsurumi-浅野', name: '浅野', lat: 35.497555, lng: 139.695739, terminal: false, routes: ['main', 'umi-shibaura'] },
      { id: 'jr-tsurumi-新芝浦', name: '新芝浦', lat: 35.491915, lng: 139.7001, terminal: false, routes: ['umi-shibaura'] },
      { id: 'jr-tsurumi-海芝浦', name: '海芝浦', lat: 35.486073, lng: 139.700603, terminal: true, routes: ['umi-shibaura'] },
      { id: 'jr-tsurumi-安善', name: '安善', lat: 35.499668, lng: 139.700663, terminal: false, routes: ['main'] },
      { id: 'jr-tsurumi-武蔵白石', name: '武蔵白石', lat: 35.501912, lng: 139.706513, terminal: false, routes: ['main', 'okawa'] },
      { id: 'jr-tsurumi-大川', name: '大川', lat: 35.495646, lng: 139.711038, terminal: true, routes: ['okawa'] },
      { id: 'jr-tsurumi-浜川崎', name: '浜川崎', lat: 35.509863, lng: 139.713575, terminal: false, routes: ['main'] },
      { id: 'jr-tsurumi-昭和', name: '昭和', lat: 35.506836, lng: 139.723897, terminal: false, routes: ['main'] },
      { id: 'jr-tsurumi-扇町', name: '扇町', lat: 35.501452, lng: 139.722147, terminal: true, routes: ['main'] }
  ],
  routePatterns: {
    main: { name: '鶴見線（本線）', color: '#FFD400', glowColor: 'rgba(255, 212, 0, 0.4)', isLoop: false, stations: ['jr-tsurumi-鶴見', 'jr-tsurumi-国道', 'jr-tsurumi-鶴見小野', 'jr-tsurumi-弁天橋', 'jr-tsurumi-浅野', 'jr-tsurumi-安善', 'jr-tsurumi-武蔵白石', 'jr-tsurumi-浜川崎', 'jr-tsurumi-昭和', 'jr-tsurumi-扇町'] },
    'umi-shibaura': { name: '海芝浦支線', color: '#FFD400', glowColor: 'rgba(255, 212, 0, 0.4)', isLoop: false, stations: ['jr-tsurumi-浅野', 'jr-tsurumi-新芝浦', 'jr-tsurumi-海芝浦'] },
    'okawa': { name: '大川支線', color: '#FFD400', glowColor: 'rgba(255, 212, 0, 0.4)', isLoop: false, stations: ['jr-tsurumi-武蔵白石', 'jr-tsurumi-大川'] }
  },
  renderDetails() { return `<div class="modal-section"><p>鶴見線</p></div>`; },
  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#FFD400"></div><span>鶴見線</span></div>`; }
};

jrData['sobu-rapid'] = {  title: '総武線快速',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-sobu-rapid-東京', name: '東京', lat: 35.681391, lng: 139.766103, terminal: true, routes: ['main'] },
      { id: 'jr-sobu-rapid-新日本橋', name: '新日本橋', lat: 35.688687, lng: 139.77323, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-rapid-馬喰町', name: '馬喰町', lat: 35.693365, lng: 139.78238, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-rapid-錦糸町', name: '錦糸町', lat: 35.696802, lng: 139.814136, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-rapid-新小岩', name: '新小岩', lat: 35.716903, lng: 139.857777, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-rapid-市川', name: '市川', lat: 35.728903, lng: 139.908142, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-rapid-船橋', name: '船橋', lat: 35.701865, lng: 139.984707, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-rapid-津田沼', name: '津田沼', lat: 35.691367, lng: 140.020179, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-rapid-稲毛', name: '稲毛', lat: 35.637264, lng: 140.09256, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-rapid-千葉', name: '千葉', lat: 35.613425, lng: 140.112837, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '総武線快速', color: '#0067C0', glowColor: 'rgba(0, 103, 192, 0.4)', isLoop: false, stations: ['jr-sobu-rapid-東京', 'jr-sobu-rapid-新日本橋', 'jr-sobu-rapid-馬喰町', 'jr-sobu-rapid-錦糸町', 'jr-sobu-rapid-新小岩', 'jr-sobu-rapid-市川', 'jr-sobu-rapid-船橋', 'jr-sobu-rapid-津田沼', 'jr-sobu-rapid-稲毛', 'jr-sobu-rapid-千葉'] }  },  renderDetails() { return `<div class="modal-section"><p>総武線快速</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#0067C0"></div><span>総武線快速</span></div>`; }};

jrData['yokohama'] = {  title: '横浜線',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-yokohama-東神奈川', name: '東神奈川', lat: 35.47804, lng: 139.633466, terminal: true, routes: ['main'] },
      { id: 'jr-yokohama-大口', name: '大口', lat: 35.492375, lng: 139.646288, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-菊名', name: '菊名', lat: 35.509749, lng: 139.630147, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-新横浜', name: '新横浜', lat: 35.506824, lng: 139.617348, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-小机', name: '小机', lat: 35.508533, lng: 139.599787, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-鴨居', name: '鴨居', lat: 35.510955, lng: 139.56707, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-中山', name: '中山', lat: 35.514745, lng: 139.539692, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-十日市場', name: '十日市場', lat: 35.526254, lng: 139.51669, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-長津田', name: '長津田', lat: 35.531698, lng: 139.49468, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-成瀬', name: '成瀬', lat: 35.535412, lng: 139.472875, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-町田', name: '町田', lat: 35.542004, lng: 139.445579, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-古淵', name: '古淵', lat: 35.556055, lng: 139.419151, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-淵野辺', name: '淵野辺', lat: 35.568784, lng: 139.395075, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-矢部', name: '矢部', lat: 35.573275, lng: 139.386373, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-相模原', name: '相模原', lat: 35.58113, lng: 139.371007, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-橋本', name: '橋本', lat: 35.594975, lng: 139.344586, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-相原', name: '相原', lat: 35.60694, lng: 139.33169, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-八王子みなみ野', name: '八王子みなみ野', lat: 35.630664, lng: 139.330678, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-片倉', name: '片倉', lat: 35.639704, lng: 139.34119, terminal: false, routes: ['main'] },
      { id: 'jr-yokohama-八王子', name: '八王子', lat: 35.655555, lng: 139.338998, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '横浜線', color: '#80C241', glowColor: 'rgba(128, 194, 65, 0.4)', isLoop: false, stations: ['jr-yokohama-東神奈川', 'jr-yokohama-大口', 'jr-yokohama-菊名', 'jr-yokohama-新横浜', 'jr-yokohama-小机', 'jr-yokohama-鴨居', 'jr-yokohama-中山', 'jr-yokohama-十日市場', 'jr-yokohama-長津田', 'jr-yokohama-成瀬', 'jr-yokohama-町田', 'jr-yokohama-古淵', 'jr-yokohama-淵野辺', 'jr-yokohama-矢部', 'jr-yokohama-相模原', 'jr-yokohama-橋本', 'jr-yokohama-相原', 'jr-yokohama-八王子みなみ野', 'jr-yokohama-片倉', 'jr-yokohama-八王子'] }  },  renderDetails() { return `<div class="modal-section"><p>横浜線</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#80C241"></div><span>横浜線</span></div>`; }};

jrData['saikyo'] = {  title: '埼京線',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-saikyo-大崎', name: '大崎', lat: 35.619772, lng: 139.728439, terminal: true, routes: ['main'] },
      { id: 'jr-saikyo-恵比寿', name: '恵比寿', lat: 35.646684, lng: 139.71007, terminal: false, routes: ['main'] },
      { id: 'jr-saikyo-渋谷', name: '渋谷', lat: 35.658871, lng: 139.701238, terminal: false, routes: ['main'] },
      { id: 'jr-saikyo-新宿', name: '新宿', lat: 35.689729, lng: 139.700464, terminal: false, routes: ['main'] },
      { id: 'jr-saikyo-池袋', name: '池袋', lat: 35.730256, lng: 139.711085, terminal: false, routes: ['main'] },
      { id: 'jr-saikyo-板橋', name: '板橋', lat: 35.745435, lng: 139.719507, terminal: false, routes: ['main'] },
      { id: 'jr-saikyo-十条', name: '十条', lat: 35.760321, lng: 139.722233, terminal: false, routes: ['main'] },
      { id: 'jr-saikyo-赤羽', name: '赤羽', lat: 35.778026, lng: 139.720928, terminal: false, routes: ['main'] },
      { id: 'jr-saikyo-北赤羽', name: '北赤羽', lat: 35.787007, lng: 139.70569, terminal: false, routes: ['main'] },
      { id: 'jr-saikyo-浮間舟渡', name: '浮間舟渡', lat: 35.791209, lng: 139.691341, terminal: false, routes: ['main'] },
      { id: 'jr-saikyo-戸田公園', name: '戸田公園', lat: 35.807906, lng: 139.678203, terminal: false, routes: ['main'] },
      { id: 'jr-saikyo-戸田', name: '戸田', lat: 35.817665, lng: 139.669548, terminal: false, routes: ['main'] },
      { id: 'jr-saikyo-北戸田', name: '北戸田', lat: 35.826883, lng: 139.661201, terminal: false, routes: ['main'] },
      { id: 'jr-saikyo-武蔵浦和', name: '武蔵浦和', lat: 35.845422, lng: 139.646809, terminal: false, routes: ['main'] },
      { id: 'jr-saikyo-中浦和', name: '中浦和', lat: 35.853769, lng: 139.6375, terminal: false, routes: ['main'] },
      { id: 'jr-saikyo-南与野', name: '南与野', lat: 35.867456, lng: 139.631117, terminal: false, routes: ['main'] },
      { id: 'jr-saikyo-与野本町', name: '与野本町', lat: 35.880968, lng: 139.626075, terminal: false, routes: ['main'] },
      { id: 'jr-saikyo-北与野', name: '北与野', lat: 35.890678, lng: 139.628521, terminal: false, routes: ['main'] },
      { id: 'jr-saikyo-大宮', name: '大宮', lat: 35.906439, lng: 139.62405, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '埼京線', color: '#00AC9A', glowColor: 'rgba(0, 172, 154, 0.4)', isLoop: false, stations: ['jr-saikyo-大崎', 'jr-saikyo-恵比寿', 'jr-saikyo-渋谷', 'jr-saikyo-新宿', 'jr-saikyo-池袋', 'jr-saikyo-板橋', 'jr-saikyo-十条', 'jr-saikyo-赤羽', 'jr-saikyo-北赤羽', 'jr-saikyo-浮間舟渡', 'jr-saikyo-戸田公園', 'jr-saikyo-戸田', 'jr-saikyo-北戸田', 'jr-saikyo-武蔵浦和', 'jr-saikyo-中浦和', 'jr-saikyo-南与野', 'jr-saikyo-与野本町', 'jr-saikyo-北与野', 'jr-saikyo-大宮'] }  },  renderDetails() { return `<div class="modal-section"><p>埼京線</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#00AC9A"></div><span>埼京線</span></div>`; }};

jrData['chuo-rapid'] = {  title: '中央線快速',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-chuo-rapid-東京', name: '東京', lat: 35.681391, lng: 139.766103, terminal: true, routes: ['main'] },
      { id: 'jr-chuo-rapid-神田', name: '神田', lat: 35.691173, lng: 139.770641, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-御茶ノ水', name: '御茶ノ水', lat: 35.699604, lng: 139.764955, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-水道橋', name: '水道橋', lat: 35.702039, lng: 139.754312, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-飯田橋', name: '飯田橋', lat: 35.701835, lng: 139.745143, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-市ケ谷', name: '市ケ谷', lat: 35.691105, lng: 139.735241, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-四ツ谷', name: '四ツ谷', lat: 35.686041, lng: 139.730644, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-信濃町', name: '信濃町', lat: 35.680031, lng: 139.720729, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-千駄ケ谷', name: '千駄ケ谷', lat: 35.681231, lng: 139.711644, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-代々木', name: '代々木', lat: 35.683061, lng: 139.702042, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-新宿', name: '新宿', lat: 35.689729, lng: 139.700464, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-大久保', name: '大久保', lat: 35.700784, lng: 139.69732, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-東中野', name: '東中野', lat: 35.706529, lng: 139.684436, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-中野', name: '中野', lat: 35.705765, lng: 139.665835, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-高円寺', name: '高円寺', lat: 35.705327, lng: 139.649664, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-阿佐ケ谷', name: '阿佐ケ谷', lat: 35.704818, lng: 139.635868, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-荻窪', name: '荻窪', lat: 35.704523, lng: 139.620109, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-西荻窪', name: '西荻窪', lat: 35.703842, lng: 139.599361, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-吉祥寺', name: '吉祥寺', lat: 35.703119, lng: 139.579765, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-三鷹', name: '三鷹', lat: 35.702683, lng: 139.560325, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-武蔵境', name: '武蔵境', lat: 35.702083, lng: 139.543402, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-東小金井', name: '東小金井', lat: 35.701643, lng: 139.524837, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-武蔵小金井', name: '武蔵小金井', lat: 35.701337, lng: 139.506483, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-国分寺', name: '国分寺', lat: 35.700123, lng: 139.480841, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-西国分寺', name: '西国分寺', lat: 35.699744, lng: 139.465994, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-国立', name: '国立', lat: 35.69923, lng: 139.44634, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-立川', name: '立川', lat: 35.698202, lng: 139.413704, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-日野', name: '日野', lat: 35.679244, lng: 139.39393, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-豊田', name: '豊田', lat: 35.659502, lng: 139.381495, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-八王子', name: '八王子', lat: 35.655555, lng: 139.338998, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-西八王子', name: '西八王子', lat: 35.656621, lng: 139.31264, terminal: false, routes: ['main'] },
      { id: 'jr-chuo-rapid-高尾', name: '高尾', lat: 35.642026, lng: 139.282288, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '中央線快速', color: '#F15A22', glowColor: 'rgba(241, 90, 34, 0.4)', isLoop: false, stations: ['jr-chuo-rapid-東京', 'jr-chuo-rapid-神田', 'jr-chuo-rapid-御茶ノ水', 'jr-chuo-rapid-水道橋', 'jr-chuo-rapid-飯田橋', 'jr-chuo-rapid-市ケ谷', 'jr-chuo-rapid-四ツ谷', 'jr-chuo-rapid-信濃町', 'jr-chuo-rapid-千駄ケ谷', 'jr-chuo-rapid-代々木', 'jr-chuo-rapid-新宿', 'jr-chuo-rapid-大久保', 'jr-chuo-rapid-東中野', 'jr-chuo-rapid-中野', 'jr-chuo-rapid-高円寺', 'jr-chuo-rapid-阿佐ケ谷', 'jr-chuo-rapid-荻窪', 'jr-chuo-rapid-西荻窪', 'jr-chuo-rapid-吉祥寺', 'jr-chuo-rapid-三鷹', 'jr-chuo-rapid-武蔵境', 'jr-chuo-rapid-東小金井', 'jr-chuo-rapid-武蔵小金井', 'jr-chuo-rapid-国分寺', 'jr-chuo-rapid-西国分寺', 'jr-chuo-rapid-国立', 'jr-chuo-rapid-立川', 'jr-chuo-rapid-日野', 'jr-chuo-rapid-豊田', 'jr-chuo-rapid-八王子', 'jr-chuo-rapid-西八王子', 'jr-chuo-rapid-高尾'] }  },  renderDetails() { return `<div class="modal-section"><p>中央線快速</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#F15A22"></div><span>中央線快速</span></div>`; }};

jrData['kawagoe'] = {  title: '川越線',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-kawagoe-大宮', name: '大宮', lat: 35.906439, lng: 139.62405, terminal: true, routes: ['main'] },
      { id: 'jr-kawagoe-日進', name: '日進', lat: 35.931555, lng: 139.606111, terminal: false, routes: ['main'] },
      { id: 'jr-kawagoe-西大宮', name: '西大宮', lat: 35.922281, lng: 139.579797, terminal: false, routes: ['main'] },
      { id: 'jr-kawagoe-指扇', name: '指扇', lat: 35.917023, lng: 139.564951, terminal: false, routes: ['main'] },
      { id: 'jr-kawagoe-南古谷', name: '南古谷', lat: 35.903344, lng: 139.519082, terminal: false, routes: ['main'] },
      { id: 'jr-kawagoe-川越', name: '川越', lat: 35.906742, lng: 139.483078, terminal: false, routes: ['main'] },
      { id: 'jr-kawagoe-西川越', name: '西川越', lat: 35.91909, lng: 139.459746, terminal: false, routes: ['main'] },
      { id: 'jr-kawagoe-的場', name: '的場', lat: 35.917478, lng: 139.435376, terminal: false, routes: ['main'] },
      { id: 'jr-kawagoe-笠幡', name: '笠幡', lat: 35.907551, lng: 139.40622, terminal: false, routes: ['main'] },
      { id: 'jr-kawagoe-武蔵高萩', name: '武蔵高萩', lat: 35.901729, lng: 139.371123, terminal: false, routes: ['main'] },
      { id: 'jr-kawagoe-高麗川', name: '高麗川', lat: 35.896328, lng: 139.33809, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '川越線', color: '#00AC9A', glowColor: 'rgba(0, 172, 154, 0.4)', isLoop: false, stations: ['jr-kawagoe-大宮', 'jr-kawagoe-日進', 'jr-kawagoe-西大宮', 'jr-kawagoe-指扇', 'jr-kawagoe-南古谷', 'jr-kawagoe-川越', 'jr-kawagoe-西川越', 'jr-kawagoe-的場', 'jr-kawagoe-笠幡', 'jr-kawagoe-武蔵高萩', 'jr-kawagoe-高麗川'] }  },  renderDetails() { return `<div class="modal-section"><p>川越線</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#00AC9A"></div><span>川越線</span></div>`; }};



jrData['joban-rapid'] = {  title: '常磐線（快速）',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-joban-rapid-上野', name: '上野', lat: 35.71379, lng: 139.777043, terminal: true, routes: ['main'] },
      { id: 'jr-joban-rapid-日暮里', name: '日暮里', lat: 35.727908, lng: 139.771287, terminal: false, routes: ['main'] },
      { id: 'jr-joban-rapid-三河島', name: '三河島', lat: 35.733383, lng: 139.777131, terminal: false, routes: ['main'] },
      { id: 'jr-joban-rapid-南千住', name: '南千住', lat: 35.734033, lng: 139.7994, terminal: false, routes: ['main'] },
      { id: 'jr-joban-rapid-北千住', name: '北千住', lat: 35.749677, lng: 139.804872, terminal: false, routes: ['main'] },
      { id: 'jr-joban-rapid-松戸', name: '松戸', lat: 35.784472, lng: 139.900779, terminal: false, routes: ['main'] },
      { id: 'jr-joban-rapid-柏', name: '柏', lat: 35.862316, lng: 139.971148, terminal: false, routes: ['main'] },
      { id: 'jr-joban-rapid-我孫子', name: '我孫子', lat: 35.87279, lng: 140.010466, terminal: false, routes: ['main'] },
      { id: 'jr-joban-rapid-天王台', name: '天王台', lat: 35.872558, lng: 140.04121, terminal: false, routes: ['main'] },
      { id: 'jr-joban-rapid-取手', name: '取手', lat: 35.89553, lng: 140.063004, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '常磐線（快速）', color: '#00B261', glowColor: 'rgba(0, 178, 97, 0.4)', isLoop: false, stations: ['jr-joban-rapid-上野', 'jr-joban-rapid-日暮里', 'jr-joban-rapid-三河島', 'jr-joban-rapid-南千住', 'jr-joban-rapid-北千住', 'jr-joban-rapid-松戸', 'jr-joban-rapid-柏', 'jr-joban-rapid-我孫子', 'jr-joban-rapid-天王台', 'jr-joban-rapid-取手'] }  },  renderDetails() { return `<div class="modal-section"><p>常磐線（快速）</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#00B261"></div><span>常磐線（快速）</span></div>`; }};

jrData['joban-local'] = {  title: '常磐線（各駅停車）',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-joban-local-北千住', name: '北千住', lat: 35.749677, lng: 139.804872, terminal: true, routes: ['main'] },
      { id: 'jr-joban-local-綾瀬', name: '綾瀬', lat: 35.762222, lng: 139.825019, terminal: false, routes: ['main'] },
      { id: 'jr-joban-local-亀有', name: '亀有', lat: 35.766527, lng: 139.847573, terminal: false, routes: ['main'] },
      { id: 'jr-joban-local-金町', name: '金町', lat: 35.769582, lng: 139.870482, terminal: false, routes: ['main'] },
      { id: 'jr-joban-local-松戸', name: '松戸', lat: 35.784472, lng: 139.900779, terminal: false, routes: ['main'] },
      { id: 'jr-joban-local-北松戸', name: '北松戸', lat: 35.800459, lng: 139.911528, terminal: false, routes: ['main'] },
      { id: 'jr-joban-local-馬橋', name: '馬橋', lat: 35.811683, lng: 139.917305, terminal: false, routes: ['main'] },
      { id: 'jr-joban-local-新松戸', name: '新松戸', lat: 35.825467, lng: 139.921076, terminal: false, routes: ['main'] },
      { id: 'jr-joban-local-北小金', name: '北小金', lat: 35.833436, lng: 139.931303, terminal: false, routes: ['main'] },
      { id: 'jr-joban-local-南柏', name: '南柏', lat: 35.844655, lng: 139.954111, terminal: false, routes: ['main'] },
      { id: 'jr-joban-local-柏', name: '柏', lat: 35.862316, lng: 139.971148, terminal: false, routes: ['main'] },
      { id: 'jr-joban-local-北柏', name: '北柏', lat: 35.875623, lng: 139.988035, terminal: false, routes: ['main'] },
      { id: 'jr-joban-local-我孫子', name: '我孫子', lat: 35.87279, lng: 140.010466, terminal: false, routes: ['main'] },
      { id: 'jr-joban-local-天王台', name: '天王台', lat: 35.872558, lng: 140.04121, terminal: false, routes: ['main'] },
      { id: 'jr-joban-local-取手', name: '取手', lat: 35.89553, lng: 140.063004, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '常磐線（各駅停車）', color: '#80C241', glowColor: 'rgba(128, 194, 65, 0.4)', isLoop: false, stations: ['jr-joban-local-北千住', 'jr-joban-local-綾瀬', 'jr-joban-local-亀有', 'jr-joban-local-金町', 'jr-joban-local-松戸', 'jr-joban-local-北松戸', 'jr-joban-local-馬橋', 'jr-joban-local-新松戸', 'jr-joban-local-北小金', 'jr-joban-local-南柏', 'jr-joban-local-柏', 'jr-joban-local-北柏', 'jr-joban-local-我孫子', 'jr-joban-local-天王台', 'jr-joban-local-取手'] }  },  renderDetails() { return `<div class="modal-section"><p>常磐線（各駅停車）</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#80C241"></div><span>常磐線（各駅停車）</span></div>`; }};

jrData['sobu-main'] = {  title: '総武本線',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-sobu-main-千葉', name: '千葉', lat: 35.613425, lng: 140.112837, terminal: true, routes: ['main'] },
      { id: 'jr-sobu-main-東千葉', name: '東千葉', lat: 35.617014, lng: 140.122261, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-都賀', name: '都賀', lat: 35.636088, lng: 140.149222, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-四街道', name: '四街道', lat: 35.662756, lng: 140.165023, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-物井', name: '物井', lat: 35.68566, lng: 140.200263, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-佐倉', name: '佐倉', lat: 35.709743, lng: 140.226722, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-南酒々井', name: '南酒々井', lat: 35.704217, lng: 140.267828, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-榎戸', name: '榎戸', lat: 35.683967, lng: 140.288136, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-八街', name: '八街', lat: 35.663228, lng: 140.317304, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-日向', name: '日向', lat: 35.628402, lng: 140.362447, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-成東', name: '成東', lat: 35.608513, lng: 140.410109, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-松尾', name: '松尾', lat: 35.63604, lng: 140.457587, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-横芝', name: '横芝', lat: 35.661739, lng: 140.490736, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-飯倉', name: '飯倉', lat: 35.685638, lng: 140.522328, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-八日市場', name: '八日市場', lat: 35.699317, lng: 140.552419, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-干潟', name: '干潟', lat: 35.718308, lng: 140.603304, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-旭', name: '旭', lat: 35.721832, lng: 140.655041, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-飯岡', name: '飯岡', lat: 35.729339, lng: 140.683896, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-倉橋', name: '倉橋', lat: 35.737836, lng: 140.714018, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-猿田', name: '猿田', lat: 35.747383, lng: 140.7374, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-松岸', name: '松岸', lat: 35.739386, lng: 140.795143, terminal: false, routes: ['main'] },
      { id: 'jr-sobu-main-銚子', name: '銚子', lat: 35.729449, lng: 140.827557, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '総武本線', color: '#FFD400', glowColor: 'rgba(255, 212, 0, 0.4)', isLoop: false, stations: ['jr-sobu-main-千葉', 'jr-sobu-main-東千葉', 'jr-sobu-main-都賀', 'jr-sobu-main-四街道', 'jr-sobu-main-物井', 'jr-sobu-main-佐倉', 'jr-sobu-main-南酒々井', 'jr-sobu-main-榎戸', 'jr-sobu-main-八街', 'jr-sobu-main-日向', 'jr-sobu-main-成東', 'jr-sobu-main-松尾', 'jr-sobu-main-横芝', 'jr-sobu-main-飯倉', 'jr-sobu-main-八日市場', 'jr-sobu-main-干潟', 'jr-sobu-main-旭', 'jr-sobu-main-飯岡', 'jr-sobu-main-倉橋', 'jr-sobu-main-猿田', 'jr-sobu-main-松岸', 'jr-sobu-main-銚子'] }  },  renderDetails() { return `<div class="modal-section"><p>総武本線</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#FFD400"></div><span>総武本線</span></div>`; }};

jrData['sotobo'] = {  title: '外房線',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-sotobo-千葉', name: '千葉', lat: 35.613425, lng: 140.112837, terminal: true, routes: ['main'] },
      { id: 'jr-sotobo-本千葉', name: '本千葉', lat: 35.601202, lng: 140.120987, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-蘇我', name: '蘇我', lat: 35.582065, lng: 140.130767, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-鎌取', name: '鎌取', lat: 35.562795, lng: 140.178583, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-誉田', name: '誉田', lat: 35.546996, lng: 140.213748, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-土気', name: '土気', lat: 35.530866, lng: 140.269783, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-大網', name: '大網', lat: 35.522427, lng: 140.311111, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-永田', name: '永田', lat: 35.503129, lng: 140.311162, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-本納', name: '本納', lat: 35.48227, lng: 140.30758, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-新茂原', name: '新茂原', lat: 35.449477, lng: 140.29983, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-茂原', name: '茂原', lat: 35.426733, lng: 140.304121, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-八積', name: '八積', lat: 35.403971, lng: 140.345367, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-上総一ノ宮', name: '上総一ノ宮', lat: 35.373401, lng: 140.365138, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-東浪見', name: '東浪見', lat: 35.34669, lng: 140.376706, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-太東', name: '太東', lat: 35.319942, lng: 140.381184, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-長者町', name: '長者町', lat: 35.295839, lng: 140.385021, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-三門', name: '三門', lat: 35.282377, lng: 140.391567, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-大原', name: '大原', lat: 35.251097, lng: 140.390864, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-浪花', name: '浪花', lat: 35.222674, lng: 140.379428, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-御宿', name: '御宿', lat: 35.188028, lng: 140.35197, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-勝浦', name: '勝浦', lat: 35.152722, lng: 140.312142, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-鵜原', name: '鵜原', lat: 35.140828, lng: 140.278446, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-上総興津', name: '上総興津', lat: 35.137146, lng: 140.250487, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-行川アイランド', name: '行川アイランド', lat: 35.11832, lng: 140.226962, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-安房小湊', name: '安房小湊', lat: 35.128597, lng: 140.190337, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-安房天津', name: '安房天津', lat: 35.125473, lng: 140.154487, terminal: false, routes: ['main'] },
      { id: 'jr-sotobo-安房鴨川', name: '安房鴨川', lat: 35.107465, lng: 140.103566, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '外房線', color: '#E60012', glowColor: 'rgba(230, 0, 18, 0.4)', isLoop: false, stations: ['jr-sotobo-千葉', 'jr-sotobo-本千葉', 'jr-sotobo-蘇我', 'jr-sotobo-鎌取', 'jr-sotobo-誉田', 'jr-sotobo-土気', 'jr-sotobo-大網', 'jr-sotobo-永田', 'jr-sotobo-本納', 'jr-sotobo-新茂原', 'jr-sotobo-茂原', 'jr-sotobo-八積', 'jr-sotobo-上総一ノ宮', 'jr-sotobo-東浪見', 'jr-sotobo-太東', 'jr-sotobo-長者町', 'jr-sotobo-三門', 'jr-sotobo-大原', 'jr-sotobo-浪花', 'jr-sotobo-御宿', 'jr-sotobo-勝浦', 'jr-sotobo-鵜原', 'jr-sotobo-上総興津', 'jr-sotobo-行川アイランド', 'jr-sotobo-安房小湊', 'jr-sotobo-安房天津', 'jr-sotobo-安房鴨川'] }  },  renderDetails() { return `<div class="modal-section"><p>外房線</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#E60012"></div><span>外房線</span></div>`; }};

jrData['uchibo'] = {  title: '内房線',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-uchibo-千葉', name: '千葉', lat: 35.613425, lng: 140.112837, terminal: true, routes: ['main'] },
      { id: 'jr-uchibo-本千葉', name: '本千葉', lat: 35.601202, lng: 140.120987, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-蘇我', name: '蘇我', lat: 35.582065, lng: 140.130767, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-浜野', name: '浜野', lat: 35.551876, lng: 140.132089, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-八幡宿', name: '八幡宿', lat: 35.536189, lng: 140.120072, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-五井', name: '五井', lat: 35.512985, lng: 140.089522, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-姉ケ崎', name: '姉ケ崎', lat: 35.4786, lng: 140.041749, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-長浦', name: '長浦', lat: 35.450234, lng: 139.995478, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-袖ケ浦', name: '袖ケ浦', lat: 35.431997, lng: 139.95788, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-巌根', name: '巌根', lat: 35.414285, lng: 139.933229, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-木更津', name: '木更津', lat: 35.381668, lng: 139.92611, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-君津', name: '君津', lat: 35.333619, lng: 139.895697, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-青堀', name: '青堀', lat: 35.330304, lng: 139.858189, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-大貫', name: '大貫', lat: 35.291661, lng: 139.855541, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-佐貫町', name: '佐貫町', lat: 35.260113, lng: 139.876106, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-上総湊', name: '上総湊', lat: 35.221855, lng: 139.871016, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-竹岡', name: '竹岡', lat: 35.197582, lng: 139.830159, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-浜金谷', name: '浜金谷', lat: 35.168215, lng: 139.822141, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-保田', name: '保田', lat: 35.14148, lng: 139.838114, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-安房勝山', name: '安房勝山', lat: 35.114022, lng: 139.83339, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-岩井', name: '岩井', lat: 35.093062, lng: 139.849839, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-富浦', name: '富浦', lat: 35.04614, lng: 139.837811, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-那古船形', name: '那古船形', lat: 35.028987, lng: 139.851388, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-館山', name: '館山', lat: 34.9959, lng: 139.861888, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-九重', name: '九重', lat: 34.99752, lng: 139.911383, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-千倉', name: '千倉', lat: 34.976704, lng: 139.954738, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-千歳', name: '千歳', lat: 34.991701, lng: 139.966378, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-南三原', name: '南三原', lat: 35.021065, lng: 139.979204, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-和田浦', name: '和田浦', lat: 35.041885, lng: 140.019569, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-江見', name: '江見', lat: 35.062513, lng: 140.061026, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-太海', name: '太海', lat: 35.081435, lng: 140.096229, terminal: false, routes: ['main'] },
      { id: 'jr-uchibo-安房鴨川', name: '安房鴨川', lat: 35.107465, lng: 140.103566, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '内房線', color: '#00B2E5', glowColor: 'rgba(0, 178, 229, 0.4)', isLoop: false, stations: ['jr-uchibo-千葉', 'jr-uchibo-本千葉', 'jr-uchibo-蘇我', 'jr-uchibo-浜野', 'jr-uchibo-八幡宿', 'jr-uchibo-五井', 'jr-uchibo-姉ケ崎', 'jr-uchibo-長浦', 'jr-uchibo-袖ケ浦', 'jr-uchibo-巌根', 'jr-uchibo-木更津', 'jr-uchibo-君津', 'jr-uchibo-青堀', 'jr-uchibo-大貫', 'jr-uchibo-佐貫町', 'jr-uchibo-上総湊', 'jr-uchibo-竹岡', 'jr-uchibo-浜金谷', 'jr-uchibo-保田', 'jr-uchibo-安房勝山', 'jr-uchibo-岩井', 'jr-uchibo-富浦', 'jr-uchibo-那古船形', 'jr-uchibo-館山', 'jr-uchibo-九重', 'jr-uchibo-千倉', 'jr-uchibo-千歳', 'jr-uchibo-南三原', 'jr-uchibo-和田浦', 'jr-uchibo-江見', 'jr-uchibo-太海', 'jr-uchibo-安房鴨川'] }  },  renderDetails() { return `<div class="modal-section"><p>内房線</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#00B2E5"></div><span>内房線</span></div>`; }};

jrData['narita'] = {  title: '成田線',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-narita-佐倉', name: '佐倉', lat: 35.709743, lng: 140.226722, terminal: true, routes: ['main'] },
      { id: 'jr-narita-酒々井', name: '酒々井', lat: 35.731737, lng: 140.275271, terminal: false, routes: ['main'] },
      { id: 'jr-narita-成田', name: '成田', lat: 35.777796, lng: 140.313853, terminal: false, routes: ['main'] },
      { id: 'jr-narita-空港第2ビル', name: '空港第2ビル', lat: 35.773327, lng: 140.387871, terminal: false, routes: ['main'] },
      { id: 'jr-narita-成田空港', name: '成田空港', lat: 35.763983, lng: 140.384644, terminal: false, routes: ['main'] },
      { id: 'jr-narita-久住', name: '久住', lat: 35.832232, lng: 140.338929, terminal: false, routes: ['main'] },
      { id: 'jr-narita-滑河', name: '滑河', lat: 35.877079, lng: 140.347871, terminal: false, routes: ['main'] },
      { id: 'jr-narita-下総神崎', name: '下総神崎', lat: 35.8948, lng: 140.410657, terminal: false, routes: ['main'] },
      { id: 'jr-narita-大戸', name: '大戸', lat: 35.890004, lng: 140.457828, terminal: false, routes: ['main'] },
      { id: 'jr-narita-佐原', name: '佐原', lat: 35.894522, lng: 140.494074, terminal: false, routes: ['main'] },
      { id: 'jr-narita-香取', name: '香取', lat: 35.897856, lng: 140.532367, terminal: false, routes: ['main'] },
      { id: 'jr-narita-水郷', name: '水郷', lat: 35.885508, lng: 140.570181, terminal: false, routes: ['main'] },
      { id: 'jr-narita-小見川', name: '小見川', lat: 35.849971, lng: 140.604587, terminal: false, routes: ['main'] },
      { id: 'jr-narita-笹川', name: '笹川', lat: 35.839753, lng: 140.655716, terminal: false, routes: ['main'] },
      { id: 'jr-narita-下総橘', name: '下総橘', lat: 35.818673, lng: 140.702273, terminal: false, routes: ['main'] },
      { id: 'jr-narita-下総豊里', name: '下総豊里', lat: 35.792899, lng: 140.721011, terminal: false, routes: ['main'] },
      { id: 'jr-narita-椎柴', name: '椎柴', lat: 35.765204, lng: 140.758875, terminal: false, routes: ['main'] },
      { id: 'jr-narita-松岸', name: '松岸', lat: 35.739386, lng: 140.795143, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '成田線', color: '#00B261', glowColor: 'rgba(0, 178, 97, 0.4)', isLoop: false, stations: ['jr-narita-佐倉', 'jr-narita-酒々井', 'jr-narita-成田', 'jr-narita-空港第2ビル', 'jr-narita-成田空港', 'jr-narita-久住', 'jr-narita-滑河', 'jr-narita-下総神崎', 'jr-narita-大戸', 'jr-narita-佐原', 'jr-narita-香取', 'jr-narita-水郷', 'jr-narita-小見川', 'jr-narita-笹川', 'jr-narita-下総橘', 'jr-narita-下総豊里', 'jr-narita-椎柴', 'jr-narita-松岸'] }  },  renderDetails() { return `<div class="modal-section"><p>成田線</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#00B261"></div><span>成田線</span></div>`; }};

jrData['togane'] = {  title: '東金線',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-togane-大網', name: '大網', lat: 35.522427, lng: 140.311111, terminal: true, routes: ['main'] },
      { id: 'jr-togane-福俵', name: '福俵', lat: 35.54617, lng: 140.341904, terminal: false, routes: ['main'] },
      { id: 'jr-togane-東金', name: '東金', lat: 35.560172, lng: 140.363743, terminal: false, routes: ['main'] },
      { id: 'jr-togane-求名', name: '求名', lat: 35.579947, lng: 140.39626, terminal: false, routes: ['main'] },
      { id: 'jr-togane-成東', name: '成東', lat: 35.608513, lng: 140.410109, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '東金線', color: '#F15A22', glowColor: 'rgba(241, 90, 34, 0.4)', isLoop: false, stations: ['jr-togane-大網', 'jr-togane-福俵', 'jr-togane-東金', 'jr-togane-求名', 'jr-togane-成東'] }  },  renderDetails() { return `<div class="modal-section"><p>東金線</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#F15A22"></div><span>東金線</span></div>`; }};

jrData['kururi'] = {  title: '久留里線',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-kururi-木更津', name: '木更津', lat: 35.381668, lng: 139.92611, terminal: true, routes: ['main'] },
      { id: 'jr-kururi-祇園', name: '祇園', lat: 35.391528, lng: 139.948111, terminal: false, routes: ['main'] },
      { id: 'jr-kururi-上総清川', name: '上総清川', lat: 35.390981, lng: 139.965612, terminal: false, routes: ['main'] },
      { id: 'jr-kururi-東清川', name: '東清川', lat: 35.390017, lng: 139.985847, terminal: false, routes: ['main'] },
      { id: 'jr-kururi-横田', name: '横田', lat: 35.386207, lng: 140.020138, terminal: false, routes: ['main'] },
      { id: 'jr-kururi-東横田', name: '東横田', lat: 35.386185, lng: 140.035995, terminal: false, routes: ['main'] },
      { id: 'jr-kururi-馬来田', name: '馬来田', lat: 35.36681, lng: 140.058485, terminal: false, routes: ['main'] },
      { id: 'jr-kururi-下郡', name: '下郡', lat: 35.355018, lng: 140.055372, terminal: false, routes: ['main'] },
      { id: 'jr-kururi-小櫃', name: '小櫃', lat: 35.328252, lng: 140.059794, terminal: false, routes: ['main'] },
      { id: 'jr-kururi-俵田', name: '俵田', lat: 35.314495, lng: 140.061386, terminal: false, routes: ['main'] },
      { id: 'jr-kururi-久留里', name: '久留里', lat: 35.295812, lng: 140.075613, terminal: false, routes: ['main'] },
      { id: 'jr-kururi-平山', name: '平山', lat: 35.274312, lng: 140.064682, terminal: false, routes: ['main'] },
      { id: 'jr-kururi-上総松丘', name: '上総松丘', lat: 35.258226, lng: 140.064046, terminal: false, routes: ['main'] },
      { id: 'jr-kururi-上総亀山', name: '上総亀山', lat: 35.233153, lng: 140.089479, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '久留里線', color: '#00AC9A', glowColor: 'rgba(0, 172, 154, 0.4)', isLoop: false, stations: ['jr-kururi-木更津', 'jr-kururi-祇園', 'jr-kururi-上総清川', 'jr-kururi-東清川', 'jr-kururi-横田', 'jr-kururi-東横田', 'jr-kururi-馬来田', 'jr-kururi-下郡', 'jr-kururi-小櫃', 'jr-kururi-俵田', 'jr-kururi-久留里', 'jr-kururi-平山', 'jr-kururi-上総松丘', 'jr-kururi-上総亀山'] }  },  renderDetails() { return `<div class="modal-section"><p>久留里線</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#00AC9A"></div><span>久留里線</span></div>`; }};

jrData['mito'] = {  title: '水戸線',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-mito-小山', name: '小山', lat: 36.312747, lng: 139.806241, terminal: true, routes: ['main'] },
      { id: 'jr-mito-小田林', name: '小田林', lat: 36.300775, lng: 139.85353, terminal: false, routes: ['main'] },
      { id: 'jr-mito-結城', name: '結城', lat: 36.298056, lng: 139.873028, terminal: false, routes: ['main'] },
      { id: 'jr-mito-東結城', name: '東結城', lat: 36.296554, lng: 139.891485, terminal: false, routes: ['main'] },
      { id: 'jr-mito-川島', name: '川島', lat: 36.295918, lng: 139.916382, terminal: false, routes: ['main'] },
      { id: 'jr-mito-玉戸', name: '玉戸', lat: 36.298547, lng: 139.93845, terminal: false, routes: ['main'] },
      { id: 'jr-mito-下館', name: '下館', lat: 36.304197, lng: 139.97866, terminal: false, routes: ['main'] },
      { id: 'jr-mito-新治', name: '新治', lat: 36.328082, lng: 140.039076, terminal: false, routes: ['main'] },
      { id: 'jr-mito-大和', name: '大和', lat: 36.345567, lng: 140.073216, terminal: false, routes: ['main'] },
      { id: 'jr-mito-岩瀬', name: '岩瀬', lat: 36.359377, lng: 140.108739, terminal: false, routes: ['main'] },
      { id: 'jr-mito-羽黒', name: '羽黒', lat: 36.355292, lng: 140.142947, terminal: false, routes: ['main'] },
      { id: 'jr-mito-福原', name: '福原', lat: 36.351507, lng: 140.187249, terminal: false, routes: ['main'] },
      { id: 'jr-mito-稲田', name: '稲田', lat: 36.368903, lng: 140.21501, terminal: false, routes: ['main'] },
      { id: 'jr-mito-笠間', name: '笠間', lat: 36.373056, lng: 140.246515, terminal: false, routes: ['main'] },
      { id: 'jr-mito-宍戸', name: '宍戸', lat: 36.344763, lng: 140.288243, terminal: false, routes: ['main'] },
      { id: 'jr-mito-友部', name: '友部', lat: 36.350597, lng: 140.306306, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '水戸線', color: '#0067C0', glowColor: 'rgba(0, 103, 192, 0.4)', isLoop: false, stations: ['jr-mito-小山', 'jr-mito-小田林', 'jr-mito-結城', 'jr-mito-東結城', 'jr-mito-川島', 'jr-mito-玉戸', 'jr-mito-下館', 'jr-mito-新治', 'jr-mito-大和', 'jr-mito-岩瀬', 'jr-mito-羽黒', 'jr-mito-福原', 'jr-mito-稲田', 'jr-mito-笠間', 'jr-mito-宍戸', 'jr-mito-友部'] }  },  renderDetails() { return `<div class="modal-section"><p>水戸線</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#0067C0"></div><span>水戸線</span></div>`; }};

jrData['kashima'] = {  title: '鹿島線',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-kashima-香取', name: '香取', lat: 35.897856, lng: 140.532367, terminal: true, routes: ['main'] },
      { id: 'jr-kashima-十二橋', name: '十二橋', lat: 35.916984, lng: 140.545707, terminal: false, routes: ['main'] },
      { id: 'jr-kashima-潮来', name: '潮来', lat: 35.936904, lng: 140.549473, terminal: false, routes: ['main'] },
      { id: 'jr-kashima-延方', name: '延方', lat: 35.958072, lng: 140.58875, terminal: false, routes: ['main'] },
      { id: 'jr-kashima-鹿島神宮', name: '鹿島神宮', lat: 35.970614, lng: 140.625676, terminal: false, routes: ['main'] },
      { id: 'jr-kashima-鹿島サッカースタジアム', name: '鹿島サッカースタジアム', lat: 35.992707, lng: 140.63606, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '鹿島線', color: '#C9252F', glowColor: 'rgba(201, 37, 47, 0.4)', isLoop: false, stations: ['jr-kashima-香取', 'jr-kashima-十二橋', 'jr-kashima-潮来', 'jr-kashima-延方', 'jr-kashima-鹿島神宮', 'jr-kashima-鹿島サッカースタジアム'] }  },  renderDetails() { return `<div class="modal-section"><p>鹿島線</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#C9252F"></div><span>鹿島線</span></div>`; }};

jrData['utsunomiya'] = {  title: '宇都宮線（東北本線）',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-utsunomiya-東京', name: '東京', lat: 35.681391, lng: 139.766103, terminal: true, routes: ['main'] },
      { id: 'jr-utsunomiya-上野', name: '上野', lat: 35.71379, lng: 139.777043, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-尾久', name: '尾久', lat: 35.74683, lng: 139.753846, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-赤羽', name: '赤羽', lat: 35.778026, lng: 139.720928, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-浦和', name: '浦和', lat: 35.858496, lng: 139.657109, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-さいたま新都心', name: 'さいたま新都心', lat: 35.893867, lng: 139.633587, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-大宮', name: '大宮', lat: 35.906439, lng: 139.62405, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-土呂', name: '土呂', lat: 35.931997, lng: 139.63214, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-東大宮', name: '東大宮', lat: 35.948751, lng: 139.640291, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-蓮田', name: '蓮田', lat: 35.981272, lng: 139.653016, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-白岡', name: '白岡', lat: 36.01774, lng: 139.666826, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-新白岡', name: '新白岡', lat: 36.038732, lng: 139.67208, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-久喜', name: '久喜', lat: 36.065684, lng: 139.67727, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-東鷲宮', name: '東鷲宮', lat: 36.089428, lng: 139.67913, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-栗橋', name: '栗橋', lat: 36.136852, lng: 139.694177, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-古河', name: '古河', lat: 36.194375, lng: 139.709726, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-野木', name: '野木', lat: 36.229963, lng: 139.734729, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-間々田', name: '間々田', lat: 36.257908, lng: 139.761039, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-小山', name: '小山', lat: 36.312747, lng: 139.806241, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-小金井', name: '小金井', lat: 36.374435, lng: 139.842232, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-自治医大', name: '自治医大', lat: 36.39543, lng: 139.854524, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-石橋', name: '石橋', lat: 36.43651, lng: 139.866536, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-雀宮', name: '雀宮', lat: 36.493845, lng: 139.876811, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-宇都宮', name: '宇都宮', lat: 36.559246, lng: 139.898389, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-岡本', name: '岡本', lat: 36.598182, lng: 139.944363, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-宝積寺', name: '宝積寺', lat: 36.631703, lng: 139.979487, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-氏家', name: '氏家', lat: 36.681696, lng: 139.9621, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-蒲須坂', name: '蒲須坂', lat: 36.720727, lng: 139.950461, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-片岡', name: '片岡', lat: 36.754557, lng: 139.945665, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-矢板', name: '矢板', lat: 36.80655, lng: 139.932912, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-野崎', name: '野崎', lat: 36.843722, lng: 139.957752, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-西那須野', name: '西那須野', lat: 36.883726, lng: 139.986383, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-那須塩原', name: '那須塩原', lat: 36.931956, lng: 140.020694, terminal: false, routes: ['main'] },
      { id: 'jr-utsunomiya-黒磯', name: '黒磯', lat: 36.970128, lng: 140.060204, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '宇都宮線（東北本線）', color: '#F68B1E', glowColor: 'rgba(246, 139, 30, 0.4)', isLoop: false, stations: ['jr-utsunomiya-東京', 'jr-utsunomiya-上野', 'jr-utsunomiya-尾久', 'jr-utsunomiya-赤羽', 'jr-utsunomiya-浦和', 'jr-utsunomiya-さいたま新都心', 'jr-utsunomiya-大宮', 'jr-utsunomiya-土呂', 'jr-utsunomiya-東大宮', 'jr-utsunomiya-蓮田', 'jr-utsunomiya-白岡', 'jr-utsunomiya-新白岡', 'jr-utsunomiya-久喜', 'jr-utsunomiya-東鷲宮', 'jr-utsunomiya-栗橋', 'jr-utsunomiya-古河', 'jr-utsunomiya-野木', 'jr-utsunomiya-間々田', 'jr-utsunomiya-小山', 'jr-utsunomiya-小金井', 'jr-utsunomiya-自治医大', 'jr-utsunomiya-石橋', 'jr-utsunomiya-雀宮', 'jr-utsunomiya-宇都宮', 'jr-utsunomiya-岡本', 'jr-utsunomiya-宝積寺', 'jr-utsunomiya-氏家', 'jr-utsunomiya-蒲須坂', 'jr-utsunomiya-片岡', 'jr-utsunomiya-矢板', 'jr-utsunomiya-野崎', 'jr-utsunomiya-西那須野', 'jr-utsunomiya-那須塩原', 'jr-utsunomiya-黒磯'] }  },  renderDetails() { return `<div class="modal-section"><p>宇都宮線（東北本線）</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#F68B1E"></div><span>宇都宮線（東北本線）</span></div>`; }};

jrData['nikko'] = {  title: '日光線',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-nikko-宇都宮', name: '宇都宮', lat: 36.559246, lng: 139.898389, terminal: true, routes: ['main'] },
      { id: 'jr-nikko-鶴田', name: '鶴田', lat: 36.538319, lng: 139.858818, terminal: false, routes: ['main'] },
      { id: 'jr-nikko-鹿沼', name: '鹿沼', lat: 36.571222, lng: 139.762961, terminal: false, routes: ['main'] },
      { id: 'jr-nikko-文挟', name: '文挟', lat: 36.637716, lng: 139.727778, terminal: false, routes: ['main'] },
      { id: 'jr-nikko-下野大沢', name: '下野大沢', lat: 36.686427, lng: 139.732367, terminal: false, routes: ['main'] },
      { id: 'jr-nikko-今市', name: '今市', lat: 36.720388, lng: 139.687348, terminal: false, routes: ['main'] },
      { id: 'jr-nikko-日光', name: '日光', lat: 36.7474, lng: 139.62215, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '日光線', color: '#C9252F', glowColor: 'rgba(201, 37, 47, 0.4)', isLoop: false, stations: ['jr-nikko-宇都宮', 'jr-nikko-鶴田', 'jr-nikko-鹿沼', 'jr-nikko-文挟', 'jr-nikko-下野大沢', 'jr-nikko-今市', 'jr-nikko-日光'] }  },  renderDetails() { return `<div class="modal-section"><p>日光線</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#C9252F"></div><span>日光線</span></div>`; }};

jrData['karasuyama'] = {  title: '烏山線',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-karasuyama-宝積寺', name: '宝積寺', lat: 36.631703, lng: 139.979487, terminal: true, routes: ['main'] },
      { id: 'jr-karasuyama-下野花岡', name: '下野花岡', lat: 36.649965, lng: 140.008606, terminal: false, routes: ['main'] },
      { id: 'jr-karasuyama-仁井田', name: '仁井田', lat: 36.657271, lng: 140.029573, terminal: false, routes: ['main'] },
      { id: 'jr-karasuyama-鴻野山', name: '鴻野山', lat: 36.666495, lng: 140.051656, terminal: false, routes: ['main'] },
      { id: 'jr-karasuyama-大金', name: '大金', lat: 36.656275, lng: 140.095656, terminal: false, routes: ['main'] },
      { id: 'jr-karasuyama-小塙', name: '小塙', lat: 36.643095, lng: 140.11656, terminal: false, routes: ['main'] },
      { id: 'jr-karasuyama-滝', name: '滝', lat: 36.648558, lng: 140.138152, terminal: false, routes: ['main'] },
      { id: 'jr-karasuyama-烏山', name: '烏山', lat: 36.650455, lng: 140.15507, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '烏山線', color: '#80C241', glowColor: 'rgba(128, 194, 65, 0.4)', isLoop: false, stations: ['jr-karasuyama-宝積寺', 'jr-karasuyama-下野花岡', 'jr-karasuyama-仁井田', 'jr-karasuyama-鴻野山', 'jr-karasuyama-大金', 'jr-karasuyama-小塙', 'jr-karasuyama-滝', 'jr-karasuyama-烏山'] }  },  renderDetails() { return `<div class="modal-section"><p>烏山線</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#80C241"></div><span>烏山線</span></div>`; }};

jrData['takasaki'] = {  title: '高崎線',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-takasaki-上野', name: '上野', lat: 35.71379, lng: 139.777043, terminal: true, routes: ['main'] },
      { id: 'jr-takasaki-尾久', name: '尾久', lat: 35.74683, lng: 139.753846, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-赤羽', name: '赤羽', lat: 35.778026, lng: 139.720928, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-浦和', name: '浦和', lat: 35.858496, lng: 139.657109, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-さいたま新都心', name: 'さいたま新都心', lat: 35.893867, lng: 139.633587, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-大宮', name: '大宮', lat: 35.906439, lng: 139.62405, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-宮原', name: '宮原', lat: 35.940256, lng: 139.609455, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-上尾', name: '上尾', lat: 35.973522, lng: 139.588434, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-北上尾', name: '北上尾', lat: 35.985632, lng: 139.577223, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-桶川', name: '桶川', lat: 35.998375, lng: 139.564274, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-北本', name: '北本', lat: 36.032112, lng: 139.533591, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-鴻巣', name: '鴻巣', lat: 36.0592, lng: 139.509552, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-北鴻巣', name: '北鴻巣', lat: 36.085529, lng: 139.476894, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-吹上', name: '吹上', lat: 36.103062, lng: 139.45312, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-行田', name: '行田', lat: 36.113879, lng: 139.432103, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-熊谷', name: '熊谷', lat: 36.139627, lng: 139.389528, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-籠原', name: '籠原', lat: 36.17448, lng: 139.330199, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-深谷', name: '深谷', lat: 36.191343, lng: 139.28127, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-岡部', name: '岡部', lat: 36.205645, lng: 139.237622, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-本庄', name: '本庄', lat: 36.236229, lng: 139.188299, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-神保原', name: '神保原', lat: 36.25359, lng: 139.149172, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-新町', name: '新町', lat: 36.272984, lng: 139.105457, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-倉賀野', name: '倉賀野', lat: 36.300216, lng: 139.049474, terminal: false, routes: ['main'] },
      { id: 'jr-takasaki-高崎', name: '高崎', lat: 36.322239, lng: 139.012354, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '高崎線', color: '#F68B1E', glowColor: 'rgba(246, 139, 30, 0.4)', isLoop: false, stations: ['jr-takasaki-上野', 'jr-takasaki-尾久', 'jr-takasaki-赤羽', 'jr-takasaki-浦和', 'jr-takasaki-さいたま新都心', 'jr-takasaki-大宮', 'jr-takasaki-宮原', 'jr-takasaki-上尾', 'jr-takasaki-北上尾', 'jr-takasaki-桶川', 'jr-takasaki-北本', 'jr-takasaki-鴻巣', 'jr-takasaki-北鴻巣', 'jr-takasaki-吹上', 'jr-takasaki-行田', 'jr-takasaki-熊谷', 'jr-takasaki-籠原', 'jr-takasaki-深谷', 'jr-takasaki-岡部', 'jr-takasaki-本庄', 'jr-takasaki-神保原', 'jr-takasaki-新町', 'jr-takasaki-倉賀野', 'jr-takasaki-高崎'] }  },  renderDetails() { return `<div class="modal-section"><p>高崎線</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#F68B1E"></div><span>高崎線</span></div>`; }};

jrData['ryomo'] = {  title: '両毛線',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-ryomo-新前橋', name: '新前橋', lat: 36.378936, lng: 139.046924, terminal: true, routes: ['main'] },
      { id: 'jr-ryomo-前橋', name: '前橋', lat: 36.383399, lng: 139.072833, terminal: false, routes: ['main'] },
      { id: 'jr-ryomo-前橋大島', name: '前橋大島', lat: 36.370585, lng: 139.109557, terminal: false, routes: ['main'] },
      { id: 'jr-ryomo-駒形', name: '駒形', lat: 36.354145, lng: 139.139483, terminal: false, routes: ['main'] },
      { id: 'jr-ryomo-伊勢崎', name: '伊勢崎', lat: 36.326849, lng: 139.193704, terminal: false, routes: ['main'] },
      { id: 'jr-ryomo-国定', name: '国定', lat: 36.359018, lng: 139.242463, terminal: false, routes: ['main'] },
      { id: 'jr-ryomo-岩宿', name: '岩宿', lat: 36.395861, lng: 139.297058, terminal: false, routes: ['main'] },
      { id: 'jr-ryomo-桐生', name: '桐生', lat: 36.41109, lng: 139.33319, terminal: false, routes: ['main'] },
      { id: 'jr-ryomo-小俣', name: '小俣', lat: 36.37496, lng: 139.374416, terminal: false, routes: ['main'] },
      { id: 'jr-ryomo-山前', name: '山前', lat: 36.347369, lng: 139.411322, terminal: false, routes: ['main'] },
      { id: 'jr-ryomo-足利', name: '足利', lat: 36.331888, lng: 139.456295, terminal: false, routes: ['main'] },
      { id: 'jr-ryomo-あしかがフラワーパーク', name: 'あしかがフラワーパーク', lat: 36.315168, lng: 139.518408, terminal: false, routes: ['main'] },
      { id: 'jr-ryomo-富田', name: '富田', lat: 36.316209, lng: 139.52865, terminal: false, routes: ['main'] },
      { id: 'jr-ryomo-佐野', name: '佐野', lat: 36.316668, lng: 139.578858, terminal: false, routes: ['main'] },
      { id: 'jr-ryomo-岩舟', name: '岩舟', lat: 36.326561, lng: 139.657955, terminal: false, routes: ['main'] },
      { id: 'jr-ryomo-大平下', name: '大平下', lat: 36.344315, lng: 139.697264, terminal: false, routes: ['main'] },
      { id: 'jr-ryomo-栃木', name: '栃木', lat: 36.371912, lng: 139.731037, terminal: false, routes: ['main'] },
      { id: 'jr-ryomo-思川', name: '思川', lat: 36.351044, lng: 139.781079, terminal: false, routes: ['main'] },
      { id: 'jr-ryomo-小山', name: '小山', lat: 36.312747, lng: 139.806241, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '両毛線', color: '#FFD400', glowColor: 'rgba(255, 212, 0, 0.4)', isLoop: false, stations: ['jr-ryomo-新前橋', 'jr-ryomo-前橋', 'jr-ryomo-前橋大島', 'jr-ryomo-駒形', 'jr-ryomo-伊勢崎', 'jr-ryomo-国定', 'jr-ryomo-岩宿', 'jr-ryomo-桐生', 'jr-ryomo-小俣', 'jr-ryomo-山前', 'jr-ryomo-足利', 'jr-ryomo-あしかがフラワーパーク', 'jr-ryomo-富田', 'jr-ryomo-佐野', 'jr-ryomo-岩舟', 'jr-ryomo-大平下', 'jr-ryomo-栃木', 'jr-ryomo-思川', 'jr-ryomo-小山'] }  },  renderDetails() { return `<div class="modal-section"><p>両毛線</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#FFD400"></div><span>両毛線</span></div>`; }};

jrData['agatsuma'] = {  title: '吾妻線',  icon: 'JR',  themeClass: 'jr-theme',  hasSubRoutes: false,  stations: [      { id: 'jr-agatsuma-渋川', name: '渋川', lat: 36.491251, lng: 139.008786, terminal: true, routes: ['main'] },
      { id: 'jr-agatsuma-金島', name: '金島', lat: 36.529502, lng: 138.976421, terminal: false, routes: ['main'] },
      { id: 'jr-agatsuma-祖母島', name: '祖母島', lat: 36.54073, lng: 138.957042, terminal: false, routes: ['main'] },
      { id: 'jr-agatsuma-小野上', name: '小野上', lat: 36.552524, lng: 138.922202, terminal: false, routes: ['main'] },
      { id: 'jr-agatsuma-小野上温泉', name: '小野上温泉', lat: 36.556909, lng: 138.904882, terminal: false, routes: ['main'] },
      { id: 'jr-agatsuma-市城', name: '市城', lat: 36.570685, lng: 138.882247, terminal: false, routes: ['main'] },
      { id: 'jr-agatsuma-中之条', name: '中之条', lat: 36.585541, lng: 138.850908, terminal: false, routes: ['main'] },
      { id: 'jr-agatsuma-群馬原町', name: '群馬原町', lat: 36.571694, lng: 138.824091, terminal: false, routes: ['main'] },
      { id: 'jr-agatsuma-郷原', name: '郷原', lat: 36.54876, lng: 138.801073, terminal: false, routes: ['main'] },
      { id: 'jr-agatsuma-矢倉', name: '矢倉', lat: 36.552731, lng: 138.78428, terminal: false, routes: ['main'] },
      { id: 'jr-agatsuma-岩島', name: '岩島', lat: 36.56324, lng: 138.759873, terminal: false, routes: ['main'] },
      { id: 'jr-agatsuma-川原湯温泉', name: '川原湯温泉', lat: 36.545128, lng: 138.697339, terminal: false, routes: ['main'] },
      { id: 'jr-agatsuma-長野原草津口', name: '長野原草津口', lat: 36.5465, lng: 138.64959, terminal: false, routes: ['main'] },
      { id: 'jr-agatsuma-群馬大津', name: '群馬大津', lat: 36.553792, lng: 138.628045, terminal: false, routes: ['main'] },
      { id: 'jr-agatsuma-羽根尾', name: '羽根尾', lat: 36.550165, lng: 138.605502, terminal: false, routes: ['main'] },
      { id: 'jr-agatsuma-袋倉', name: '袋倉', lat: 36.543997, lng: 138.579141, terminal: false, routes: ['main'] },
      { id: 'jr-agatsuma-万座・鹿沢口', name: '万座・鹿沢口', lat: 36.531967, lng: 138.551395, terminal: false, routes: ['main'] },
      { id: 'jr-agatsuma-大前', name: '大前', lat: 36.513696, lng: 138.528966, terminal: true, routes: ['main'] }  ],  routePatterns: {    main: { name: '吾妻線', color: '#0067C0', glowColor: 'rgba(0, 103, 192, 0.4)', isLoop: false, stations: ['jr-agatsuma-渋川', 'jr-agatsuma-金島', 'jr-agatsuma-祖母島', 'jr-agatsuma-小野上', 'jr-agatsuma-小野上温泉', 'jr-agatsuma-市城', 'jr-agatsuma-中之条', 'jr-agatsuma-群馬原町', 'jr-agatsuma-郷原', 'jr-agatsuma-矢倉', 'jr-agatsuma-岩島', 'jr-agatsuma-川原湯温泉', 'jr-agatsuma-長野原草津口', 'jr-agatsuma-群馬大津', 'jr-agatsuma-羽根尾', 'jr-agatsuma-袋倉', 'jr-agatsuma-万座・鹿沢口', 'jr-agatsuma-大前'] }  },  renderDetails() { return `<div class="modal-section"><p>吾妻線</p></div>`; },  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#0067C0"></div><span>吾妻線</span></div>`; }};


// app.js の appData に結合する
if (typeof appData !== 'undefined') {
  Object.assign(appData, jrData);
}

