<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);

	type OfferHighlight = {
		title: string;
		description: string;
	};

	type OfferCard = {
		eyebrow: string;
		title: string;
		description: string;
		highlights: OfferHighlight[];
	};

	type OfferStep = {
		id: string;
		order: string;
		title: string;
		summary: string;
		body: string[];
		card: OfferCard;
	};

	const steps: OfferStep[] = [
		{
			id: "strategy",
			order: "01",
			title: "Strategia i warsztaty startowe",
			summary: "Rozpoczynamy od zrozumienia Twojej marki, odbiorców i celów biznesowych.",
			body: [
				"Warsztaty discovery prowadzone z kluczowymi interesariuszami.",
				"Analiza konkurencji oraz pozycjonowania produktu.",
				"Roadmapa produktu określająca priorytety i zakres MVP."
			],
			card: {
				eyebrow: "Faza Strategii",
				title: "Wspólny kierunek i priorytety",
				description:
					"Tworzymy kompas projektu, który pozwala podejmować konsekwentne decyzje projektowe i technologiczne.",
				highlights: [
					{ title: "Audyt marki", description: "Analizujemy aktualny ekosystem cyfrowy i procesy w zespole." },
					{ title: "Mapa celów", description: "Definiujemy KPI oraz mierniki sukcesu dla kolejnych release'ów." }
				]
			}
		},
		{
			id: "experience",
			order: "02",
			title: "UX / UI i prototypowanie",
			summary: "Projektujemy doświadczenie użytkownika, które łączy estetykę z mierzalnymi wynikami.",
			body: [
				"Persony i scenariusze użycia odzwierciedlające realne zachowania klientów.",
				"Makiety low-fi i high-fi budowane iteracyjnie w oparciu o feedback.",
				"System projektowy zapewniający spójność komponentów na każdym ekranie."
			],
			card: {
				eyebrow: "Projektowanie",
				title: "Interakcje, które prowadzą do konwersji",
				description:
					"Budujemy prototypy w oparciu o dane, testujemy z użytkownikami i dopracowujemy mikrointerakcje.",
				highlights: [
					{ title: "Testy użyteczności", description: "Walidujemy ścieżki użytkownika na realnych scenariuszach." },
					{ title: "Design system", description: "Komponenty gotowe do wdrożenia i skalowania w produkcji." }
				]
			}
		},
		{
			id: "development",
			order: "03",
			title: "Implementacja i jakość",
			summary: "Wdrażamy projekt zgodnie z najlepszymi praktykami front-end i back-end.",
			body: [
				"Automatyzujemy pipeline CI/CD i testy regresyjne.",
				"Kodujemy w podejściu komponentowym, z naciskiem na wydajność.",
				"Zapewniamy zgodność z WCAG 2.1 i standardami SEO technicznego."
			],
			card: {
				eyebrow: "Development",
				title: "Stabilne i szybkie wdrożenie",
				description:
					"Zespół programistów i QA współpracuje w sprintach, aby dostarczyć w pełni przetestowaną funkcjonalność.",
				highlights: [
					{ title: "CI/CD", description: "Zautomatyzowane buildy, testy i deployment na każde środowisko." },
					{ title: "Performance", description: "Optymalizacja Core Web Vitals i czasu first meaningful paint." }
				]
			}
		},
		{
			id: "growth",
			order: "04",
			title: "Launch i dalszy rozwój",
			summary: "Po wdrożeniu wspieramy Cię w utrzymaniu i rozwoju produktu.",
			body: [
				"Monitorujemy metryki i rekomendujemy eksperymenty optymalizacyjne.",
				"Zapewniamy wsparcie techniczne i aktualizacje bezpieczeństwa.",
				"Pomagamy rozszerzać roadmapę o nowe funkcjonalności."
			],
			card: {
				eyebrow: "Growth",
				title: "Produkt, który rośnie razem z biznesem",
				description:
					"Dostarczamy raporty, roadmapy i szybkie iteracje, aby Twój produkt ciągle odpowiadał na potrzeby użytkowników.",
				highlights: [
					{ title: "Analityka", description: "Konfigurujemy dashboardy i mierzymy efektywność każdej iteracji." },
					{ title: "SLA", description: "Reagujemy w ustalonym czasie i dbamy o utrzymanie środowisk." }
				]
			}
		}
	];

	let containerRef: HTMLElement;
	let panelsContainer: HTMLElement;
	const panelRefs: HTMLElement[] = [];
	const cardRefs: HTMLElement[] = [];

	onMount(() => {
		const mm = gsap.matchMedia();

		mm.add("(min-width: 1024px)", () => {
			const panels = panelRefs.filter(Boolean);
			const cards = cardRefs.filter(Boolean);

			if (!containerRef || panels.length === 0) return;

			// Pin the entire container
			ScrollTrigger.create({
				trigger: containerRef,
				start: "top top",
				end: () => `+=${panels.length * window.innerHeight}`,
				pin: panelsContainer,
				anticipatePin: 1,
				scrub: true
			});

			// Animate each panel
			panels.forEach((panel, index) => {
				const paragraphs = panel.querySelectorAll('[data-paragraph]');
				const card = cards[index];

				ScrollTrigger.create({
					trigger: containerRef,
					start: () => `top+=${index * window.innerHeight} top`,
					end: () => `top+=${(index + 1) * window.innerHeight} top`,
					onEnter: () => {
						// Skip first panel's onEnter - it's already visible
						if (index === 0) return;

						// Show current panel
						gsap.to(panel, {
							autoAlpha: 1,
							duration: 0.4,
							ease: "power2.out"
						});

						// Show current card
						if (card) {
							gsap.to(card, {
								x: 0,
								autoAlpha: 1,
								duration: 0.6,
								ease: "power3.out"
							});
						}

						// Animate paragraphs sequentially
						gsap.fromTo(
							paragraphs,
							{ autoAlpha: 0, y: 20 },
							{
								autoAlpha: 1,
								y: 0,
								duration: 0.5,
								stagger: 0.15,
								ease: "power2.out"
							}
						);
					},
					onLeave: () => {
						// Keep last panel visible
						if (index === panels.length - 1) return;

						// Hide current panel
						gsap.to(panel, {
							autoAlpha: 0,
							duration: 0.3,
							ease: "power2.in"
						});

						// Slide out current card
						if (card) {
							gsap.to(card, {
								x: 100,
								autoAlpha: 0,
								duration: 0.4,
								ease: "power2.in"
							});
						}
					},
					onEnterBack: () => {
						// Show panel on scroll back
						gsap.to(panel, {
							autoAlpha: 1,
							duration: 0.4,
							ease: "power2.out"
						});

						// Show card on scroll back
						if (card) {
							gsap.to(card, {
								x: 0,
								autoAlpha: 1,
								duration: 0.6,
								ease: "power3.out"
							});
						}

						// Re-animate paragraphs
						gsap.to(paragraphs, {
							autoAlpha: 1,
							y: 0,
							duration: 0.4,
							stagger: 0.1,
							ease: "power2.out"
						});
					},
					onLeaveBack: () => {
						// Keep first panel visible when scrolling back to top
						if (index === 0) return;

						// Hide on scroll back
						gsap.to(panel, {
							autoAlpha: 0,
							duration: 0.3,
							ease: "power2.in"
						});

						if (card) {
							gsap.to(card, {
								x: -100,
								autoAlpha: 0,
								duration: 0.4,
								ease: "power2.in"
							});
						}
					}
				});
			});

			// Initialize: show first panel with full content, hide others
			panels.forEach((panel, idx) => {
				gsap.set(panel, { autoAlpha: idx === 0 ? 1 : 0 });
			});

			// Initialize first panel's paragraphs as visible
			const firstParagraphs = panels[0]?.querySelectorAll('[data-paragraph]');
			if (firstParagraphs) {
				gsap.set(firstParagraphs, { autoAlpha: 1, y: 0 });
			}

			cards.forEach((card, idx) => {
				gsap.set(card, { autoAlpha: idx === 0 ? 1 : 0, x: idx === 0 ? 0 : 100 });
			});

			return () => {
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			};
		});

		return () => {
			mm.kill();
		};
	});

	onDestroy(() => {
		ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
	});
