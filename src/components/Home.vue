<template>
    <v-container>
        <v-row class="text-center">
            <v-col cols="12">
                <v-img
                    :src="require('../assets/logo.png')"
                    class="my-3"
                    contain
                    height="250"
                    />
            </v-col>

            <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">
                    Vue Vuetify Typescript App Labs
                </h1>


                <p class="subheading font-weight-regular">
                    P.O.C. for Vue 3.0 + DDD (Domain Driven Design)
                </p>
            </v-col>

            <v-col
                class="mb-5"
                cols="12"
                >
                <h2 class="headline font-weight-bold mb-5">
                    Technologies
                </h2>

                <v-row justify="center">
                    <a
                        v-for="(technology, i) in technologies"
                        :key="i"
                        :href="technology.href"
                        class="subheading mx-3"
                        target="_blank"
                        >
                        {{ technology.text }}
                    </a>
                </v-row>
            </v-col>

            <v-col
                class="mb-5"
                cols="12"
                >
                <h2 class="headline font-weight-bold mb-5">
                    Features and dependencies
                </h2>

                <v-row justify="center">
                    <a
                        v-for="(dependency, i) in dependencies"
                        :key="i"
                        :href="dependency.href"
                        class="subheading mx-3"
                        target="_blank"
                        >
                        {{ dependency.text }}
                    </a>
                </v-row>
            </v-col>

            <v-col
                class="mb-5"
                cols="12"
                >
                <h2 class="headline font-weight-bold mb-5">
                    Architecture references
                </h2>

                <v-row justify="center">
                    <a
                        v-for="(arch, i) in archs"
                        :key="i"
                        :href="arch.href"
                        class="subheading mx-3"
                        target="_blank"
                        >
                        {{ arch.text }}
                    </a>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang='ts'>
import { defineComponent, } from 'vue';


export default defineComponent({
    name: 'HelloWorld',

    data () {
        return {
            archs: [
                {
                    text: 'Huy Ta Quoc',
                    href: 'https://dev.to/huytaquoc/a-different-approach-to-frontend-architecture-38d4',
                },
                {
                    text: 'Alex Bespoyasov',
                    href: 'https://dev.to/bespoyasov/clean-architecture-on-frontend-4311',
                },
                {
                    text: 'Khalil Stemmler',
                    href: 'https://khalilstemmler.com/articles/typescript-domain-driven-design/ddd-frontend/',
                },
                {
                    text: 'Vue School',
                    href: 'https://vueschool.io/articles/vuejs-tutorials/domain-driven-design-in-nuxt-apps/',
                },
            ],
            dependencies: [
                {
                    text: 'ESLint',
                    href: 'https://eslint.org/',
                },
                {
                    text: 'Babel',
                    href: 'https://babeljs.io/',
                },
                {
                    text: 'Vuex Module Decorators',
                    href: 'https://github.com/championswimmer/vuex-module-decorators',
                },
                {
                    text: 'Vue Class Component',
                    href: 'https://class-component.vuejs.org/',
                },
            ],
            technologies: [
                {
                    text: 'VueJS 3.0',
                    href: 'https://vuejs.org/guide/introduction.html',
                },
                {
                    text: 'Vuetify 3.0 (Alpha)',
                    href: 'https://next.vuetifyjs.com/en/getting-started/installation',
                },
                {
                    text: 'TypeScript',
                    href: 'https://www.typescriptlang.org/',
                },
                {
                    text: 'Vuex 4',
                    href: 'https://vuex.vuejs.org/',
                },
                {
                    text: 'Vue Router 4',
                    href: 'https://router.vuejs.org/installation.html',
                },
            ],
        };
    },
},);
</script>
