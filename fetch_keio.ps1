$lines = @{
    "main" = "京王線"
    "new" = "京王新線"
    "sagamihara" = "京王相模原線"
    "takao" = "京王高尾線"
    "keibajo" = "京王競馬場線"
    "dobutsuen" = "京王動物園線"
}

$output = @("const keioData = {};`n")

foreach ($key in $lines.Keys) {
    $lineName = $lines[$key]
    $url = "http://express.heartrails.com/api/json?method=getStations&line=$lineName"
    
    $response = Invoke-RestMethod -Uri $url
    $stations = $response.response.station
    
    $stOutput = @()
    $stNames = @()
    foreach ($st in $stations) {
        $name = $st.name
        $lat = $st.y
        $lng = $st.x
        $stOutput += "      { id: 'keio-$name', name: '$name', lat: $lat, lng: $lng, terminal: false, routes: ['$key'] }"
        $stNames += "'keio-$name'"
    }

    $stList = $stOutput -join ",`n"
    $stNamesList = $stNames -join ", "
    
    $color = "#DD005B"
    if ($key -eq "new") { $color = "#000080" }
    
    $jsLine = @"
keioData['keio-$key'] = {
  title: '$lineName',
  icon: 'KO',
  themeClass: 'keio-theme',
  hasSubRoutes: false,
  stations: [
$stList
  ],
  routePatterns: {
    main: { name: '$lineName', color: '$color', glowColor: 'rgba(221, 0, 91, 0.4)', isLoop: false, stations: [$stNamesList] }
  },
  renderDetails() { return ``<div class="modal-section"><p>$lineName</p></div>``; },
  renderLegend() { return ``<div class="legend-item"><div class="legend-line" style="background:$color"></div><span>$lineName</span></div>``; }
};
"@
    $output += $jsLine
}

$output += "`nObject.assign(appData, keioData);"

$output -join "`n" | Set-Content -Path "c:\Users\nonah\OneDrive\Antigravity\TrainLine\keio.js" -Encoding UTF8
