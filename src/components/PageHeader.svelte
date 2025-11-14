<script>
	let { title, subtitle } = $props();
</script>

<div class="flex flex-col items-center gap-4">
	<!-- Logo above title -->
	<div class="mb-4">
		<span class="text-2xl font-mono font-bold lowercase text-[#000000]">consmatt.</span>
	</div>

	<!-- Title with yellow background highlight -->
	<div class="relative">
		<!-- Yellow background highlight - offset and positioned -->
		<div 
			class="absolute rounded-xl" 
			style="
				background-color: #FEFAE0; 
				height: 48px;
                width: 100%;
				left: 25%;
				right: 0;
				top: 50%;
				z-index: 0;
			"
		></div>
		
		<!-- Title text on top -->
		<h1 
			class="relative text-2xl font-bold" 
			style="
				font-family: 'Inter', sans-serif; 
				color: #1E1E1E; 
				white-space: pre-line;
				z-index: 1;
			"
		>
			{title}
		</h1>
	</div>
	
	<!-- Subtitle -->
	{#if subtitle}
		<p class="text-sm mt-4" style="font-family: 'Helvetica', sans-serif; color: #7E7E7E;">
			{subtitle}
		</p>
	{/if}
</div>
