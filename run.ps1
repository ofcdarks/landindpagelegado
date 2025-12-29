# Script para executar o container localmente

Write-Host "=== Executando Landing Page ===" -ForegroundColor Cyan

# Verificar se a imagem existe
Write-Host "`nVerificando se a imagem existe..." -ForegroundColor Yellow
$imageExists = docker images landing-page --format "{{.Repository}}" | Select-String "landing-page"

if (-not $imageExists) {
    Write-Host "✗ Imagem 'landing-page' não encontrada!" -ForegroundColor Red
    Write-Host "Execute primeiro: .\build.ps1" -ForegroundColor Yellow
    exit 1
}

# Parar container existente se estiver rodando
Write-Host "`nParando containers existentes..." -ForegroundColor Yellow
docker stop landing-page-container 2>$null
docker rm landing-page-container 2>$null

# Executar container
Write-Host "`nIniciando container..." -ForegroundColor Yellow
docker run -d -p 8080:80 --name landing-page-container landing-page

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Container iniciado com sucesso!" -ForegroundColor Green
    Write-Host "`nAcesse: http://localhost:8080" -ForegroundColor Cyan
    Write-Host "`nPara parar o container, use:" -ForegroundColor Yellow
    Write-Host "  docker stop landing-page-container" -ForegroundColor Gray
    Write-Host "`nPara ver os logs, use:" -ForegroundColor Yellow
    Write-Host "  docker logs -f landing-page-container" -ForegroundColor Gray
} else {
    Write-Host "✗ Erro ao iniciar o container!" -ForegroundColor Red
    exit 1
}

