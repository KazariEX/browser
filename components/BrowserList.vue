<script lang="ts" setup>
    const props = defineProps<{
        title: string;
        type: string;
        index: number;
    }>();

    const keyword = ref("");

    const browserList = await queryContent({
        where: [{
            type: props.type
        }]
    }).find();

    const filteredList = computed(() => {
        const re = new RegExp(keyword.value, "i");
        return browserList.filter((item) => {
            const title = item.abbrTitle || item.title;
            return title.match(re);
        });
    });
</script>

<template>
    <div flex="~ items-center gap-2" m="y-4">
            <span class="select-none" text="10 gray">{{ index + 1 }}.</span>
            <h2 text="10">{{ title }}</h2>
            <div
                flex="~ justify-end items-center gap-1 1"
                text="gray"
                ><span class="lt-md:hidden">快速检索</span>
                <icon name="vaadin:search"/>
                <input
                    class="max-w-64"
                    h="8"
                    m="l-1"
                    p="x-1.5 y-1"
                    b="~ solid gray-300"
                    type="text"
                    v-model="keyword"
                />
            </div>
        </div>
        <div grid="~ cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
            <browser-item v-for="item in filteredList" :doc="item"/>
        </div>
</template>