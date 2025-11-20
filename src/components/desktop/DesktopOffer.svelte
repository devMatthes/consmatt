<script lang="ts">
  import ArrowRight from "lucide-svelte/icons/arrow-right";

  interface Service {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    buttonColor: "orange" | "green";
  }

  const services: Service[] = [
    {
      title: "Strony Internetowe\nAplikacje Webowe",
      description: `Projektujemy skuteczne, przyjazne dla użytkownika i zorientowane na biznes strony internetowe, aby zapewnić płynne i przyjemne działanie.

Posiadasz już stronę?

Pomagamy odświeżyć wygląd, poprawić strukturę, szybkość i doświadczenie użytkownika — bez konieczności budowania wszystkiego od nowa.`,
      buttonText: "Sprawdź szczegóły",
      buttonHref: "/oferta-szczegoly",
      buttonColor: "orange",
    },
    {
      title: "Wsparcie Techniczne",
      description: `Aktualizacje, kopie zapasowe, poprawki, bezpieczeństwo

Oferujemy stałą opiekę techniczną, dzięki której Twoja strona zawsze działa sprawnie i bezpiecznie.`,
      buttonText: "Sprawdź ofertę",
      buttonHref: "/wsparcie-techniczne",
      buttonColor: "green",
    },
  ];
</script>

<section class="relative bg-white py-24 px-6 xl:px-8">
  <div class="mx-auto max-w-[1280px]">
    <div
      class="grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,0.35fr)_minmax(0,0.65fr)] xl:gap-24"
    >
      <!-- Section Title -->
      <h2 class="font-lato font-bold text-2xl text-black lg:text-left">
        Co Oferujemy?
      </h2>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 gap-20 xl:grid-cols-2 xl:gap-24">
        {#each services as service, index}
          <div class="flex flex-col">
            <!-- Service Title -->
            <h3
              class="font-lato font-bold text-3xl lg:text-4xl text-black mb-8 whitespace-pre-line"
            >
              {service.title}
            </h3>

            <!-- Service Description -->
            <p
              class="font-lato text-base text-black mb-8 whitespace-pre-line flex-1"
            >
              {service.description}
            </p>

            <!-- CTA Button -->
            {#if index === 0}
              <div>
                <a
                  href={service.buttonHref}
                  class="group inline-flex items-center gap-2 font-lato font-bold text-base text-white bg-brand-orange rounded-[32px] px-8 py-3 transition-all duration-300 hover:bg-brand-orange/90 hover:-translate-y-1 hover:shadow-lg active:scale-95 active:translate-y-0 active:shadow-none"
                >
                  {service.buttonText}
                  <ArrowRight
                    class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
