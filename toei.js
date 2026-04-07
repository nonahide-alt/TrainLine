const toeiData = {
  'toei-mita': {
    title: '都営三田線',
    icon: 'I',
    themeClass: 'toei-mita-theme',
    hasSubRoutes: false,
    stations: [
      { id: 'tm-meguro', name: '目黒', lat: 35.633272, lng: 139.7155, terminal: true, routes: ['main'], info: '東急目黒線などと乗換可能', dist: '0.0km' },
      { id: 'tm-shirokanedai', name: '白金台', lat: 35.637917, lng: 139.726133, terminal: false, routes: ['main'], info: '', dist: '1.2km' },
      { id: 'tm-shirokanetakanawa', name: '白金高輪', lat: 35.642903, lng: 139.734104, terminal: false, routes: ['main'], info: '南北線と合流', dist: '2.2km' },
      { id: 'tm-mita', name: '三田', lat: 35.64818, lng: 139.748775, terminal: false, routes: ['main'], info: '都営浅草線・JR線乗換', dist: '3.9km' },
      { id: 'tm-shibakoen', name: '芝公園', lat: 35.654074, lng: 139.749824, terminal: false, routes: ['main'], info: '', dist: '4.5km' },
      { id: 'tm-onarimon', name: '御成門', lat: 35.661215, lng: 139.751535, terminal: false, routes: ['main'], info: '', dist: '5.2km' },
      { id: 'tm-uchisaiwaicho', name: '内幸町', lat: 35.66975, lng: 139.75561, terminal: false, routes: ['main'], info: '', dist: '6.3km' },
      { id: 'tm-hibiya', name: '日比谷', lat: 35.676036, lng: 139.759998, terminal: false, routes: ['main'], info: '', dist: '7.2km' },
      { id: 'tm-otemachi', name: '大手町', lat: 35.684856, lng: 139.762959, terminal: false, routes: ['main'], info: '複数地下鉄路線と乗換可能', dist: '8.1km' },
      { id: 'tm-jimbocho', name: '神保町', lat: 35.695492, lng: 139.75812, terminal: false, routes: ['main'], info: '', dist: '9.5km' },
      { id: 'tm-suidobashi', name: '水道橋', lat: 35.703398, lng: 139.75516, terminal: false, routes: ['main'], info: '', dist: '10.5km' },
      { id: 'tm-kasuga', name: '春日', lat: 35.709598, lng: 139.75325, terminal: false, routes: ['main'], info: '', dist: '11.2km' },
      { id: 'tm-hakusan', name: '白山', lat: 35.721408, lng: 139.752136, terminal: false, routes: ['main'], info: '', dist: '12.6km' },
      { id: 'tm-sengoku', name: '千石', lat: 35.727957, lng: 139.744792, terminal: false, routes: ['main'], info: '', dist: '13.6km' },
      { id: 'tm-sugamo', name: '巣鴨', lat: 35.733502, lng: 139.738519, terminal: false, routes: ['main'], info: '', dist: '14.5km' },
      { id: 'tm-nishisugamo', name: '西巣鴨', lat: 35.743508, lng: 139.728712, terminal: false, routes: ['main'], info: '', dist: '15.9km' },
      { id: 'tm-shinitabashi', name: '新板橋', lat: 35.748785, lng: 139.720101, terminal: false, routes: ['main'], info: '', dist: '16.9km' },
      { id: 'tm-itabashikuyakushomae', name: '板橋区役所前', lat: 35.751284, lng: 139.710102, terminal: false, routes: ['main'], info: '', dist: '17.8km' },
      { id: 'tm-itabashihoncho', name: '板橋本町', lat: 35.761339, lng: 139.705535, terminal: false, routes: ['main'], info: '', dist: '19.0km' },
      { id: 'tm-motohasunuma', name: '本蓮沼', lat: 35.768782, lng: 139.702324, terminal: false, routes: ['main'], info: '', dist: '19.9km' },
      { id: 'tm-shimurasakaue', name: '志村坂上', lat: 35.775725, lng: 139.69538, terminal: false, routes: ['main'], info: '', dist: '21.0km' },
      { id: 'tm-shimurasanchome', name: '志村三丁目', lat: 35.777391, lng: 139.685937, terminal: false, routes: ['main'], info: '', dist: '21.9km' },
      { id: 'tm-hasune', name: '蓮根', lat: 35.784335, lng: 139.678993, terminal: false, routes: ['main'], info: '', dist: '23.1km' },
      { id: 'tm-nishidai', name: '西台', lat: 35.78699, lng: 139.673971, terminal: false, routes: ['main'], info: '', dist: '23.9km' },
      { id: 'tm-takashimadaira', name: '高島平', lat: 35.789056, lng: 139.661216, terminal: false, routes: ['main'], info: '', dist: '24.9km' },
      { id: 'tm-shintakashimadaira', name: '新高島平', lat: 35.790189, lng: 139.654275, terminal: false, routes: ['main'], info: '', dist: '25.6km' },
      { id: 'tm-nishitakashimadaira', name: '西高島平', lat: 35.791833, lng: 139.64594, terminal: true, routes: ['main'], info: '三田線の終着駅', dist: '26.5km' }
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
      { id: 'ts-shinjuku', name: '新宿', lat: 35.68869, lng: 139.698812, terminal: true, routes: ['main'], info: '京王新線直通', dist: '0.0km' },
      { id: 'ts-shinjukusanchome', name: '新宿三丁目', lat: 35.690616, lng: 139.706271, terminal: false, routes: ['main'], info: '', dist: '0.8km' },
      { id: 'ts-akebonobashi', name: '曙橋', lat: 35.692402, lng: 139.722881, terminal: false, routes: ['main'], info: '', dist: '2.3km' },
      { id: 'ts-ichigaya', name: '市ヶ谷', lat: 35.692594, lng: 139.735794, terminal: false, routes: ['main'], info: '', dist: '3.7km' },
      { id: 'ts-kudanshita', name: '九段下', lat: 35.695589, lng: 139.751948, terminal: false, routes: ['main'], info: '', dist: '5.0km' },
      { id: 'ts-jimbocho', name: '神保町', lat: 35.695966, lng: 139.757606, terminal: false, routes: ['main'], info: '', dist: '5.6km' },
      { id: 'ts-ogawamachi', name: '小川町', lat: 35.695487, lng: 139.767551, terminal: false, routes: ['main'], info: '', dist: '6.5km' },
      { id: 'ts-iwamotocho', name: '岩本町', lat: 35.695534, lng: 139.775866, terminal: false, routes: ['main'], info: '', dist: '7.3km' },
      { id: 'ts-bakuroyokoyama', name: '馬喰横山', lat: 35.69212, lng: 139.782768, terminal: false, routes: ['main'], info: '', dist: '8.1km' },
      { id: 'ts-hamacho', name: '浜町', lat: 35.688516, lng: 139.788154, terminal: false, routes: ['main'], info: '', dist: '8.7km' },
      { id: 'ts-morishita', name: '森下', lat: 35.68796, lng: 139.797042, terminal: false, routes: ['main'], info: '', dist: '9.5km' },
      { id: 'ts-kikukawa', name: '菊川', lat: 35.688379, lng: 139.806016, terminal: false, routes: ['main'], info: '', dist: '10.3km' },
      { id: 'ts-sumiyoshi', name: '住吉', lat: 35.689073, lng: 139.815681, terminal: false, routes: ['main'], info: '', dist: '11.2km' },
      { id: 'ts-nishiojima', name: '西大島', lat: 35.689349, lng: 139.826206, terminal: false, routes: ['main'], info: '', dist: '12.2km' },
      { id: 'ts-ojima', name: '大島', lat: 35.689905, lng: 139.83565, terminal: false, routes: ['main'], info: '', dist: '12.9km' },
      { id: 'ts-higashiojima', name: '東大島', lat: 35.690355, lng: 139.845963, terminal: false, routes: ['main'], info: '', dist: '14.1km' },
      { id: 'ts-funabori', name: '船堀', lat: 35.683795, lng: 139.864258, terminal: false, routes: ['main'], info: '', dist: '15.8km' },
      { id: 'ts-ichinoe', name: '一之江', lat: 35.686055, lng: 139.882934, terminal: false, routes: ['main'], info: '', dist: '17.5km' },
      { id: 'ts-mizue', name: '瑞江', lat: 35.693318, lng: 139.89761, terminal: false, routes: ['main'], info: '', dist: '19.2km' },
      { id: 'ts-shinozaki', name: '篠崎', lat: 35.706017, lng: 139.903698, terminal: false, routes: ['main'], info: '', dist: '20.7km' },
      { id: 'ts-motoyawata', name: '本八幡', lat: 35.722929, lng: 139.926628, terminal: true, routes: ['main'], info: '新宿線の終着駅', dist: '23.5km' }
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
      { id: 'to-hikarigaoka', name: '光が丘', lat: 35.758526, lng: 139.628603, terminal: true, routes: ['main'], info: '大江戸線の起点', dist: '0.0km' },
      { id: 'to-nerimakasugacho', name: '練馬春日町', lat: 35.751452, lng: 139.640236, terminal: false, routes: ['main'], info: '', dist: '1.4km' },
      { id: 'to-toshimaen', name: '豊島園', lat: 35.742067, lng: 139.64911, terminal: false, routes: ['main'], info: '', dist: '2.9km' },
      { id: 'to-nerima', name: '練馬', lat: 35.737404, lng: 139.65477, terminal: false, routes: ['main'], info: '', dist: '3.8km' },
      { id: 'to-shinegota', name: '新江古田', lat: 35.732538, lng: 139.670653, terminal: false, routes: ['main'], info: '', dist: '5.4km' },
      { id: 'to-ochiaiminaminagasaki', name: '落合南長崎', lat: 35.723608, lng: 139.683303, terminal: false, routes: ['main'], info: '', dist: '7.0km' },
      { id: 'to-nakai', name: '中井', lat: 35.714035, lng: 139.686356, terminal: false, routes: ['main'], info: '', dist: '8.5km' },
      { id: 'to-higashinakano', name: '東中野', lat: 35.706891, lng: 139.682987, terminal: false, routes: ['main'], info: '', dist: '9.3km' },
      { id: 'to-nakanosakaue', name: '中野坂上', lat: 35.69709, lng: 139.682279, terminal: false, routes: ['main'], info: '', dist: '10.5km' },
      { id: 'to-nishishinjukugochome', name: '西新宿五丁目', lat: 35.689798, lng: 139.684304, terminal: false, routes: ['main'], info: '', dist: '11.8km' },
      { id: 'to-tochomae', name: '都庁前', lat: 35.690551, lng: 139.69257, terminal: false, routes: ['main'], info: '大江戸線の乗換中心', dist: '12.5km' },
      { id: 'to-shinjuku', name: '新宿', lat: 35.68869, lng: 139.698812, terminal: false, routes: ['main'], info: '', dist: '13.3km' },
      { id: 'to-yoyogi', name: '代々木', lat: 35.683218, lng: 139.701666, terminal: false, routes: ['main'], info: '', dist: '13.9km' },
      { id: 'to-kokuritsukyogijo', name: '国立競技場', lat: 35.679831, lng: 139.714932, terminal: false, routes: ['main'], info: '', dist: '15.4km' },
      { id: 'to-aoyamaitchome', name: '青山一丁目', lat: 35.672929, lng: 139.72396, terminal: false, routes: ['main'], info: '', dist: '16.6km' },
      { id: 'to-roppongi', name: '六本木', lat: 35.663921, lng: 139.731567, terminal: false, routes: ['main'], info: '', dist: '18.0km' },
      { id: 'to-azabujuban', name: '麻布十番', lat: 35.656503, lng: 139.736116, terminal: false, routes: ['main'], info: '', dist: '19.2km' },
      { id: 'to-akabanebashi', name: '赤羽橋', lat: 35.655007, lng: 139.743642, terminal: false, routes: ['main'], info: '', dist: '20.0km' },
      { id: 'to-daimon', name: '大門', lat: 35.656785, lng: 139.75466, terminal: false, routes: ['main'], info: '', dist: '21.3km' },
      { id: 'to-shiodome', name: '汐留', lat: 35.663703, lng: 139.760642, terminal: false, routes: ['main'], info: '', dist: '22.2km' },
      { id: 'to-tsukijishijo', name: '築地市場', lat: 35.664895, lng: 139.766915, terminal: false, routes: ['main'], info: '', dist: '23.1km' },
      { id: 'to-kachidoki', name: '勝どき', lat: 35.658507, lng: 139.776442, terminal: false, routes: ['main'], info: '', dist: '24.6km' },
      { id: 'to-tsukishima', name: '月島', lat: 35.664871, lng: 139.784233, terminal: false, routes: ['main'], info: '', dist: '25.4km' },
      { id: 'to-monzennakacho', name: '門前仲町', lat: 35.671851, lng: 139.796209, terminal: false, routes: ['main'], info: '', dist: '26.8km' },
      { id: 'to-kiyosumishirakawa', name: '清澄白河', lat: 35.682105, lng: 139.798851, terminal: false, routes: ['main'], info: '', dist: '28.0km' },
      { id: 'to-morishita', name: '森下', lat: 35.68796, lng: 139.797042, terminal: false, routes: ['main'], info: '', dist: '28.8km' },
      { id: 'to-ryogoku', name: '両国', lat: 35.696881, lng: 139.797421, terminal: false, routes: ['main'], info: '', dist: '29.8km' },
      { id: 'to-kuramae', name: '蔵前', lat: 35.703236, lng: 139.790931, terminal: false, routes: ['main'], info: '', dist: '30.8km' },
      { id: 'to-shinokachimachi', name: '新御徒町', lat: 35.707045, lng: 139.781958, terminal: false, routes: ['main'], info: '', dist: '31.6km' },
      { id: 'to-uenookachimachi', name: '上野御徒町', lat: 35.707893, lng: 139.774332, terminal: false, routes: ['main'], info: '', dist: '32.4km' },
      { id: 'to-hongosanchome', name: '本郷三丁目', lat: 35.707462, lng: 139.760095, terminal: false, routes: ['main'], info: '', dist: '33.2km' },
      { id: 'to-kasuga', name: '春日', lat: 35.709598, lng: 139.75325, terminal: false, routes: ['main'], info: '', dist: '34.2km' },
      { id: 'to-iidabashi', name: '飯田橋', lat: 35.702927, lng: 139.744999, terminal: false, routes: ['main'], info: '', dist: '35.2km' },
      { id: 'to-ushigomekagurazaka', name: '牛込神楽坂', lat: 35.700851, lng: 139.735802, terminal: false, routes: ['main'], info: '', dist: '36.2km' },
      { id: 'to-ushigomeyanagicho', name: '牛込柳町', lat: 35.699518, lng: 139.725027, terminal: false, routes: ['main'], info: '', dist: '37.2km' },
      { id: 'to-wakamatsukawada', name: '若松河田', lat: 35.699218, lng: 139.718184, terminal: false, routes: ['main'], info: '', dist: '38.1km' },
      { id: 'to-higashishinjuku', name: '東新宿', lat: 35.69792, lng: 139.707549, terminal: false, routes: ['main'], info: '', dist: '39.0km' },
      { id: 'to-shinjukunishiguchi', name: '新宿西口', lat: 35.693315, lng: 139.699155, terminal: false, routes: ['main'], info: '', dist: '39.8km' },
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

