<script lang="ts">
  const imgRPVProject = "https://www.figma.com/api/mcp/asset/4f068f0f-4804-4821-ac53-6266178cd457";
  const imgRPVLogo = "https://www.figma.com/api/mcp/asset/b0e38f88-fee5-4473-bfa4-cbb4ada19455";
  const imgConsmattProject = "public/image 2.png";

  const projects = [
    {
      title: "RPV",
      description: "Napędzamy Twoją przyszłość, postawiamy na energię odnawialną",
      image: imgRPVProject,
      logo: imgRPVLogo,
      bgColor: "#001527",
      logoText: "RPV",
      logoColor: "white",
    },
    {
      title: "consmatt",
      description: "Strona prezentująca stronę studia consmatt.",
      image: imgConsmattProject,
      logo: null,
      bgColor: "#FEFAE0",
      logoText: "consmatt.",
      logoColor: "#000000",
    },
  ];
</script>

<section id="realizacje" class="flex flex-col gap-16 px-6 py-16 sm:px-6 lg:px-8">
  <header class="flex flex-col gap-4">
    <p class="text-base leading-relaxed text-[#7E7E7E]">Nasze Realizacje</p>
    <div class="flex flex-col">
      <span class="text-xl font-mono font-bold lowercase text-[#000000] sm:text-3xl">consmatt.</span>
      <h2 class="text-3xl font-lato font-bold tracking-tight text-[#000000] sm:text-5xl">Digital Studio</h2>
    </div>
  </header>

  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {#each projects as project (project.title)}
      <article
        class="relative m-0 flex aspect-square flex-col overflow-hidden transition sm:m-2"
        style="background-color: {project.bgColor};"
        aria-label={`Prezentacja projektu ${project.title}`}
      >
        {#if project.title === 'RPV'}
          <!-- Projekt 01: RPV -->
          <div class="flex flex-1 items-center justify-center p-8">
            <img
              src={project.image}
              alt={project.description}
              class="h-auto w-full max-w-[280px] rounded-[4px] object-cover shadow-[0px_40px_32px_8px_rgba(0,135,240,0.08)]"
            />
          </div>

          <!-- RPV Logo at bottom right -->
          <div class="absolute bottom-0 right-0 flex items-center gap-2 px-4 py-4" aria-label="RPV logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 37" class="w-[39.7px] h-[32px]" fill="none">
              <path d="M36.521 13.0177L19.2605 2.35107L2 13.0177V34.3511H19.2605" stroke="white" stroke-width="4" />
              <path d="M31.9108 18.3511H24.5332L19 30.3511H26.3776L31.9108 18.3511Z" fill="#1B85E8" />
              <path d="M41.6861 18.3511H34.3085L28.7753 30.3511H36.1529L41.6861 18.3511Z" fill="#1B85E8" />
            </svg>
            <p class="font-black text-[24px] text-white relative top-[3px]" style="font-family: 'Inter', sans-serif;">{project.logoText}</p>
          </div>
        {:else}
          <!-- Projekt 02: consmatt (image centered, text logo only in black) -->
          <div class="flex flex-1 items-center justify-center p-8">
            <img
              src={project.image}
              alt={project.description}
              class="mx-auto h-auto w-full max-w-[120px] object-contain shadow-[0px_40px_32px_8px_rgba(0,0,0,0.08)]"
            />
          </div>
          <div class="absolute bottom-0 right-0 flex items-center gap-2 px-4 py-4 text-sm font-mono font-bold lowercase text-black">
            {project.logoText}
          </div>
        {/if}
      </article>
    {/each}
  </div>
</section>
