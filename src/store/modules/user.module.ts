import BaseModule, {Module, Action, Mutation} from '@/utils/base-module';

const storedUser = localStorage.getItem('user')
@Module({namespaced: true})
class User extends BaseModule {
    public status = storedUser ? { loggedIn: true } : { loggedIn: false };
    public user = storedUser ? JSON.parse(storedUser) : null;

    @Mutation
    public loginSuccess(user: any): void {
        this.status.loggedIn = true;
        this.user = user;
    }

    @Mutation
    public loginFailure(): void {
        this.status.loggedIn = false;
        this.user = null;
    }

    get isLoggedIn(): boolean {
        return this.status.loggedIn;
    }
}

export default User
