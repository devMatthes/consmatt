# Responsive Desktop Implementation

## Overview
The desktop design from Figma has been implemented as a responsive view that automatically displays on screens ≥1024px (Tailwind's `lg` breakpoint).

## Architecture

### Component Structure
```
src/components/desktop/
├── DesktopTopBar.svelte      # Fixed navigation header
├── DesktopHero.svelte         # Hero section with main headline
├── DesktopOffer.svelte        # Services/offerings section
├── DesktopRealizations.svelte # Portfolio/projects showcase
├── DesktopContact.svelte      # Contact information
└── DesktopFooter.svelte       # Footer with links
```

### Responsive Behavior

The main `index.astro` page now uses Tailwind's responsive utilities to show different layouts:

**Mobile (< 1024px):**
- Shows existing mobile components (TopBar, Hero, OfferSection, etc.)
- Uses `flex flex-1 flex-col lg:hidden`

**Desktop (≥ 1024px):**
- Shows new desktop components
- Uses `hidden lg:flex lg:flex-col lg:min-h-screen`

## Key Features

### 1. **Modular Components**
Each section is a separate, reusable Svelte component with:
- TypeScript interfaces for type safety
- Props and data structures
- Semantic HTML
- Proper accessibility

### 2. **Design Tokens**
All components use existing Tailwind design tokens:
- `brand-yellow` - Primary accent color
- `brand-orange` - Secondary accent
- `brand-green` - CTA buttons
- `brand-gray` - Secondary text
- `brand-navy` - Dark backgrounds

### 3. **Typography**
Uses project fonts:
- **Geist Mono** - Logo and brand text
- **Lato** - Body text and headings
- **Inter** - UI elements
- **Open Sans Condensed** - Display headings

### 4. **Navigation**
- Mobile: Hamburger menu (MobileMenu component)
- Desktop: Horizontal navigation with fixed header

## Testing

1. **Mobile View** (< 1024px):
   - Resize browser or use DevTools mobile emulation
   - Should show vertical mobile layout

2. **Desktop View** (≥ 1024px):
   - Expand browser window
   - Should show horizontal desktop layout with Figma design

## Build Output

```bash
npm run build
# ✓ Successfully builds both mobile and desktop views
# ✓ No errors or warnings
# ✓ All components optimized
```

## Performance

- Components are code-split automatically by Astro
- Desktop components only load when viewport is ≥1024px
- Images are lazy-loaded
- Minimal JavaScript footprint

## Future Improvements

1. Add tablet-specific layout (768px - 1024px)
2. Implement smooth transitions between layouts
3. Add scroll animations for desktop sections
4. Optimize Figma asset loading (consider self-hosting)
5. Add intersection observer for section animations
