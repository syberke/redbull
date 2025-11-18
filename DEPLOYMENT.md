# Deployment Guide - Red Bull Racing F1 Website

This guide covers deploying your Red Bull Racing F1 website to Vercel, the recommended platform for Next.js applications.

## Prerequisites

- GitHub account
- Vercel account (free tier available)
- Git installed locally

## Deployment Steps

### 1. Prepare Your Repository

First, ensure your code is in a Git repository:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Red Bull Racing F1 website"
```

### 2. Push to GitHub

Create a new repository on GitHub, then push your code:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/red-bull-racing-f1.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository
5. Configure project settings:
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)
6. Click **"Deploy"**

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### 4. Verify Deployment

After deployment:
1. Vercel will provide a production URL (e.g., `your-project.vercel.app`)
2. Visit the URL to verify your site is live
3. Test all pages and features:
   - Home page animations
   - Drivers page and individual driver pages
   - Races page with tabs
   - Team page
   - Theme toggle functionality

## Environment Configuration

### No Environment Variables Required

This project uses the public Ergast F1 API, which doesn't require API keys or authentication. No environment variables need to be configured.

## Post-Deployment

### Custom Domain (Optional)

To add a custom domain:

1. Go to your project on Vercel
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Follow DNS configuration instructions
5. Vercel will automatically provision SSL certificates

### Automatic Deployments

Vercel automatically deploys:
- **Production**: When you push to `main` branch
- **Preview**: When you push to any other branch or create a pull request

### Performance Monitoring

Vercel provides built-in analytics:
1. Go to your project dashboard
2. Click **"Analytics"** tab
3. Monitor performance metrics

## Build Configuration

### Current Configuration (`next.config.js`)

```javascript
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};
```

This configuration:
- Skips ESLint during builds (for faster deployment)
- Uses unoptimized images (suitable for static export if needed)

### Production Optimizations

The build automatically includes:
- Code splitting
- Tree shaking
- Minification
- Image optimization
- CSS optimization

## Troubleshooting

### Build Failures

If the build fails:

1. **Check build logs** on Vercel dashboard
2. **Test locally** before deploying:
   ```bash
   npm run build
   npm run start
   ```
3. **Common issues**:
   - Missing dependencies: Run `npm install`
   - TypeScript errors: Run `npm run typecheck`
   - Build configuration: Check `next.config.js`

### API Issues

If the Ergast API is not returning data:

1. Check API status: [ergast.com](http://ergast.com/mrd/)
2. Verify network requests in browser DevTools
3. Check for rate limiting (unlikely with public API)
4. Ensure proper error handling is displaying messages

### Performance Issues

To improve performance:

1. Enable Vercel Analytics
2. Monitor Core Web Vitals
3. Optimize images further if needed
4. Consider implementing ISR (Incremental Static Regeneration)

## Continuous Deployment

### Automatic Updates

Every push to GitHub triggers:
1. Automatic build on Vercel
2. Preview deployment (for non-main branches)
3. Production deployment (for main branch)
4. Instant rollback capability

### Branch Previews

Each branch gets a unique preview URL:
- Format: `your-project-branch.vercel.app`
- Perfect for testing features before merging

## Advanced Configuration

### Custom Build Settings

Edit `vercel.json` in project root (optional):

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### Edge Functions

For optimal performance, you can deploy specific functions to edge locations. This project is already optimized for Vercel Edge Runtime.

## Monitoring & Analytics

### Built-in Vercel Analytics

Vercel provides:
- Real User Monitoring (RUM)
- Core Web Vitals tracking
- Page load performance
- API response times

### Setup Steps

1. Enable Analytics in Vercel dashboard
2. Add analytics package (optional):
   ```bash
   npm install @vercel/analytics
   ```
3. Import in layout:
   ```typescript
   import { Analytics } from '@vercel/analytics/react';
   ```

## Security

### Automatic Security Features

Vercel includes:
- Automatic HTTPS/SSL
- DDoS protection
- Edge caching
- Security headers

### Best Practices

1. Keep dependencies updated:
   ```bash
   npm audit
   npm update
   ```
2. Review Vercel security logs regularly
3. Enable Vercel Protection (Pro plan)

## Scaling

### Free Tier Limits

Vercel Free tier includes:
- Unlimited deployments
- 100 GB bandwidth/month
- Automatic scaling
- Edge Network

### Upgrading

If you exceed limits:
- Upgrade to Pro plan
- Optimize asset delivery
- Implement caching strategies

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)
- [GitHub Issues](https://github.com/vercel/next.js/issues)

## Quick Commands Reference

```bash
# Build locally
npm run build

# Start production server locally
npm run start

# Deploy to Vercel (CLI)
vercel --prod

# Check deployment logs
vercel logs

# List deployments
vercel ls

# Roll back to previous deployment
vercel rollback
```

## Success Checklist

- [ ] Code pushed to GitHub
- [ ] Project deployed to Vercel
- [ ] Production URL is accessible
- [ ] All pages load correctly
- [ ] API data is fetching properly
- [ ] Theme toggle works
- [ ] Mobile responsive design verified
- [ ] Performance metrics reviewed
- [ ] Custom domain configured (optional)
- [ ] Analytics enabled (optional)

---

**Deployment Complete!** Your Red Bull Racing F1 website is now live and ready to showcase. 🏎️
