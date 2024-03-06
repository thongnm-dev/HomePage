import {BaseService} from '@/utils/http-client';
import { TODO } from "@/models/TODO";

export interface ITODOService {
  TEST_REQUEST(KEY1: string, KEY2: string): Promise<TODO>;
}

export class TODOService extends BaseService implements ITODOService {
    public constructor() {
        super('TODO'); // TODO
    }

  public async TEST_REQUEST(KEY1: string, KEY2: string): Promise<TODO> {
        const formData = {
            userName: KEY1,
            password: KEY2
        }
        const result = await this.POST<TODO>({
            url: "TEST",
            body: formData
        });
        if (result.isSuccess) {
            return result.data;
        }
        return Promise.reject();
  }
}
