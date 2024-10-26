<template>
    <div class="w-full h-full">
        <div class="w-full h-full" :class="{ 'animate-fade animate-once animate-ease-out': !isOpened }" v-show="!loads">
            <Cover :is-opened="isOpened" @open-invitation="openInvitation"
                :class="{ 'animate-fade animate-once animate-duration-[1000ms] animate-ease-linear animate-reverse': isOpened }" />
        </div>
        <div class="w-full h-full animate-fade animate-once animate-ease-out" v-show="loads">
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
        }, 1000);
    }, 1000);
}

</script>