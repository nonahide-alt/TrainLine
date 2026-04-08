const keioData = {};

keioData['keio-dobutsuen'] = {
  title: '京王動物園線',
  icon: 'KO',
  themeClass: 'keio-theme',
  hasSubRoutes: false,
  stations: [
      { id: 'keio-高幡不動', name: '高幡不動', lat: 35.662361, lng: 139.412953, terminal: false, routes: ['dobutsuen'] },
      { id: 'keio-多摩動物公園', name: '多摩動物公園', lat: 35.649215, lng: 139.404627, terminal: false, routes: ['dobutsuen'] }
  ],
  routePatterns: {
    main: { name: '京王動物園線', color: '#DD005B', glowColor: 'rgba(221, 0, 91, 0.4)', isLoop: false, stations: ['keio-高幡不動', 'keio-多摩動物公園'] }
  },
  renderDetails() { return `<div class="modal-section"><p>京王動物園線</p></div>`; },
  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#DD005B"></div><span>京王動物園線</span></div>`; }
};
keioData['keio-takao'] = {
  title: '京王高尾線',
  icon: 'KO',
  themeClass: 'keio-theme',
  hasSubRoutes: false,
  stations: [
      { id: 'keio-北野', name: '北野', lat: 35.644479, lng: 139.354489, terminal: false, routes: ['takao'] },
      { id: 'keio-京王片倉', name: '京王片倉', lat: 35.644343, lng: 139.337035, terminal: false, routes: ['takao'] },
      { id: 'keio-山田', name: '山田', lat: 35.644411, lng: 139.321082, terminal: false, routes: ['takao'] },
      { id: 'keio-めじろ台', name: 'めじろ台', lat: 35.643601, lng: 139.308446, terminal: false, routes: ['takao'] },
      { id: 'keio-狭間', name: '狭間', lat: 35.640637, lng: 139.293808, terminal: false, routes: ['takao'] },
      { id: 'keio-高尾', name: '高尾', lat: 35.641645, lng: 139.281551, terminal: false, routes: ['takao'] },
      { id: 'keio-高尾山口', name: '高尾山口', lat: 35.632377, lng: 139.269856, terminal: false, routes: ['takao'] }
  ],
  routePatterns: {
    main: { name: '京王高尾線', color: '#DD005B', glowColor: 'rgba(221, 0, 91, 0.4)', isLoop: false, stations: ['keio-北野', 'keio-京王片倉', 'keio-山田', 'keio-めじろ台', 'keio-狭間', 'keio-高尾', 'keio-高尾山口'] }
  },
  renderDetails() { return `<div class="modal-section"><p>京王高尾線</p></div>`; },
  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#DD005B"></div><span>京王高尾線</span></div>`; }
};
keioData['keio-new'] = {
  title: '京王新線',
  icon: 'KO',
  themeClass: 'keio-theme',
  hasSubRoutes: false,
  stations: [
      { id: 'keio-新線新宿', name: '新線新宿', lat: 35.68869, lng: 139.698812, terminal: false, routes: ['new'] },
      { id: 'keio-初台', name: '初台', lat: 35.68123, lng: 139.686354, terminal: false, routes: ['new'] },
      { id: 'keio-幡ヶ谷', name: '幡ヶ谷', lat: 35.677061, lng: 139.676183, terminal: false, routes: ['new'] },
      { id: 'keio-笹塚', name: '笹塚', lat: 35.673758, lng: 139.667251, terminal: false, routes: ['new'] }
  ],
  routePatterns: {
    main: { name: '京王新線', color: '#000080', glowColor: 'rgba(221, 0, 91, 0.4)', isLoop: false, stations: ['keio-新線新宿', 'keio-初台', 'keio-幡ヶ谷', 'keio-笹塚'] }
  },
  renderDetails() { return `<div class="modal-section"><p>京王新線</p></div>`; },
  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#000080"></div><span>京王新線</span></div>`; }
};
keioData['keio-sagamihara'] = {
  title: '京王相模原線',
  icon: 'KO',
  themeClass: 'keio-theme',
  hasSubRoutes: false,
  stations: [
      { id: 'keio-調布', name: '調布', lat: 35.652181, lng: 139.543988, terminal: false, routes: ['sagamihara'] },
      { id: 'keio-京王多摩川', name: '京王多摩川', lat: 35.644499, lng: 139.536606, terminal: false, routes: ['sagamihara'] },
      { id: 'keio-京王稲田堤', name: '京王稲田堤', lat: 35.633895, lng: 139.531099, terminal: false, routes: ['sagamihara'] },
      { id: 'keio-京王よみうりランド', name: '京王よみうりランド', lat: 35.632934, lng: 139.517597, terminal: false, routes: ['sagamihara'] },
      { id: 'keio-稲城', name: '稲城', lat: 35.636166, lng: 139.500398, terminal: false, routes: ['sagamihara'] },
      { id: 'keio-若葉台', name: '若葉台', lat: 35.619325, lng: 139.472189, terminal: false, routes: ['sagamihara'] },
      { id: 'keio-京王永山', name: '京王永山', lat: 35.630102, lng: 139.448204, terminal: false, routes: ['sagamihara'] },
      { id: 'keio-京王多摩センター', name: '京王多摩センター', lat: 35.62518, lng: 139.42402, terminal: false, routes: ['sagamihara'] },
      { id: 'keio-京王堀之内', name: '京王堀之内', lat: 35.624438, lng: 139.400314, terminal: false, routes: ['sagamihara'] },
      { id: 'keio-南大沢', name: '南大沢', lat: 35.6141, lng: 139.3798, terminal: false, routes: ['sagamihara'] },
      { id: 'keio-多摩境', name: '多摩境', lat: 35.601826, lng: 139.366987, terminal: false, routes: ['sagamihara'] },
      { id: 'keio-橋本', name: '橋本', lat: 35.595518, lng: 139.343226, terminal: false, routes: ['sagamihara'] }
  ],
  routePatterns: {
    main: { name: '京王相模原線', color: '#DD005B', glowColor: 'rgba(221, 0, 91, 0.4)', isLoop: false, stations: ['keio-調布', 'keio-京王多摩川', 'keio-京王稲田堤', 'keio-京王よみうりランド', 'keio-稲城', 'keio-若葉台', 'keio-京王永山', 'keio-京王多摩センター', 'keio-京王堀之内', 'keio-南大沢', 'keio-多摩境', 'keio-橋本'] }
  },
  renderDetails() { return `<div class="modal-section"><p>京王相模原線</p></div>`; },
  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#DD005B"></div><span>京王相模原線</span></div>`; }
};
keioData['keio-keibajo'] = {
  title: '京王競馬場線',
  icon: 'KO',
  themeClass: 'keio-theme',
  hasSubRoutes: false,
  stations: [
      { id: 'keio-東府中', name: '東府中', lat: 35.668766, lng: 139.495257, terminal: false, routes: ['keibajo'] },
      { id: 'keio-府中競馬正門前', name: '府中競馬正門前', lat: 35.668288, lng: 139.485019, terminal: false, routes: ['keibajo'] }
  ],
  routePatterns: {
    main: { name: '京王競馬場線', color: '#DD005B', glowColor: 'rgba(221, 0, 91, 0.4)', isLoop: false, stations: ['keio-東府中', 'keio-府中競馬正門前'] }
  },
  renderDetails() { return `<div class="modal-section"><p>京王競馬場線</p></div>`; },
  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#DD005B"></div><span>京王競馬場線</span></div>`; }
};
keioData['keio-main'] = {
  title: '京王線',
  icon: 'KO',
  themeClass: 'keio-theme',
  hasSubRoutes: false,
  stations: [
      { id: 'keio-新宿', name: '新宿', lat: 35.690163, lng: 139.699187, terminal: false, routes: ['main'] },
      { id: 'keio-笹塚', name: '笹塚', lat: 35.673758, lng: 139.667251, terminal: false, routes: ['main'] },
      { id: 'keio-代田橋', name: '代田橋', lat: 35.671092, lng: 139.659413, terminal: false, routes: ['main'] },
      { id: 'keio-明大前', name: '明大前', lat: 35.668758, lng: 139.650352, terminal: false, routes: ['main'] },
      { id: 'keio-下高井戸', name: '下高井戸', lat: 35.66615, lng: 139.641372, terminal: false, routes: ['main'] },
      { id: 'keio-桜上水', name: '桜上水', lat: 35.66768, lng: 139.63129, terminal: false, routes: ['main'] },
      { id: 'keio-上北沢', name: '上北沢', lat: 35.668857, lng: 139.62329, terminal: false, routes: ['main'] },
      { id: 'keio-八幡山', name: '八幡山', lat: 35.669982, lng: 139.614927, terminal: false, routes: ['main'] },
      { id: 'keio-芦花公園', name: '芦花公園', lat: 35.670479, lng: 139.608247, terminal: false, routes: ['main'] },
      { id: 'keio-千歳烏山', name: '千歳烏山', lat: 35.667921, lng: 139.60067, terminal: false, routes: ['main'] },
      { id: 'keio-仙川', name: '仙川', lat: 35.662257, lng: 139.584908, terminal: false, routes: ['main'] },
      { id: 'keio-つつじヶ丘', name: 'つつじヶ丘', lat: 35.657936, lng: 139.575103, terminal: false, routes: ['main'] },
      { id: 'keio-柴崎', name: '柴崎', lat: 35.653997, lng: 139.56658, terminal: false, routes: ['main'] },
      { id: 'keio-国領', name: '国領', lat: 35.650087, lng: 139.558036, terminal: false, routes: ['main'] },
      { id: 'keio-布田', name: '布田', lat: 35.649904, lng: 139.551557, terminal: false, routes: ['main'] },
      { id: 'keio-調布', name: '調布', lat: 35.652181, lng: 139.543988, terminal: false, routes: ['main'] },
      { id: 'keio-西調布', name: '西調布', lat: 35.657169, lng: 139.529822, terminal: false, routes: ['main'] },
      { id: 'keio-飛田給', name: '飛田給', lat: 35.660121, lng: 139.523666, terminal: false, routes: ['main'] },
      { id: 'keio-武蔵野台', name: '武蔵野台', lat: 35.664159, lng: 139.511289, terminal: false, routes: ['main'] },
      { id: 'keio-多磨霊園', name: '多磨霊園', lat: 35.666197, lng: 139.502615, terminal: false, routes: ['main'] },
      { id: 'keio-東府中', name: '東府中', lat: 35.668766, lng: 139.495257, terminal: false, routes: ['main'] },
      { id: 'keio-府中', name: '府中', lat: 35.672245, lng: 139.4799, terminal: false, routes: ['main'] },
      { id: 'keio-分倍河原', name: '分倍河原', lat: 35.668493, lng: 139.468798, terminal: false, routes: ['main'] },
      { id: 'keio-中河原', name: '中河原', lat: 35.659549, lng: 139.457602, terminal: false, routes: ['main'] },
      { id: 'keio-聖蹟桜ヶ丘', name: '聖蹟桜ヶ丘', lat: 35.650814, lng: 139.446979, terminal: false, routes: ['main'] },
      { id: 'keio-百草園', name: '百草園', lat: 35.657362, lng: 139.431285, terminal: false, routes: ['main'] },
      { id: 'keio-高幡不動', name: '高幡不動', lat: 35.662361, lng: 139.412953, terminal: false, routes: ['main'] },
      { id: 'keio-南平', name: '南平', lat: 35.654559, lng: 139.392008, terminal: false, routes: ['main'] },
      { id: 'keio-平山城址公園', name: '平山城址公園', lat: 35.647371, lng: 139.379926, terminal: false, routes: ['main'] },
      { id: 'keio-長沼', name: '長沼', lat: 35.642788, lng: 139.365849, terminal: false, routes: ['main'] },
      { id: 'keio-北野', name: '北野', lat: 35.644479, lng: 139.354489, terminal: false, routes: ['main'] },
      { id: 'keio-京王八王子', name: '京王八王子', lat: 35.657416, lng: 139.343851, terminal: false, routes: ['main'] }
  ],
  routePatterns: {
    main: { name: '京王線', color: '#DD005B', glowColor: 'rgba(221, 0, 91, 0.4)', isLoop: false, stations: ['keio-新宿', 'keio-笹塚', 'keio-代田橋', 'keio-明大前', 'keio-下高井戸', 'keio-桜上水', 'keio-上北沢', 'keio-八幡山', 'keio-芦花公園', 'keio-千歳烏山', 'keio-仙川', 'keio-つつじヶ丘', 'keio-柴崎', 'keio-国領', 'keio-布田', 'keio-調布', 'keio-西調布', 'keio-飛田給', 'keio-武蔵野台', 'keio-多磨霊園', 'keio-東府中', 'keio-府中', 'keio-分倍河原', 'keio-中河原', 'keio-聖蹟桜ヶ丘', 'keio-百草園', 'keio-高幡不動', 'keio-南平', 'keio-平山城址公園', 'keio-長沼', 'keio-北野', 'keio-京王八王子'] }
  },
  renderDetails() { return `<div class="modal-section"><p>京王線</p></div>`; },
  renderLegend() { return `<div class="legend-item"><div class="legend-line" style="background:#DD005B"></div><span>京王線</span></div>`; }
};

Object.assign(appData, keioData);
