<script lang="ts" setup>
    import type { ParsedContent } from "@nuxt/content/types";

    defineProps<{
        data: ParsedContent
    }>();
</script>

<template>
    <div
        class="h-38 p-4"
        flex="~ gap-4"
        b="1 solid gray-300 hover:blue"
        >
        <nuxt-img class="w-28" :src="data.icon" :alt="data.title"/>
        <div class="overflow-hidden flex-1" grid="~ rows-[auto_1fr_auto]">
            <span class="w-full -mt-1 mb-0.5 text-9 text-truncate">
                <nuxt-link class="hover:text-blue" :to="data._path">{{ data.title }}</nuxt-link>
            </span>
            <span class="flex-1 lh-6 line-clamp-2 text-gray">{{ data.description }}</span>
            <nuxt-link
                class="ml-auto text-gray hover:text-blue"
                flex="~ gap-1 items-center justify-end"
                :to="data.official"
                target="_blank"
                ><span>前往官网</span>
                <icon name="pajamas:external-link"/>
            </nuxt-link>
        </div>
    </div>
</template>