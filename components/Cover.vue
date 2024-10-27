<template>
    <div class="w-full h-full thisbackground p-8 flex flex-col justify-evenly items-center">
        <h2 class="usePoppins font-bold tracking-[2px] text-white text-md mb-8 animate-fade-up animate-ease-in-out">WEDDING ANNOUNCEMENT</h2>
        <div>
            <h2 class="text-5xl text-white text-center animate-fade-up animate-ease-in-out">TIFFANY & JARED</h2>
            <h2 class="text-4xl italic text-white text-center animate-fade-up animate-ease-in-out">#TImetoshaRE</h2>
        </div>
        <div class="animate-fade-up animate-ease-in-out">
            <button type="button" @click="openInvitation"
            :disabled="isOpened"
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none animate-bounce animate-infinite animate-duration-[3000ms] animate-ease-in-out">
            <Icon :name="isOpened ? 'line-md:loading-loop' : 'line-md:email-opened-alt-filled'" />
            Open
        </button>
        </div>
    </div>
</template>
<script setup>
const handlers = defineEmits(["openInvitation"])
const isOpened = ref(false)

function openInvitation() {
    isOpened.value = true
    handlers("openInvitation")
}
</script>
<style scoped>
.thisbackground {
    background: linear-gradient(rgb(50 48 48/ 50%), rgb(50 48 48 / 50%)), center/cover url(https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920);
}
</style>