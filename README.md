
## Local setup

```bash
npm install --legacy-peer-deps --no-audit --no-fund
npm run dev
```

## Vercel deployment settings

- Framework Preset: Next.js
- Install Command: `npm install --legacy-peer-deps --no-audit --no-fund`
- Build Command: `npm run build`
- Output Directory: leave empty or use `.next`

## Dependency issue fallback

This project uses only three core dependencies:

- next: 14.2.23
- react: 18.3.1
- react-dom: 18.3.1

If Vercel still shows npm CLI errors, set the install command to:

```bash
npm install --legacy-peer-deps --no-audit --no-fund --loglevel=error
```
