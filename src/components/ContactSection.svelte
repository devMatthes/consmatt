<script>
  import { onMount } from 'svelte';
  
  onMount(() => {
    // Add LocalBusiness structured data for contact info
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "consmatt. digital studio",
      "url": "https://consmatt.pl",
      "telephone": "+48516649765",
      "email": "kontakt@consmatt.pl",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "PL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "addressCountry": "PL"
      },
      "priceRange": "$$",
      "openingHours": "Mo-Fr 09:00-17:00"
    });
    document.head.appendChild(script);
  });
</script>
<section
  id="kontakt"
  class="flex min-h-screen flex-col bg-secondary px-6 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-32"
>
  <header class="mb-24">
    <h2 class="font-open-sans text-left text-5xl font-bold text-primary">
      Skontaktuj się<br />z nami
    </h2>
  </header>

  <div class="flex flex-1 flex-col gap-12">
    <!-- Phone Number -->
    <div class="flex flex-col gap-6">
      <span class="font-inter text-base font-bold text-primary">Numer telefonu</span>
      <a
        href="tel:+48516649765"
        class="font-open-sans group relative inline-flex items-end text-2xl font-bold leading-none text-primary"
      >
        <span class="z-1">+48 516 649 765</span>
        <span
          class="pointer-events-none absolute bottom-0 left-0 flex w-full items-end pr-4 z-0"
          aria-hidden="true"
        >
          <span class="h-[5px] w-[282px] bg-accent-primary/40"></span>
          <span class="ml-2 flex items-end gap-[4px]">
            <span class="h-[5px] w-[5px] rounded-full bg-accent-secondary"></span>
            <span class="h-[5px] w-[5px] rounded-full bg-accent-secondary"></span>
          </span>
        </span>
      </a>
    </div>

    <!-- Email -->
    <div class="flex flex-col gap-6">
      <span class="font-inter text-base font-bold text-primary">Adres e-mail</span>
      <a
        href="mailto:kontakt@consmatt.pl"
        class="font-open-sans group relative inline-flex items-end text-2xl font-bold leading-none text-primary"
      >
        <span class="z-1">kontakt@consmatt.pl</span>
        <span
          class="pointer-events-none absolute bottom-0 left-0 flex w-full items-end pr-4 z-0"
          aria-hidden="true"
        >
          <span class="h-[5px] w-[282px] bg-accent-primary/40"></span>
          <span class="ml-2 flex items-end gap-[4px]">
            <span class="h-[5px] w-[5px] rounded-full bg-accent-secondary"></span>
            <span class="h-[5px] w-[5px] rounded-full bg-accent-secondary"></span>
          </span>
        </span>
      </a>
    </div>
  </div>

  <footer class="flex items-center bg-secondary">
    <span class="font-mono text-lg font-bold lowercase text-primary">consmatt.</span>
  </footer>
</section>
