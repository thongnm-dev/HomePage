<template>
<div class="mt-2" role="alert" v-if="hasError">
    <small class="form-text text-left message">
        {{message}}
    </small>
    <!-- <li v-for="(error, index) in errors" :key="index">{{ error }}</li> -->
</div>
</template>

<script lang="ts">
import BaseComponent, {Component, Prop, Emit} from '@/utils/base-component';

@Component
export default class ErrorMessage extends BaseComponent{
    @Prop()
    public hasError: boolean;
    @Prop()
    public message: string;
}
</script>

<style lang="scss">
.message{
    color: red;
}
</style>