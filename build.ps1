# Script para build e teste local da aplicação

Write-Host "=== Build da Landing Page ===" -ForegroundColor Cyan

# Verificar se Docker está rodando
Write-Host "`nVerificando Docker..." -ForegroundColor Yellow
try {
    docker ps | Out-Null
    Write-Host "✓ Docker está rodando" -ForegroundColor Green
} catch {
    Write-Host "✗ Docker não está rodando!" -ForegroundColor Red
    Write-Host "Por favor, inicie o Docker Desktop e tente novamente." -ForegroundColor Yellow
    exit 1
}

# Build da imagem
Write-Host "`nFazendo build da imagem Docker..." -ForegroundColor Yellow
docker build -t landing-page .

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Build concluído com sucesso!" -ForegroundColor Green
    Write-Host "`nPara executar o container, use:" -ForegroundColor Cyan
    Write-Host "  docker run -p 8080:80 landing-page" -ForegroundColor Yellow
    Write-Host "`nDepois acesse: http://localhost:8080" -ForegroundColor Cyan
} else {
    Write-Host "✗ Erro no build!" -ForegroundColor Red
    exit 1
}

