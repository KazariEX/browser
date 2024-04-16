<script lang="ts" setup>
    const classification = [
        {
            title: "浏览器",
            type: "browser"
        },
        {
            title: "内核",
            type: "kernel"
        }
    ];
</script>

<template>
    <div flex="~ wrap items-center gap-col-4" min-h="50 md:70 lg:90">
        <div>
            <h1 text="20 md:26 lg:32">浏览器知识构建</h1>
            <p text="6 md:7 lg:8 gray">不知道写什么，总之先占用一行</p>
        </div>
        <icon class="ml-auto" text="36 md:54 lg:72" name="ph:planet"/>
    </div>
    <template v-for="{ title, type }, i in classification">
        <div flex="~ items-center gap-2" m="y-4" text="12">
            <span text="gray">{{ i + 1 }}.</span>
            <h2 text="10">{{ title }}</h2>
        </div>
        <content-list v-slot="{ list }" :query="{ where: [{ type }] }">
            <div grid="~ cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
                <browser-item v-for="item in list" :doc="item"/>
            </div>
        </content-list>
    </template>
</template>