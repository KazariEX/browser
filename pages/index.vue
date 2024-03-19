<script setup>

</script>

<template>
    <main class="max-w-320 mx-auto">
        <h1 class="mt-32 mb-16 text-32">浏览器知识构建</h1>
        <ContentList v-slot="{ list }" path="/posts">
            <div grid="~ cols-[repeat(auto-fill,minmax(244px,1fr))] gap-4">
                <BrowserItem v-for="item in list" :data="item"/>
            </div>
        </ContentList>
    </main>
</template>