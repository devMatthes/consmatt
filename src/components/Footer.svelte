<script lang="ts">
  export let variant: "brand" | "light" = "brand";

  const background = variant === "light" ? "bg-white border-t border-black/5" : "bg-[#FEFAE0]";
  
  function handleLogoClick(event: MouseEvent) {
    event.preventDefault();
    
    const isHomePage = window.location.pathname === '/';
    
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = '/';
    }
  }
</script>

<footer class={`flex items-center px-4 py-8 sm:px-6 lg:px-8 ${background}`}>
  <a 
    href="/" 
    onclick={handleLogoClick}
    class="text-lg font-mono font-bold lowercase text-[#000000] hover:opacity-70 transition-opacity"
  >
    consmatt.
  </a>
</footer>
