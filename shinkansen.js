const shinkansenData = {};

shinkansenData['shinkansen-kyushu'] = {
  title: '九州新幹線',
  icon: 'SK',
  themeClass: 'shinkansen-theme',
  hasSubRoutes: false,
  stations: [
      { id: 'shinkansen-kyushu-博多', name: '博多', lat: 33.590002, lng: 130.420622, terminal: true, routes: ['main'] },
      { id: 'shinkansen-kyushu-新鳥栖', name: '新鳥栖', lat: 33.370278, lng: 130.491111, terminal: false, routes: ['main'] },
      { id: 'shinkansen-kyushu-久留米', name: '久留米', lat: 33.319778, lng: 130.501408, terminal: false, routes: ['main'] },
      { id: 'shinkansen-kyushu-筑後船小屋', name: '筑後船小屋', lat: 33.178023, lng: 130.491604, terminal: false, routes: ['main'] },
      { id: 'shinkansen-kyushu-新大牟田', name: '新大牟田', lat: 33.071012, lng: 130.488795, terminal: false, routes: ['main'] },
      { id: 'shinkansen-kyushu-新玉名', name: '新玉名', lat: 32.942461, lng: 130.573686, terminal: false, routes: ['main'] },
      { id: 'shinkansen-kyushu-熊本', name: '熊本', lat: 32.789207, lng: 130.688499, terminal: false, routes: ['main'] },
      { id: 'shinkansen-kyushu-新八代', name: '新八代', lat: 32.517888, lng: 130.634919, terminal: false, routes: ['main'] },
      { id: 'shinkansen-kyushu-新水俣', name: '新水俣', lat: 32.210825, lng: 130.428893, terminal: false, routes: ['main'] },
      { id: 'shinkansen-kyushu-出水', name: '出水', lat: 32.089275, lng: 130.357803, terminal: false, routes: ['main'] },
      { id: 'shinkansen-kyushu-川内', name: '川内', lat: 31.813726, lng: 130.31213, terminal: false, routes: ['main'] },
      { id: 'shinkansen-kyushu-鹿児島中央', name: '鹿児島中央', lat: 31.583727, lng: 130.541789, terminal: true, routes: ['main'] }
  ],
  routePatterns: {
    main: { name: '九州新幹線', color: '#FF0000', glowColor: 'rgba(255, 0, 0, 0.4)', isLoop: false, stations: ['shinkansen-kyushu-博多', 'shinkansen-kyushu-新鳥栖', 'shinkansen-kyushu-久留米', 'shinkansen-kyushu-筑後船小屋', 'shinkansen-kyushu-新大牟田', 'shinkansen-kyushu-新玉名', 'shinkansen-kyushu-熊本', 'shinkansen-kyushu-新八代', 'shinkansen-kyushu-新水俣', 'shinkansen-kyushu-出水', 'shinkansen-kyushu-川内', 'shinkansen-kyushu-鹿児島中央'] }
  },
  renderDetails() { return `<div class="modal-section"><p>九州新幹線</p></div>`; },
  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#FF0000"></div><span>九州新幹線</span></div>`; }
};

