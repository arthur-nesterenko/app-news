import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, Method} from 'axios';

import {Omit} from '../../interfaces';

import {handleRequestConfig, handleResponseErrors} from './utils';

const TIMEOUT = 5000;


export default class Api {
    protected api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            timeout: TIMEOUT,
        });

        this.api.interceptors.response.use(undefined, handleResponseErrors);
        this.api.interceptors.request.use(handleRequestConfig);
    }

    protected request = async <T>(
        url: string,
        method: Method = 'GET',
        data: object | undefined = undefined,
        params: object | undefined = undefined,
        config?: Omit<AxiosRequestConfig, 'url' | 'method' | 'data' | 'params' | 'transformResponse'>,
    ): Promise<T> => {
        const response = await this.api.request<T, AxiosResponse>({
            data,
            method,
            params,
            url,
            ...config,
        });

        return response.data;
    };

}
