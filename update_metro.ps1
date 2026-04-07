$json = Get-Content "c:\Users\nonah\OneDrive\Antigravity\TrainLine\metro_coords.json" -Raw -Encoding UTF8 | ConvertFrom-Json
$uniqueLines = $json | Select-Object -ExpandProperty Line -Unique

$lineMapping = @{
    'metro-ginza' = $uniqueLines[0]
    'metro-marunouchi' = $uniqueLines[1]
    'metro-hibiya' = $uniqueLines[2]
    'metro-tozai' = $uniqueLines[3]
    'metro-chiyoda' = $uniqueLines[4]
    'metro-yurakucho' = $uniqueLines[5]
    'metro-hanzomon' = $uniqueLines[6]
    'metro-namboku' = $uniqueLines[7]
    'metro-fukutoshin' = $uniqueLines[8]
}

$content = Get-Content "c:\Users\nonah\OneDrive\Antigravity\TrainLine\metro.js" -Raw -Encoding UTF8
$outputContent = @()
$currentLineKey = ""

foreach ($line in ($content -split "\r?\n")) {
    if ($line -match "^  '(metro-[a-z]+)':") {
        $currentLineKey = $matches[1]
    }
    
    if ($line -match "name:\s*'([^']+)'") {
        $stName = $matches[1]
        
        if ($line -match "lat:\s*([\d\.]+),\s*lng:\s*([\d\.]+)") {
            $hrLine = $lineMapping[$currentLineKey]
            
            $searchName = $stName -replace "〈.*〉",""
            $searchName2 = $searchName -replace "ケ","ヶ"
            
            # Exact Match Only
            $coord = $json | Where-Object { $_.Line -eq $hrLine -and ($_.Name -eq $searchName -or $_.Name -eq $searchName2 -or $_.Name -eq $stName) } | Select-Object -First 1
            
            if ($coord) {
                $newLat = $coord.Lat
                $newLng = $coord.Lng
                $line = $line -replace "lat:\s*[\d\.]+", "lat: $newLat"
                $line = $line -replace "lng:\s*[\d\.]+", "lng: $newLng"
            } else {
                Write-Host "Coord not found for: $stName in $currentLineKey"
            }
        }
    }
    $outputContent += $line
}

$outputContent -join "
" | Out-File -FilePath "c:\Users\nonah\OneDrive\Antigravity\TrainLine\metro.js" -Encoding UTF8
