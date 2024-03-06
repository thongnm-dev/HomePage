import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
export default class BaseModule extends VuexModule {
    public version: string = '1.0';
}

export {Module, Mutation, Action}
