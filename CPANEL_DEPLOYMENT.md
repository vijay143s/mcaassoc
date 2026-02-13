# cPanel Node.js Deployment Guide

## Setup Instructions

### Step 1: Create Node.js Application in cPanel

1. **Login to cPanel**
2. Navigate to **Nodejs Selector** (or **Node.js Manager**)
3. Click **+ Create Application**
4. Configure:
   - **Node.js Version**: 20.x (or latest available)
   - **Application Root**: `/home/mcaandas/mcaandassoc.com/mca`
   - **Application URL**: Select your domain
   - **Application Startup File**: `server.js`
   - **Passenger Log File**: Optional

5. Click **Create** and note the assigned port

### Step 2: Configure GitHub Secrets

Add these to your GitHub repository → Settings → Secrets and variables → Actions:

```
FTP_SERVER        = ftp.mcaandassoc.com (or your FTP server)
FTP_USERNAME      = mcaandas (or your cPanel username)
FTP_PASSWORD      = your_ftp_password
FTP_PORT          = 21
SSH_HOST          = mcaandassoc.com (or your server IP)
SSH_USERNAME      = mcaandas (or your cPanel username)
SSH_PASSWORD      = your_cpanel_password
SSH_PORT          = 22
```

### Step 3: Update package.json

Make sure your `package.json` includes:

```json
{
  "scripts": {
    "start": "node server.js",
    "build:qa": "webpack --env=qa",
    "install-prod": "npm install --production"
  }
}
```

### Step 4: Add Dependencies

Install Express and Compression:

```bash
npm install express compression
```

### Step 5: Deploy

1. Push code to your `main`, `master`, or `enhance*` branch
2. GitHub Actions will automatically:
   - Build the frontend
   - Upload files to cPanel via FTP
   - Install dependencies via SSH
   - Restart the Node.js application

### Step 6: Verify Deployment

- Check your domain in browser
- You should see your React app running
- Health check: Visit `https://yourdomain.com/health`

---

## File Structure After Deployment

```
/home/mcaandas/mcaandassoc.com/mca/
├── server.js                 # Node.js server
├── ecosystem.config.js       # PM2 config (optional)
├── package.json
├── dist/qa/                  # Built frontend (created by npm run build:qa)
│   ├── index.html
│   ├── index_bundle.js
│   └── ...assets
└── node_modules/            # Dependencies (installed by deploy)
```

---

## Troubleshooting

### App won't start
- Check cPanel's Node.js Manager for error logs
- SSH in and run: `cd /home/mcaandas/mcaandassoc.com/mca && npm install`
- Check if port is available

### Static files not serving
- Make sure `dist/qa/` is built: `npm run build:qa`
- Verify `server.js` is pointing to correct paths

### Need to restart manually
```bash
# SSH into your server
ssh mcaandas@mcaandassoc.com

# Go to app directory
cd /home/mcaandas/mcaandassoc.com/mca

# Restart using cPanel's Node.js Manager
# Or restart via SSH command provided by cPanel
```

---

## Environment Variables

If you need environment variables, add to cPanel's Node.js Manager:
- `NODE_ENV=production`
- `REACT_APP_API_URL=https://yourdomain.com/api`

---

## Performance Tips

1. Enable gzip compression (already in `server.js`)
2. Use cPanel's SSL/TLS for HTTPS
3. Monitor app usage in cPanel
4. Keep Node.js version updated

