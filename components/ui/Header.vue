<script lang="ts" setup>
    const list = [
        {
            name: "主页",
            to: "/"
        },
        {
            name: "关于",
            to: "/about"
        }
    ];
</script>

<template>
    <header
        class="fixed inset-0 top-3 size-fit shadow-2xl backdrop-blur-md"
        flex="~"
        m="x-auto"
        p="l-3.5"
        b="1 solid gray-300 rounded-full"
        bg="light opacity-75"
        text="14px"
        ><nuxt-link
            v-for="{ name, to } in list"
            p="x-3.5 y-2"
            un-text="aria-[current=page]:primary"
            :to="to"
        >{{ name }}</nuxt-link>
        <theme-switch />
    </header>
</template>