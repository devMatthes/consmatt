<script lang="ts">
	import { onMount } from "svelte";
	import { gsap } from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";

	gsap.registerPlugin(ScrollTrigger);

	interface Highlight {
		title: string;
		description: string;
	}

	interface Card {
		eyebrow: string;
		title: string;
		description: string;
		highlights: Highlight[];
	}

	interface OfferStep {
		order: string;
		title: string;
		summary: string;
		body: string[];
		card: Card;
	}

	const steps: OfferStep[] = [
		{
			order: "01",
			title: "Analiza i Strategia",
			summary:
				"Fundament każdego udanego projektu. Zanim napiszemy pierwszą linię kodu, musimy dokładnie zrozumieć Twój biznes.",
			body: [
				"Warsztaty produktowe i analiza wymagań",
				"Analiza konkurencji i rynkowa",
				"Opracowanie strategii produktu",
				"Definicja MVP (Minimum Viable Product)",
			],
			card: {
				eyebrow: "Faza 1",
				title: "Warsztaty Discovery",
				description:
					"Intensywne sesje, podczas których zamieniamy Twoją wizję w konkretny plan działania.",
				highlights: [
					{
						title: "Zrozumienie Biznesu",
						description:
							"Analiza celów, grupy docelowej i modelu biznesowego",
					},
					{
						title: "Specyfikacja Techniczna",
						description:
							"Dobór odpowiednich technologii i architektury",
					},
				],
			},
		},
		{
			order: "02",
			title: "UX/UI Design",
			summary:
				"Projektujemy interfejsy, które są nie tylko estetyczne, ale przede wszystkim użyteczne i konwertujące.",
			body: [
				"Makiety funkcjonalne (Wireframes)",
				"Projekty graficzne (UI Design)",
				"Prototypowanie i testy użyteczności",
				"Design System",
			],
			card: {
				eyebrow: "Faza 2",
				title: "Proces Projektowy",
				description:
					"Tworzymy wizualną stronę Twojego produktu, dbając o każdy detal doświadczenia użytkownika.",
				highlights: [
					{
						title: "User Experience",
						description:
							"Ścieżki użytkownika i architektura informacji",
					},
					{
						title: "User Interface",
						description: "Nowoczesny, spójny i dostępny design",
					},
				],
			},
		},
		{
			order: "03",
			title: "Development",
			summary:
				"Wdrażamy rozwiązania korzystając z najnowszych, sprawdzonych technologii. Czysty kod i wydajność to nasz priorytet.",
			body: [
				"Frontend & Backend Development",
				"Integracje API i systemów zewnętrznych",
				"Optymalizacja wydajności i SEO",
				"Testy automatyczne i QA",
			],
			card: {
				eyebrow: "Faza 3",
				title: "Programowanie",
				description:
					"Budujemy skalowalne i bezpieczne aplikacje, gotowe na rozwój Twojego biznesu.",
				highlights: [
					{
						title: "Tech Stack",
						description: "React, Next.js, Node.js, TypeScript",
					},
					{
						title: "Jakość Kodu",
						description:
							"Code review, CI/CD, standardy bezpieczeństwa",
					},
				],
			},
		},
		{
			order: "04",
			title: "Wdrożenie i Wsparcie",
			summary:
				"Start projektu to dopiero początek. Zapewniamy stabilne wdrożenie i długoterminowe wsparcie techniczne.",
			body: [
				"Konfiguracja środowiska produkcyjnego",
				"Szkolenie z obsługi panelu CMS",
				"Monitoring działania aplikacji",
				"Gwarancja i SLA",
			],
			card: {
				eyebrow: "Faza 4",
				title: "Launch & Support",
				description:
					"Jesteśmy z Tobą na każdym etapie życia produktu, dbając o jego rozwój i stabilność.",
				highlights: [
					{
						title: "Deployment",
						description:
							"Bezpieczne wdrożenie na serwery produkcyjne",
					},
					{
						title: "Utrzymanie",
						description: "Regularne aktualizacje i monitoring 24/7",
					},
				],
			},
		},
	];

	let containerRef: HTMLElement;
	let progressLineRef: HTMLElement;

	onMount(() => {
		const ctx = gsap.context(() => {
			// Animate Progress Line
			gsap.fromTo(
				progressLineRef,
				{ scaleY: 0 },
				{
					scaleY: 1,
					ease: "none",
					scrollTrigger: {
						trigger: containerRef,
						start: "top center",
						end: "bottom bottom",
						scrub: true,
					},
				},
			);

			// Animate Cards and Nodes
			const steps = gsap.utils.toArray(".timeline-step");
			steps.forEach((step: any, i) => {
				const card = step.querySelector(".offer-card-wrapper");
				const label = step.querySelector(".timeline-label");

				// Card Animation
				gsap.fromTo(
					card,
					{ y: 50, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.8,
						ease: "power3.out",
						scrollTrigger: {
							trigger: step,
							start: "top 100%",
							toggleActions: "play none none reverse",
						},
					},
				);

				if (label) {
					gsap.fromTo(
						label,
						{ x: 24, opacity: 0 },
						{
							x: 120,
							opacity: 1,
							duration: 0.6,
							ease: "power2.out",
							scrollTrigger: {
								trigger: step,
								start: "top 80%",
								toggleActions: "play none none reverse",
							},
						},
					);
				}
			});
		}, containerRef);

		return () => ctx.revert();
	});
