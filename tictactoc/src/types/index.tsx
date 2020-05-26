
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

export interface IMovie{
    id: string;
    name: string;
    label: string;
}

export interface IMovieInfo{
    movieId: string;
    movieTitle: string;
    releaseDate: string;
    videoReleaseDate: string;
    imdbUrl: string;
    unknown: string;
    action: string;
    adventure: string;
    animation: string;
    children: string;
    comedy: string;
    crime: string;
    documentary: string;
    drama: string;
    fantasy: string;
    filmnoir: string;
    horror: string;
    musical: string;
    mystery: string;
    romance: string;
    scifi: string;
    thriller: string;
    war: string;
    western: string;
}

export interface UserInfo{
    userid: string;
    age: number;
    gender: string;
    occupation: string;
    zipcode: string;
}

export interface UserRating{
    userid: string;
    itemid: string;
    rating: number;
    timestamp: string;
}

export interface MovieAndRating{
    movieId: string;
    movieTitle: string;
    releaseDate: string;
    rating: number;
}