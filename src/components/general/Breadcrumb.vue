<template>
    <section id="headerAera">
        <div class="row">
            <div class="container">
                <ul class="breadcrumb">
                    <li>
                        <a href="#" @click.prevent="homeClick($event)"><i class="fa fa-home"></i>ホーム</a>
                    </li>
                    <li>
                        <a href="#" class="cursor-disable"><i class="fa fa-greater-than mark"/>企業情報</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
    import BaseComponent, {Component, Emit} from '@/utils/base-component';
    @Component
    export default class Breadcrumb extends BaseComponent {
        @Emit("homeClick") 
        private homeClick(event: Event) {
            return false;
        }
    }
</script>

<style lang="scss">
    @import '@/assets/sass/header.scss'
</style>
