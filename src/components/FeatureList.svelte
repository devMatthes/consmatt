<script>
	let { features } = $props();
</script>

<div class="flex flex-col gap-6">
	{#each features as feature (feature.label)}
		<div class="flex gap-6">
			<!-- Label column (137px width) -->
			<div class="flex-shrink-0" style="width: 137px;">
				<span class="text-xs/2 font-semibold uppercase" style="font-family: 'Inter', sans-serif; color: #1E1E1E;">
					{feature.label}
				</span>
			</div>
			
			<!-- Description column -->
			<div class="flex-1">
				<p class="text-sm/5" style="font-family: 'Inter', sans-serif; color: #1E1E1E;">
					{feature.description}
				</p>
			</div>
		</div>
	{/each}
</div>
