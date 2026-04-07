$json = Get-Content "c:\Users\nonah\OneDrive\Antigravity\TrainLine\toei_coords.json" -Raw -Encoding UTF8 | ConvertFrom-Json

$lineMapping = @{
    'toei-mita' = @('都営三田線')
    'toei-shinjuku' = @('都営新宿線')
    'toei-oedo' = @('都営大江戸線')
}

$content = Get-Content "c:\Users\nonah\OneDrive\Antigravity\TrainLine\toei.js" -Raw -Encoding UTF8
$outputContent = @()
$currentLineKey = ""

foreach ($line in ($content -split "\r?\n")) {
    if ($line -match "^  '([a-z-]+)':") {
        $currentLineKey = $matches[1]
    }
    
    if ($line -match "name:\s*'([^']+)'") {
        $stName = $matches[1]
        
        if ($line -match "lat:\s*([\d\.]+),\s*lng:\s*([\d\.]+)") {
            $hrLines = $lineMapping[$currentLineKey]
            
            $searchName = $stName -replace "〈.*〉",""
            $searchName2 = $searchName -replace "ケ","ヶ"
            $searchName3 = $searchName -replace "ヶ","ケ"
            
            $coord = $null
            foreach ($hrLine in $hrLines) {
                $coordMatch = $json | Where-Object { $_.Line -eq $hrLine -and ($_.Name -eq $searchName -or $_.Name -eq $searchName2 -or $_.Name -eq $searchName3 -or $_.Name -eq $stName) } | Select-Object -First 1
                if ($coordMatch) {
                    $coord = $coordMatch
                    break
                }
            }
            
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
" | Out-File -FilePath "c:\Users\nonah\OneDrive\Antigravity\TrainLine\toei.js" -Encoding UTF8
