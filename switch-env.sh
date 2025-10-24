#!/bin/bash

# Environment switcher script for bg-removal project

echo "🔄 Environment Switcher for Background Removal App"
echo "================================================"

if [ "$1" = "dev" ]; then
    echo "📝 Switching to DEVELOPMENT environment..."

    # Copy development env files
    cp client/.env.local client/.env
    cp server/.env server/.env.current

    echo "✅ Development environment activated!"
    echo "   Frontend: http://localhost:5173"
    echo "   Backend: http://localhost:5000"

elif [ "$1" = "prod" ]; then
    echo "🚀 Switching to PRODUCTION environment..."

    # Copy production env files
    cp client/.env.production client/.env
    cp server/.env.production server/.env.current

    echo "✅ Production environment activated!"
    echo "   Frontend: https://background-remover-app-ovof.vercel.app"
    echo "   Backend: https://background-remover-app-cyan.vercel.app"

else
    echo "❌ Usage: ./switch-env.sh [dev|prod]"
    echo ""
    echo "Examples:"
    echo "  ./switch-env.sh dev   - Switch to development"
    echo "  ./switch-env.sh prod  - Switch to production"
fi
