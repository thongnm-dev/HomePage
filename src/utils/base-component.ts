import {Vue, Component, Prop, Emit, Watch, Ref, Inject} from 'vue-property-decorator';

export default class BaseComponent extends Vue {
    protected get isLoading(): boolean {
        return this.$store.state.Global.isLoading;
    }

    protected set isLoading(val: boolean) {
        this.$store.commit('fetchIsLoading', val);
    }

    protected goToPage(routerName: string, params?: any): void {
        if (this.$router.currentRoute.name ===routerName) {
            return;
        }
        this.$router.push({ name: routerName, params });
    }
}

export {Component, Prop, Emit, Watch, Ref, Inject};
