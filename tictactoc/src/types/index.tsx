
// 这里导出了多个模块，属于命名导出，在其他文件import的时候要import {IArticle}
export interface IArticle{
    id: number;
    title: string;
    content: string;
    createTime: number;
}

export interface IResponse<T = any>{
    status: number;
    data: T;
}

export interface IListResponse<T = any>{
    list: T[];
    current: number;
    total: number;
}