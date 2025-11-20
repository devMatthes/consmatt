<script lang="ts">
  interface Props {
    isOpen: boolean;
    onClose: () => void;
  }

  let { isOpen, onClose }: Props = $props();

  const menuItems = [
    { label: "Strona Główna", href: "#home", highlight: true },
    { label: "Nasza Oferta", href: "#oferta", highlight: false },
    { label: "Nasze Realizacje", href: "#realizacje", highlight: false },
    { label: "Kontakt", href: "#kontakt", highlight: false },
  ];

  function handleNavClick(event: MouseEvent, href: string) {
    const sectionId = href.replace('#', '');
    const isHomePage = window.location.pathname === '/';
    
    if (isHomePage) {
      // On homepage: scroll to section
      event.preventDefault();
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        onClose();
      }
    } else {
      // On other pages: navigate to section page
      const targetPath = sectionId === 'home' ? '/' : `/${sectionId}`;
      window.location.href = targetPath;
    }
  }

  // Prevent body scroll when menu is open
  $effect(() => {
    if (isOpen) {
      // Store original overflow value
      const originalOverflow = document.body.style.overflow;
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
      
      // Cleanup: restore scroll when menu closes
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  });
</script>

{#if isOpen}
  <div
    class="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-accent px-3 py-2"
    role="dialog"
    aria-modal="true"
    aria-label="Menu nawigacyjne"
  >
    <!-- Close button -->
    <div class="flex justify-end">
      <button
        onclick={onClose}
        class="flex h-10 w-10 items-center justify-center text-mobile-menu transition hover:opacity-70"
        aria-label="Zamknij menu"
        type="button"
      >
        <svg
          class="h-4 w-4"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 4L4 12M4 4l8 8" />
        </svg>
      </button>
    </div>

    <!-- Logo -->
    <div class="mt-6 text-center">
      <span class="font-mono text-2xl font-bold lowercase text-mobile-menu">consmatt.</span>
    </div>

    <!-- Navigation items -->
    <nav class="mt-20 flex flex-1 flex-col items-center gap-8">
      {#each menuItems as item (item.href)}
        <a
          href={item.href}
          onclick={(event) => handleNavClick(event, item.href)}
          class="text-center text-2xl font-bold leading-normal transition hover:opacity-80 {item.highlight
            ? 'text-brand-yellow'
            : 'text-mobile-menu'}"
        >
          {item.label}
        </a>
      {/each}
    </nav>
  </div>
{/if}
