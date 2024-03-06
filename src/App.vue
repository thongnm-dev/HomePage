<template>
    <div id="app">
        <router-view></router-view>
        <loading v-if="isLoading"></loading>
    </div>
</template>

<script lang="ts">
    import BaseComponent, {Component} from './utils/base-component';
    import LoadingComponent from '@/components/general/Loading.vue';

    @Component({
        components: {
            'loading': LoadingComponent
        }
    })
    export default class App extends BaseComponent {
        private mounted() {
            if (window.location.pathname.includes("/company")){
                this.$store.commit('fetchView', false);
            }
            
            if (window.location.pathname.includes("/recruit")) {
                this.$store.commit('fetchView', true);
            }
            this.$store.commit('fetchBreadcrumb', true);
        }

        private created () {
            window.core.ui.calcHeight();
        }
    }
</script>
