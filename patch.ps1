$jsonText = Get-Content "heartrails.json" -Raw
# Shift-JISやBOM付きUTF-8などでバグらないようにConvertFrom-Json
$data = $jsonText | ConvertFrom-Json

function Fix-File($fileName) {
    if (-not (Test-Path $fileName)) { return }
    $content = Get-Content $fileName -Raw

    $pattern = "\{[^\}]*name:\s*'([^']+)'[^\}]*lat:\s*([\d\.]+)[^\}]*lng:\s*([\d\.]+)[^\}]*\}"
    $matches = [regex]::Matches($content, $pattern)

    $updatedContent = $content
    foreach ($m in $matches) {
        $full = $m.Groups[0].Value
        $name = $m.Groups[1].Value

        $matchedCoords = $null
        # 全路線から検索
        foreach ($line in $data.PSObject.Properties.Name) {
            $stations = $data.$line
            foreach ($s in $stations) {
                if ($s.name -eq $name) {
                    $matchedCoords = @{ lat = $s.y; lng = $s.x }
                    break
                }
            }
            if ($matchedCoords) { break }
        }

        # 手動特定用フォールバック (HeartRailsにない、または名前が微妙に違うもの)
        if (-not $matchedCoords) {
            if ($name -eq '高輪ゲートウェイ') { $matchedCoords = @{ lat = 35.63471; lng = 139.73819 } }
            if ($name -eq '幕張豊砂') { $matchedCoords = @{ lat = 35.65813; lng = 140.02706 } }
            if ($name -eq '府中競馬正門前') { $matchedCoords = @{ lat = 35.66842; lng = 139.48471 } }
        }

        if ($matchedCoords) {
            $latText = "lat: " + [math]::Round([decimal]$matchedCoords.lat, 5)
            $lngText = "lng: " + [math]::Round([decimal]$matchedCoords.lng, 5)

            $newText = $full -replace "lat:\s*[\d\.]+", $latText
            $newText = $newText -replace "lng:\s*[\d\.]+", $lngText

            $updatedContent = $updatedContent.Replace($full, $newText)
        }
    }
    
    # UTF8 BOM付きで保存
    $utf8NoBom = New-Object System.Text.UTF8Encoding $false
    [IO.File]::WriteAllText((Join-Path (Get-Location) $fileName), $updatedContent, $utf8NoBom)
    Write-Host "Replaced coords in $fileName"
}

Fix-File "jr.js"
Fix-File "keio.js"
