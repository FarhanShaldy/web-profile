Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  Pulling latest changes from GitHub...   " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

git pull origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to pull from GitHub. Aborting deploy." -ForegroundColor Red
    exit 1
}

Write-Host "`n==========================================" -ForegroundColor Cyan
Write-Host "  Rebuilding & updating web container...  " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

docker-compose up -d --build web
if ($LASTEXITCODE -ne 0) {
    Write-Host "Docker build failed." -ForegroundColor Red
    exit 1
}

Write-Host "`n==========================================" -ForegroundColor Green
Write-Host "  Deployment Successful! 🎉               " -ForegroundColor Green
Write-Host "  Live at: https://profile.mfarhanf.dpdns.org" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green
