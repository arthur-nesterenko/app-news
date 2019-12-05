import {AxiosError, AxiosRequestConfig} from 'axios';
import {IResponseError} from './types';

export const handleResponseErrors = (error: AxiosError): Promise<IResponseError> => {
    if (error.code === 'ECONNABORTED') {
        return Promise.reject({
            status: 408,
            statusText: 'Timeout request',
        });
    }
    return Promise.reject({
        status: error.response ? error.response.status : 500,
        statusText: error.response ? error.response.statusText : 'Network Error',
        ...(error.response && error.response.data ? error.response.data : {}),
    });
};

/**
 * @description modify request config each time
 *
 * @param {*} config
 */
export const handleRequestConfig = async (
    config: AxiosRequestConfig,
): Promise<AxiosRequestConfig> => {
    return {
        ...config,
        params: {
            ...config.params,
            'apiKey': process.env.REACT_APP_API_KEY,
        },
    };
};

