$stations = @("東京", "神田", "秋葉原", "御徒町", "上野", "鶯谷", "日暮里", "西日暮里", "田端", "駒込", "巣鴨", "大塚", "池袋", "目白", "高田馬場", "新大久保", "新宿", "代々木", "原宿", "渋谷", "恵比寿", "目黒", "五反田", "大崎", "品川", "高輪ゲートウェイ", "田町", "浜松町", "新橋", "有楽町")

$output = @()
foreach ($st in $stations) {
    try {
        $q = [uri]::EscapeDataString($st + "駅")
        $url = "https://msearch.gsi.go.jp/address-search/AddressSearch?q=$q"
        $response = Invoke-RestMethod -Uri $url
        if ($response.Count -gt 0) {
            $lon = $response[0].geometry.coordinates[0]
            $lat = $response[0].geometry.coordinates[1]
            $output += "  { id: 'yamanote-$st', name: '$st', lat: $lat, lng: $lon, routes: ['yamanote'] }"
        } else {
            $output += "  // Not found: $st"
        }
    } catch {
        $output += "  // Error: $st"
    }
}
$output | Out-File -FilePath "c:\Users\nonah\OneDrive\Antigravity\TrainLine\yamanote_coords.txt" -Encoding UTF8
