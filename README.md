# The Roots Cafe - Digital Menu

A modern, elegant, and interactive digital menu for The Roots Cafe, featuring beautiful animations and responsive design.

## Features

- 🎨 Modern and fancy design with elegant animations
- 📱 Fully responsive for all devices (desktop, tablet, mobile)
- ✨ Interactive hover effects and smooth transitions
- 🎵 Optional subtle sound effects on hover
- 🌟 Parallax scrolling effects
- 💫 Animated background elements
- 🔄 Seasonal color adaptations
- 📱 QR code section for social media
- 🎯 Optimized performance with smooth animations

## Menu Sections

1. **San Sebastian Cheesecakes** - Various flavored cheesecakes
2. **Toasts** - Including specialty "The Roots" options
3. **Desserts** - Tiramisu, cookies, brownies, and more
4. **Sandwiches** - Mediterranean and smoked turkey options

## Technologies Used

- HTML5
- CSS3 with advanced animations and effects
- Vanilla JavaScript for interactions
- Google Fonts (Playfair Display & Lato)
- Font Awesome icons
- Responsive Grid Layout
- CSS Backdrop Filters
- Intersection Observer API

## How to Use

1. Open `index.html` in any modern web browser
2. The menu will load with beautiful animations
3. Hover over items to see interactive effects
4. Click on items for ripple effects
5. Scroll to see parallax animations
6. The design adapts to your screen size automatically

## Customization

### Colors

The main color scheme uses:

- Gold accent: `#d4af37`
- Dark brown: `#4a3f35`
- Cream background: `#f5f1eb`
- Modern gradients throughout

### Adding New Menu Items

To add new items, simply follow the existing HTML structure in `index.html`:

```html
<div class="menu-item">
  <span class="item-name">YOUR ITEM NAME</span>
  <span class="dots"></span>
  <span class="price">XXX <small>TRY</small></span>
</div>
```

### Special Items

For featured items, add the `special` class:

```html
<div class="menu-item special">
  <!-- content -->
  <small class="description">( Your description here )</small>
</div>
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance

- Optimized animations using CSS transforms
- Debounced scroll events
- Efficient DOM manipulation
- Minimal external dependencies

Enjoy your beautiful digital menu! ☕✨
