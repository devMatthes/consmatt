<script lang="ts">
  const currentYear = new Date().getFullYear();

  export let variant: "brand" | "light" = "brand";

  interface FooterLink {
    label: string;
    targetId: string;
  }

  const footerLinks: FooterLink[] = [
    { label: "Strona Główna", targetId: "home" },
    { label: "Oferta", targetId: "oferta" },
    { label: "Nasze Realizacje", targetId: "realizacje" },
    { label: "Kontakt", targetId: "kontakt" }
  ];

  const containerClasses =
    variant === "light"
      ? "bg-white border-t border-black/5"
      : "bg-brand-yellow";

  function handleLogoClick(event: MouseEvent) {
    event.preventDefault();
    
    const path = window.location.pathname;
    const isHomePage = path === '/' || path === '/oferta' || path === '/realizacje' || path === '/kontakt';
    
    if (isHomePage) {
      // On homepage: scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // On other pages: navigate to homepage
      window.location.href = '/';
    }
  }

  function handleFooterNavClick(event: MouseEvent, targetId: string) {
    event.preventDefault();

    // Check if we're on the homepage or section-redirect pages
    const path = window.location.pathname;
    const isHomePage = path === '/' || path === '/oferta' || path === '/realizacje' || path === '/kontakt';
    
    if (isHomePage) {
      // On homepage: scroll to section
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    
    // On other pages: use sessionStorage and navigate to homepage
    sessionStorage.setItem('scrollTarget', targetId);
    window.location.href = '/';
  }
</script>

<footer class={`py-8 px-6 xl:px-8 ${containerClasses}`}>
  <div class="mx-auto w-full max-w-[1280px]">
    <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div class="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-10">
        <!-- Logo -->
        <a 
          href="/" 
          onclick={handleLogoClick}
          class="font-mono font-bold text-3xl text-black hover:opacity-70 transition-opacity"
        >
          consmatt.
        </a>

        <!-- Footer Navigation -->
        <nav class="flex flex-wrap items-center justify-center gap-6 md:justify-start">
        {#each footerLinks as link}
          <a
            href="/"
            onclick={(event) => handleFooterNavClick(event, link.targetId)}
            class="font-lato text-base text-brand-gray hover:text-black transition-colors"
          >
            {link.label}
          </a>
        {/each}
        </nav>
      </div>

      <!-- Copyright -->
      <p class="font-lato text-base text-black">
        consmatt {currentYear}
      </p>
    </div>
  </div>
</footer>
