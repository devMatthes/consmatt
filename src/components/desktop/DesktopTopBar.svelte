<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu";
  import MessageSquare from "lucide-svelte/icons/message-square";
  import { Button } from "$lib/components/ui/button/index.js";
  import { onMount } from "svelte";

  let activeItem = $state("home");
  let observerEnabled = $state(true);

  const menuItems = [
    { label: "Strona Główna", id: "home", type: "scroll" },
    { label: "Oferta", id: "oferta", type: "link", href: "/oferta" },
    { label: "Nasze Realizacje", id: "realizacje", type: "scroll" },
    { label: "Kontakt", id: "kontakt", type: "scroll" },
  ];

  onMount(() => {
    // Check for stored scroll target on mount FIRST
    const scrollTarget = sessionStorage.getItem("scrollTarget");
    if (scrollTarget) {
      sessionStorage.removeItem("scrollTarget");
      observerEnabled = false; // Disable observer temporarily

      setTimeout(() => {
        scrollToSection(scrollTarget);
        // Re-enable observer after scroll completes
        setTimeout(() => {
          observerEnabled = true;
        }, 1000);
      }, 100);
    }

    // Update active item based on scroll position
    const observer = new IntersectionObserver(
      (entries) => {
        if (!observerEnabled) return; // Skip if observer is disabled

        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let mostVisibleSection = "";

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        // Only update if we found a section with significant visibility
        if (mostVisibleSection && maxRatio > 0.3) {
          activeItem = mostVisibleSection;
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "-100px 0px -100px 0px",
      },
    );

    // Observe all sections
    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  });

  function scrollToSection(sectionId: string) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      observerEnabled = false; // Disable observer during programmatic scroll
      activeItem = sectionId;
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

      // Re-enable observer after scroll animation completes
      setTimeout(() => {
        observerEnabled = true;
      }, 1000);
    }
  }

  function handleLogoClick(event: MouseEvent) {
    event.preventDefault();

    const path = window.location.pathname;
    const isHomePage =
      path === "/" ||
      path === "/oferta" ||
      path === "/realizacje" ||
      path === "/kontakt";

    if (isHomePage) {
      scrollToSection("home");
    } else {
      window.location.href = "/";
    }
  }

  function handleNavClick(event: MouseEvent, itemId: string) {
    event.preventDefault();

    const path = window.location.pathname;
    const isHomePage =
      path === "/" ||
      path === "/oferta" ||
      path === "/realizacje" ||
      path === "/kontakt";

    if (isHomePage) {
      scrollToSection(itemId);
    } else {
      // Navigate to homepage and store target section
      sessionStorage.setItem("scrollTarget", itemId);
      window.location.href = "/";
    }
  }

  function handleConsultationClick(event: MouseEvent) {
    event.preventDefault();

    const path = window.location.pathname;
    const isHomePage =
      path === "/" ||
      path === "/oferta" ||
      path === "/realizacje" ||
      path === "/kontakt";

    if (isHomePage) {
      scrollToSection("kontakt");
    } else {
      sessionStorage.setItem("scrollTarget", "kontakt");
      window.location.href = "/";
    }
  }
</script>

<header class="fixed top-0 left-0 right-0 z-50 px-6 xl:px-8 py-4 bg-white">
  <div class="mx-auto flex w-full max-w-[1280px] items-center justify-between">
    <!-- Logo -->
    <a
      href="/"
      onclick={handleLogoClick}
      class="font-mono font-bold text-2xl text-black hover:opacity-70 transition-opacity"
    >
      consmatt.
    </a>

    <!-- Navigation Menu with shadcn -->
    <NavigationMenu.Root class="bg-brand-yellow rounded-[32px] px-1 py-1">
      <NavigationMenu.List class="flex items-center gap-1">
        {#each menuItems as item}
          <NavigationMenu.Item>
            <button
              type="button"
              onclick={(e) => handleNavClick(e, item.id)}
              class="font-lato text-base rounded-full px-6 py-2 cursor-pointer transition-all duration-300 ease-out active:scale-95 {activeItem ===
              item.id
                ? 'text-black font-bold bg-brand-orange/70 shadow-sm'
                : 'text-black hover:bg-brand-orange hover:text-white hover:font-bold hover:shadow-sm'}"
            >
              {item.label}
            </button>
          </NavigationMenu.Item>
        {/each}
      </NavigationMenu.List>
    </NavigationMenu.Root>

    <!-- Consultation Button -->
    <button
      type="button"
      onclick={handleConsultationClick}
      class="group font-lato text-base rounded-[32px] pr-1 pl-6 py-1 gap-3 h-auto cursor-pointer flex items-center transition-all duration-300 ease-out active:scale-95 text-black bg-brand-yellow hover:bg-brand-orange hover:text-white hover:font-bold hover:shadow-sm"
    >
      Darmowa Wycena
      <div
        class="w-[40px] h-[40px] bg-brand-orange rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
      >
        <MessageSquare class="w-5 h-5 text-white" strokeWidth={2.5} />
      </div>
    </button>
  </div>
</header>