</script>

<section class="bg-white py-24 px-6 xl:px-8">
	<div class="mx-auto flex w-full max-w-[1280px] flex-col gap-20">
		<header class="max-w-3xl space-y-6">
			<p class="font-mono text-sm uppercase tracking-[0.3em] text-brand-gray">Oferta szczegółowa</p>
			<h1 class="font-lato text-4xl font-bold text-black sm:text-5xl xl:text-6xl">
				Kompleksowy proces tworzenia i rozwoju produktów cyfrowych
			</h1>
			<p class="font-sans text-lg text-brand-gray sm:text-xl">
				Każdy etap prowadzimy tak, aby Twoja inwestycja była przewidywalna, a efekty mierzalne. Zobacz, jak
				pracujemy od pierwszego warsztatu po utrzymanie i rozwój.
			</p>
		</header>

		<!-- Mobile view: simple accordion -->
		<div class="space-y-6 lg:hidden">
			{#each steps as step, index}
				<article class="rounded-[28px] border border-black/10 bg-white/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
					<div class="space-y-4">
						<div class="flex items-start gap-4">
							<span class="font-mono text-sm font-semibold uppercase tracking-[0.3em] text-brand-gray">
								{step.order}
							</span>
							<div>
								<p class="font-lato text-xl font-bold text-black mb-2">
									{step.title}
								</p>
								<p class="font-sans text-base text-brand-gray mb-4">
									{step.summary}
								</p>
							</div>
						</div>
						<div class="space-y-3 border-t border-black/10 pt-4">
							{#each step.body as paragraph}
								<p class="font-sans text-sm text-brand-gray">
									{paragraph}
								</p>
							{/each}
						</div>
					</div>
				</article>
			{/each}
		</div>

		<!-- Desktop view: scroll-pinned panels -->
		<div bind:this={containerRef} class="hidden lg:block">
			<div bind:this={panelsContainer} class="grid grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] gap-16 min-h-screen items-center">
				<!-- Left column: panels -->
				<div class="relative">
					{#each steps as step, index}
						<div
							bind:this={panelRefs[index]}
							class="absolute inset-0 flex flex-col justify-center space-y-6"
						>
							<div class="flex items-start gap-6">
								<span class="font-mono text-lg font-bold uppercase tracking-[0.3em] text-brand-orange">
									{step.order}
								</span>
								<div class="space-y-4">
									<h2 class="font-lato text-4xl font-bold text-black">
										{step.title}
									</h2>
									<p class="font-sans text-xl text-brand-gray">
										{step.summary}
									</p>
								</div>
							</div>

							<div class="space-y-6 pl-16">
								{#each step.body as paragraph, pIndex}
									<p data-paragraph class="font-sans text-lg text-brand-gray leading-relaxed">
										{paragraph}
									</p>
								{/each}
							</div>
						</div>
					{/each}
				</div>

				<!-- Right column: cards -->
				<div class="relative">
					{#each steps as step, index}
						<div
							bind:this={cardRefs[index]}
							class="absolute inset-0 flex flex-col justify-center"
						>
							<article class="flex h-full max-h-[600px] flex-col justify-between rounded-[32px] border border-black/5 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
								<div class="space-y-4">
									<span class="font-mono text-xs uppercase tracking-[0.25em] text-brand-gray">
										{step.card.eyebrow}
									</span>
									<h3 class="font-lato text-3xl font-bold text-black">
										{step.card.title}
									</h3>
									<p class="font-sans text-lg text-brand-gray">
										{step.card.description}
									</p>
								</div>

								<div class="mt-8 space-y-5">
									{#each step.card.highlights as highlight}
										<div class="rounded-2xl border border-black/5 bg-brand-yellow/60 p-5">
											<p class="font-lato text-lg font-semibold text-black">
												{highlight.title}
											</p>
											<p class="mt-2 font-sans text-base text-brand-gray">
												{highlight.description}
											</p>
										</div>
									{/each}
								</div>
							</article>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
