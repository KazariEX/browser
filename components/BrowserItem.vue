<script lang="ts" setup>
    import type { ParsedContent } from "@nuxt/content/types";

    defineProps<{
        doc: ParsedContent
    }>();
</script>

<template>
    <div
        class="h-38 p-4"
        flex="~ gap-4"
        b="1 solid gray-300 hover:blue"
        >
        <nuxt-img class="w-28" :src="doc.icon" :alt="doc.title"/>
        <div class="overflow-hidden" flex="1" grid="~ rows-[auto_1fr_auto]">
            <span class="w-full -mt-1 mb-0.5" text="9 truncate">
                <nuxt-link un-text="hover:blue" :to="doc._path">{{ doc.abbrTitle || doc.title }}</nuxt-link>
            </span>
            <span line="height-6 clamp-2" text="gray">{{ doc.description }}</span>
            <plain-link class="ml-auto" :to="doc.official" target="_blank">
                <span>前往官网</span>
                <icon name="pajamas:external-link"/>
            </plain-link>
        </div>
    </div>
</template>