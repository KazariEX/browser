<script setup>

</script>

<template>
    <div class="my-16">
        <h1 class="text-32">浏览器知识构建</h1>
        <p class="text-8 text-gray">不知道写什么，总之先占用一行</p>
    </div>
    <ContentList v-slot="{ list }" path="/posts">
        <div grid="~ cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
            <BrowserItem v-for="item in list" :data="item"/>
        </div>
    </ContentList>
</template>