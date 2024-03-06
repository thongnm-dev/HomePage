import { ITODOService, TODOService } from "./TODO-service";
import { IAuthenticationService, AuthenticationService } from "./authentication-service";
import { ICustomerService, CustomerService } from "./customer";

interface IUnitOfWork {
    todoService: ITODOService;
    authenticationService: IAuthenticationService;
    customerService: ICustomerService;
}

class UnitOfWork implements IUnitOfWork {
    private constructor() { }

    private static unitOfWork: IUnitOfWork;

    public static getUnitOfWork(): IUnitOfWork {
        return UnitOfWork.unitOfWork = UnitOfWork.unitOfWork ?? new UnitOfWork();
    }

    private _todoService?: ITODOService;

    public get todoService(): ITODOService {
        return this._todoService = this._todoService ?? new TODOService();
    }

    private _authenticationService?: IAuthenticationService;
    public get authenticationService(): IAuthenticationService {
        return this._authenticationService = this._authenticationService ?? new AuthenticationService();
    }
    
    private _customerService?: ICustomerService;
    public get customerService(): ICustomerService {
        return this._customerService = this._customerService ?? new CustomerService();
    }
}

export const unitOfWork: IUnitOfWork = UnitOfWork.getUnitOfWork();
