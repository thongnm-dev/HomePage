<template>
    <div class="loading">
        <div class="loader">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';

@Component
export default class LoadingComponent extends BaseComponent {
  
}
</script>
<style lang="scss">
    @import '@/assets/sass/loading.scss';
</style>
