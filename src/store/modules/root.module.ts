import BaseModule, {Module, Action, Mutation} from '@/utils/base-module';

@Module({namespaced: false})
class Root extends BaseModule {
    public isLoading: boolean = false;
    public isBreadcrumb: boolean = false;
    public isViewCareer: boolean = false;
    @Mutation
    public fetchIsLoading(isLoading: boolean) {
        this.isLoading = isLoading;
    }

    @Mutation
    public fetchBreadcrumb(isBreadcrumb: boolean) {
        this.isBreadcrumb = isBreadcrumb;
    }

    @Mutation
    public fetchView(isViewCareer: boolean) {
        this.isViewCareer = isViewCareer;
    }
}

export default Root;
