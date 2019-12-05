export type Category = 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';


export interface IPayload {
    country?: 'gb' | 'us' | string;
    category?: Category,
    q?: string;
    pageSize?: number,
    page?: number
}

export interface ISource {
    id: string;
    name: string
}

export interface INews {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: ISource;
    title: string;
    url: string;
    urlToImage: string;
}


export interface INewsResponse {
    articles: INews[],
    status: 'ok' | 'error';
    totalResults: number

}
