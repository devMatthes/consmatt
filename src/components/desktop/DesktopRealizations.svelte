<script lang="ts">
  interface Project {
    name: string;
    logo: string;
    image: string;
    backgroundColor: string;
    textColor: string;
  }

  const imgProjectImage1 =
    "https://www.figma.com/api/mcp/asset/c55cc5e3-45b1-4613-965c-5d9fa8732aa2";
  const imgProjectImage =
    "https://www.figma.com/api/mcp/asset/d9f44847-eba2-4995-b0f9-18006ed4b154";

  const projects: Project[] = [
    {
      name: "RPV",
      logo: "rpv",
      image: imgProjectImage1,
      backgroundColor: "bg-brand-navy",
      textColor: "text-white",
    },
    {
      name: "consmatt.",
      logo: "consmatt",
      image: imgProjectImage,
      backgroundColor: "bg-brand-yellow",
      textColor: "text-black",
    },
  ];

  function getProjectLink(logo: string): string {
    return `/realizacje/${logo}`;
  }
</script>

<section id="realizacje" class="relative bg-white py-24 px-6 xl:px-8">
  <div class="mx-auto max-w-[1280px]">
    <!-- Section Header -->
    <div class="mb-16">
      <h2 class="font-lato text-2xl text-brand-gray mb-8">Nasze Realizacje</h2>
      <div class="flex flex-col">
        <p class="font-mono font-bold text-3xl text-black">consmatt.</p>
        <p class="font-mono text-4xl text-black font-bold uppercase">
          Digital Studio
        </p>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 gap-16 xl:grid-cols-2">
      {#each projects as project}
        <a
          href={getProjectLink(project.logo)}
          class="group relative {project.backgroundColor} overflow-hidden rounded-2xl transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl cursor-pointer block"
        >
          <div
            class="p-8 flex flex-col items-end justify-between max-h-[620px]"
          >
            <!-- Project Image -->
            <div
              class="w-full flex items-center justify-center pt-8 pb-32 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.name}
                class="max-w-[500px] w-full max-h-[300px] object-contain shadow-2xl rounded"
                style="view-transition-name: {project.logo}-image;"
              />
            </div>

            <!-- Project Logo/Name -->
            <div class="mt-auto">
              {#if project.logo === "rpv"}
                <div class="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="37"
                    viewBox="0 0 42 37"
                    fill="none"
                  >
                    <path
                      d="M36.521 13.0177L19.2605 2.35107L2 13.0177V34.3511H19.2605"
                      stroke="white"
                      stroke-width="4"
                    />
                    <path
                      d="M31.9108 18.3511H24.5332L19 30.3511H26.3776L31.9108 18.3511Z"
                      fill="#1B85E8"
                    />
                    <path
                      d="M41.6861 18.3511H34.3085L28.7753 30.3511H36.1529L41.6861 18.3511Z"
                      fill="#1B85E8"
                    />
                  </svg>
                  <p class="font-inter font-black text-2xl {project.textColor}">
                    {project.name}
                  </p>
                </div>
              {:else}
                <p class="font-mono font-bold text-2xl {project.textColor}">
                  {project.name}
                </p>
              {/if}
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
