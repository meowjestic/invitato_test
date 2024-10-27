<template>
    <div class="w-full h-full" :class="{'overflow-hidden' : !loads}">
        <div class="w-full h-screen" :class="{ 'animate-fade animate-once animate-ease-out': !isOpened }" v-if="!loads">
            <Cover :is-opened="isOpened" @open-invitation="openInvitation"
                :class="{ 'animate-fade animate-once animate-duration-[1000ms] animate-ease-linear animate-reverse': isOpened }" />
        </div>
        <div :class="{'w-full h-full animate-fade animate-once animate-ease-out' : loads}">
            <LazyContent />
        </div>
    </div>
</template>
<script setup>
const isOpened = ref(false)
const loads = ref(false)
function openInvitation() {
    setTimeout(() => {
        isOpened.value = true
        setTimeout(() => {
            loads.value = true
            const audio = new Audio("/audio/everyone_adores_you.mp3")
            audio.play()
            audio.loop
        }, 1000);
    }, 1000);
}

</script>