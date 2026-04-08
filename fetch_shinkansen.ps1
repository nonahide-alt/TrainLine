$lines = @{
    "tokaido" = @{ name = "東海道新幹線"; color = "#0068B7"; glow = "rgba(0, 104, 183, 0.4)" }
    "sanyo" = @{ name = "山陽新幹線"; color = "#0068B7"; glow = "rgba(0, 104, 183, 0.4)" }
    "tohoku" = @{ name = "東北新幹線"; color = "#00B261"; glow = "rgba(0, 178, 97, 0.4)" }
    "joetsu" = @{ name = "上越新幹線"; color = "#E44D93"; glow = "rgba(228, 77, 147, 0.4)" }
    "hokuriku" = @{ name = "北陸新幹線"; color = "#005BAC"; glow = "rgba(0, 91, 172, 0.4)" }
    "kyushu" = @{ name = "九州新幹線"; color = "#FF0000"; glow = "rgba(255, 0, 0, 0.4)" }
    "hokkaido" = @{ name = "北海道新幹線"; color = "#A4CE3A"; glow = "rgba(164, 206, 58, 0.4)" }
    "nishikyushu" = @{ name = "西九州新幹線"; color = "#FF6600"; glow = "rgba(255, 102, 0, 0.4)" }
    "yamagata" = @{ name = "山形新幹線"; color = "#FF7F00"; glow = "rgba(255, 127, 0, 0.4)" }
    "akita" = @{ name = "秋田新幹線"; color = "#E7347A"; glow = "rgba(231, 52, 122, 0.4)" }
}

$output = @()
$output += "const shinkansenData = {};"
$output += ""

foreach ($key in $lines.Keys) {
    $info = $lines[$key]
    $lineName = $info.name
    $color = $info.color
    $glow = $info.glow
    $url = "http://express.heartrails.com/api/json?method=getStations&line=$lineName"
    
    try {
        $response = Invoke-RestMethod -Uri $url
        $stations = $response.response.station
    } catch {
        Write-Host "ERROR fetching $lineName"
        continue
    }
    
    if (-not $stations -or $stations.Count -eq 0) {
        Write-Host "No stations for $lineName"
        continue
    }
    
    $stOutput = @()
    $stNames = @()
    $isFirst = $true
    $isLast = $false
    $i = 0
    foreach ($st in $stations) {
        $i++
        $name = $st.name
        $lat = $st.y
        $lng = $st.x
        $terminal = "false"
        if ($i -eq 1 -or $i -eq $stations.Count) { $terminal = "true" }
        $stOutput += "      { id: 'shinkansen-${key}-${name}', name: '${name}', lat: ${lat}, lng: ${lng}, terminal: ${terminal}, routes: ['main'] }"
        $stNames += "'shinkansen-${key}-${name}'"
    }

    $stList = $stOutput -join ",`n"
    $stNamesList = $stNames -join ", "
    
    $output += "shinkansenData['shinkansen-${key}'] = {"
    $output += "  title: '${lineName}',"
    $output += "  icon: 'SK',"
    $output += "  themeClass: 'shinkansen-theme',"
    $output += "  hasSubRoutes: false,"
    $output += "  stations: ["
    $output += $stList
    $output += "  ],"
    $output += "  routePatterns: {"
    $output += "    main: { name: '${lineName}', color: '${color}', glowColor: '${glow}', isLoop: false, stations: [${stNamesList}] }"
    $output += "  },"
    $output += "  renderDetails() { return ``<div class=`"modal-section`"><p>${lineName}</p></div>``; },"
    $output += "  renderLegend() { return ``<div class=`"legend-item`"><div class=`"legend-line`" style=`"background:${color}`"></div><span>${lineName}</span></div>``; }"
    $output += "};"
    $output += ""
    
    Write-Host "OK: $lineName ($($stations.Count) stations)"
    Start-Sleep -Milliseconds 200
}

$output += "Object.assign(appData, shinkansenData);"

$output -join "`n" | Set-Content -Path "c:\Users\nonah\OneDrive\Antigravity\TrainLine\shinkansen.js" -Encoding UTF8
Write-Host "Done! shinkansen.js created."
