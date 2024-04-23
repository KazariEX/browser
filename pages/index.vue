<script lang="ts" setup>
    useHead({
        title: "主页"
    });

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
        <browser-list
            v-for="{ title, type }, i in classification"
            :key="type"
            :title="title"
            :type="type"
            :index="i"
        />
</template>