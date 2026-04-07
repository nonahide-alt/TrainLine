$jsonText = Get-Content "heartrails.json" -Raw
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

        if ($matchedCoords) {
            $latText = "lat: " + [math]::Round([decimal]$matchedCoords.lat, 5)
            $lngText = "lng: " + [math]::Round([decimal]$matchedCoords.lng, 5)

            $newText = $full -replace "lat:\s*[\d\.]+", $latText
            $newText = $newText -replace "lng:\s*[\d\.]+", $lngText

            $updatedContent = $updatedContent.Replace($full, $newText)
        }
    }
    
    $utf8NoBom = New-Object System.Text.UTF8Encoding $false
    [IO.File]::WriteAllText((Join-Path (Get-Location) $fileName), $updatedContent, $utf8NoBom)
    Write-Host "Updated coords in $fileName from API"
}

Fix-File "jr.js"
Fix-File "keio.js"
