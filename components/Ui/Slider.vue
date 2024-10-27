<template>
    <!-- Slider -->
    <div data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer",

  "isAutoPlay": true,
  "isCentered": true,
  "isSnap": true
}' class="relative">
        <div class="hs-carousel w-full flex snap-x snap-mandatory !overflow-hidden bg-white rounded-lg">
            <div class="hs-carousel-body min-h-72 flex flex-nowrap gap-2 transition-transform duration-700 opacity-0">
                
                <div class="hs-carousel-slide snap-center">
                    <div class="flex justify-center w-full h-full bg-gray-100">
                        <NuxtImg class="w-full object-cover" src="https://invitato.net/test-product-engineer/static/5-ffa38a07e15195800fbcc590cb50b2d0.jpg" />
                    </div>
                </div>
                <div class="hs-carousel-slide snap-center">
                    <div class="flex justify-center w-full h-full bg-gray-100">
                        <NuxtImg class="w-full object-cover" src="https://invitato.net/test-product-engineer/static/1-2b43ea516254cdff99c88a7fce90ae98.jpg" />
                    </div>
                </div>
                <div class="hs-carousel-slide snap-center">
                    <div class="flex justify-center w-full h-full bg-gray-100">
                        <NuxtImg class="w-full object-cover" src="https://invitato.net/test-product-engineer/static/2-9fafa4bf7091b5207804ffe51f518939.jpg" />
                    </div>
                </div>
                <div class="hs-carousel-slide snap-center">
                    <div class="flex justify-center w-full h-full bg-gray-100">
                        <NuxtImg class="w-full object-cover" src="https://invitato.net/test-product-engineer/static/3-8ac38da1cdc0fa503b46859811696a13.jpg" />
                    </div>
                </div>
                <div class="hs-carousel-slide snap-center">
                    <div class="flex justify-center w-full h-full bg-gray-100">
                        <NuxtImg class="w-full object-cover" src="https://invitato.net/test-product-engineer/static/4-3943e72cf6bb4fe685c5917ea1d1cac4.jpg" />
                    </div>
                </div>
                
            </div>
        </div>

        <button type="button"
            class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg">
            <span class="text-2xl" aria-hidden="true">
                <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="m15 18-6-6 6-6"></path>
                </svg>
            </span>
            <span class="sr-only">Previous</span>
        </button>
        <button type="button"
            class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg">
            <span class="sr-only">Next</span>
            <span class="text-2xl" aria-hidden="true">
                <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"></path>
                </svg>
            </span>
        </button>

        <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2"></div>
    </div>
    <!-- End Slider -->
</template>

<script setup>
const props = defineProps({
    images: Array
})
</script>