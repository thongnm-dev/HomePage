<template>
    <div id="about">
        <HeaderMenu :isPageCareer="isPageCareer" @homeClick="homeClick($event)"></HeaderMenu>
        <main id="main_content">
            <Breadcrumb v-if="showBreadcrumb" @homeClick="homeClick($event)"></Breadcrumb>
            <article>
                <transition name="page" mode="out-in">
                    <router-view></router-view>
                </transition>
            </article>
        </main>
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';
    
    import Footer from '@/components/general/Footer.vue';
    import HeaderMenu from '@/components/front/HeaderMenu.vue';
    import Breadcrumb from '@/components/general/Breadcrumb.vue';
    @Component({
        components: {
            HeaderMenu,
            Breadcrumb,
            Footer
        }
    })
    export default class HomePage extends BaseComponent {
        private get isPageCareer() {
            return this.$store.state.Global.isViewCareer;
        }
        private get showBreadcrumb() {
            return this.$store.state.Global.isBreadcrumb;
        }

        private homeClick(event: Event) {
            let url = this.isPageCareer ? '/recruit' : '/company';
            window.location.href = url;
        }
    }
</script>

<style lang="scss" scoped>
.page-enter-active, .page-leave-active {
        transform: translate3d(0, 0, 0);
        z-index: 2;
        opacity: 1;
        transition: transform .6s ease;
    }
    .page-enter, .page-leave-to {
        transform: translate3d(100%, 0, 0);
        z-index: 0;
        opacity: 0;
        transition: transform .05s ease .05s, opacity 0s ease .05s;
    }
</style>
