<script setup>
    const list = [
        {
            name: "主页",
            to: "/"
        }
    ];
</script>

<template>
    <header
        class="fixed inset-0 top-4 size-fit shadow-2xl bg-white"
        flex="~"
        m="x-auto"
        p="l-3.5"
        b="1 solid gray-200 rounded-full"
        text="14px"
        ><nuxt-link
            v-for="{ name, to } in list"
            p="x-3.5 y-2"
            un-text="aria-[current=page]:blue"
            :to="to"
        >{{ name }}</nuxt-link>
        <theme-switch />
    </header>
</template>