<script setup>
    const isDark = useDark();
    const state = ref(1);

    watch(state, (val) => {
        isDark.value = {
            0: false,
            2: true
        }[val] ?? false;
    });
</script>

<template>
    <div flex="~" m="y-1" p="l-1 r-2" text="4">
        <template v-for="name, i in [`sun`, `computer`, `moon`]">
            <a
                class="size-7"
                grid="~ place-items-center"
                b="rounded-full"
                un-text="gray-400"
                :class="{
                    [`!text-white bg-primary`]: state === i
                }"
                @click="state = i"
            ><icon :name="`fa6-solid:${name}`"/></a>
        </template>
    </div>
</template>