$skytree = @("浅草", "とうきょうスカイツリー", "曳舟", "北千住", "西新井", "草加", "越谷", "春日部", "東武動物公園")
$nikko = @("東武動物公園", "杉戸高野台", "幸手", "栗橋", "栃木", "新鹿沼", "下今市", "東武日光")
$kinugawa = @("下今市", "大桑", "新高徳", "鬼怒川温泉", "鬼怒川公園", "新藤原")

$output = @()

function Get-Coords($stations, $prefix) {
    foreach ($st in $stations) {
        try {
            $q = [uri]::EscapeDataString($st + "駅")
            $url = "https://msearch.gsi.go.jp/address-search/AddressSearch?q=$q"
            $response = Invoke-RestMethod -Uri $url
            if ($response.Count -gt 0) {
                $lon = $response[0].geometry.coordinates[0]
                $lat = $response[0].geometry.coordinates[1]
                $output += "      { id: '$prefix-$st', name: '$st', lat: $lat, lng: $lon, routes: ['main'] },"
            } else {
                $output += "      // Not found: $st"
            }
        } catch {
            $output += "      // Error: $st"
        }
    }
}

$output += "    // Skytree Line"
Get-Coords $skytree "ts"
$output += "    // Nikko Line"
Get-Coords $nikko "tn"
$output += "    // Kinugawa Line"
Get-Coords $kinugawa "tk"

$output | Out-File -FilePath "c:\Users\nonah\OneDrive\Antigravity\TrainLine\tobu_coords.txt" -Encoding UTF8
