const toeiData = {
  'toei-mita': {
    title: '都営三田線',
    icon: 'I',
    themeClass: 'toei-mita-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'tm-meguro', name: '目黒', lat: 35.6339, lng: 139.7158, terminal: true, routes: ['main'], info: '東急目黒線などと乗換可能', dist: '0.0km' },
      { id: 'tm-shirokanedai', name: '白金台', lat: 35.6377, lng: 139.7262, terminal: false, routes: ['main'], info: '', dist: '1.2km' },
      { id: 'tm-shirokanetakanawa', name: '白金高輪', lat: 35.6428, lng: 139.7340, terminal: false, routes: ['main'], info: '南北線と合流', dist: '2.2km' },
      { id: 'tm-mita', name: '三田', lat: 35.6483, lng: 139.7490, terminal: false, routes: ['main'], info: '都営浅草線・JR線乗換', dist: '3.9km' },
      { id: 'tm-shibakoen', name: '芝公園', lat: 35.6552, lng: 139.7483, terminal: false, routes: ['main'], info: '', dist: '4.5km' },
      { id: 'tm-onarimon', name: '御成門', lat: 35.6616, lng: 139.7523, terminal: false, routes: ['main'], info: '', dist: '5.2km' },
      { id: 'tm-uchisaiwaicho', name: '内幸町', lat: 35.6703, lng: 139.7554, terminal: false, routes: ['main'], info: '', dist: '6.3km' },
      { id: 'tm-hibiya', name: '日比谷', lat: 35.6749, lng: 139.7594, terminal: false, routes: ['main'], info: '', dist: '7.2km' },
      { id: 'tm-otemachi', name: '大手町', lat: 35.6846, lng: 139.7628, terminal: false, routes: ['main'], info: '複数地下鉄路線と乗換可能', dist: '8.1km' },
      { id: 'tm-jimbocho', name: '神保町', lat: 35.6957, lng: 139.7578, terminal: false, routes: ['main'], info: '', dist: '9.5km' },
      { id: 'tm-suidobashi', name: '水道橋', lat: 35.7020, lng: 139.7536, terminal: false, routes: ['main'], info: '', dist: '10.5km' },
      { id: 'tm-kasuga', name: '春日', lat: 35.7086, lng: 139.7525, terminal: false, routes: ['main'], info: '', dist: '11.2km' },
      { id: 'tm-hakusan', name: '白山', lat: 35.7208, lng: 139.7516, terminal: false, routes: ['main'], info: '', dist: '12.6km' },
      { id: 'tm-sengoku', name: '千石', lat: 35.7280, lng: 139.7441, terminal: false, routes: ['main'], info: '', dist: '13.6km' },
      { id: 'tm-sugamo', name: '巣鴨', lat: 35.7335, lng: 139.7394, terminal: false, routes: ['main'], info: '', dist: '14.5km' },
      { id: 'tm-nishisugamo', name: '西巣鴨', lat: 35.7436, lng: 139.7284, terminal: false, routes: ['main'], info: '', dist: '15.9km' },
      { id: 'tm-shinitabashi', name: '新板橋', lat: 35.7487, lng: 139.7188, terminal: false, routes: ['main'], info: '', dist: '16.9km' },
      { id: 'tm-itabashikuyakushomae', name: '板橋区役所前', lat: 35.7514, lng: 139.7099, terminal: false, routes: ['main'], info: '', dist: '17.8km' },
      { id: 'tm-itabashihoncho', name: '板橋本町', lat: 35.7610, lng: 139.7042, terminal: false, routes: ['main'], info: '', dist: '19.0km' },
      { id: 'tm-motohasunuma', name: '本蓮沼', lat: 35.7684, lng: 139.7011, terminal: false, routes: ['main'], info: '', dist: '19.9km' },
      { id: 'tm-shimurasakaue', name: '志村坂上', lat: 35.7766, lng: 139.6961, terminal: false, routes: ['main'], info: '', dist: '21.0km' },
      { id: 'tm-shimurasanchome', name: '志村三丁目', lat: 35.7831, lng: 139.6853, terminal: false, routes: ['main'], info: '', dist: '21.9km' },
      { id: 'tm-hasune', name: '蓮根', lat: 35.7844, lng: 139.6749, terminal: false, routes: ['main'], info: '', dist: '23.1km' },
      { id: 'tm-nishidai', name: '西台', lat: 35.7871, lng: 139.6675, terminal: false, routes: ['main'], info: '', dist: '23.9km' },
      { id: 'tm-takashimadaira', name: '高島平', lat: 35.7885, lng: 139.6596, terminal: false, routes: ['main'], info: '', dist: '24.9km' },
      { id: 'tm-shintakashimadaira', name: '新高島平', lat: 35.7896, lng: 139.6521, terminal: false, routes: ['main'], info: '', dist: '25.6km' },
      { id: 'tm-nishitakashimadaira', name: '西高島平', lat: 35.7915, lng: 139.6433, terminal: true, routes: ['main'], info: '三田線の終着駅', dist: '26.5km' }
    ],
    routePatterns: {
      main: { name: '三田線', color: '#0079C2', glowColor: 'rgba(0, 121, 194, 0.4)', isLoop: false, stations: ['tm-meguro', 'tm-shirokanedai', 'tm-shirokanetakanawa', 'tm-mita', 'tm-shibakoen', 'tm-onarimon', 'tm-uchisaiwaicho', 'tm-hibiya', 'tm-otemachi', 'tm-jimbocho', 'tm-suidobashi', 'tm-kasuga', 'tm-hakusan', 'tm-sengoku', 'tm-sugamo', 'tm-nishisugamo', 'tm-shinitabashi', 'tm-itabashikuyakushomae', 'tm-itabashihoncho', 'tm-motohasunuma', 'tm-shimurasakaue', 'tm-shimurasanchome', 'tm-hasune', 'tm-nishidai', 'tm-takashimadaira', 'tm-shintakashimadaira', 'tm-nishitakashimadaira'] }
    },
    renderDetails() {
      return `
        <div class="modal-section">
          <h3><span class="section-icon">🚉</span>三田線 概要</h3>
          <div class="time-cards" style="margin-bottom:12px;">
            <div class="time-card"><div class="route-name" style="color:var(--accent-toei-mita);">全線走破</div><div class="time-value">53</div><div class="time-unit">目黒〜西高島平 (約53分)</div></div>
            <div class="time-card"><div class="route-name" style="color:var(--accent-toei-mita);">駅数</div><div class="time-value">27</div><div class="time-unit">全27駅 (26.5km)</div></div>
          </div>
        </div>
      `;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line toei-mita"></div><span>都営三田線</span></div>`;
    }
  },

  'toei-shinjuku': {
    title: '都営新宿線',
    icon: 'S',
    themeClass: 'toei-shinjuku-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'ts-shinjuku', name: '新宿', lat: 35.6885, lng: 139.6994, terminal: true, routes: ['main'], info: '京王新線直通', dist: '0.0km' },
      { id: 'ts-shinjukusanchome', name: '新宿三丁目', lat: 35.6908, lng: 139.7051, terminal: false, routes: ['main'], info: '', dist: '0.8km' },
      { id: 'ts-akebonobashi', name: '曙橋', lat: 35.6922, lng: 139.7226, terminal: false, routes: ['main'], info: '', dist: '2.3km' },
      { id: 'ts-ichigaya', name: '市ヶ谷', lat: 35.6912, lng: 139.7362, terminal: false, routes: ['main'], info: '', dist: '3.7km' },
      { id: 'ts-kudanshita', name: '九段下', lat: 35.6956, lng: 139.7516, terminal: false, routes: ['main'], info: '', dist: '5.0km' },
      { id: 'ts-jimbocho', name: '神保町', lat: 35.6957, lng: 139.7578, terminal: false, routes: ['main'], info: '', dist: '5.6km' },
      { id: 'ts-ogawamachi', name: '小川町', lat: 35.6952, lng: 139.7663, terminal: false, routes: ['main'], info: '', dist: '6.5km' },
      { id: 'ts-iwamotocho', name: '岩本町', lat: 35.6951, lng: 139.7749, terminal: false, routes: ['main'], info: '', dist: '7.3km' },
      { id: 'ts-bakuroyokoyama', name: '馬喰横山', lat: 35.6920, lng: 139.7836, terminal: false, routes: ['main'], info: '', dist: '8.1km' },
      { id: 'ts-hamacho', name: '浜町', lat: 35.6874, lng: 139.7891, terminal: false, routes: ['main'], info: '', dist: '8.7km' },
      { id: 'ts-morishita', name: '森下', lat: 35.6881, lng: 139.7981, terminal: false, routes: ['main'], info: '', dist: '9.5km' },
      { id: 'ts-kikukawa', name: '菊川', lat: 35.6885, lng: 139.8077, terminal: false, routes: ['main'], info: '', dist: '10.3km' },
      { id: 'ts-sumiyoshi', name: '住吉', lat: 35.6887, lng: 139.8166, terminal: false, routes: ['main'], info: '', dist: '11.2km' },
      { id: 'ts-nishiojima', name: '西大島', lat: 35.6896, lng: 139.8267, terminal: false, routes: ['main'], info: '', dist: '12.2km' },
      { id: 'ts-ojima', name: '大島', lat: 35.6896, lng: 139.8354, terminal: false, routes: ['main'], info: '', dist: '12.9km' },
      { id: 'ts-higashiojima', name: '東大島', lat: 35.6908, lng: 139.8465, terminal: false, routes: ['main'], info: '', dist: '14.1km' },
      { id: 'ts-funabori', name: '船堀', lat: 35.6838, lng: 139.8631, terminal: false, routes: ['main'], info: '', dist: '15.8km' },
      { id: 'ts-ichinoe', name: '一之江', lat: 35.6861, lng: 139.8827, terminal: false, routes: ['main'], info: '', dist: '17.5km' },
      { id: 'ts-mizue', name: '瑞江', lat: 35.6934, lng: 139.8978, terminal: false, routes: ['main'], info: '', dist: '19.2km' },
      { id: 'ts-shinozaki', name: '篠崎', lat: 35.7058, lng: 139.9044, terminal: false, routes: ['main'], info: '', dist: '20.7km' },
      { id: 'ts-motoyawata', name: '本八幡', lat: 35.7202, lng: 139.9272, terminal: true, routes: ['main'], info: '新宿線の終着駅', dist: '23.5km' }
    ],
    routePatterns: {
      main: { name: '新宿線', color: '#6CBB5A', glowColor: 'rgba(108, 187, 90, 0.4)', isLoop: false, stations: ['ts-shinjuku', 'ts-shinjukusanchome', 'ts-akebonobashi', 'ts-ichigaya', 'ts-kudanshita', 'ts-jimbocho', 'ts-ogawamachi', 'ts-iwamotocho', 'ts-bakuroyokoyama', 'ts-hamacho', 'ts-morishita', 'ts-kikukawa', 'ts-sumiyoshi', 'ts-nishiojima', 'ts-ojima', 'ts-higashiojima', 'ts-funabori', 'ts-ichinoe', 'ts-mizue', 'ts-shinozaki', 'ts-motoyawata'] }
    },
    renderDetails() {
      return `
        <div class="modal-section">
          <h3><span class="section-icon">🚉</span>新宿線 概要</h3>
          <div class="time-cards" style="margin-bottom:12px;">
            <div class="time-card"><div class="route-name" style="color:var(--accent-toei-shinjuku);">全線走破</div><div class="time-value">40</div><div class="time-unit">新宿〜本八幡 (約40分)</div></div>
            <div class="time-card"><div class="route-name" style="color:var(--accent-toei-shinjuku);">駅数</div><div class="time-value">21</div><div class="time-unit">全21駅 (23.5km)</div></div>
          </div>
        </div>
      `;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line toei-shinjuku"></div><span>都営新宿線</span></div>`;
    }
  },

  'toei-oedo': {
    title: '都営大江戸線',
    icon: 'E',
    themeClass: 'toei-oedo-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'to-hikarigaoka', name: '光が丘', lat: 35.7583, lng: 139.6300, terminal: true, routes: ['main'], info: '大江戸線の起点', dist: '0.0km' },
      { id: 'to-nerimakasugacho', name: '練馬春日町', lat: 35.7523, lng: 139.6416, terminal: false, routes: ['main'], info: '', dist: '1.4km' },
      { id: 'to-toshimaen', name: '豊島園', lat: 35.7419, lng: 139.6482, terminal: false, routes: ['main'], info: '', dist: '2.9km' },
      { id: 'to-nerima', name: '練馬', lat: 35.7375, lng: 139.6543, terminal: false, routes: ['main'], info: '', dist: '3.8km' },
      { id: 'to-shinegota', name: '新江古田', lat: 35.7335, lng: 139.6698, terminal: false, routes: ['main'], info: '', dist: '5.4km' },
      { id: 'to-ochiaiminaminagasaki', name: '落合南長崎', lat: 35.7238, lng: 139.6830, terminal: false, routes: ['main'], info: '', dist: '7.0km' },
      { id: 'to-nakai', name: '中井', lat: 35.7144, lng: 139.6865, terminal: false, routes: ['main'], info: '', dist: '8.5km' },
      { id: 'to-higashinakano', name: '東中野', lat: 35.7061, lng: 139.6833, terminal: false, routes: ['main'], info: '', dist: '9.3km' },
      { id: 'to-nakanosakaue', name: '中野坂上', lat: 35.6973, lng: 139.6826, terminal: false, routes: ['main'], info: '', dist: '10.5km' },
      { id: 'to-nishishinjukugochome', name: '西新宿五丁目', lat: 35.6888, lng: 139.6859, terminal: false, routes: ['main'], info: '', dist: '11.8km' },
      { id: 'to-tochomae', name: '都庁前', lat: 35.6896, lng: 139.6917, terminal: false, routes: ['main'], info: '大江戸線の乗換中心', dist: '12.5km' },
      { id: 'to-shinjuku', name: '新宿', lat: 35.6885, lng: 139.6994, terminal: false, routes: ['main'], info: '', dist: '13.3km' },
      { id: 'to-yoyogi', name: '代々木', lat: 35.6828, lng: 139.7022, terminal: false, routes: ['main'], info: '', dist: '13.9km' },
      { id: 'to-kokuritsukyogijo', name: '国立競技場', lat: 35.6800, lng: 139.7140, terminal: false, routes: ['main'], info: '', dist: '15.4km' },
      { id: 'to-aoyamaitchome', name: '青山一丁目', lat: 35.6728, lng: 139.7240, terminal: false, routes: ['main'], info: '', dist: '16.6km' },
      { id: 'to-roppongi', name: '六本木', lat: 35.6628, lng: 139.7329, terminal: false, routes: ['main'], info: '', dist: '18.0km' },
      { id: 'to-azabujuban', name: '麻布十番', lat: 35.6545, lng: 139.7371, terminal: false, routes: ['main'], info: '', dist: '19.2km' },
      { id: 'to-akabanebashi', name: '赤羽橋', lat: 35.6548, lng: 139.7438, terminal: false, routes: ['main'], info: '', dist: '20.0km' },
      { id: 'to-daimon', name: '大門', lat: 35.6568, lng: 139.7547, terminal: false, routes: ['main'], info: '', dist: '21.3km' },
      { id: 'to-shiodome', name: '汐留', lat: 35.6622, lng: 139.7601, terminal: false, routes: ['main'], info: '', dist: '22.2km' },
      { id: 'to-tsukijishijo', name: '築地市場', lat: 35.6663, lng: 139.7667, terminal: false, routes: ['main'], info: '', dist: '23.1km' },
      { id: 'to-kachidoki', name: '勝どき', lat: 35.6593, lng: 139.7769, terminal: false, routes: ['main'], info: '', dist: '24.6km' },
      { id: 'to-tsukishima', name: '月島', lat: 35.6631, lng: 139.7844, terminal: false, routes: ['main'], info: '', dist: '25.4km' },
      { id: 'to-monzennakacho', name: '門前仲町', lat: 35.6718, lng: 139.7963, terminal: false, routes: ['main'], info: '', dist: '26.8km' },
      { id: 'to-kiyosumishirakawa', name: '清澄白河', lat: 35.6823, lng: 139.7981, terminal: false, routes: ['main'], info: '', dist: '28.0km' },
      { id: 'to-morishita', name: '森下', lat: 35.6881, lng: 139.7981, terminal: false, routes: ['main'], info: '', dist: '28.8km' },
      { id: 'to-ryogoku', name: '両国', lat: 35.6963, lng: 139.7932, terminal: false, routes: ['main'], info: '', dist: '29.8km' },
      { id: 'to-kuramae', name: '蔵前', lat: 35.7037, lng: 139.7891, terminal: false, routes: ['main'], info: '', dist: '30.8km' },
      { id: 'to-shinokachimachi', name: '新御徒町', lat: 35.7061, lng: 139.7818, terminal: false, routes: ['main'], info: '', dist: '31.6km' },
      { id: 'to-uenookachimachi', name: '上野御徒町', lat: 35.7068, lng: 139.7732, terminal: false, routes: ['main'], info: '', dist: '32.4km' },
      { id: 'to-hongosanchome', name: '本郷三丁目', lat: 35.7077, lng: 139.7597, terminal: false, routes: ['main'], info: '', dist: '33.2km' },
      { id: 'to-kasuga', name: '春日', lat: 35.7086, lng: 139.7525, terminal: false, routes: ['main'], info: '', dist: '34.2km' },
      { id: 'to-iidabashi', name: '飯田橋', lat: 35.7020, lng: 139.7456, terminal: false, routes: ['main'], info: '', dist: '35.2km' },
      { id: 'to-ushigomekagurazaka', name: '牛込神楽坂', lat: 35.7001, lng: 139.7346, terminal: false, routes: ['main'], info: '', dist: '36.2km' },
      { id: 'to-ushigomeyanagicho', name: '牛込柳町', lat: 35.6989, lng: 139.7259, terminal: false, routes: ['main'], info: '', dist: '37.2km' },
      { id: 'to-wakamatsukawada', name: '若松河田', lat: 35.6991, lng: 139.7176, terminal: false, routes: ['main'], info: '', dist: '38.1km' },
      { id: 'to-higashishinjuku', name: '東新宿', lat: 35.6976, lng: 139.7086, terminal: false, routes: ['main'], info: '', dist: '39.0km' },
      { id: 'to-shinjukunishiguchi', name: '新宿西口', lat: 35.6933, lng: 139.6997, terminal: false, routes: ['main'], info: '', dist: '39.8km' },
      // Loop ends back at Tochomae
    ],
    routePatterns: {
      main: { 
        name: '大江戸線', 
        color: '#B6007A', 
        glowColor: 'rgba(182, 0, 122, 0.4)', 
        isLoop: false, // 厳密にはループではなく「6の字」
        stations: ['to-hikarigaoka', 'to-nerimakasugacho', 'to-toshimaen', 'to-nerima', 'to-shinegota', 'to-ochiaiminaminagasaki', 'to-nakai', 'to-higashinakano', 'to-nakanosakaue', 'to-nishishinjukugochome', 'to-tochomae', 'to-shinjuku', 'to-yoyogi', 'to-kokuritsukyogijo', 'to-aoyamaitchome', 'to-roppongi', 'to-azabujuban', 'to-akabanebashi', 'to-daimon', 'to-shiodome', 'to-tsukijishijo', 'to-kachidoki', 'to-tsukishima', 'to-monzennakacho', 'to-kiyosumishirakawa', 'to-morishita', 'to-ryogoku', 'to-kuramae', 'to-shinokachimachi', 'to-uenookachimachi', 'to-hongosanchome', 'to-kasuga', 'to-iidabashi', 'to-ushigomekagurazaka', 'to-ushigomeyanagicho', 'to-wakamatsukawada', 'to-higashishinjuku', 'to-shinjukunishiguchi', 'to-tochomae'] 
      }
    },
    renderDetails() {
      return `
        <div class="modal-section">
          <h3><span class="section-icon">🚉</span>大江戸線 概要</h3>
          <div class="time-cards" style="margin-bottom:12px;">
            <div class="time-card"><div class="route-name" style="color:var(--accent-toei-oedo);">全線走破</div><div class="time-value">81</div><div class="time-unit">光が丘〜都庁前(1周) (約81分)</div></div>
            <div class="time-card"><div class="route-name" style="color:var(--accent-toei-oedo);">駅数</div><div class="time-value">38</div><div class="time-unit">全38駅 (40.7km)</div></div>
          </div>
        </div>
      `;
    },
    renderLegend() {
      return `<div class="legend-item"><div class="legend-line toei-oedo"></div><span>都営大江戸線</span></div>`;
    }
  }
};

// app.js の appData に結合する
if (typeof appData !== 'undefined') {
  Object.assign(appData, toeiData);
}
