<template>
    <v-navigation-drawer
        :rail="rail"
        expand-on-hover="true"
        v-model="mainSideBar"
        width="330"
        app
        floating
        permanent
        class="bg-grey-darken-3"
        @click="rail = false"
        mini-variant-width="70"

        >
        <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="Jonh Milk"
            >
            <template v-slot:append>
                <v-btn
                    variant="text"
                    append-icon="mdi-chevron-left"
                    @click.stop="rail = !rail"
                    ></v-btn>
            </template>
        </v-list-item>
        
        <v-divider></v-divider>

        <v-list
            dense
            nav
            color="transparent"
            class="text-left"
            append-icon
            >
            <v-list-item
                v-for="menuItem in menuItens"
                v-bind:key="menuItem.val"
                :to="menuItem.route"
                :prepend-icon="menuItem.icon"
                :title="menuItem.text"
                :value="menuItem.val"
                ></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
    name: 'SideBar',

    data() {
        return {
            mainSideBar: true,
            menuItens: [
                {
                    text: 'Home',
                    icon: 'mdi-home-city',
                    route: '/',
                    val: 'home',
                },
                {
                    text: 'Tracker',
                    icon: 'mdi-timer',
                    route: '/tracker',
                    val: 'tracker',
                },
                {
                    text: 'Currency',
                    icon: 'mdi-cash-marker',
                    route: '/currency',
                    val: 'currency',
                },
            ],
            rail: true,
        };
    },
},);
</script>

<style >
.v-navigation-drawer {
    padding: 0!important;
}
.mdi {
    color: antiquewhite;
}
.v-list-item-title {
    color: antiquewhite;
}
</style>