<template>
    <div class="w-full h-screen thisbackground p-8 flex flex-col justify-evenly items-center relative">
        <h2
            class="usePoppins font-bold tracking-[2px] text-white text-md mb-8 observe">
            WEDDING ANNOUNCEMENT</h2>
        <div>
            <h2 class="text-5xl text-white text-center observe">TIFFANY & JARED</h2>
            <h2 class="text-4xl italic text-white text-center observe">#TImetoshaRE
            </h2>
        </div>
        <div></div>
        <div class="absolute bottom-12 right-8 text-white observe">
            <NuxtLink to="#section-2" :external="true">
                <button type="button"
                    class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg animate-bounce animate-infinite animate-duration-[3000ms] animate-ease-in-out">
                    <p>SCROLL TO BEGIN
                        <Icon name="line-md:chevron-down" />
                    </p>
                </button>
            </NuxtLink>

        </div>
    </div>
    <div id="section-2" class="w-full h-screen p-8 flex flex-col justify-evenly items-center relative">
        <div class="text-center text-sm my-8">
            <p class="observe">DEAR MR-MRS,</p>
            <p class="observe">FAMILY & FRIENDS</p>
        </div>
        <div class="text-center text-3xl my-4 mb-12">
            <h2 class="observe">Welcome to</h2>
            <h2 class="observe">Tiffany & Jared's</h2>
            <h2 class="observe">Wedding Website</h2>
        </div>
        <!-- Slider -->
        <div class="w-full h-full observe">
            <UiSlider />
        </div>
        <!-- End Slider -->
        <div class="text-center italic p-12">
            <p class="observe">Together with joyful hearts and the grace of God, we
                joyfully
                announce the upcoming of our marriage.</p>
        </div>
    </div>
</template>

<style scoped>
.thisbackground {
    background: linear-gradient(rgb(50 48 48/ 50%), rgb(50 48 48 / 50%)), center/cover url(https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920);
}
</style>