<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { Button } from "$lib/components/ui/button/index.js";

    let showBanner = false;

    onMount(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Show banner after a small delay if no choice made
            setTimeout(() => {
                showBanner = true;
            }, 1000);
        }
    });

    function handleAccept() {
        updateConsent("granted");
        showBanner = false;
    }

    function handleDecline() {
        updateConsent("denied");
        showBanner = false;
    }

    function updateConsent(status: "granted" | "denied") {
        localStorage.setItem("cookie-consent", status);

        // Push consent update to dataLayer
        // @ts-ignore
        window.gtag("consent", "update", {
            ad_storage: status,
            ad_user_data: status,
            ad_personalization: status,
            analytics_storage: status,
        });
    }
</script>

{#if showBanner}
    <div
        transition:fly={{ y: 50, duration: 500 }}
        class="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-screen-xl md:bottom-8 md:left-8 md:right-8"
    >
        <div
            class="flex flex-col items-center justify-between gap-4 rounded-2xl border border-brand-gray/10 bg-white/90 p-6 shadow-lg backdrop-blur-md md:flex-row md:px-8"
        >
            <div class="flex flex-col gap-2 text-center md:text-left">
                <p class="font-lato text-lg font-bold text-brand-text">
                    Dbamy o Twoją prywatność
                </p>
                <p class="font-lato text-sm text-brand-gray md:max-w-2xl">
                    Używamy plików cookies i Google Analytics, aby analizować
                    ruch na stronie i dostarczać lepsze treści. Możesz
                    zaakceptować wszystkie pliki cookies lub je odrzucić.
                </p>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row">
                <Button
                    variant="outline"
                    onclick={handleDecline}
                    class="rounded-full border-brand-gray/20 font-lato hover:bg-brand-gray/5 hover:text-brand-text"
                >
                    Odrzuć
                </Button>
                <Button
                    onclick={handleAccept}
                    class="rounded-full bg-brand-primary font-lato text-white hover:bg-brand-primary/90"
                >
                    Akceptuję
                </Button>
            </div>
        </div>
    </div>
{/if}
