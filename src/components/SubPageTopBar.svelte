<script lang="ts">
  import MobileMenu from "./MobileMenu.svelte";

  let isMenuOpen = $state(false);
</script>

<header
  class="sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-4 text-brand-text"
>
  <!-- Back Arrow -->
  <a
    href="/#oferta"
    class="inline-flex items-center justify-center text-black transition hover:opacity-70"
    aria-label="Powrót do strony głównej"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="15" viewBox="0 0 33 15" fill="none">
      <path d="M0.292892 6.65691C-0.0976295 7.04743 -0.0976295 7.6806 0.292892 8.07112L6.65685 14.4351C7.04738 14.8256 7.68054 14.8256 8.07107 14.4351C8.46159 14.0446 8.46159 13.4114 8.07107 13.0209L2.41421 7.36401L8.07107 1.70716C8.46159 1.31664 8.46159 0.68347 8.07107 0.292946C7.68054 -0.0975785 7.04738 -0.0975785 6.65685 0.292946L0.292892 6.65691ZM33 7.36401V6.36401L1 6.36401V7.36401V8.36401L33 8.36401V7.36401Z" fill="black"/>
    </svg>
  </a>

  <!-- Right side icons -->
  <div class="flex items-center gap-4">
    <a
      href="/#kontakt"
      class="flex items-center justify-center text-[#1E1E1E] transition hover:opacity-70"
      aria-label="Wyślij wiadomość"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
    <button
      onclick={() => isMenuOpen = true}
      class="flex items-center justify-center text-[#1E1E1E] transition hover:opacity-70"
      aria-label="Otwórz menu"
      type="button"
    >
      <svg
        class="h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M2 4h12M2 8h12M2 12h12" />
      </svg>
    </button>
  </div>
</header>

<MobileMenu isOpen={isMenuOpen} onClose={() => isMenuOpen = false} />
