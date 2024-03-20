<template>
    <content-doc v-slot="{ doc }">
        <header flex="~ gap-4">
            <nuxt-img class="size-28" :src="doc.icon" :alt="doc.title"/>
            <div>
                <h1 class="mb-2.5" line="height-12" text="12">{{ doc.title }}</h1>
                <span text="gray">{{ doc.description }}</span>
            </div>
        </header>
        <div flex="~ gap-8">
            <content-renderer class="markdown-body" flex="1" tag="article" :value="doc"/>
            <aside class="w-50 mt-6">
                <div line="height-8" text="gray">
                    <span>目录</span>
                </div>
                <content-list v-slot="{ list }">
                    <nav>
                        <ul>
                            <li v-for="item in list" line="height-7">
                                <nuxt-link class="block" un-text="hover:blue" :to="item._path">{{ item.title }}</nuxt-link>
                            </li>
                        </ul>
                    </nav>
                </content-list>
            </aside>
        </div>
    </content-doc>
</template>