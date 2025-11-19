# ofisk-tech-links

A simple, professional React-based links page for [ofisk.tech](https://ofisk.tech).

## Features

- Clean, minimal design with purple accent color
- Responsive layout that works on all devices
- Organized link sections (Personal and Adobe Projects)
- Built with React and Vite for easy future expansion

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment to Cloudflare Pages

### Option 1: Connect GitHub Repository

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** in the sidebar
3. Click **Create a project** → **Connect to Git**
4. Select your GitHub repository (`ofisk-tech-links`)
5. Configure build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click **Save and Deploy**

### Option 2: Direct Upload

1. Build the project locally: `npm run build`
2. In Cloudflare Pages, click **Create a project** → **Upload assets**
3. Upload the contents of the `dist/` directory
4. Click **Deploy site**

### Custom Domain Setup

1. In your Cloudflare Pages project, go to **Custom domains**
2. Click **Set up a custom domain**
3. Enter `ofisk.tech`
4. Follow the DNS configuration instructions if needed
5. Cloudflare will automatically provision an SSL certificate

## Project Structure

```
ofisk-tech-links/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Name and title
│   │   ├── Bio.jsx          # Bio section
│   │   ├── LinkSection.jsx  # Link group component
│   │   └── LinkItem.jsx     # Individual link component
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies

```

## Customization

### Adding Links

Edit `src/App.jsx` and add links to the `personalLinks` or `adobeLinks` arrays:

```jsx
const personalLinks = [
  {
    label: 'Your Link Name',
    url: 'https://example.com'
  }
]
```

### Changing Colors

Edit the CSS variables in `src/App.css`:

```css
:root {
  --accent-color: #6B46C1;  /* Purple accent */
  --accent-hover: #553C9A;  /* Hover state */
}
```

## License

MIT
