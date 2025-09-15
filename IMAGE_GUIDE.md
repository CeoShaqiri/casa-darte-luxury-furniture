# Image Usage Guide for Casa d'Arte

## 📁 **Where to Put Your Images**

### 1. **`public/images/` folder** (Recommended for furniture photos)
- **Path**: `C:\Users\senav\OneDrive\Desktop\web\react\website\src\AR-Gallery\public\images\`
- **Usage**: For furniture photos, gallery images, backgrounds
- **Access**: Use `/images/filename.jpg` in your code
- **Example**: Put `luxury-sofa.jpg` here and use it as `/images/luxury-sofa.jpg`

### 2. **`src/assets/` folder** (For imported assets)
- **Path**: `C:\Users\senav\OneDrive\Desktop\web\react\website\src\AR-Gallery\src\assets\`
- **Usage**: For logos, icons, small images that need optimization
- **Access**: Import them directly in your components

## 🖼️ **How to Use Images**

### Method 1: Public Images (Simple)
```jsx
<img src="/images/luxury-sofa.jpg" alt="Luxury Italian Sofa" />
```

### Method 2: Imported Images (Optimized)
```jsx
import sofaImage from '../assets/luxury-sofa.jpg'
<img src={sofaImage} alt="Luxury Italian Sofa" />
```

## 📋 **Recommended File Structure**
```
public/images/
├── furniture/
│   ├── sofas/
│   ├── chairs/
│   ├── tables/
│   └── bedroom/
├── ambientes/
│   ├── living-room/
│   ├── dining-room/
│   └── bedroom/
└── gallery/
```

## 💡 **Tips**
- Use `.jpg` for photos, `.png` for logos with transparency
- Optimize images (recommended max width: 1920px)
- Use descriptive Italian names like `poltrona-lusso-milano.jpg`