<template>
    <div class="container">
        <div class="box">
            <div class="box_header">
                <h2 class="mb-1 pb-2">LỜI CHÀO GIÁM ĐỐC</h2>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';

    @Component
    export default class Greeting extends BaseComponent {

    }
</script>

<style lang="scss" scoped>
    @import '@/assets/sass/about.scss'
</style>