</script>

<section
	bind:this={containerRef}
	class="bg-white py-24 px-6 xl:px-8 relative overflow-hidden"
>
	<div class="mx-auto max-w-[1280px]">
		<!-- Header -->
		<div class="max-w-3xl mx-auto text-center mb-20 lg:mb-32">
			<p
				class="font-mono text-sm uppercase tracking-[0.3em] text-brand-gray mb-6"
			>
				Proces współpracy
			</p>
			<h1
				class="font-lato text-4xl font-bold text-black sm:text-5xl leading-tight mb-6"
			>
				Jak tworzymy produkty cyfrowe?
			</h1>
			<p
				class="font-sans text-lg text-brand-gray sm:text-xl leading-relaxed"
			>
				Przejrzysty proces, przewidywalne efekty. Zobacz, jak krok po
				kroku realizujemy Twój projekt.
			</p>
		</div>

		<!-- Timeline Container -->
		<div class="relative">
			<!-- Central Line Background -->
			<div
				class="absolute left-[19px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 lg:-translate-x-1/2"
			></div>
			<!-- Central Line Fill -->
			<div
				bind:this={progressLineRef}
				class="absolute left-[19px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-orange to-brand-yellow lg:-translate-x-1/2 origin-top"
			></div>

			<div class="space-y-16 lg:space-y-24">
				{#each steps as step, i}
					<div
						class="timeline-step relative grid grid-cols-[40px_minmax(0,1fr)] items-start gap-6 lg:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)] lg:items-center lg:gap-12"
					>
						<!-- Desktop: Left Side (Card for even, Empty for odd) -->
						<div
							class="hidden lg:flex"
							class:order-1={i % 2 === 0}
							class:order-3={i % 2 !== 0}
							class:justify-end={i % 2 === 0}
							class:pr-12={i % 2 === 0}
						>
							{#if i % 2 === 0}
								<div
									class="offer-card-wrapper group relative p-[1px] rounded-[32px] bg-gradient-to-br from-transparent via-transparent to-transparent hover:from-brand-orange/50 hover:to-brand-yellow/50 transition-all duration-500"
								>
									<div
										class="relative flex flex-col h-full bg-white rounded-[31px] p-8 lg:p-10 shadow-sm group-hover:shadow-[0_20px_40px_-15px_rgba(221,161,94,0.15)] transition-all duration-500 group-hover:-translate-y-1 overflow-hidden border border-gray-100"
									>
										<!-- Decorative Background Blob -->
										<div
											class="absolute -right-20 -top-20 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl group-hover:bg-brand-yellow/10 transition-colors duration-500"
										></div>

										<!-- Step Number & Eyebrow -->
										<div
											class="relative flex items-center justify-between mb-8"
										>
											<span
												class="font-mono text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-brand-orange group-hover:to-brand-yellow transition-all duration-500"
											>
												{step.order}
											</span>
										</div>

										<!-- Content -->
										<div class="relative mb-8">
											<h3
												class="font-lato text-2xl lg:text-3xl font-bold text-black mb-4 group-hover:text-brand-orange transition-colors duration-300"
											>
												{step.title}
											</h3>
											<p
												class="font-sans text-brand-gray text-lg leading-relaxed"
											>
												{step.summary}
											</p>
										</div>

										<!-- Highlights Box -->
										<div
											class="relative mt-auto bg-gray-50/50 rounded-2xl p-6 group-hover:bg-gradient-to-br group-hover:from-brand-yellow/10 group-hover:to-brand-orange/5 transition-all duration-300 border border-gray-100 group-hover:border-brand-orange/10"
										>
											<div class="space-y-4">
												{#each step.card.highlights as highlight}
													<div
														class="flex gap-4 items-start"
													>
														<div
															class="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 shadow-[0_0_10px_rgba(221,161,94,0.5)]"
														></div>
														<div>
															<p
																class="font-lato font-bold text-black text-base mb-1"
															>
																{highlight.title}
															</p>
															<p
																class="font-sans text-sm text-brand-gray"
															>
																{highlight.description}
															</p>
														</div>
													</div>
												{/each}
											</div>
										</div>
									</div>
								</div>
							{/if}
						</div>

						<!-- Progress Label -->
						<div
							class="relative z-10 flex items-center order-1 lg:order-2 h-full pl-8 lg:pl-16"
						>
							<span
								class="timeline-label inline-block ml-6 font-mono text-6xl uppercase tracking-[0.3em] text-brand-gray/70 lg:tracking-[0.35em] whitespace-nowrap"
							>
								{step.card.eyebrow}
							</span>
						</div>

						<!-- Desktop: Right Side (Empty for even, Card for odd) -->
						<div
							class="hidden lg:flex"
							class:order-3={i % 2 === 0}
							class:order-1={i % 2 !== 0}
							class:justify-start={i % 2 !== 0}
							class:pl-12={i % 2 !== 0}
						>
							{#if i % 2 !== 0}
								<div
									class="offer-card-wrapper group relative p-[1px] rounded-[32px] bg-gradient-to-br from-transparent via-transparent to-transparent hover:from-brand-orange/50 hover:to-brand-yellow/50 transition-all duration-500"
								>
									<div
										class="relative flex flex-col h-full bg-white rounded-[31px] p-8 lg:p-10 shadow-sm group-hover:shadow-[0_20px_40px_-15px_rgba(221,161,94,0.15)] transition-all duration-500 group-hover:-translate-y-1 overflow-hidden border border-gray-100"
									>
										<!-- Decorative Background Blob -->
										<div
											class="absolute -right-20 -top-20 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl group-hover:bg-brand-yellow/10 transition-colors duration-500"
										></div>

										<!-- Step Number & Eyebrow -->
										<div
											class="relative flex items-center justify-between mb-8"
										>
											<span
												class="font-mono text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-brand-orange group-hover:to-brand-yellow transition-all duration-500"
											>
												{step.order}
											</span>
										</div>

										<!-- Content -->
										<div class="relative mb-8">
											<h3
												class="font-lato text-2xl lg:text-3xl font-bold text-black mb-4 group-hover:text-brand-orange transition-colors duration-300"
											>
												{step.title}
											</h3>
											<p
												class="font-sans text-brand-gray text-lg leading-relaxed"
											>
												{step.summary}
											</p>
										</div>

										<!-- Highlights Box -->
										<div
											class="relative mt-auto bg-gray-50/50 rounded-2xl p-6 group-hover:bg-gradient-to-br group-hover:from-brand-yellow/10 group-hover:to-brand-orange/5 transition-all duration-300 border border-gray-100 group-hover:border-brand-orange/10"
										>
											<div class="space-y-4">
												{#each step.card.highlights as highlight}
													<div
														class="flex gap-4 items-start"
													>
														<div
															class="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 shadow-[0_0_10px_rgba(221,161,94,0.5)]"
														></div>
														<div>
															<p
																class="font-lato font-bold text-black text-base mb-1"
															>
																{highlight.title}
															</p>
															<p
																class="font-sans text-sm text-brand-gray"
															>
																{highlight.description}
															</p>
														</div>
													</div>
												{/each}
											</div>
										</div>
									</div>
								</div>
							{/if}
						</div>

						<!-- Mobile: Card is always on the right of the line -->
						<div class="lg:hidden order-2">
							<div
								class="offer-card-wrapper group relative p-[1px] rounded-[32px] bg-gradient-to-br from-transparent via-transparent to-transparent hover:from-brand-orange/50 hover:to-brand-yellow/50 transition-all duration-500"
							>
								<div
									class="relative flex flex-col h-full bg-white rounded-[31px] p-6 shadow-sm group-hover:shadow-[0_20px_40px_-15px_rgba(221,161,94,0.15)] transition-all duration-500 group-hover:-translate-y-1 overflow-hidden border border-gray-100"
								>
									<!-- Decorative Background Blob -->
									<div
										class="absolute -right-20 -top-20 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl group-hover:bg-brand-yellow/10 transition-colors duration-500"
									></div>

									<!-- Step Number & Eyebrow -->
									<div
										class="relative flex items-center justify-between mb-6"
									>
										<span
											class="font-mono text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-brand-orange group-hover:to-brand-yellow transition-all duration-500"
										>
											{step.order}
										</span>
										<span
											class="inline-block px-3 py-1 rounded-full bg-gray-50 group-hover:bg-brand-orange/10 text-brand-gray group-hover:text-brand-orange font-mono text-[10px] font-bold uppercase tracking-wider transition-colors duration-300"
										>
											{step.card.eyebrow}
										</span>
									</div>

									<!-- Content -->
									<div class="relative mb-6">
										<h3
											class="font-lato text-xl font-bold text-black mb-3 group-hover:text-brand-orange transition-colors duration-300"
										>
											{step.title}
										</h3>
										<p
											class="font-sans text-brand-gray text-base leading-relaxed"
										>
											{step.summary}
										</p>
									</div>

									<!-- Highlights Box -->
									<div
										class="relative mt-auto bg-gray-50/50 rounded-xl p-4 group-hover:bg-gradient-to-br group-hover:from-brand-yellow/10 group-hover:to-brand-orange/5 transition-all duration-300 border border-gray-100 group-hover:border-brand-orange/10"
									>
										<div class="space-y-3">
											{#each step.card.highlights as highlight}
												<div
													class="flex gap-3 items-start"
												>
													<div
														class="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 shadow-[0_0_10px_rgba(221,161,94,0.5)]"
													></div>
													<div>
														<p
															class="font-lato font-bold text-black text-sm mb-0.5"
														>
															{highlight.title}
														</p>
														<p
															class="font-sans text-xs text-brand-gray"
														>
															{highlight.description}
														</p>
													</div>
												</div>
											{/each}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
