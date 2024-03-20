<template>
    <div min-h="50 md:70 lg:90" flex="~ wrap items-center">
        <div>
            <h1 text="20 md:26 lg:32">浏览器知识构建</h1>
            <p text="6 md:7 lg:8 gray">不知道写什么，总之先占用一行</p>
        </div>
        <icon class="ml-auto" text="36 md:54 lg:72" name="ph:planet"/>
    </div>
    <content-list v-slot="{ list }">
        <div grid="~ cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
            <browser-item v-for="item in list" :doc="item"/>
        </div>
    </content-list>
</template>