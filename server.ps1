# PowerShell HTTP Server (.NET HttpListener)
# Usage: .\server.ps1
# Stop: Ctrl+C

$port = 8080
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:${port}/")

try {
    $listener.Start()
    Write-Host ""
    Write-Host "  =============================================" -ForegroundColor DarkYellow
    Write-Host "   SPACIA X Route Map Server Started" -ForegroundColor Yellow
    Write-Host "   http://localhost:${port}/" -ForegroundColor Cyan
    Write-Host "  =============================================" -ForegroundColor DarkYellow
    Write-Host ""
    Write-Host "  Press Ctrl+C to stop" -ForegroundColor DarkGray
    Write-Host ""

    $mimeTypes = @{
        '.html' = 'text/html; charset=utf-8'
        '.css'  = 'text/css; charset=utf-8'
        '.js'   = 'application/javascript; charset=utf-8'
        '.json' = 'application/json; charset=utf-8'
        '.png'  = 'image/png'
        '.jpg'  = 'image/jpeg'
        '.jpeg' = 'image/jpeg'
        '.gif'  = 'image/gif'
        '.svg'  = 'image/svg+xml'
        '.ico'  = 'image/x-icon'
        '.webp' = 'image/webp'
    }

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq '/') { $urlPath = '/index.html' }

        $filePath = Join-Path $root ($urlPath.TrimStart('/').Replace('/', '\'))

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { 'application/octet-stream' }

            $response.ContentType = $contentType
            $response.StatusCode = 200
            $response.Headers.Add("Access-Control-Allow-Origin", "*")

            $fileBytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $fileBytes.Length
            $response.OutputStream.Write($fileBytes, 0, $fileBytes.Length)

            Write-Host "  [200] $urlPath" -ForegroundColor Green
        }
        else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $urlPath")
            $response.ContentLength64 = $msg.Length
            $response.OutputStream.Write($msg, 0, $msg.Length)

            Write-Host "  [404] $urlPath" -ForegroundColor Red
        }

        $response.OutputStream.Close()
    }
}
catch {
    Write-Host "  Error: $_" -ForegroundColor Red
}
finally {
    $listener.Stop()
    $listener.Close()
    Write-Host ""
    Write-Host "  Server stopped" -ForegroundColor Yellow
}
