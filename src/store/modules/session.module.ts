import BaseModule, {Module, Action, Mutation} from '@/utils/base-module';
@Module({namespaced: true})
class Session extends BaseModule {
    public message_session: string = '';
}

export default Session
