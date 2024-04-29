<script lang="ts" setup>
    // @ts-nocheck
    import Reveal from "reveal.js";
    import RevealHighlight from "reveal.js/plugin/highlight/highlight";
    import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
    import "reveal.js/dist/reveal.css";
    import "reveal.js/dist/theme/black.css";
    import "reveal.js/plugin/highlight/monokai.css";

    definePageMeta({
        layout: "empty"
    });

    const slides = ref();
    const slideNames = [
        "1",
        "2",
        "3",
        "3.1",
        "3.2",
        "4",
        "4.1",
        "4.2",
        "5",
        "5.1",
        "5.2"
    ];

    onMounted(async () => {
        const $root = document.querySelector("#__nuxt");
        $root?.classList.add("reveal-viewport");

        const modules = await Promise.all(
            slideNames.map((name) => import(`~/assets/slide/${name}.md?raw`))
        );

        const res = [];
        modules.forEach((module, i) => {
            const name = slideNames[i];
            const match = name.match(/^(\d+)(?:\.(\d+))?$/);
            if (match) {
                const [, i, j] = match;
                if (i && !j) {
                    res.push({
                        content: module.default,
                        children: []
                    });
                }
                else {
                    res.at(-1).children.push({
                        content: module.default
                    });
                }
            }
        });
        slides.value = res;

        const deck = new Reveal({
            plugins: [
                RevealMarkdown,
                RevealHighlight
            ]
        });
        deck.initialize();
    });
</script>

<template>
    <div class="reveal">
        <div class="slides">
            <template v-if="slides">
                <section v-for="slide in slides" :data-markdown="!slide.children.length || null">
                    <textarea v-if="!slide.children.length" data-template v-html="slide.content"></textarea>
                    <section v-for="child in [slide, ...slide.children]" v-else data-markdown>
                        <textarea data-template v-html="child.content"></textarea>
                    </section>
                </section>
            </template>
        </div>
    </div>
</template>

<style>
    .reveal {
        font-family: var(--font);
    }
</style>