shinkansenData['shinkansen-tohoku'] = {
  title: '東北新幹線',
  icon: 'SK',
  themeClass: 'shinkansen-theme',
  hasSubRoutes: false,
  stations: [
      { id: 'shinkansen-tohoku-東京', name: '東京', lat: 35.681391, lng: 139.766103, terminal: true, routes: ['main'] },
      { id: 'shinkansen-tohoku-上野', name: '上野', lat: 35.71379, lng: 139.777043, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-大宮', name: '大宮', lat: 35.906439, lng: 139.62405, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-小山', name: '小山', lat: 36.312747, lng: 139.806241, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-宇都宮', name: '宇都宮', lat: 36.559246, lng: 139.898389, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-那須塩原', name: '那須塩原', lat: 36.931956, lng: 140.020694, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-新白河', name: '新白河', lat: 37.12331, lng: 140.188969, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-郡山', name: '郡山', lat: 37.398187, lng: 140.389363, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-福島', name: '福島', lat: 37.754123, lng: 140.45968, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-白石蔵王', name: '白石蔵王', lat: 37.995052, lng: 140.632881, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-仙台', name: '仙台', lat: 38.260027, lng: 140.882158, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-古川', name: '古川', lat: 38.571192, lng: 140.967876, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-くりこま高原', name: 'くりこま高原', lat: 38.749024, lng: 141.071756, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-一ノ関', name: '一ノ関', lat: 38.926514, lng: 141.138177, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-水沢江刺', name: '水沢江刺', lat: 39.14526, lng: 141.188748, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-北上', name: '北上', lat: 39.281196, lng: 141.121221, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-新花巻', name: '新花巻', lat: 39.405839, lng: 141.17302, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-盛岡', name: '盛岡', lat: 39.701547, lng: 141.136599, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-いわて沼宮内', name: 'いわて沼宮内', lat: 39.960155, lng: 141.216955, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-二戸', name: '二戸', lat: 40.25997, lng: 141.286211, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-八戸', name: '八戸', lat: 40.509485, lng: 141.431067, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-七戸十和田', name: '七戸十和田', lat: 40.719954, lng: 141.153817, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tohoku-新青森', name: '新青森', lat: 40.8275, lng: 140.693472, terminal: true, routes: ['main'] }
  ],
  routePatterns: {
    main: { name: '東北新幹線', color: '#00B261', glowColor: 'rgba(0, 178, 97, 0.4)', isLoop: false, stations: ['shinkansen-tohoku-東京', 'shinkansen-tohoku-上野', 'shinkansen-tohoku-大宮', 'shinkansen-tohoku-小山', 'shinkansen-tohoku-宇都宮', 'shinkansen-tohoku-那須塩原', 'shinkansen-tohoku-新白河', 'shinkansen-tohoku-郡山', 'shinkansen-tohoku-福島', 'shinkansen-tohoku-白石蔵王', 'shinkansen-tohoku-仙台', 'shinkansen-tohoku-古川', 'shinkansen-tohoku-くりこま高原', 'shinkansen-tohoku-一ノ関', 'shinkansen-tohoku-水沢江刺', 'shinkansen-tohoku-北上', 'shinkansen-tohoku-新花巻', 'shinkansen-tohoku-盛岡', 'shinkansen-tohoku-いわて沼宮内', 'shinkansen-tohoku-二戸', 'shinkansen-tohoku-八戸', 'shinkansen-tohoku-七戸十和田', 'shinkansen-tohoku-新青森'] }
  },
  renderDetails() { return `<div class="modal-section"><p>東北新幹線</p></div>`; },
  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#00B261"></div><span>東北新幹線</span></div>`; }
};

shinkansenData['shinkansen-akita'] = {
  title: '秋田新幹線',
  icon: 'SK',
  themeClass: 'shinkansen-theme',
  hasSubRoutes: false,
  stations: [
      { id: 'shinkansen-akita-盛岡', name: '盛岡', lat: 39.701547, lng: 141.136599, terminal: true, routes: ['main'] },
      { id: 'shinkansen-akita-雫石', name: '雫石', lat: 39.689244, lng: 140.974762, terminal: false, routes: ['main'] },
      { id: 'shinkansen-akita-田沢湖', name: '田沢湖', lat: 39.700363, lng: 140.722139, terminal: false, routes: ['main'] },
      { id: 'shinkansen-akita-角館', name: '角館', lat: 39.591716, lng: 140.570988, terminal: false, routes: ['main'] },
      { id: 'shinkansen-akita-大曲', name: '大曲', lat: 39.465712, lng: 140.479628, terminal: false, routes: ['main'] },
      { id: 'shinkansen-akita-秋田', name: '秋田', lat: 39.716748, lng: 140.129931, terminal: true, routes: ['main'] }
  ],
  routePatterns: {
    main: { name: '秋田新幹線', color: '#E7347A', glowColor: 'rgba(231, 52, 122, 0.4)', isLoop: false, stations: ['shinkansen-akita-盛岡', 'shinkansen-akita-雫石', 'shinkansen-akita-田沢湖', 'shinkansen-akita-角館', 'shinkansen-akita-大曲', 'shinkansen-akita-秋田'] }
  },
  renderDetails() { return `<div class="modal-section"><p>秋田新幹線</p></div>`; },
  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#E7347A"></div><span>秋田新幹線</span></div>`; }
};

shinkansenData['shinkansen-joetsu'] = {
  title: '上越新幹線',
  icon: 'SK',
  themeClass: 'shinkansen-theme',
  hasSubRoutes: false,
  stations: [
      { id: 'shinkansen-joetsu-東京', name: '東京', lat: 35.681391, lng: 139.766103, terminal: true, routes: ['main'] },
      { id: 'shinkansen-joetsu-上野', name: '上野', lat: 35.71379, lng: 139.777043, terminal: false, routes: ['main'] },
      { id: 'shinkansen-joetsu-大宮', name: '大宮', lat: 35.906439, lng: 139.62405, terminal: false, routes: ['main'] },
      { id: 'shinkansen-joetsu-熊谷', name: '熊谷', lat: 36.139627, lng: 139.389528, terminal: false, routes: ['main'] },
      { id: 'shinkansen-joetsu-本庄早稲田', name: '本庄早稲田', lat: 36.218758, lng: 139.179682, terminal: false, routes: ['main'] },
      { id: 'shinkansen-joetsu-高崎', name: '高崎', lat: 36.322239, lng: 139.012354, terminal: false, routes: ['main'] },
      { id: 'shinkansen-joetsu-上毛高原', name: '上毛高原', lat: 36.69317, lng: 138.977572, terminal: false, routes: ['main'] },
      { id: 'shinkansen-joetsu-越後湯沢', name: '越後湯沢', lat: 36.935799, lng: 138.809227, terminal: false, routes: ['main'] },
      { id: 'shinkansen-joetsu-浦佐', name: '浦佐', lat: 37.167488, lng: 138.922798, terminal: false, routes: ['main'] },
      { id: 'shinkansen-joetsu-長岡', name: '長岡', lat: 37.447787, lng: 138.853927, terminal: false, routes: ['main'] },
      { id: 'shinkansen-joetsu-燕三条', name: '燕三条', lat: 37.648824, lng: 138.939274, terminal: false, routes: ['main'] },
      { id: 'shinkansen-joetsu-新潟', name: '新潟', lat: 37.912299, lng: 139.060869, terminal: true, routes: ['main'] }
  ],
  routePatterns: {
    main: { name: '上越新幹線', color: '#E44D93', glowColor: 'rgba(228, 77, 147, 0.4)', isLoop: false, stations: ['shinkansen-joetsu-東京', 'shinkansen-joetsu-上野', 'shinkansen-joetsu-大宮', 'shinkansen-joetsu-熊谷', 'shinkansen-joetsu-本庄早稲田', 'shinkansen-joetsu-高崎', 'shinkansen-joetsu-上毛高原', 'shinkansen-joetsu-越後湯沢', 'shinkansen-joetsu-浦佐', 'shinkansen-joetsu-長岡', 'shinkansen-joetsu-燕三条', 'shinkansen-joetsu-新潟'] }
  },
  renderDetails() { return `<div class="modal-section"><p>上越新幹線</p></div>`; },
  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#E44D93"></div><span>上越新幹線</span></div>`; }
};

shinkansenData['shinkansen-hokkaido'] = {
  title: '北海道新幹線',
  icon: 'SK',
  themeClass: 'shinkansen-theme',
  hasSubRoutes: false,
  stations: [
      { id: 'shinkansen-hokkaido-新青森', name: '新青森', lat: 40.8275, lng: 140.693472, terminal: true, routes: ['main'] },
      { id: 'shinkansen-hokkaido-奥津軽いまべつ', name: '奥津軽いまべつ', lat: 41.144799, lng: 140.515937, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokkaido-木古内', name: '木古内', lat: 41.677642, lng: 140.434004, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokkaido-新函館北斗', name: '新函館北斗', lat: 41.9054, lng: 140.646525, terminal: true, routes: ['main'] }
  ],
  routePatterns: {
    main: { name: '北海道新幹線', color: '#A4CE3A', glowColor: 'rgba(164, 206, 58, 0.4)', isLoop: false, stations: ['shinkansen-hokkaido-新青森', 'shinkansen-hokkaido-奥津軽いまべつ', 'shinkansen-hokkaido-木古内', 'shinkansen-hokkaido-新函館北斗'] }
  },
  renderDetails() { return `<div class="modal-section"><p>北海道新幹線</p></div>`; },
  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#A4CE3A"></div><span>北海道新幹線</span></div>`; }
};

shinkansenData['shinkansen-yamagata'] = {
  title: '山形新幹線',
  icon: 'SK',
  themeClass: 'shinkansen-theme',
  hasSubRoutes: false,
  stations: [
      { id: 'shinkansen-yamagata-福島', name: '福島', lat: 37.754123, lng: 140.45968, terminal: true, routes: ['main'] },
      { id: 'shinkansen-yamagata-米沢', name: '米沢', lat: 37.909478, lng: 140.128209, terminal: false, routes: ['main'] },
      { id: 'shinkansen-yamagata-高畠', name: '高畠', lat: 37.992314, lng: 140.15281, terminal: false, routes: ['main'] },
      { id: 'shinkansen-yamagata-赤湯', name: '赤湯', lat: 38.047081, lng: 140.148978, terminal: false, routes: ['main'] },
      { id: 'shinkansen-yamagata-かみのやま温泉', name: 'かみのやま温泉', lat: 38.152259, lng: 140.27867, terminal: false, routes: ['main'] },
      { id: 'shinkansen-yamagata-山形', name: '山形', lat: 38.248098, lng: 140.327253, terminal: false, routes: ['main'] },
      { id: 'shinkansen-yamagata-天童', name: '天童', lat: 38.35989, lng: 140.369303, terminal: false, routes: ['main'] },
      { id: 'shinkansen-yamagata-さくらんぼ東根', name: 'さくらんぼ東根', lat: 38.42806, lng: 140.380677, terminal: false, routes: ['main'] },
      { id: 'shinkansen-yamagata-村山', name: '村山', lat: 38.477078, lng: 140.386399, terminal: false, routes: ['main'] },
      { id: 'shinkansen-yamagata-大石田', name: '大石田', lat: 38.595916, lng: 140.375349, terminal: false, routes: ['main'] },
      { id: 'shinkansen-yamagata-新庄', name: '新庄', lat: 38.76256, lng: 140.306064, terminal: true, routes: ['main'] }
  ],
  routePatterns: {
    main: { name: '山形新幹線', color: '#FF7F00', glowColor: 'rgba(255, 127, 0, 0.4)', isLoop: false, stations: ['shinkansen-yamagata-福島', 'shinkansen-yamagata-米沢', 'shinkansen-yamagata-高畠', 'shinkansen-yamagata-赤湯', 'shinkansen-yamagata-かみのやま温泉', 'shinkansen-yamagata-山形', 'shinkansen-yamagata-天童', 'shinkansen-yamagata-さくらんぼ東根', 'shinkansen-yamagata-村山', 'shinkansen-yamagata-大石田', 'shinkansen-yamagata-新庄'] }
  },
  renderDetails() { return `<div class="modal-section"><p>山形新幹線</p></div>`; },
  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#FF7F00"></div><span>山形新幹線</span></div>`; }
};

shinkansenData['shinkansen-sanyo'] = {
  title: '山陽新幹線',
  icon: 'SK',
  themeClass: 'shinkansen-theme',
  hasSubRoutes: false,
  stations: [
      { id: 'shinkansen-sanyo-新大阪', name: '新大阪', lat: 34.734136, lng: 135.501852, terminal: true, routes: ['main'] },
      { id: 'shinkansen-sanyo-新神戸', name: '新神戸', lat: 34.706417, lng: 135.195758, terminal: false, routes: ['main'] },
      { id: 'shinkansen-sanyo-西明石', name: '西明石', lat: 34.66591, lng: 134.960151, terminal: false, routes: ['main'] },
      { id: 'shinkansen-sanyo-姫路', name: '姫路', lat: 34.827659, lng: 134.690769, terminal: false, routes: ['main'] },
      { id: 'shinkansen-sanyo-相生', name: '相生', lat: 34.818052, lng: 134.47341, terminal: false, routes: ['main'] },
      { id: 'shinkansen-sanyo-岡山', name: '岡山', lat: 34.666572, lng: 133.918552, terminal: false, routes: ['main'] },
      { id: 'shinkansen-sanyo-新倉敷', name: '新倉敷', lat: 34.56509, lng: 133.678344, terminal: false, routes: ['main'] },
      { id: 'shinkansen-sanyo-福山', name: '福山', lat: 34.489291, lng: 133.361429, terminal: false, routes: ['main'] },
      { id: 'shinkansen-sanyo-新尾道', name: '新尾道', lat: 34.430034, lng: 133.190258, terminal: false, routes: ['main'] },
      { id: 'shinkansen-sanyo-三原', name: '三原', lat: 34.400486, lng: 133.083049, terminal: false, routes: ['main'] },
      { id: 'shinkansen-sanyo-東広島', name: '東広島', lat: 34.389269, lng: 132.759587, terminal: false, routes: ['main'] },
      { id: 'shinkansen-sanyo-広島', name: '広島', lat: 34.397446, lng: 132.475593, terminal: false, routes: ['main'] },
      { id: 'shinkansen-sanyo-新岩国', name: '新岩国', lat: 34.164918, lng: 132.149762, terminal: false, routes: ['main'] },
      { id: 'shinkansen-sanyo-徳山', name: '徳山', lat: 34.051555, lng: 131.8029, terminal: false, routes: ['main'] },
      { id: 'shinkansen-sanyo-新山口', name: '新山口', lat: 34.093255, lng: 131.39657, terminal: false, routes: ['main'] },
      { id: 'shinkansen-sanyo-厚狭', name: '厚狭', lat: 34.053361, lng: 131.159965, terminal: false, routes: ['main'] },
      { id: 'shinkansen-sanyo-新下関', name: '新下関', lat: 34.005651, lng: 130.948021, terminal: false, routes: ['main'] },
      { id: 'shinkansen-sanyo-小倉', name: '小倉', lat: 33.886756, lng: 130.882678, terminal: false, routes: ['main'] },
      { id: 'shinkansen-sanyo-博多', name: '博多', lat: 33.590002, lng: 130.420622, terminal: true, routes: ['main'] }
  ],
  routePatterns: {
    main: { name: '山陽新幹線', color: '#0068B7', glowColor: 'rgba(0, 104, 183, 0.4)', isLoop: false, stations: ['shinkansen-sanyo-新大阪', 'shinkansen-sanyo-新神戸', 'shinkansen-sanyo-西明石', 'shinkansen-sanyo-姫路', 'shinkansen-sanyo-相生', 'shinkansen-sanyo-岡山', 'shinkansen-sanyo-新倉敷', 'shinkansen-sanyo-福山', 'shinkansen-sanyo-新尾道', 'shinkansen-sanyo-三原', 'shinkansen-sanyo-東広島', 'shinkansen-sanyo-広島', 'shinkansen-sanyo-新岩国', 'shinkansen-sanyo-徳山', 'shinkansen-sanyo-新山口', 'shinkansen-sanyo-厚狭', 'shinkansen-sanyo-新下関', 'shinkansen-sanyo-小倉', 'shinkansen-sanyo-博多'] }
  },
  renderDetails() { return `<div class="modal-section"><p>山陽新幹線</p></div>`; },
  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#0068B7"></div><span>山陽新幹線</span></div>`; }
};

shinkansenData['shinkansen-nishikyushu'] = {
  title: '西九州新幹線',
  icon: 'SK',
  themeClass: 'shinkansen-theme',
  hasSubRoutes: false,
  stations: [
      { id: 'shinkansen-nishikyushu-武雄温泉', name: '武雄温泉', lat: 33.196288, lng: 130.023262, terminal: true, routes: ['main'] },
      { id: 'shinkansen-nishikyushu-嬉野温泉', name: '嬉野温泉', lat: 33.106613, lng: 129.998972, terminal: false, routes: ['main'] },
      { id: 'shinkansen-nishikyushu-新大村', name: '新大村', lat: 32.93299, lng: 129.95716, terminal: false, routes: ['main'] },
      { id: 'shinkansen-nishikyushu-諫早', name: '諫早', lat: 32.852012, lng: 130.041027, terminal: false, routes: ['main'] },
      { id: 'shinkansen-nishikyushu-長崎', name: '長崎', lat: 32.75245, lng: 129.86908, terminal: true, routes: ['main'] }
  ],
  routePatterns: {
    main: { name: '西九州新幹線', color: '#FF6600', glowColor: 'rgba(255, 102, 0, 0.4)', isLoop: false, stations: ['shinkansen-nishikyushu-武雄温泉', 'shinkansen-nishikyushu-嬉野温泉', 'shinkansen-nishikyushu-新大村', 'shinkansen-nishikyushu-諫早', 'shinkansen-nishikyushu-長崎'] }
  },
  renderDetails() { return `<div class="modal-section"><p>西九州新幹線</p></div>`; },
  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#FF6600"></div><span>西九州新幹線</span></div>`; }
};

shinkansenData['shinkansen-tokaido'] = {
  title: '東海道新幹線',
  icon: 'SK',
  themeClass: 'shinkansen-theme',
  hasSubRoutes: false,
  stations: [
      { id: 'shinkansen-tokaido-東京', name: '東京', lat: 35.681391, lng: 139.766103, terminal: true, routes: ['main'] },
      { id: 'shinkansen-tokaido-品川', name: '品川', lat: 35.62876, lng: 139.738999, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tokaido-新横浜', name: '新横浜', lat: 35.506824, lng: 139.617348, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tokaido-小田原', name: '小田原', lat: 35.256225, lng: 139.155772, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tokaido-熱海', name: '熱海', lat: 35.103573, lng: 139.077679, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tokaido-三島', name: '三島', lat: 35.126253, lng: 138.911133, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tokaido-新富士', name: '新富士', lat: 35.142185, lng: 138.663637, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tokaido-静岡', name: '静岡', lat: 34.971629, lng: 138.388579, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tokaido-掛川', name: '掛川', lat: 34.769463, lng: 138.014937, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tokaido-浜松', name: '浜松', lat: 34.703866, lng: 137.734759, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tokaido-豊橋', name: '豊橋', lat: 34.762734, lng: 137.382128, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tokaido-三河安城', name: '三河安城', lat: 34.96968, lng: 137.060918, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tokaido-名古屋', name: '名古屋', lat: 35.170694, lng: 136.881637, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tokaido-岐阜羽島', name: '岐阜羽島', lat: 35.316023, lng: 136.68537, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tokaido-米原', name: '米原', lat: 35.314657, lng: 136.289992, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tokaido-京都', name: '京都', lat: 34.985465, lng: 135.757748, terminal: false, routes: ['main'] },
      { id: 'shinkansen-tokaido-新大阪', name: '新大阪', lat: 34.734136, lng: 135.501852, terminal: true, routes: ['main'] }
  ],
  routePatterns: {
    main: { name: '東海道新幹線', color: '#0068B7', glowColor: 'rgba(0, 104, 183, 0.4)', isLoop: false, stations: ['shinkansen-tokaido-東京', 'shinkansen-tokaido-品川', 'shinkansen-tokaido-新横浜', 'shinkansen-tokaido-小田原', 'shinkansen-tokaido-熱海', 'shinkansen-tokaido-三島', 'shinkansen-tokaido-新富士', 'shinkansen-tokaido-静岡', 'shinkansen-tokaido-掛川', 'shinkansen-tokaido-浜松', 'shinkansen-tokaido-豊橋', 'shinkansen-tokaido-三河安城', 'shinkansen-tokaido-名古屋', 'shinkansen-tokaido-岐阜羽島', 'shinkansen-tokaido-米原', 'shinkansen-tokaido-京都', 'shinkansen-tokaido-新大阪'] }
  },
  renderDetails() { return `<div class="modal-section"><p>東海道新幹線</p></div>`; },
  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#0068B7"></div><span>東海道新幹線</span></div>`; }
};

shinkansenData['shinkansen-hokuriku'] = {
  title: '北陸新幹線',
  icon: 'SK',
  themeClass: 'shinkansen-theme',
  hasSubRoutes: false,
  stations: [
      { id: 'shinkansen-hokuriku-敦賀', name: '敦賀', lat: 35.644767, lng: 136.076488, terminal: true, routes: ['main'] },
      { id: 'shinkansen-hokuriku-越前たけふ', name: '越前たけふ', lat: 35.895695, lng: 136.198935, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-福井', name: '福井', lat: 36.062057, lng: 136.223516, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-芦原温泉', name: '芦原温泉', lat: 36.214542, lng: 136.235069, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-加賀温泉', name: '加賀温泉', lat: 36.320562, lng: 136.350337, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-小松', name: '小松', lat: 36.402545, lng: 136.452926, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-金沢', name: '金沢', lat: 36.578117, lng: 136.648166, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-新高岡', name: '新高岡', lat: 36.727004, lng: 137.010459, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-富山', name: '富山', lat: 36.701384, lng: 137.213091, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-黒部宇奈月温泉', name: '黒部宇奈月温泉', lat: 36.874232, lng: 137.481326, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-糸魚川', name: '糸魚川', lat: 37.043631, lng: 137.861311, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-上越妙高', name: '上越妙高', lat: 37.081813, lng: 138.249476, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-飯山', name: '飯山', lat: 36.845183, lng: 138.358939, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-長野', name: '長野', lat: 36.643307, lng: 138.189101, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-上田', name: '上田', lat: 36.396579, lng: 138.249298, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-佐久平', name: '佐久平', lat: 36.277929, lng: 138.464367, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-軽井沢', name: '軽井沢', lat: 36.342889, lng: 138.635096, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-安中榛名', name: '安中榛名', lat: 36.362582, lng: 138.849312, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-高崎', name: '高崎', lat: 36.322239, lng: 139.012354, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-本庄早稲田', name: '本庄早稲田', lat: 36.218754, lng: 139.179676, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-熊谷', name: '熊谷', lat: 36.139627, lng: 139.389528, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-大宮', name: '大宮', lat: 35.906439, lng: 139.62405, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-上野', name: '上野', lat: 35.71379, lng: 139.777043, terminal: false, routes: ['main'] },
      { id: 'shinkansen-hokuriku-東京', name: '東京', lat: 35.681391, lng: 139.766103, terminal: true, routes: ['main'] }
  ],
  routePatterns: {
    main: { name: '北陸新幹線', color: '#005BAC', glowColor: 'rgba(0, 91, 172, 0.4)', isLoop: false, stations: ['shinkansen-hokuriku-敦賀', 'shinkansen-hokuriku-越前たけふ', 'shinkansen-hokuriku-福井', 'shinkansen-hokuriku-芦原温泉', 'shinkansen-hokuriku-加賀温泉', 'shinkansen-hokuriku-小松', 'shinkansen-hokuriku-金沢', 'shinkansen-hokuriku-新高岡', 'shinkansen-hokuriku-富山', 'shinkansen-hokuriku-黒部宇奈月温泉', 'shinkansen-hokuriku-糸魚川', 'shinkansen-hokuriku-上越妙高', 'shinkansen-hokuriku-飯山', 'shinkansen-hokuriku-長野', 'shinkansen-hokuriku-上田', 'shinkansen-hokuriku-佐久平', 'shinkansen-hokuriku-軽井沢', 'shinkansen-hokuriku-安中榛名', 'shinkansen-hokuriku-高崎', 'shinkansen-hokuriku-本庄早稲田', 'shinkansen-hokuriku-熊谷', 'shinkansen-hokuriku-大宮', 'shinkansen-hokuriku-上野', 'shinkansen-hokuriku-東京'] }
  },
  renderDetails() { return `<div class="modal-section"><p>北陸新幹線</p></div>`; },
  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#005BAC"></div><span>北陸新幹線</span></div>`; }
};

Object.assign(appData, shinkansenData);
