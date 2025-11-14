<script>
	let { title, subtitle } = $props();
</script>

<div class="flex flex-col items-center gap-4">
	<!-- Logo above title -->
	<div class="mb-4">
		<span class="font-mono text-2xl font-bold lowercase text-primary">consmatt.</span>
	</div>

	<!-- Title with highlight background -->
	<div class="relative">
		<!-- Highlight background - offset and positioned -->
		<div 
			class="absolute left-1/4 top-1/2 z-0 h-12 w-full rounded-xl bg-highlight"
		></div>
		
		<!-- Title text on top - now H1 for SEO -->
		<h1 
			class="font-inter relative z-[1] whitespace-pre-line text-2xl font-bold text-primary"
		>
			{title}
		</h1>
	</div>
	
	<!-- Subtitle -->
	{#if subtitle}
		<p class="font-helvetica mt-4 text-sm text-secondary">
			{subtitle}
		</p>
	{/if}
</div>
