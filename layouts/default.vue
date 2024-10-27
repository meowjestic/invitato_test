<template>
    <div class="flex flex-1 h-screen">
        <DekstopCover class="h-full hidden lg:block w-2/3" />
        <div class="w-full lg:w-1/3 overflow-auto">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.usePoppins {
    font-family: "Poppins", serif;
}

.userButtler {
    font-family: "Buttler", sans-serif
}
</style>