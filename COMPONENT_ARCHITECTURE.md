# Component Architecture

## Overview
This document explains the reusable component architecture implemented for Consmatt Digital Studio service subpages, following Svelte 5 best practices.

## Problem
Multiple service subpages (strony-internetowe, modernizacja, wsparcie-techniczne) share identical UI patterns:
- Back arrow navigation
- Title with yellow highlight background
- Subtitle text
- Two-column feature list

Without reusable components, this creates code duplication and maintenance issues.

## Solution: Reusable Components

### 1. PageHeader Component
**File:** `src/components/PageHeader.svelte`

**Purpose:** Display page title with yellow highlight background and optional subtitle

**Props:**
- `title` (string): Main heading text (supports multi-line with `\n`)
- `subtitle` (string, optional): Subheading text

**Usage:**
```svelte
<PageHeader 
  title="Strony Internetowe\nAplikacje Webowe"
  subtitle="Nowoczesne rozwiązania, które działają."
/>
```

**Styling:**
- Yellow background: `#FEFAE0`
- Title: 24px Inter Bold, `#1E1E1E`
- Subtitle: 14px Inter Regular, `#7E7E7E`
- Background dimensions: 220px width × 48px height, 12px border-radius

---

### 2. FeatureList Component
**File:** `src/components/FeatureList.svelte`

**Purpose:** Display features in a two-column layout with labels and descriptions

**Props:**
- `features` (array): Array of feature objects with `label` and `description` properties

**Usage:**
```svelte
<FeatureList features={[
  {
    label: "Responsywność",
    description: "Twoja strona działa i\nwygląda świetnie\nna każdym urządzeniu"
  },
  {
    label: "Optymalizacja",
    description: "Skupiamy się na tym,\nżeby Twoja strona\nładowała się w sekundę."
  }
]} />
```

**Styling:**
- Left column (labels): 137px width, 13px uppercase Inter Semi-Bold, `#1E1E1E`
- Right column (descriptions): Flexible width, 16px Inter Regular, `#1E1E1E`
- Gap between features: 24px (Tailwind `gap-6`)

---

## Implementation Example

### Before (Duplicated Code):
```astro
<!-- strony-internetowe.astro - 150+ lines of duplicated markup -->
<div class="relative mb-6 inline-block">
  <div class="absolute left-1/2 top-1/2 h-12 w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#FEFAE0]"></div>
  <h1 class="relative text-2xl font-bold leading-tight text-black" style="font-family: 'Inter', sans-serif;">
    Strony Internetowe<br />Aplikacje Webowe
  </h1>
</div>
<!-- ... repeated feature markup ... -->
```

### After (Reusable Components):
```astro
---
import PageHeader from "../components/PageHeader.svelte";
import FeatureList from "../components/FeatureList.svelte";

const features = [
  { label: "Responsywność", description: "..." },
  { label: "Optymalizacja", description: "..." }
];
---

<PageHeader 
  title="Strony Internetowe\nAplikacje Webowe"
  subtitle="Nowoczesne rozwiązania, które działają."
/>

<FeatureList features={features} />
```

---

## Benefits

1. **DRY Principle**: No code duplication across pages
2. **Maintainability**: Single source of truth for UI patterns
3. **Consistency**: Guaranteed visual consistency across all service pages
4. **Flexibility**: Easy to add new service pages by passing different data
5. **Scalability**: New features can be added to components once, applied everywhere
6. **Type Safety**: Props can be typed with TypeScript for better developer experience

---

## Svelte 5 Best Practices Used

### 1. `$props` Rune
Components use the `$props` rune (Svelte 5) for receiving data:
```svelte
<script>
  let { title, subtitle } = $props();
</script>
```

### 2. Keyed Each Blocks
The `{#each}` block includes a key for optimal rendering:
```svelte
{#each features as feature (feature.label)}
```

### 3. Optional Props
Subtitle is optional using conditional rendering:
```svelte
{#if subtitle}
  <p>{subtitle}</p>
{/if}
```

---

## Page Structure Pattern

All service subpages follow this pattern:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import TopBar from "../components/TopBar.svelte";
import PageHeader from "../components/PageHeader.svelte";
import FeatureList from "../components/FeatureList.svelte";

const features = [ /* page-specific data */ ];
---

<BaseLayout title="..." description="...">
  <div class="flex min-h-screen flex-col bg-white">
    <TopBar client:load />
    
    <!-- Back Arrow (could be extracted to BackButton component if needed) -->
    <div class="px-6 pt-3">
      <a href="/" aria-label="Powrót do strony głównej">
        <svg><!-- arrow icon --></svg>
      </a>
    </div>

    <!-- Main Content -->
    <main class="flex flex-1 flex-col px-6 pb-16">
      <header class="mb-12 mt-8 text-center">
        <PageHeader title="..." subtitle="..." />
      </header>

      <FeatureList features={features} />
    </main>
  </div>
</BaseLayout>
```

---

## Future Enhancements

### Potential Additional Components:
1. **BackButton.svelte**: Extract back arrow navigation
2. **ServicePageLayout.svelte**: Wrapper component combining TopBar, BackButton, and layout structure
3. **Badge.svelte**: Reusable badge component for status indicators
4. **Card.svelte**: Reusable card component for realizations section

### TypeScript Integration:
```svelte
<script lang="ts">
  interface Feature {
    label: string;
    description: string;
  }

  let { features }: { features: Feature[] } = $props();
</script>
```

---

## Testing
All components validated with Svelte 5 autofixer:
- ✅ PageHeader.svelte - No issues
- ✅ FeatureList.svelte - No issues
- ✅ All pages compile successfully
- ✅ No TypeScript/linting errors

---

## Related Files
- `src/components/PageHeader.svelte`
- `src/components/FeatureList.svelte`
- `src/pages/strony-internetowe.astro`
- `src/pages/modernizacja.astro`
- `src/components/OfferSection.svelte` (updated with links)
