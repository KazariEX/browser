<script setup>
    const mode = useColorMode();
    const state = ref(1);

    watch(state, (val) => {
        mode.value = {
            0: "light",
            1: "auto",
            2: "dark"
        }[val];
    });
</script>

<template>
    <div flex="~" m="y-1" p="l-1 r-2" text="4">
        <a
            v-for="name, i in [`sun`, `computer`, `moon`]"
            class="size-7"
            grid="~ place-items-center"
            b="rounded-full"
            un-text="gray-400"
            :class="{
                [`!text-white bg-primary`]: state === i
            }"
            @click="state = i"
        ><icon :name="`fa6-solid:${name}`"/></a>
    </div>
</template>