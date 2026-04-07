const metroData = {
  // ==========================================
  // 東京メトロ 銀座線
  // ==========================================
  'metro-ginza': {
    title: '東京メトロ 銀座線',
    icon: 'G',
    stationLetter: 'G',
    themeClass: 'metro-ginza-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'g-asakusa', name: '浅草', lat: 35.710733, lng: 139.797592, terminal: true, routes: ['main'], info: '銀座線の起点。' },
      { id: 'g-tawaramachi', name: '田原町', lat: 35.709897, lng: 139.790897, terminal: false, routes: ['main'], info: '' },
      { id: 'g-inaricho', name: '稲荷町', lat: 35.711273, lng: 139.782593, terminal: false, routes: ['main'], info: '' },
      { id: 'g-ueno', name: '上野', lat: 35.711482, lng: 139.777122, terminal: false, routes: ['main'], info: 'JR各線、京成線乗換。' },
      { id: 'g-uenohirokoji', name: '上野広小路', lat: 35.70768, lng: 139.772877, terminal: false, routes: ['main'], info: '' },
      { id: 'g-suehirocho', name: '末広町', lat: 35.702972, lng: 139.771713, terminal: false, routes: ['main'], info: '秋葉原の電器街に近い。' },
      { id: 'g-kanda', name: '神田', lat: 35.693587, lng: 139.770899, terminal: false, routes: ['main'], info: 'JR乗換。' },
      { id: 'g-mitsukoshimae', name: '三越前', lat: 35.687101, lng: 139.773594, terminal: false, routes: ['main'], info: '半蔵門線乗換。' },
      { id: 'g-nihombashi', name: '日本橋', lat: 35.682078, lng: 139.773516, terminal: false, routes: ['main'], info: '東西線、都営浅草線乗換。' },
      { id: 'g-kyobashi', name: '京橋', lat: 35.676856, lng: 139.770126, terminal: false, routes: ['main'], info: '' },
      { id: 'g-ginza', name: '銀座', lat: 35.671989, lng: 139.763965, terminal: false, routes: ['main'], info: '丸ノ内線、日比谷線乗換。' },
      { id: 'g-shimbashi', name: '新橋', lat: 35.667434, lng: 139.758432, terminal: false, routes: ['main'], info: 'JR、都営浅草線、ゆりかもめ乗換。' },
      { id: 'g-toranomon', name: '虎ノ門', lat: 35.670236, lng: 139.749832, terminal: false, routes: ['main'], info: '日比谷線（虎ノ門ヒルズ駅）乗換。' },
      { id: 'g-tameikesanno', name: '溜池山王', lat: 35.673621, lng: 139.741419, terminal: false, routes: ['main'], info: '南北線乗換。' },
      { id: 'g-akasakamitsuke', name: '赤坂見附', lat: 35.677021, lng: 139.737047, terminal: false, routes: ['main'], info: '丸ノ内線乗換。' },
      { id: 'g-aoyamaicchome', name: '青山一丁目', lat: 35.672765, lng: 139.724159, terminal: false, routes: ['main'], info: '半蔵門線、都営大江戸線乗換。' },
      { id: 'g-gaienmae', name: '外苑前', lat: 35.670527, lng: 139.717857, terminal: false, routes: ['main'], info: '' },
      { id: 'g-omotesando', name: '表参道', lat: 35.665247, lng: 139.712314, terminal: false, routes: ['main'], info: '千代田線、半蔵門線乗換。' },
      { id: 'g-shibuya', name: '渋谷', lat: 35.659066, lng: 139.701, terminal: true, routes: ['main'], info: '銀座線の終点。' }
    ],
    routePatterns: {
      main: { name: '銀座線', color: '#FF9500', glowColor: 'rgba(255, 149, 0, 0.4)', isLoop: false, stations: ['g-asakusa','g-tawaramachi','g-inaricho','g-ueno','g-uenohirokoji','g-suehirocho','g-kanda','g-mitsukoshimae','g-nihombashi','g-kyobashi','g-ginza','g-shimbashi','g-toranomon','g-tameikesanno','g-akasakamitsuke','g-aoyamaicchome','g-gaienmae','g-omotesando','g-shibuya'] }
    },
    commonStations: [],
    renderDetails: function() { return `<div class="modal-section"><h3><span class="section-icon">ℹ️</span>路線概要</h3><p>東洋で最も古い地下鉄路線。浅草から渋谷までを結びます。</p></div>`; },
    renderLegend: function() { return `<div class="legend-item"><div class="legend-line metro-ginza"></div><span>銀座線</span></div>`; }
  },

  // ==========================================
  // 東京メトロ 丸ノ内線
  // ==========================================
  'metro-marunouchi': {
    title: '東京メトロ 丸ノ内線',
    icon: 'M',
    stationLetter: 'M',
    themeClass: 'metro-marunouchi-theme',
    hasSubRoutes: true,
    stations: [
      { id: 'm-ikebukuro', name: '池袋', lat: 35.730256, lng: 139.711086, terminal: true, terminalType: 'sub1', routes: ['sub1'], info: '丸ノ内線の起点。' },
      { id: 'm-shinotsuka', name: '新大塚', lat: 35.72569, lng: 139.729971, terminal: false, routes: ['sub1'], info: '' },
      { id: 'm-myogadani', name: '茗荷谷', lat: 35.716989, lng: 139.737184, terminal: false, routes: ['sub1'], info: '' },
      { id: 'm-korakuen', name: '後楽園', lat: 35.707898, lng: 139.751864, terminal: false, routes: ['sub1'], info: '南北線乗換。' },
      { id: 'm-hongo3', name: '本郷三丁目', lat: 35.706671, lng: 139.759914, terminal: false, routes: ['sub1'], info: '都営大江戸線乗換。' },
      { id: 'm-ochanomizu', name: '御茶ノ水', lat: 35.700614, lng: 139.763952, terminal: false, routes: ['sub1'], info: 'JR線接続。' },
      { id: 'm-awajicho', name: '淡路町', lat: 35.695434, lng: 139.767575, terminal: false, routes: ['sub1'], info: '小川町、新御茶ノ水乗換。' },
      { id: 'm-otemachi', name: '大手町', lat: 35.686564, lng: 139.7662, terminal: false, routes: ['sub1'], info: '東西線、千代田線、半蔵門線乗換。' },
      { id: 'm-tokyo', name: '東京', lat: 35.681753, lng: 139.764708, terminal: false, routes: ['sub1'], info: '新幹線、JR各線乗換。' },
      { id: 'm-ginza', name: '銀座', lat: 35.671989, lng: 139.763965, terminal: false, routes: ['sub1'], info: '銀座線、日比谷線乗換。' },
      { id: 'm-kasumigaseki', name: '霞ケ関', lat: 35.673838, lng: 139.750899, terminal: false, routes: ['sub1'], info: '日比谷線、千代田線乗換。' },
      { id: 'm-kokkaigijidomae', name: '国会議事堂前', lat: 35.67393, lng: 139.745219, terminal: false, routes: ['sub1'], info: '千代田線乗換。' },
      { id: 'm-akasakamitsuke', name: '赤坂見附', lat: 35.677021, lng: 139.737047, terminal: false, routes: ['sub1'], info: '銀座線乗換。' },
      { id: 'm-yotsuya', name: '四ツ谷', lat: 35.684586, lng: 139.729947, terminal: false, routes: ['sub1'], info: '南北線、JR中央線乗換。' },
      { id: 'm-yotsuyasanchome', name: '四谷三丁目', lat: 35.687958, lng: 139.720103, terminal: false, routes: ['sub1'], info: '' },
      { id: 'm-shinjukugyoenmae', name: '新宿御苑前', lat: 35.688588, lng: 139.71069, terminal: false, routes: ['sub1'], info: '' },
      { id: 'm-shinjukusanchome', name: '新宿三丁目', lat: 35.690847, lng: 139.704895, terminal: false, routes: ['sub1'], info: '副都心線、都営新宿線乗換。' },
      { id: 'm-shinjuku', name: '新宿', lat: 35.69235, lng: 139.700711, terminal: false, routes: ['sub1'], info: 'JR各線、小田急、京王、都営線乗換。' },
      { id: 'm-nishishinjuku', name: '西新宿', lat: 35.694298, lng: 139.692778, terminal: false, routes: ['sub1'], info: '' },
      { id: 'm-nakanosakaue', name: '中野坂上', lat: 35.69792, lng: 139.68291, terminal: false, routes: ['sub1', 'sub2'], info: '丸ノ内線分岐線、都営大江戸線乗換。' },
      { id: 'm-shin_nakano', name: '新中野', lat: 35.697491, lng: 139.66903, terminal: false, routes: ['sub1'], info: '' },
      { id: 'm-higashikoenji', name: '東高円寺', lat: 35.697802, lng: 139.657822, terminal: false, routes: ['sub1'], info: '' },
      { id: 'm-shinkoenji', name: '新高円寺', lat: 35.697985, lng: 139.648068, terminal: false, routes: ['sub1'], info: '' },
      { id: 'm-minamiasagaya', name: '南阿佐ケ谷', lat: 35.699624, lng: 139.63576, terminal: false, routes: ['sub1'], info: '' },
      { id: 'm-ogikubo', name: '荻窪', lat: 35.704304, lng: 139.620116, terminal: true, terminalType: 'sub1', routes: ['sub1'], info: '丸ノ内線本線の終点。' },
      { id: 'm-nakano_shimbashi', name: '中野新橋', lat: 35.692123, lng: 139.673997, terminal: false, routes: ['sub2'], info: '' },
      { id: 'm-nakano_fujimicho', name: '中野富士見町', lat: 35.690514, lng: 139.666933, terminal: false, routes: ['sub2'], info: '' },
      { id: 'm-honancho', name: '方南町', lat: 35.683496, lng: 139.656498, terminal: true, terminalType: 'sub2', routes: ['sub2'], info: '丸ノ内線分岐線の終点。' }
    ],
    routePatterns: {
      sub1: { name: '丸ノ内線 (本線)', color: '#F62E36', glowColor: 'rgba(246, 46, 54, 0.4)', isLoop: false, stations: ['m-ikebukuro','m-shinotsuka','m-myogadani','m-korakuen','m-hongo3','m-ochanomizu','m-awajicho','m-otemachi','m-tokyo','m-ginza','m-kasumigaseki','m-kokkaigijidomae','m-akasakamitsuke','m-yotsuya','m-yotsuyasanchome','m-shinjukugyoenmae','m-shinjukusanchome','m-shinjuku','m-nishishinjuku','m-nakanosakaue','m-shin_nakano','m-higashikoenji','m-shinkoenji','m-minamiasagaya','m-ogikubo'] },
      sub2: { name: '丸ノ内線 (分岐線)', color: '#F62E36', glowColor: 'rgba(246, 46, 54, 0.4)', isLoop: false, lineDash: '4,4', stations: ['m-nakanosakaue','m-nakano_shimbashi','m-nakano_fujimicho','m-honancho'] }
    },
    commonStations: ['m-nakanosakaue'],
    renderDetails: function() { return `<div class="modal-section"><h3><span class="section-icon">ℹ️</span>路線概要</h3><p>池袋から東京、新宿を経て荻窪及び方南町を結ぶ路線。</p></div>`; },
    renderLegend: function() { return `<div class="legend-item"><div class="legend-line metro-marunouchi"></div><span>丸ノ内線本線</span></div><div class="legend-item"><div class="legend-line metro-marunouchi" style="border-bottom: 2px dashed #000; background:transparent;"></div><span>丸ノ内線分岐線</span></div>`; }
  },

  // ==========================================
  // 東京メトロ 日比谷線
  // ==========================================
  'metro-hibiya': {
    title: '東京メトロ 日比谷線',
    icon: 'H',
    stationLetter: 'H',
    themeClass: 'metro-hibiya-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'h-nakameguro', name: '中目黒', lat: 35.643854, lng: 139.698621, terminal: true, routes: ['main'], info: '東急東横線直通。' },
      { id: 'h-ebisu', name: '恵比寿', lat: 35.647332, lng: 139.708988, terminal: false, routes: ['main'], info: 'JR山手線等乗換。' },
      { id: 'h-hiroo', name: '広尾', lat: 35.652279, lng: 139.722202, terminal: false, routes: ['main'], info: '' },
      { id: 'h-roppongi', name: '六本木', lat: 35.662836, lng: 139.731443, terminal: false, routes: ['main'], info: '都営大江戸線乗換。' },
      { id: 'h-kamiyacho', name: '神谷町', lat: 35.662978, lng: 139.745069, terminal: false, routes: ['main'], info: '' },
      { id: 'h-toranomonhills', name: '虎ノ門ヒルズ', lat: 35.667444, lng: 139.747793, terminal: false, routes: ['main'], info: '銀座線乗換。' },
      { id: 'h-kasumigaseki', name: '霞ケ関', lat: 35.673838, lng: 139.750899, terminal: false, routes: ['main'], info: '丸ノ内線、千代田線乗換。' },
      { id: 'h-hibiya', name: '日比谷', lat: 35.67459, lng: 139.76017, terminal: false, routes: ['main'], info: '千代田線、都営三田線乗換。' },
      { id: 'h-ginza', name: '銀座', lat: 35.671989, lng: 139.763965, terminal: false, routes: ['main'], info: '銀座線、丸ノ内線乗換。' },
      { id: 'h-higashiginza', name: '東銀座', lat: 35.669464, lng: 139.767253, terminal: false, routes: ['main'], info: '都営浅草線乗換。' },
      { id: 'h-tsukiji', name: '築地', lat: 35.668115, lng: 139.772603, terminal: false, routes: ['main'], info: '築地本願寺、場外市場。' },
      { id: 'h-hatchobori', name: '八丁堀', lat: 35.674851, lng: 139.776982, terminal: false, routes: ['main'], info: 'JR京葉線乗換。' },
      { id: 'h-kayabacho', name: '茅場町', lat: 35.679752, lng: 139.780005, terminal: false, routes: ['main'], info: '東西線乗換。' },
      { id: 'h-ningyocho', name: '人形町', lat: 35.686307, lng: 139.782285, terminal: false, routes: ['main'], info: '都営浅草線乗換。' },
      { id: 'h-kodemmacho', name: '小伝馬町', lat: 35.690737, lng: 139.778433, terminal: false, routes: ['main'], info: '' },
      { id: 'h-akihabara', name: '秋葉原', lat: 35.698162, lng: 139.775459, terminal: false, routes: ['main'], info: 'JR各線、つくばエクスプレス乗換。' },
      { id: 'h-nakaokachimachi', name: '仲御徒町', lat: 35.706649, lng: 139.776138, terminal: false, routes: ['main'], info: '' },
      { id: 'h-ueno', name: '上野', lat: 35.711482, lng: 139.777122, terminal: false, routes: ['main'], info: '銀座線、JR各線、京成線乗換。' },
      { id: 'h-iriya', name: '入谷', lat: 35.719862, lng: 139.783924, terminal: false, routes: ['main'], info: '' },
      { id: 'h-minowa', name: '三ノ輪', lat: 35.729623, lng: 139.791485, terminal: false, routes: ['main'], info: '都電荒川線乗換。' },
      { id: 'h-minamisenju', name: '南千住', lat: 35.733398, lng: 139.799273, terminal: false, routes: ['main'], info: 'JR常磐線等乗換。' },
      { id: 'h-kitasenju', name: '北千住', lat: 35.748916, lng: 139.804276, terminal: true, routes: ['main'], info: '東武スカイツリーライン直通。' }
    ],
    routePatterns: {
      main: { name: '日比谷線', color: '#B5B5AC', glowColor: 'rgba(181, 181, 172, 0.4)', isLoop: false, stations: ['h-nakameguro','h-ebisu','h-hiroo','h-roppongi','h-kamiyacho','h-toranomonhills','h-kasumigaseki','h-hibiya','h-ginza','h-higashiginza','h-tsukiji','h-hatchobori','h-kayabacho','h-ningyocho','h-kodemmacho','h-akihabara','h-nakaokachimachi','h-ueno','h-iriya','h-minowa','h-minamisenju','h-kitasenju'] }
    },
    commonStations: [],
    renderDetails: function() { return `<div class="modal-section"><h3><span class="section-icon">ℹ️</span>路線概要</h3><p>中目黒から六本木、銀座、上野等を経て北千住を結ぶ路線。</p></div>`; },
    renderLegend: function() { return `<div class="legend-item"><div class="legend-line metro-hibiya"></div><span>日比谷線</span></div>`; }
  },

  // ==========================================
  // 東京メトロ 東西線
  // ==========================================
  'metro-tozai': {
    title: '東京メトロ 東西線',
    icon: 'T',
    stationLetter: 'T',
    themeClass: 'metro-tozai-theme',
    hasSubRoutes: false,
    stations: [
      { id: 't-nakano', name: '中野', lat: 35.705765, lng: 139.665835, terminal: true, routes: ['main'], info: 'JR中央・総武線直通。' },
      { id: 't-ochiai', name: '落合', lat: 35.710976, lng: 139.687284, terminal: false, routes: ['main'], info: '' },
      { id: 't-takadanobaba', name: '高田馬場', lat: 35.713338, lng: 139.704745, terminal: false, routes: ['main'], info: 'JR山手線、西武新宿線乗換。' },
      { id: 't-waseda', name: '早稲田', lat: 35.705723, lng: 139.721319, terminal: false, routes: ['main'], info: '早稲田大学最寄駅。' },
      { id: 't-kagurazaka', name: '神楽坂', lat: 35.70379, lng: 139.734546, terminal: false, routes: ['main'], info: '' },
      { id: 't-iidabashi', name: '飯田橋', lat: 35.701725, lng: 139.745986, terminal: false, routes: ['main'], info: '有楽町線、南北線等乗換。' },
      { id: 't-kudanshita', name: '九段下', lat: 35.695589, lng: 139.751948, terminal: false, routes: ['main'], info: '半蔵門線、都営新宿線乗換。' },
      { id: 't-takebashi', name: '竹橋', lat: 35.690662, lng: 139.756817, terminal: false, routes: ['main'], info: '' },
      { id: 't-otemachi', name: '大手町', lat: 35.684801, lng: 139.766086, terminal: false, routes: ['main'], info: '5路線乗換の中枢ターミナル。' },
      { id: 't-nihombashi', name: '日本橋', lat: 35.682078, lng: 139.773516, terminal: false, routes: ['main'], info: '銀座線、都営浅草線乗換。' },
      { id: 't-kayabacho', name: '茅場町', lat: 35.679752, lng: 139.780005, terminal: false, routes: ['main'], info: '日比谷線乗換。' },
      { id: 't-monzennakacho', name: '門前仲町', lat: 35.671851, lng: 139.796209, terminal: false, routes: ['main'], info: '都営大江戸線乗換。' },
      { id: 't-kiba', name: '木場', lat: 35.669351, lng: 139.807042, terminal: false, routes: ['main'], info: '' },
      { id: 't-toyocho', name: '東陽町', lat: 35.669629, lng: 139.817596, terminal: false, routes: ['main'], info: '' },
      { id: 't-minamisunamachi', name: '南砂町', lat: 35.668796, lng: 139.83065, terminal: false, routes: ['main'], info: '' },
      { id: 't-nishikasai', name: '西葛西', lat: 35.664631, lng: 139.859259, terminal: false, routes: ['main'], info: '' },
      { id: 't-kasai', name: '葛西', lat: 35.663554, lng: 139.872458, terminal: false, routes: ['main'], info: '' },
      { id: 't-urayasu', name: '浦安', lat: 35.665932, lng: 139.893193, terminal: false, routes: ['main'], info: '' },
      { id: 't-minamigyotoku', name: '南行徳', lat: 35.672687, lng: 139.902311, terminal: false, routes: ['main'], info: '' },
      { id: 't-gyotoku', name: '行徳', lat: 35.682686, lng: 139.914254, terminal: false, routes: ['main'], info: '' },
      { id: 't-myoden', name: '妙典', lat: 35.690935, lng: 139.924209, terminal: false, routes: ['main'], info: '' },
      { id: 't-barakinakayama', name: '原木中山', lat: 35.703517, lng: 139.942029, terminal: false, routes: ['main'], info: '' },
      { id: 't-nishifunabashi', name: '西船橋', lat: 35.707127, lng: 139.958972, terminal: true, routes: ['main'], info: 'JR総武線、東葉高速鉄道等直通。' }
    ],
    routePatterns: {
      main: { name: '東西線', color: '#009BBF', glowColor: 'rgba(0, 155, 191, 0.4)', isLoop: false, stations: ['t-nakano','t-ochiai','t-takadanobaba','t-waseda','t-kagurazaka','t-iidabashi','t-kudanshita','t-takebashi','t-otemachi','t-nihombashi','t-kayabacho','t-monzennakacho','t-kiba','t-toyocho','t-minamisunamachi','t-nishikasai','t-kasai','t-urayasu','t-minamigyotoku','t-gyotoku','t-myoden','t-barakinakayama','t-nishifunabashi'] }
    },
    commonStations: [],
    renderDetails: function() { return `<div class="modal-section"><h3><span class="section-icon">ℹ️</span>路線概要</h3><p>中野から西船橋を結ぶ大動脈路線。</p></div>`; },
    renderLegend: function() { return `<div class="legend-item"><div class="legend-line metro-tozai"></div><span>東西線</span></div>`; }
  },

  // ==========================================
  // 東京メトロ 千代田線
  // ==========================================
  'metro-chiyoda': {
    title: '東京メトロ 千代田線',
    icon: 'C',
    stationLetter: 'C',
    themeClass: 'metro-chiyoda-theme',
    hasSubRoutes: true,
    stations: [
      { id: 'c-yoyogiuehara', name: '代々木上原', lat: 35.669159, lng: 139.680153, terminal: true, terminalType: 'sub1', routes: ['sub1'], info: '小田急線直通。' },
      { id: 'c-yoyogikoen', name: '代々木公園', lat: 35.669187, lng: 139.689099, terminal: false, routes: ['sub1'], info: '' },
      { id: 'c-meijijingumae', name: '明治神宮前〈原宿〉', lat: 35.669071, lng: 139.703995, terminal: false, routes: ['sub1'], info: '副都心線、JR乗換。' },
      { id: 'c-omotesando', name: '表参道', lat: 35.665247, lng: 139.712314, terminal: false, routes: ['sub1'], info: '銀座線、半蔵門線乗換。' },
      { id: 'c-nogizaka', name: '乃木坂', lat: 35.666572, lng: 139.726215, terminal: false, routes: ['sub1'], info: '' },
      { id: 'c-akasaka', name: '赤坂', lat: 35.67323, lng: 139.738348, terminal: false, routes: ['sub1'], info: '' },
      { id: 'c-kokkaigijidomae', name: '国会議事堂前', lat: 35.67393, lng: 139.745219, terminal: false, routes: ['sub1'], info: '丸ノ内線乗換。' },
      { id: 'c-kasumigaseki', name: '霞ケ関', lat: 35.673838, lng: 139.750899, terminal: false, routes: ['sub1'], info: '丸ノ内線、日比谷線乗換。' },
      { id: 'c-hibiya', name: '日比谷', lat: 35.674241, lng: 139.758732, terminal: false, routes: ['sub1'], info: '日比谷線等乗換。' },
      { id: 'c-nijubashimae', name: '二重橋前〈丸の内〉', lat: 35.681071, lng: 139.761948, terminal: false, routes: ['sub1'], info: '' },
      { id: 'c-otemachi', name: '大手町', lat: 35.686154, lng: 139.763399, terminal: false, routes: ['sub1'], info: '' },
      { id: 'c-shinochanomizu', name: '新御茶ノ水', lat: 35.698072, lng: 139.766014, terminal: false, routes: ['sub1'], info: '丸ノ内線、都営新宿線等乗換。' },
      { id: 'c-yushima', name: '湯島', lat: 35.708243, lng: 139.769916, terminal: false, routes: ['sub1'], info: '' },
      { id: 'c-nezu', name: '根津', lat: 35.7174, lng: 139.765655, terminal: false, routes: ['sub1'], info: '' },
      { id: 'c-sendagi', name: '千駄木', lat: 35.725549, lng: 139.763243, terminal: false, routes: ['sub1'], info: '' },
      { id: 'c-nishinippori', name: '西日暮里', lat: 35.732257, lng: 139.766511, terminal: false, routes: ['sub1'], info: 'JR等乗換。' },
      { id: 'c-machiya', name: '町屋', lat: 35.742733, lng: 139.780501, terminal: false, routes: ['sub1'], info: '京成線乗換。' },
      { id: 'c-kitasenju', name: '北千住', lat: 35.748916, lng: 139.804276, terminal: false, routes: ['sub1'], info: '多数路線乗換。' },
      { id: 'c-ayase', name: '綾瀬', lat: 35.762222, lng: 139.825019, terminal: false, routes: ['sub1', 'sub2'], info: 'JR常磐線（各停）直通。支線分岐。' },
      { id: 'c-kitaayase', name: '北綾瀬', lat: 35.777117, lng: 139.832035, terminal: true, terminalType: 'sub2', routes: ['sub2'], info: '千代田線支線の終点。' }
    ],
    routePatterns: {
      sub1: { name: '千代田線', color: '#00BB85', glowColor: 'rgba(0, 187, 133, 0.4)', isLoop: false, stations: ['c-yoyogiuehara','c-yoyogikoen','c-meijijingumae','c-omotesando','c-nogizaka','c-akasaka','c-kokkaigijidomae','c-kasumigaseki','c-hibiya','c-nijubashimae','c-otemachi','c-shinochanomizu','c-yushima','c-nezu','c-sendagi','c-nishinippori','c-machiya','c-kitasenju','c-ayase'] },
      sub2: { name: '千代田線 (北綾瀬支線)', color: '#00BB85', glowColor: 'rgba(0, 187, 133, 0.4)', isLoop: false, lineDash: '4,4', stations: ['c-ayase','c-kitaayase'] }
    },
    commonStations: ['c-ayase'],
    renderDetails: function() { return `<div class="modal-section"><h3><span class="section-icon">ℹ️</span>路線概要</h3><p>代々木上原から綾瀬・北綾瀬を結ぶ路線。小田急線とJR常磐線に直通。</p></div>`; },
    renderLegend: function() { return `<div class="legend-item"><div class="legend-line metro-chiyoda"></div><span>千代田線</span></div>`; }
  },

  // ==========================================
  // 東京メトロ 有楽町線
  // ==========================================
  'metro-yurakucho': {
    title: '東京メトロ 有楽町線',
    icon: 'Y',
    stationLetter: 'Y',
    themeClass: 'metro-yurakucho-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'y-wakoshi', name: '和光市', lat: 35.788507, lng: 139.612434, terminal: true, routes: ['main'], info: '東武東上線直通。' },
      { id: 'y-chikatetsunarimasu', name: '地下鉄成増', lat: 35.776557, lng: 139.631497, terminal: false, routes: ['main'], info: '' },
      { id: 'y-chikatetsuakatsuka', name: '地下鉄赤塚', lat: 35.769939, lng: 139.644021, terminal: false, routes: ['main'], info: '' },
      { id: 'y-heiwadai', name: '平和台', lat: 35.757863, lng: 139.653762, terminal: false, routes: ['main'], info: '' },
      { id: 'y-hikawadai', name: '氷川台', lat: 35.74955, lng: 139.665567, terminal: false, routes: ['main'], info: '' },
      { id: 'y-kotakemukaihara', name: '小竹向原', lat: 35.743803, lng: 139.678572, terminal: false, routes: ['main'], info: '副都心線、西武線乗換。' },
      { id: 'y-senkawa', name: '千川', lat: 35.738229, lng: 139.689271, terminal: false, routes: ['main'], info: '' },
      { id: 'y-kanamecho', name: '要町', lat: 35.73323, lng: 139.698715, terminal: false, routes: ['main'], info: '' },
      { id: 'y-ikebukuro', name: '池袋', lat: 35.729565, lng: 139.710088, terminal: false, routes: ['main'], info: '丸ノ内線、副都心線等乗換。' },
      { id: 'y-higashiikebukuro', name: '東池袋', lat: 35.725732, lng: 139.719546, terminal: false, routes: ['main'], info: '' },
      { id: 'y-gokokuji', name: '護国寺', lat: 35.719044, lng: 139.72754, terminal: false, routes: ['main'], info: '' },
      { id: 'y-edogawabashi', name: '江戸川橋', lat: 35.709495, lng: 139.733538, terminal: false, routes: ['main'], info: '' },
      { id: 'y-iidabashi', name: '飯田橋', lat: 35.701934, lng: 139.743669, terminal: false, routes: ['main'], info: '東西線、南北線等乗換。' },
      { id: 'y-ichigaya', name: '市ケ谷', lat: 35.691958, lng: 139.73647, terminal: false, routes: ['main'], info: '南北線、JR線等乗換。' },
      { id: 'y-kojimachi', name: '麹町', lat: 35.684006, lng: 139.737613, terminal: false, routes: ['main'], info: '' },
      { id: 'y-nagatacho', name: '永田町', lat: 35.678757, lng: 139.740258, terminal: false, routes: ['main'], info: '半蔵門線、南北線等乗換。' },
      { id: 'y-sakuradamon', name: '桜田門', lat: 35.677405, lng: 139.75149, terminal: false, routes: ['main'], info: '' },
      { id: 'y-yurakucho', name: '有楽町', lat: 35.675714, lng: 139.763265, terminal: false, routes: ['main'], info: '日比谷線、JR線乗換。' },
      { id: 'y-ginzaitchome', name: '銀座一丁目', lat: 35.67435, lng: 139.767045, terminal: false, routes: ['main'], info: '' },
      { id: 'y-shintomicho', name: '新富町', lat: 35.670462, lng: 139.773711, terminal: false, routes: ['main'], info: '' },
      { id: 'y-tsukishima', name: '月島', lat: 35.664871, lng: 139.784233, terminal: false, routes: ['main'], info: '都営大江戸線乗換。' },
      { id: 'y-toyosu', name: '豊洲', lat: 35.654908, lng: 139.79621, terminal: false, routes: ['main'], info: 'ゆりかもめ乗換。' },
      { id: 'y-tatsumi', name: '辰巳', lat: 35.645576, lng: 139.81052, terminal: false, routes: ['main'], info: '' },
      { id: 'y-shinkiba', name: '新木場', lat: 35.645832, lng: 139.826254, terminal: true, routes: ['main'], info: 'JR京葉線、りんかい線乗換。' }
    ],
    routePatterns: {
      main: { name: '有楽町線', color: '#C1A470', glowColor: 'rgba(193, 164, 112, 0.4)', isLoop: false, stations: ['y-wakoshi','y-chikatetsunarimasu','y-chikatetsuakatsuka','y-heiwadai','y-hikawadai','y-kotakemukaihara','y-senkawa','y-kanamecho','y-ikebukuro','y-higashiikebukuro','y-gokokuji','y-edogawabashi','y-iidabashi','y-ichigaya','y-kojimachi','y-nagatacho','y-sakuradamon','y-yurakucho','y-ginzaitchome','y-shintomicho','y-tsukishima','y-toyosu','y-tatsumi','y-shinkiba'] }
    },
    commonStations: [],
    renderDetails: function() { return `<div class="modal-section"><h3><span class="section-icon">ℹ️</span>路線概要</h3><p>和光市から池袋、飯田橋を通って新木場を結ぶ路線。</p></div>`; },
    renderLegend: function() { return `<div class="legend-item"><div class="legend-line metro-yurakucho"></div><span>有楽町線</span></div>`; }
  },

  // ==========================================
  // 東京メトロ 半蔵門線
  // ==========================================
  'metro-hanzomon': {
    title: '東京メトロ 半蔵門線',
    icon: 'Z',
    stationLetter: 'Z',
    themeClass: 'metro-hanzomon-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'z-shibuya', name: '渋谷', lat: 35.659066, lng: 139.701, terminal: true, routes: ['main'], info: '東急田園都市線直通。' },
      { id: 'z-omotesando', name: '表参道', lat: 35.665247, lng: 139.712314, terminal: false, routes: ['main'], info: '銀座線、千代田線乗換。' },
      { id: 'z-aoyamaicchome', name: '青山一丁目', lat: 35.672765, lng: 139.724159, terminal: false, routes: ['main'], info: '銀座線、都営大江戸線乗換。' },
      { id: 'z-nagatacho', name: '永田町', lat: 35.678757, lng: 139.740258, terminal: false, routes: ['main'], info: '有楽町線、南北線等乗換。' },
      { id: 'z-hanzomon', name: '半蔵門', lat: 35.685703, lng: 139.74163, terminal: false, routes: ['main'], info: '' },
      { id: 'z-kudanshita', name: '九段下', lat: 35.695589, lng: 139.751948, terminal: false, routes: ['main'], info: '東西線、都営新宿線乗換。' },
      { id: 'z-jimbocho', name: '神保町', lat: 35.695966, lng: 139.757606, terminal: false, routes: ['main'], info: '都営三田線、新宿線乗換。' },
      { id: 'z-otemachi', name: '大手町', lat: 35.68686, lng: 139.764107, terminal: false, routes: ['main'], info: '多数路線乗換の中核。' },
      { id: 'z-mitsukoshimae', name: '三越前', lat: 35.684908, lng: 139.773147, terminal: false, routes: ['main'], info: '銀座線乗換。' },
      { id: 'z-suitengumae', name: '水天宮前', lat: 35.682683, lng: 139.785377, terminal: false, routes: ['main'], info: 'T-CAT接続。' },
      { id: 'z-kiyosumishirakawa', name: '清澄白河', lat: 35.682105, lng: 139.798851, terminal: false, routes: ['main'], info: '都営大江戸線乗換。' },
      { id: 'z-sumiyoshi', name: '住吉', lat: 35.689073, lng: 139.815681, terminal: false, routes: ['main'], info: '都営新宿線乗換。' },
      { id: 'z-kinshicho', name: '錦糸町', lat: 35.697578, lng: 139.814941, terminal: false, routes: ['main'], info: 'JR総武線乗換。' },
      { id: 'z-oshiage', name: '押上', lat: 35.710702, lng: 139.812935, terminal: true, routes: ['main'], info: '東武スカイツリーライン直通。スカイツリー前。' }
    ],
    routePatterns: {
      main: { name: '半蔵門線', color: '#8F76D6', glowColor: 'rgba(143, 118, 214, 0.4)', isLoop: false, stations: ['z-shibuya','z-omotesando','z-aoyamaicchome','z-nagatacho','z-hanzomon','z-kudanshita','z-jimbocho','z-otemachi','z-mitsukoshimae','z-suitengumae','z-kiyosumishirakawa','z-sumiyoshi','z-kinshicho','z-oshiage'] }
    },
    commonStations: [],
    renderDetails: function() { return `<div class="modal-section"><h3><span class="section-icon">ℹ️</span>路線概要</h3><p>渋谷から押上を結ぶ路線。東急・東武と直通し広域ネットワークを形成。</p></div>`; },
    renderLegend: function() { return `<div class="legend-item"><div class="legend-line metro-hanzomon"></div><span>半蔵門線</span></div>`; }
  },

  // ==========================================
  // 東京メトロ 南北線
  // ==========================================
  'metro-namboku': {
    title: '東京メトロ 南北線',
    icon: 'N',
    stationLetter: 'N',
    themeClass: 'metro-namboku-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'n-meguro', name: '目黒', lat: 35.633272, lng: 139.7155, terminal: true, routes: ['main'], info: '東急目黒線直通、JR山手線乗換。' },
      { id: 'n-shirokanedai', name: '白金台', lat: 35.637917, lng: 139.726133, terminal: false, routes: ['main'], info: '都営三田線共用区間。' },
      { id: 'n-shirokanetakanawa', name: '白金高輪', lat: 35.642903, lng: 139.734104, terminal: false, routes: ['main'], info: '都営三田線共用区間終了。' },
      { id: 'n-azabujuban', name: '麻布十番', lat: 35.654682, lng: 139.737051, terminal: false, routes: ['main'], info: '都営大江戸線乗換。' },
      { id: 'n-roppongiitchome', name: '六本木一丁目', lat: 35.665595, lng: 139.739, terminal: false, routes: ['main'], info: '' },
      { id: 'n-tameikesanno', name: '溜池山王', lat: 35.673621, lng: 139.741419, terminal: false, routes: ['main'], info: '銀座線乗換。' },
      { id: 'n-nagatacho', name: '永田町', lat: 35.678757, lng: 139.740258, terminal: false, routes: ['main'], info: '半蔵門線、有楽町線等乗換。' },
      { id: 'n-yotsuya', name: '四ツ谷', lat: 35.686032, lng: 139.72955, terminal: false, routes: ['main'], info: '丸ノ内線、JR乗換。' },
      { id: 'n-ichigaya', name: '市ケ谷', lat: 35.691295, lng: 139.736642, terminal: false, routes: ['main'], info: '有楽町線、JR等乗換。' },
      { id: 'n-iidabashi', name: '飯田橋', lat: 35.701934, lng: 139.743669, terminal: false, routes: ['main'], info: '多数路線乗換。' },
      { id: 'n-korakuen', name: '後楽園', lat: 35.707898, lng: 139.751864, terminal: false, routes: ['main'], info: '丸ノ内線乗換。' },
      { id: 'n-todaimae', name: '東大前', lat: 35.717633, lng: 139.758025, terminal: false, routes: ['main'], info: '東京大学最寄駅。' },
      { id: 'n-honkomagome', name: '本駒込', lat: 35.724155, lng: 139.753828, terminal: false, routes: ['main'], info: '' },
      { id: 'n-komagome', name: '駒込', lat: 35.736959, lng: 139.746442, terminal: false, routes: ['main'], info: 'JR山手線乗換。' },
      { id: 'n-nishigahara', name: '西ケ原', lat: 35.746008, lng: 139.742322, terminal: false, routes: ['main'], info: '' },
      { id: 'n-oji', name: '王子', lat: 35.753966, lng: 139.737618, terminal: false, routes: ['main'], info: 'JR京浜東北線乗換。' },
      { id: 'n-ojikamiya', name: '王子神谷', lat: 35.765172, lng: 139.735933, terminal: false, routes: ['main'], info: '' },
      { id: 'n-shimo', name: '志茂', lat: 35.777948, lng: 139.732599, terminal: false, routes: ['main'], info: '' },
      { id: 'n-akabaneiwabuchi', name: '赤羽岩淵', lat: 35.783417, lng: 139.722103, terminal: true, routes: ['main'], info: '埼玉高速鉄道線直通。' }
    ],
    routePatterns: {
      main: { name: '南北線', color: '#00AC9B', glowColor: 'rgba(0, 172, 155, 0.4)', isLoop: false, stations: ['n-meguro','n-shirokanedai','n-shirokanetakanawa','n-azabujuban','n-roppongiitchome','n-tameikesanno','n-nagatacho','n-yotsuya','n-ichigaya','n-iidabashi','n-korakuen','n-todaimae','n-honkomagome','n-komagome','n-nishigahara','n-oji','n-ojikamiya','n-shimo','n-akabaneiwabuchi'] }
    },
    commonStations: [],
    renderDetails: function() { return `<div class="modal-section"><h3><span class="section-icon">ℹ️</span>路線概要</h3><p>目黒から都心を南北に貫き赤羽岩淵までを結ぶ最新設備の路線。</p></div>`; },
    renderLegend: function() { return `<div class="legend-item"><div class="legend-line metro-namboku"></div><span>南北線</span></div>`; }
  },

  // ==========================================
  // 東京メトロ 副都心線
  // ==========================================
  'metro-fukutoshin': {
    title: '東京メトロ 副都心線',
    icon: 'F',
    stationLetter: 'F',
    themeClass: 'metro-fukutoshin-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'f-wakoshi', name: '和光市', lat: 35.788507, lng: 139.612434, terminal: true, routes: ['main'], info: '東武東上線直通、有楽町線共用。' },
      { id: 'f-chikatetsunarimasu', name: '地下鉄成増', lat: 35.776557, lng: 139.631497, terminal: false, routes: ['main'], info: '' },
      { id: 'f-chikatetsuakatsuka', name: '地下鉄赤塚', lat: 35.769939, lng: 139.644021, terminal: false, routes: ['main'], info: '' },
      { id: 'f-heiwadai', name: '平和台', lat: 35.757863, lng: 139.653762, terminal: false, routes: ['main'], info: '' },
      { id: 'f-hikawadai', name: '氷川台', lat: 35.74955, lng: 139.665567, terminal: false, routes: ['main'], info: '' },
      { id: 'f-kotakemukaihara', name: '小竹向原', lat: 35.743803, lng: 139.678572, terminal: false, routes: ['main'], info: '西武線直通、有楽町線分岐。' },
      { id: 'f-senkawa', name: '千川', lat: 35.738229, lng: 139.689271, terminal: false, routes: ['main'], info: '' },
      { id: 'f-kanamecho', name: '要町', lat: 35.73323, lng: 139.698715, terminal: false, routes: ['main'], info: '' },
      { id: 'f-ikebukuro', name: '池袋', lat: 35.731464, lng: 139.708291, terminal: false, routes: ['main'], info: '丸ノ内線等乗換。' },
      { id: 'f-zoshigaya', name: '雑司が谷', lat: 35.720233, lng: 139.714795, terminal: false, routes: ['main'], info: '都電荒川線乗換。' },
      { id: 'f-nishiwaseda', name: '西早稲田', lat: 35.708242, lng: 139.709101, terminal: false, routes: ['main'], info: '' },
      { id: 'f-higashishinjuku', name: '東新宿', lat: 35.698915, lng: 139.707593, terminal: false, routes: ['main'], info: '都営大江戸線乗換。' },
      { id: 'f-shinjukusanchome', name: '新宿三丁目', lat: 35.690853, lng: 139.704828, terminal: false, routes: ['main'], info: '丸ノ内線、都営新宿線乗換。' },
      { id: 'f-kitasando', name: '北参道', lat: 35.678459, lng: 139.705453, terminal: false, routes: ['main'], info: '' },
      { id: 'f-meijijingumae', name: '明治神宮前〈原宿〉', lat: 35.668497, lng: 139.705367, terminal: false, routes: ['main'], info: '千代田線、JR乗換。' },
      { id: 'f-shibuya', name: '渋谷', lat: 35.659545, lng: 139.702417, terminal: true, routes: ['main'], info: '東急東横線へ直通。' }
    ],
    routePatterns: {
      main: { name: '副都心線', color: '#9C5E31', glowColor: 'rgba(156, 94, 49, 0.4)', isLoop: false, stations: ['f-wakoshi','f-chikatetsunarimasu','f-chikatetsuakatsuka','f-heiwadai','f-hikawadai','f-kotakemukaihara','f-senkawa','f-kanamecho','f-ikebukuro','f-zoshigaya','f-nishiwaseda','f-higashishinjuku','f-shinjukusanchome','f-kitasando','f-meijijingumae','f-shibuya'] }
    },
    commonStations: [],
    renderDetails: function() { return `<div class="modal-section"><h3><span class="section-icon">ℹ️</span>路線概要</h3><p>池袋、新宿、渋谷の三大副都心を結び、5社直通運転の要となる路線。</p></div>`; },
    renderLegend: function() { return `<div class="legend-item"><div class="legend-line metro-fukutoshin"></div><span>副都心線</span></div>`; }
  }
};

// app.js の appData に結合する
if (typeof appData !== 'undefined') {
  Object.assign(appData, metroData);
}

