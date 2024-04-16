<script setup>
    const state = ref(1);
</script>

<template>
    <div flex="~" m="y-1" p="l-1 r-2" text="4">
        <template v-for="name, i in [`sun`, `computer`, `moon`]">
            <a
                class="size-7"
                grid="~ place-items-center"
                b="1 rounded-full"
                un-text="gray-400"
                :class="{
                    [`b-solid !text-white bg-blue`]: state === i
                }"
                @click="state = i"
            ><icon :name="`fa6-solid:${name}`"/></a>
        </template>
    </div>
</template>