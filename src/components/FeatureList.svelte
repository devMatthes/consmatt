<script>
	let { features } = $props();
</script>

<dl class="flex flex-col gap-6">
	{#each features as feature (feature.label)}
		<div class="flex gap-6">
			<!-- Term column (137px width) -->
			<dt class="w-[137px] flex-shrink-0">
				<span class="font-inter text-xs/2 font-semibold uppercase text-brand-dark">
					{feature.label}
				</span>
			</dt>
			
			<!-- Definition column -->
			<dd class="flex-1">
				<p class="font-inter text-sm/5 text-brand-dark">
					{feature.description}
				</p>
			</dd>
		</div>
	{/each}
</dl>
