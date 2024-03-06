import {BaseService} from '@/utils/http-client';
import { ILogin } from "@/models/login";
import constant from '@/utils/constant';

export interface IAuthenticationService {
  userLogin(email: string, password: string): Promise<ILogin>;
  userRegister(data: any): Promise<any>;
  userLogout(): Promise<any>;
  getUser(): Promise<any>;
}

export class AuthenticationService extends BaseService implements IAuthenticationService {
    public constructor() {
        super('common');
    }
 
  public async userLogin(email: string, password: string): Promise<ILogin> { 
    
    const formData = {
        email : email,
        password: password
    }
    const result = await this.POST<ILogin>({
        url: "login",
        body: formData
    });
    if (result.isSuccess) {
        return result.data;
    }
    return Promise.reject();
  }

  public async userRegister(data: any): Promise<any> {
    // debugger
    const result = await this.POST<any>({
      url: "register",
      body: data
    });
    return result;
  }
  
  public async userLogout(): Promise<any> {
    const result = await this.POST<any>({
      url: "logout",
    });
    return result;
  }

  public async getUser(): Promise<any>{
    const check = await this.POST<any>({
      url: "me",
    });
    debugger
    return check.data;
    // if(check.message.length > 0) {
    //   return false;
    // } else {
    //   return check;
    // }
  }
}
