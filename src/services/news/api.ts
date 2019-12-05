import Api from './../api'
import {INews, INewsResponse, IPayload} from './types'


class News extends Api {
    private apiPath: string = '/top-headlines'

    public fetch = async (payload: IPayload): Promise<INews[]> => {
        const data = await this.request<INewsResponse>(this.apiPath, 'get', undefined, payload);
        return data.articles
    }
}


export default new News()
