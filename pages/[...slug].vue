<template>
    <content-doc v-slot="{ doc }">
        <header flex="~ gap-4 items-start">
            <nuxt-img class="size-28" :src="doc.icon" :alt="doc.title"/>
            <div>
                <h1 class="mb-2.5" line="height-12" text="12">{{ doc.title }}</h1>
                <span text="gray">{{ doc.description }}</span>
            </div>
        </header>
        <div flex="~ gap-8 lt-md:col">
            <div flex="1">
                <content-renderer class="markdown-body" tag="article" :value="doc"/>
                <footer class="mt-16" flex="~ gap-4">
                    <plain-link to="/">
                        <icon name="akar-icons:arrow-back-thick"/>
                        <span>回到主页</span>
                    </plain-link>
                    <plain-link :to="doc.official" target="_blank">
                        <icon name="pajamas:external-link"/>
                        <span>前往官网</span>
                    </plain-link>
                </footer>
            </div>
            <aside class="w-50 mt-6">
                <div line="height-8" text="gray">
                    <span>目录</span>
                </div>
                <content-list v-slot="{ list }">
                    <nav>
                        <ul>
                            <li v-for="item in list" line="height-7">
                                <nuxt-link class="block" un-text="[&.router-link-active]:blue hover:blue" :to="item._path">{{ item.title }}</nuxt-link>
                            </li>
                        </ul>
                    </nav>
                </content-list>
            </aside>
        </div>
    </content-doc>
</template>