import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

class HttpClient {
    protected readonly instance: AxiosInstance;

    public constructor(baseAPI: string, hasPrefix: boolean = true) {
        let baseURL: string = String(process.env.VUE_APP_BASE_DOMAIN);
        baseURL = baseURL.endsWith('/') ? baseURL :  `${baseURL}/`
        if (!baseAPI.isNullOrEmpty()) {
            let prefix = String(process.env.VUE_APP_PREFIX_API);
            prefix = prefix.endsWith('/') ? prefix : `${prefix}/`;
            baseAPI = baseAPI.startsWith('/') ? baseAPI.slice(0, 1) : baseAPI;
            baseURL += `${hasPrefix ? prefix : ""}${baseAPI}/`;
        }
        this.instance = axios.create({baseURL: baseURL});

        this._initializeRequestInterceptor();
        this._initializeResponseInterceptor();
    }

    private _initializeRequestInterceptor() {
        this.instance.interceptors.request.use(
            this._handleRequest
        )
    }

    private _handleRequest(config: AxiosRequestConfig) {
        config.headers['Authorization'] = `Bearer ${window.core.auth.getToken(process.env.VUE_APP_TOKEN_KEY)}`;
        config.headers['Content-Type'] = 'application/json; charset=utf-8'
        return config;
    }

    private _initializeResponseInterceptor() {
        this.instance.interceptors.response.use(
            this._handleResponse,
            this._handleError
        )
    }

    private _handleResponse({ data }: AxiosResponse) {
        return data;
    }

    private _handleError(error: any) {
        return Promise.reject(error);
    }

    public GET<T>(options: IOptions): Promise<IResponseData<T>> {
        return this.instance.get(options.url, options.body);
    }

    public DELETE<T>(options: IOptions): Promise<IResponseData<T>>  {
        return this.instance.delete(options.url, options.config);
    }

    public POST<T>(options: IOptions): Promise<IResponseData<T>>  {
        return this.instance.post(options.url, options.body, options.config);
    }

    public PUT<T>(options: IOptions): Promise<IResponseData<T>>  {
        return this.instance.put (options.url, options.body, options.config);
    }

    public PATCH<T>(options: IOptions): Promise<IResponseData<T>>  {
        return this.instance.patch (options.url, options.body, options.config);
    }
}

interface IOptions {
    url: string,
    params?: any,
    body?: any,
    config?: AxiosRequestConfig
}

interface IResponseData<T> {
    data: T;
    isSuccess: boolean;
    message: string;
}

export {HttpClient as BaseService}
