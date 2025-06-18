# PWA Manifest Setup Guide

## Linking the Manifest

Add the following to your index.html's `<head>` section:

```html
<link rel="manifest" href="/manifest.json">

<!-- Apple specific meta tags -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="apple-mobile-web-app-title" content="Your App Name">
<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png">

<!-- Microsoft specific meta tags -->
<meta name="msapplication-TileColor" content="#000000">
<meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png">

<!-- Theme Color -->
<meta name="theme-color" content="#000000">
```

## Required Icons

The template expects the following icons in your public/favicon directory:

- favicon-16x16.png (16x16)
- favicon-32x32.png (32x32)
- android-chrome-192x192.png (192x192)
- android-chrome-512x512.png (512x512)
- apple-touch-icon.png (180x180)
- mstile-144x144.png (144x144)

## Customization

1. Update the following fields in manifest.json:
   - name: Your full application name
   - short_name: Shortened name for icons
   - description: Brief description of your app
   - theme_color: Your app's theme color
   - background_color: Loading background color
   - screenshots: Add your own screenshots
   - shortcuts: Configure quick access shortcuts

2. Optional Fields:
   - categories: Add relevant categories
   - orientation: Change preferred orientation
   - scope: Modify if your app isn't served from root
   - lang: Change default language

## Testing

To test PWA features:

1. Build your application
2. Use a production HTTPS server
3. Test installation on various devices
4. Verify offline functionality (requires service worker)

## Notes

- Icons should be PNG format for best compatibility
- The manifest supports dark/light mode preferences
- Custom shortcuts improve user experience
- Screenshots help with app store listings
