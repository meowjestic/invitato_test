<template>
    <div class="w-full h-screen thisbackground p-8 flex flex-col justify-evenly items-center relative">
        <h2 class="usePoppins font-bold tracking-[2px] text-white text-md mb-8">WEDDING ANNOUNCEMENT</h2>
        <div>
            <h2 class="text-5xl text-white text-center">TIFFANY & JARED</h2>
            <h2 class="text-4xl italic text-white text-center">#TImetoshaRE</h2>
        </div>
        <div></div>
        <div class="absolute bottom-12 right-8 text-white">
            <p>SCROLL TO BEGIN
                <Icon name="line-md:chevron-down" />
            </p>
        </div>
    </div>
    <div class="w-full h-screen p-8 flex flex-col justify-evenly items-center relative">
        <div class="text-center text-sm my-8">
            <p>DEAR MR-MRS,</p>
            <p>FAMILY & FRIENDS</p>
        </div>
        <div class="text-center text-3xl my-4 mb-12">
            <h2>Welcome to</h2>
            <h2>Tiffany & Jared's</h2>
            <h2>Wedding Website</h2>
        </div>
        <!-- Slider -->
        <div class="w-full h-full">
            <UiSlider :images="images"/>
        </div>
        <!-- End Slider -->
        <div class="text-center italic p-12">
            <p>Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.</p>
        </div>
    </div>
</template>
<script setup>
const images = [
    "https://invitato.net/test-product-engineer/static/5-ffa38a07e15195800fbcc590cb50b2d0.jpg",
    "https://invitato.net/test-product-engineer/static/1-2b43ea516254cdff99c88a7fce90ae98.jpg",
    "https://invitato.net/test-product-engineer/static/2-9fafa4bf7091b5207804ffe51f518939.jpg",
    "https://invitato.net/test-product-engineer/static/3-8ac38da1cdc0fa503b46859811696a13.jpg",
    "https://invitato.net/test-product-engineer/static/4-3943e72cf6bb4fe685c5917ea1d1cac4.jpg",
]
</script>
<style scoped>
.thisbackground {
    background: linear-gradient(rgb(50 48 48/ 50%), rgb(50 48 48 / 50%)), center/cover url(https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920);
}
</style>