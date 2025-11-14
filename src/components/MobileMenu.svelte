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
    class="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-[#DDA15E] px-3 py-2"
    role="dialog"
    aria-modal="true"
    aria-label="Menu nawigacyjne"
  >
    <!-- Close button -->
    <div class="flex justify-end">
      <button
        onclick={onClose}
        class="flex h-10 w-10 items-center justify-center text-[#1E1E1E] transition hover:opacity-70"
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
      <span class="text-2xl font-mono font-bold lowercase text-[#000000]">consmatt.</span>
    </div>

    <!-- Navigation items -->
    <nav class="mt-20 flex flex-1 flex-col items-center gap-20">
      {#each menuItems as item (item.href)}
        <a
          href={item.href}
          onclick={onClose}
          class="text-center text-[32px] font-bold leading-normal {item.highlight
            ? 'text-[#FEFAE0]'
            : 'text-[#000000]'} transition hover:opacity-80"
        >
          {item.label}
        </a>
      {/each}
    </nav>

    <!-- Footer logo -->
    <div class="mt-auto px-2 py-2">
      <span class="text-sm font-mono font-bold lowercase text-[#000000]">consmatt.</span>
    </div>
  </div>
{/if}
