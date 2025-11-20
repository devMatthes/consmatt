<script lang="ts">
  export let variant: "brand" | "light" = "brand";

  const background =
    variant === "light"
      ? "bg-background"
      : "bg-brand-yellow dark:bg-background";
</script>

<footer class={`flex items-center px-4 py-8 sm:px-6 lg:px-8 ${background}`}>
  <span class="text-lg font-mono font-bold lowercase text-primary"
    >consmatt.</span
  >
</footer>
