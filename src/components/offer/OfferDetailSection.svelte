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
	let activeIndex = $state(0);
	let sectionRefs: HTMLElement[] = [];

	onMount(() => {
		const ctx = gsap.context(() => {
			sectionRefs.forEach((section, i) => {
				ScrollTrigger.create({
					trigger: section,
					start: "top center+=100", // Trigger when the top of the section hits a bit below the center
					end: "bottom center+=100",
					onEnter: () => {
						activeIndex = i;
					},
					onEnterBack: () => {
						activeIndex = i;
					},
				});
			});
		}, containerRef);

		return () => ctx.revert();
	});
</script>

<section bind:this={containerRef} class="bg-white relative py-24 lg:py-32">
	<div class="mx-auto max-w-[1280px] w-full px-6 xl:px-8">
		<!-- Header -->
		<div class="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
			<p
				class="font-mono text-sm uppercase tracking-[0.3em] text-brand-gray mb-6"
			>
				Proces współpracy
			</p>
			<h2
				class="font-lato text-4xl font-bold text-black sm:text-5xl leading-tight mb-6"
			>
				Jak tworzymy produkty cyfrowe?
			</h2>
			<p
				class="font-sans text-lg text-brand-gray sm:text-xl leading-relaxed"
			>
				Przejrzysty proces, przewidywalne efekty. Zobacz, jak krok po
				kroku realizujemy Twój projekt.
			</p>
		</div>

		<!-- Two Column Layout -->
		<div
			class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
		>
			<!-- Left: Scrollable Content -->
			<div class="relative flex flex-col gap-24 lg:gap-32">
				<!-- Spacer for first section to reach center -->
				<!-- <div class="h-[20vh] lg:h-[25vh]"></div> -->
				
				{#each steps as step, i}
					<div
						bind:this={sectionRefs[i]}
						class="scroll-section flex flex-col justify-center px-4 transition-all duration-500 min-h-[60vh]"
						class:opacity-40={activeIndex !== i}
						class:opacity-100={activeIndex === i}
					>
						<!-- Order Number -->
						<div class="mb-6 transition-all duration-500">
							<span
								class="font-mono text-5xl font-bold transition-all duration-500"
								class:text-brand-gray={activeIndex !== i}
								class:text-brand-orange={activeIndex === i}
							>
								{step.order}
							</span>
						</div>

						<!-- Title -->
						<h3
							class="font-lato text-3xl lg:text-4xl font-bold mb-4 transition-all duration-500"
							class:text-brand-gray={activeIndex !== i}
							class:text-black={activeIndex === i}
						>
							{step.title}
						</h3>

						<!-- Summary (always visible) -->
						<p
							class="font-sans text-lg text-brand-gray leading-relaxed mb-6 transition-all duration-500"
						>
							{step.summary}
						</p>

						<!-- Body (revealed when active) -->
						<div
							class="grid transition-all duration-500 ease-in-out"
							style:grid-template-rows={activeIndex === i
								? "1fr"
								: "0fr"}
						>
							<div class="overflow-hidden">
								<ul class="space-y-3 pl-6 pb-4">
									{#each step.body as item}
										<li
											class="font-sans text-base text-brand-gray relative before:content-['•'] before:absolute before:-left-6 before:text-brand-orange"
										>
											{item}
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</div>
				{/each}
				
				<!-- Spacer for last section to reach center -->
				<!-- <div class="h-[40vh] lg:h-[45vh]"></div> -->
			</div>

			<!-- Right: Sticky Card -->
			<div class="hidden lg:block sticky top-32 h-fit">
				<div class="w-full max-w-xl mx-auto">
					{#key activeIndex}
						<div
							class="group relative p-[1px] rounded-[32px] bg-gradient-to-br from-brand-orange/50 to-brand-yellow/50 transition-all duration-500 animate-fade-in"
						>
							<div
								class="relative flex flex-col h-full bg-white rounded-[31px] p-10 shadow-[0_20px_40px_-15px_rgba(221,161,94,0.15)] overflow-hidden border border-gray-100"
							>
								<!-- Decorative Background Blob -->
								<div
									class="absolute -right-20 -top-20 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"
								></div>

								<!-- Step Number & Eyebrow -->
								<div
									class="relative flex items-center justify-between mb-8"
								>
									<span
										class="font-mono text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-orange to-brand-yellow"
									>
										{steps[activeIndex].order}
									</span>
									<span
										class="inline-block px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange font-mono text-xs font-bold uppercase tracking-wider"
									>
										{steps[activeIndex].card.eyebrow}
									</span>
								</div>

								<!-- Content -->
								<div class="relative mb-8">
									<h3
										class="font-lato text-3xl font-bold text-brand-orange mb-4"
									>
										{steps[activeIndex].card.title}
									</h3>
									<p
										class="font-sans text-brand-gray text-lg leading-relaxed"
									>
										{steps[activeIndex].card.description}
									</p>
								</div>

								<!-- Highlights Box -->
								<div
									class="relative mt-auto bg-gradient-to-br from-brand-yellow/10 to-brand-orange/5 rounded-2xl p-6 border border-brand-orange/10"
								>
									<div class="space-y-4">
										{#each steps[activeIndex].card.highlights as highlight}
											<div class="flex gap-4 items-start">
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
					{/key}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.5s ease-out;
	}

	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}

	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
