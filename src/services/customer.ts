import {BaseService} from '@/utils/http-client';

export interface ICustomerService {
  getList(postRequest: any): Promise<any>;
}

export class CustomerService extends BaseService implements ICustomerService {
    public constructor() {
        super('admin');
    }
 
  public async getList(postRequest: any): Promise<any> { 
    const formData = {
      language_id: postRequest.language_id,
      keyWork: postRequest.keyWorks,
      pageNumber: postRequest.pageNumber
    }
    const result = await this.POST<any>({
        url: "customer/search",
        body: formData
    });
    if (result.isSuccess) {
        return result.data.model;
    }
    return Promise.reject();
  }
}
