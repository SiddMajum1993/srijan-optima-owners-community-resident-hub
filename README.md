# Srijan Optima Owners Community

This is a single-page responsive application for the Srijan Optima Owners Community.

## Features
- Responsive design (Mobile/Desktop)
- Modern typography (Plus Jakarta Sans, Inter)
- Smooth animations using Framer Motion
- Unofficial community hub for resident collaboration

## Deployment to Cloudflare Pages

1. **Build the project**:
   ```bash
   npm run build
   ```
2. **Deploy**:
   - Go to the Cloudflare Dashboard.
   - Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
   - Select your repository.
   - Set the following build settings:
     - **Framework preset**: `Vite`
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
   - Click **Save and Deploy**.

## Assets
Images used in this project are currently hosted on external CDNs. For production, consider moving them to the `public/assets` directory.
