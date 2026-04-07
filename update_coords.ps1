$manualFixes = @{
    '府中' = @{ lat = 35.67225; lng = 139.48024 }
    '南平' = @{ lat = 35.65685; lng = 139.40200 }
    '浦和' = @{ lat = 35.8584; lng = 139.6513 }
    '鶴見' = @{ lat = 35.5050; lng = 139.6766 }
    '藤沢' = @{ lat = 35.3388; lng = 139.4900 }
    '辻堂' = @{ lat = 35.3349; lng = 139.4538 }
    '熱海' = @{ lat = 35.1043; lng = 139.0779 }
    '武蔵小杉' = @{ lat = 35.5764; lng = 139.6597 }
    '東京' = @{ lat = 35.6812; lng = 139.7671 }
    '新宿' = @{ lat = 35.69018; lng = 139.69970 }
    '品川' = @{ lat = 35.63065; lng = 139.73740 }
    '西船橋' = @{ lat = 35.7074; lng = 139.9592 }
    '日本橋' = @{ lat = 35.6820; lng = 139.7734 }
}

function Geocode-Station($stationName) {
    if ($manualFixes.ContainsKey($stationName)) {
        return $manualFixes[$stationName]
    }
    $query = $stationName + "駅"
    if ($stationName -in @('大宮','立川','八王子','横浜','千葉','金沢','上野','渋谷')) { $query += " JR" }
    
    Write-Host "Fetching $query..."
    try {
        $q = [uri]::EscapeDataString($query)
        $r = Invoke-RestMethod -Uri "https://nominatim.openstreetmap.org/search?q=$q&format=json&countrycodes=jp&limit=1" -Headers @{"User-Agent"="TrainLineApp/1.0"}
        if ($r.Count -gt 0) {
            return @{ lat = [math]::Round([decimal]$r[0].lat, 5); lng = [math]::Round([decimal]$r[0].lon, 5) }
        }
    } catch {}
    return $null
}

$files = @("metro.js", "toei.js", "tobu.js", "keikyu.js", "kansen.js", "jr.js")
foreach ($file in $files) {
    if (-not (Test-Path $file)) { continue }
    $content = Get-Content $file -Raw
    
    # 正規表現で駅ごとにマッチ
    $pattern = "\{[^\}]*name:\s*'([^']+)'[^\}]*lat:\s*([\d\.]+)[^\}]*lng:\s*([\d\.]+)[^\}]*\}"
    $matches = [regex]::Matches($content, $pattern)
    
    $updatedContent = $content
    foreach ($m in $matches) {
        $full = $m.Groups[0].Value
        $name = $m.Groups[1].Value
        
        Start-Sleep -Milliseconds 1100
        $coords = Geocode-Station $name
        if ($coords) {
            $latText = "lat: " + $coords.lat
            $lngText = "lng: " + $coords.lng
            
            $newText = $full -replace "lat:\s*[\d\.]+", $latText
            $newText = $newText -replace "lng:\s*[\d\.]+", $lngText
            
            $updatedContent = $updatedContent.Replace($full, $newText)
            Write-Host "Updated $name : $($coords.lat), $($coords.lng)"
        }
    }
    
    [IO.File]::WriteAllText((Join-Path (Get-Location) $file), $updatedContent)
    Write-Host "Finished $file"
}
