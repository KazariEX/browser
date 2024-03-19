<template>
    <ContentDoc v-slot="{ doc }">
        <div flex="~ gap-4">
            <nuxt-img class="size-28" :src="doc.icon"/>
            <div>
                <h1 class="-mt-2 mb-1" text="12">{{ doc.title }}</h1>
                <span text="gray">{{ doc.description }}</span>
            </div>
        </div>
        <ContentRenderer class="markdown-body" tag="article" :value="doc"/>
    </ContentDoc>
</template>