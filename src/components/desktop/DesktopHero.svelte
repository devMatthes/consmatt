<script lang="ts">
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import ArrowRight from "lucide-svelte/icons/arrow-right";

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
      y: 50,
    });

    gsap.set(ctaButtons, {
      opacity: 0,
      y: 50,
    });

    // Set initial state for subtitle words
    gsap.set(word1, {
      opacity: 0,
      x: -100,
    });

    gsap.set(word2, {
      opacity: 0,
      scale: 1,
    });

    gsap.set(word3, {
      opacity: 0,
    });

    // Create timeline for sequential animations
    const tl = gsap.timeline({ delay: 0.2 });

    tl.to(heroTitle, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
      // Animate "Szybkie," from left edge
      .to(
        word1,
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3",
      )
      // Animate "responsywne," with scale pulse
      .to(word2, {
        opacity: 1,
        duration: 0.2,
        ease: "power2.out",
      })
      .to(word2, {
        scale: 1.5,
        duration: 0.4,
        ease: "back.out(1.7)",
      })
      .to(
        word1,
        {
          x: -50,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "<",
      )
      .to(
        word3,
        {
          x: 30,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "<",
      )
      .to(word2, {
        scale: 1.0,
        duration: 0.4,
        ease: "power2.inOut",
      })
      .to(
        word1,
        {
          x: 0,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "<",
      )
      .to(
        word3,
        {
          x: 0,
          duration: 0.4,
          ease: "power2.inOut",
        },
        "<",
      )
      // Animate "skuteczne." letter by letter
      .to(word3, {
        opacity: 1,
        duration: 1.2,
        ease: "none",
        onStart: () => {
          const letters = word3.textContent?.split("") || [];
          word3.innerHTML = letters
            .map((letter) => `<span style="opacity: 0">${letter}</span>`)
            .join("");
          const spans = word3.querySelectorAll("span");
          gsap.to(spans, {
            opacity: 1,
            duration: 0.1,
            stagger: 0.1,
            ease: "none",
          });
        },
      })
      .to(
        ctaButtons,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4",
      );
  });
</script>

<section
  class="relative flex min-h-screen flex-col items-center justify-center bg-white px-6 pb-24 pt-32 xl:px-8"
>
  <div
    class="mx-auto flex w-full max-w-screen-2xl flex-col items-center text-center gap-12 lg:gap-16 xl:gap-24"
  >
    <!-- Hero Text -->
    <div class="max-w-4xl xl:max-w-6xl 2xl:max-w-none">
      <h1
        bind:this={heroTitle}
        class="font-lato font-medium text-5xl lg:text-6xl xl:text-7xl text-black leading-tight mb-6 lg:mb-8"
      >
        Tworzymy nowoczesne strony<br />
        dopasowane do Twoich potrzeb.
      </h1>
      <p
        bind:this={heroSubtitle}
        class="font-lato text-2xl lg:text-3xl xl:text-4xl text-brand-gray mt-8 lg:mt-10"
      >
        <span bind:this={word1} class="inline-block">Szybkie,</span>
        <span bind:this={word2} class="inline-block">responsywne,</span>
        <span bind:this={word3} class="inline-block">skuteczne.</span>
      </p>
    </div>

    <!-- CTA Buttons -->
    <div
      bind:this={ctaButtons}
      class="flex flex-wrap justify-center gap-6 xl:justify-start"
    >
      <a
        href="#oferta"
        class="group font-lato text-base rounded-[32px] px-8 py-3 transition-all duration-300 ease-out active:scale-95 flex items-center gap-2 text-black bg-brand-yellow/60 border-[0.5px] border-brand-gray/10 hover:bg-brand-orange hover:text-white hover:font-bold hover:shadow-sm"
      >
        Dowiedz Się Więcej
        <ArrowRight
          class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
      <a
        href="#kontakt"
        class="relative font-lato font-bold text-base text-white rounded-[32px] px-10 py-4 transition-all duration-300
        bg-gradient-to-b from-[#728042] to-[#606C38]
        shadow-[0_10px_20px_-5px_rgba(96,108,56,0.4),0_4px_0_#3F4724,inset_0_2px_0_rgba(255,255,255,0.2)]
        hover:-translate-y-1 hover:shadow-[0_15px_25px_-5px_rgba(96,108,56,0.5),0_4px_0_#3F4724,inset_0_2px_0_rgba(255,255,255,0.2)]
        active:translate-y-[2px] active:shadow-[0_2px_0_#3F4724,inset_0_2px_0_rgba(255,255,255,0.2)]"
      >
        Napisz Do Nas
      </a>
    </div>
  </div>
</section>
