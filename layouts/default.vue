<template>
    <div class="flex flex-1 h-screen">
            <div class="h-full hidden lg:block w-[calc(100%-515px)] relative">
                <DekstopCover class="h-full w-[calc(100%-515px)] top-0 fixed" />
            </div>
        <div class="w-full lg:w-[515px]">
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