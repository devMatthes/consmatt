# Tailwind v4 Color Configuration Fix

## Problem
The `bg-brand-yellow` and other brand color classes were not applying colors because of a mismatch between **Tailwind v3** and **Tailwind v4** configuration formats.

## Root Cause

### Tailwind v3 (Old Format)
In `tailwind.config.ts`, colors were defined like this:
```typescript
colors: {
  brand: {
    yellow: "#FEFAE0",
    orange: "#DDA15E",
    // ...
  }
}
```

### Tailwind v4 (New Format)
With Tailwind v4 using `@import "tailwindcss"`, colors must be defined in CSS using the `@theme` directive:
```css
@theme inline {
  --color-brand-yellow: #FEFAE0;
  --color-brand-orange: #DDA15E;
  /* ... */
}
```

## Solution

Added all brand colors to `src/styles/global.css` in the `@theme inline` block:

```css
@theme inline {
  /* ... existing shadcn colors ... */
  
  /* Brand Colors for Tailwind v4 */
  --color-brand-primary: #606C38;
  --color-brand-text: #1B1B1B;
  --color-brand-yellow: #FEFAE0;
  --color-brand-orange: #DDA15E;
  --color-brand-green: #606C38;
  --color-brand-dark: #1E1E1E;
  --color-brand-gray: #7E7E7E;
  --color-brand-navy: #001527;
}
```

## How Tailwind v4 Works

1. **Define colors in CSS** using `--color-{name}` format
2. **Use in classes** with standard Tailwind syntax: `bg-brand-yellow`, `text-brand-gray`, etc.
3. **Opacity modifiers** work automatically: `bg-brand-yellow/60`, `bg-brand-orange/40`

## Available Brand Colors

Now these classes work correctly:

| Class Pattern | Color | Hex Code |
|--------------|-------|----------|
| `bg-brand-primary` / `text-brand-primary` | Primary green | #606C38 |
| `bg-brand-text` / `text-brand-text` | Text color | #1B1B1B |
| `bg-brand-yellow` / `text-brand-yellow` | Yellow accent | #FEFAE0 |
| `bg-brand-orange` / `text-brand-orange` | Orange accent | #DDA15E |
| `bg-brand-green` / `text-brand-green` | Green | #606C38 |
| `bg-brand-dark` / `text-brand-dark` | Dark | #1E1E1E |
| `bg-brand-gray` / `text-brand-gray` | Gray | #7E7E7E |
| `bg-brand-navy` / `text-brand-navy` | Navy | #001527 |

## Examples

```svelte
<!-- Solid background -->
<div class="bg-brand-yellow">...</div>

<!-- With opacity -->
<div class="bg-brand-yellow/60">...</div>

<!-- Text color -->
<p class="text-brand-gray">...</p>

<!-- Border color -->
<div class="border-brand-orange">...</div>

<!-- Hover states -->
<button class="hover:bg-brand-green">...</button>
```

## Migration Notes

- **Keep `tailwind.config.ts`** for other config (fonts, extend, plugins)
- **Move all colors** to `global.css` using `@theme` directive
- The format is: `--color-{utility}-{variant}: {value}`
- Opacity modifiers (`/60`, `/40`) work automatically

## References

- [Tailwind v4 Migration Guide](https://tailwindcss.com/docs/upgrade-guide)
- [Tailwind v4 Theme Configuration](https://tailwindcss.com/docs/theme)
- [shadcn-svelte Tailwind v4 Docs](https://shadcn-svelte.com/docs/migration/tailwind-v4)
