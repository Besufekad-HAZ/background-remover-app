#!/bin/bash

# Payment Debug Script for Background Removal App
echo "🔍 Payment Debug Script"
echo "======================"

echo "📋 Checking payment verification endpoint..."
echo "Backend URL: https://background-remover-app-cyan.vercel.app"
echo ""

echo "🧪 Test Payment Verification:"
echo "1. Make a test payment"
echo "2. Check the browser network tab for the verification call"
echo "3. Look for: /api/payment/verify?tx_ref=..."
echo ""

echo "📊 Debug Steps:"
echo "1. Check server logs in Vercel dashboard"
echo "2. Verify Chapa API response"
echo "3. Check MongoDB user document updates"
echo "4. Test credit refresh on frontend"
echo ""

echo "🔧 Common Issues:"
echo "- 304 Not Modified: Fixed with cache-busting headers"
echo "- Payment verification failing: Check Chapa API keys"
echo "- Credits not updating: Check MongoDB connection"
echo ""

echo "✅ Recent Fixes Applied:"
echo "- Added cache-busting headers to prevent 304 responses"
echo "- Added detailed logging to payment verification"
echo "- Added cache-busting parameter to credit fetch"
echo "- Added manual refresh button on success page"
echo ""

echo "🚀 Next Steps:"
echo "1. Deploy these changes to production"
echo "2. Test payment flow end-to-end"
echo "3. Check server logs for any errors"
echo "4. Verify credits update correctly"
