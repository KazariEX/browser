<script lang="ts" setup>
    import type { ParsedContent } from "@nuxt/content/types";

    defineProps<{
        data: {
            title: string,
            icon: string
        } & ParsedContent
    }>();
</script>

<template>
    <div class="flex gap-4 p-4 b-1 b-solid b-gray rd-4">
        <img class="w-21" :src="data.icon" :alt="data.title"/>
        <div flex="~ col justify-between 1">
            <nuxt-link class="text-8" :to="data._path">{{ data.title }}</nuxt-link>
            <nuxt-link class="ml-auto text-gray hover-text-blue" flex="~ gap-1 items-center justify-end" :to="data.official" target="_blank">
                <span>前往官网</span>
                <icon name="pajamas:external-link"/>
            </nuxt-link>
        </div>
    </div>
</template>