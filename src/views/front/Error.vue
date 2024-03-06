<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';

    @Component
    export default class Error extends BaseComponent {

    }
</script>
