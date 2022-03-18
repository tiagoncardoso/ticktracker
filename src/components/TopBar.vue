<template>
    <v-app-bar
        app
        color="indigo"
        dark
        elevation="4"
        density="compact"
        >

        <v-toolbar-title
            class="text-uppercase text-left">
            <span class="font-weight-light text-blue-grey">Tick</span>
            <span class="font-weight-bold">Tracker</span>
            <span class="font-weight-light text-orange-lighten-2">&Money</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu
            left
            bottom
            >
            <template v-slot:activator="{ attrs }">
                <v-btn
                    icon
                    v-bind="attrs"
                    >
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                    v-for="option in options"
                    v-bind:key="option.text"
                    @click="() => {}"
                    >
                    <v-list-item-title>{{ option.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
import { defineComponent, } from 'vue';

export default defineComponent({
    name: 'TopBar',

    data() {
        return {
            options: [
                {
                    text: 'Tracker',
                },
                {
                    text: 'Money',
                },
            ],
        };
    },
},);
</script>

<style scoped>

</style>