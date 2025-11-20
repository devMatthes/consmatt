<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  let heroTitle: HTMLHeadingElement;
  let heroSubtitle: HTMLParagraphElement;
  let ctaButtons: HTMLDivElement;
  let word1: HTMLSpanElement;
  let word2: HTMLSpanElement;
  let word3: HTMLSpanElement;

  onMount(() => {
    // Set initial state
    gsap.set(heroTitle, {
      opacity: 0,
      y: 50
    });

    gsap.set(ctaButtons, {
      opacity: 0,
      y: 50
    });

    // Set initial state for subtitle words
    gsap.set(word1, {
      opacity: 0,
      x: -100
    });

    gsap.set(word2, {
      opacity: 0,
      scale: 1
    });

    gsap.set(word3, {
      opacity: 0
    });

    // Create timeline for sequential animations
    const tl = gsap.timeline({ delay: 0.2 });

    tl.to(heroTitle, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    // Animate "Szybkie," from left edge
    .to(word1, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.3")
    // Animate "responsywne," with scale pulse
    .to(word2, {
      opacity: 1,
      duration: 0.2,
      ease: "power2.out"
    })
    .to(word2, {
      scale: 1.5,
      duration: 0.4,
      ease: "back.out(1.7)"
    })
    .to(word1, {
      x: -50,
      duration: 0.4,
      ease: "back.out(1.7)"
    }, "<")
    .to(word3, {
      x: 30,
      duration: 0.4,
      ease: "back.out(1.7)"
    }, "<")
    .to(word2, {
      scale: 1.0,
      duration: 0.4,
      ease: "power2.inOut"
    })
    .to(word1, {
      x: 0,
      duration: 0.4,
      ease: "power2.inOut"
    }, "<")
    .to(word3, {
      x: 0,
      duration: 0.4,
      ease: "power2.inOut"
    }, "<")
    // Animate "skuteczne." letter by letter
    .to(word3, {
      opacity: 1,
      duration: 1.2,
      ease: "none",
      onStart: () => {
        const letters = word3.textContent?.split('') || [];
        word3.innerHTML = letters.map(letter => `<span style="opacity: 0">${letter}</span>`).join('');
        const spans = word3.querySelectorAll('span');
        gsap.to(spans, {
          opacity: 1,
          duration: 0.1,
          stagger: 0.1,
          ease: "none"
        });
      }
    })
    .to(ctaButtons, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");
  });
</script>

<section class="relative flex min-h-screen flex-col items-center justify-center bg-white px-6 pb-24 pt-32 xl:px-8">
  <div class="mx-auto flex w-full max-w-[1280px] flex-col items-center text-center gap-16">
    <!-- Hero Text -->
    <div class="max-w-4xl xl:max-w-none">
      <h1 bind:this={heroTitle} class="font-lato font-medium text-6xl md:text-7xl text-black leading-tight mb-6">
      Tworzymy nowoczesne strony<br />
      dopasowane do Twoich potrzeb.
      </h1>
      <p bind:this={heroSubtitle} class="font-lato text-3xl md:text-4xl text-brand-gray mt-8">
        <span bind:this={word1} class="inline-block">Szybkie,</span> <span bind:this={word2} class="inline-block">responsywne,</span> <span bind:this={word3} class="inline-block">skuteczne.</span>
      </p>
    </div>

    <!-- CTA Buttons -->
    <div bind:this={ctaButtons} class="flex flex-wrap justify-center gap-6 xl:justify-start">
      <a
        href="#oferta"
        class="font-lato text-base text-black bg-brand-yellow/60 rounded-[32px] px-8 py-3 transition-opacity hover:opacity-90"
      >
        Dowiedz Się Więcej
      </a>
      <a
        href="#kontakt"
        class="font-lato font-bold text-base text-white bg-brand-green rounded-[32px] px-8 py-3 transition-opacity hover:opacity-90"
      >
        Napisz Do Nas
      </a>
    </div>
  </div>
</section>
