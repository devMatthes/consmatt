<script lang="ts">
  import MobileMenu from "./MobileMenu.svelte";

  let isMenuOpen = $state(false);
  let isContactSection = $state(false);

  // Update URL based on visible section and watch contact section for color change
  $effect(() => {
    const sections = ['home', 'oferta', 'realizacje', 'kontakt'];
    const sectionElements = sections
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    // Observer for URL updates (50% visibility)
    const urlObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const newPath = sectionId === 'home' ? '/' : `/${sectionId}`;
            if (window.location.pathname !== newPath) {
              window.history.replaceState(null, '', newPath);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px'
      }
    );

    // Scroll handler for topbar color change
    const contactSection = document.getElementById('kontakt');
    const checkTopbarColor = () => {
      if (!contactSection) return;
      
      const contactRect = contactSection.getBoundingClientRect();
      const topbarHeight = 64; // Topbar height in pixels
      
      // Change color when topbar's bottom edge (topbarHeight) hits contact section's top edge
      isContactSection = contactRect.top <= topbarHeight;
    };

    // Check on scroll
    window.addEventListener('scroll', checkTopbarColor, { passive: true });
    
    // Initial check
    checkTopbarColor();

    // Observe all sections for URL updates
    sectionElements.forEach(section => urlObserver.observe(section));

    return () => {
      urlObserver.disconnect();
      window.removeEventListener('scroll', checkTopbarColor);
    };
  });
</script>

<header
  class="sticky top-0 z-50 flex items-center justify-between px-6 py-4 text-brand-text transition-colors duration-300"
  class:bg-white={!isContactSection}
  class:bg-[#FEFAE0]={isContactSection}
>
  <span class="sm:text-base md:text-2xl font-mono font-bold lowercase">consmatt.</span>
  <div class="flex items-center gap-4">
    <a
      href="#kontakt"
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
