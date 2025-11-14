<script>
	let { title, subtitle } = $props();
</script>

<div class="flex flex-col items-center gap-4">
	<!-- Logo above title -->
	<div class="mb-4">
		<span class="font-mono text-2xl font-bold lowercase text-black">consmatt.</span>
	</div>

	<!-- Title with yellow background highlight -->
	<div class="relative">
		<!-- Yellow background highlight - offset and positioned -->
		<div 
			class="absolute left-1/4 top-1/2 z-0 h-12 w-full rounded-xl bg-brand-yellow"
		></div>
		
		<!-- Title text on top -->
		<h1 
			class="font-inter relative z-[1] whitespace-pre-line text-2xl font-bold text-brand-dark"
		>
			{title}
		</h1>
	</div>
	
	<!-- Subtitle -->
	{#if subtitle}
		<p class="font-helvetica mt-4 text-sm text-brand-gray">
			{subtitle}
		</p>
	{/if}
</div>
