# 🌿 Sustainability Checker Chrome Extension

This browser extension detects the brand name on clothing retail websites and displays real-time sustainability ratings, material info, and origin using data from [Good On You](https://directory.goodonyou.eco).  
It helps users make more environmentally conscious decisions while shopping online.

---

## 🔍 Features

- 🧠 Automatically detects brand names from site metadata
- 🌐 Queries a live Flask API for brand sustainability info
- 🎨 Displays rating, price category, and country of origin
- 🔐 API access secured by extension-only key and origin check
- ✅ No tracking, ads, or user data collection

---

## 📁 Folder Structure

```
sustainability-extension/
├── manifest.json
├── content.js
├── popup.html
├── popup.js
├── style.css
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
```

---

## 🚀 How to Use

1. Clone or download this repository
2. Open `chrome://extensions/` or `brave://extensions/`
3. Enable **Developer Mode**
4. Click **Load unpacked** and select the `sustainability-extension/` folder
5. Visit a brand website like Zara or H&M and open the extension popup

---

## 🔧 Customization

- Update the API base URL in `popup.js`:

```js
const API_BASE = "https://your-api-url.onrender.com";
```

- Edit `style.css` and `popup.html` to customize the UI
- Replace icons in the `icons/` folder for branding

---

## 🛰️ Backend API

Powered by [Sustainability API](https://github.com/Antoniodeoliveirasegura/sustainability-api), a Flask app that scrapes and caches data from Good On You.

---

## 📄 License

MIT License — free to use, modify, and distribute.
