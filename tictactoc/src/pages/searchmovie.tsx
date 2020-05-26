import React , { SFC, useState, useEffect, useCallback } from 'react';  
import axios from 'axios';
import {Button, Table} from 'reactstrap'
import { IMovie, IMovieInfo } from '../types';
import Nav from '../components/Nav'
import "./searchmovie/searchmovie.css"

axios.defaults.baseURL = '/api';


const SearchMovie:React.SFC = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [currentId, setId] = useState<string>();
    const [movieInfos, setMovieInfos] = useState<IMovieInfo[]>([]);

    let storage = window.localStorage;

    // const loadList = () =>{
    //     axios
    //     .request<IMovie[]>({
    //         url:"/movie/list"
    //     })
    //     .then(res=>{
    //         const resData = res.data;
    //         console.log(resData);
    //         setMovies(resData);
    //     });
    // };

    const loadList = () =>{
        axios
        .request<IMovieInfo[]>({
            url:"/movie-info/list",
            // method:"post",
            // data:{
            //     page:2
            // }
        })
        .then(res=>{
            const resData = res.data;
            console.log(resData);
            setMovieInfos(resData);
        });
    };

     

    const addToFavorite = (movieid:string) =>{
        console.log(storage.username)
        console.log(movieid)
        axios.request({
            url:"/favorite/add",
            method:"post",
            data:{
                "user_id":storage.username,
                "movie_id":movieid,
            },
        }).then(res=>{
            alert(res.data);
        });
    };

    useEffect(()=>{
        loadList();
    }, []);

    return (
        <div className = "layout-container">
            <Nav siteName="电影信息列表" userName={storage.username} />
            <div className = "searchmovie-container">
                <div className="loadmore">
                    {/* <Button color="primary" onClick={loadList}>
                        搜索电影
                    </Button> */}
                </div>
                <Table striped>
                    <thead>
                        <tr>
                        <th>序号</th>
                        <th>电影名称</th>
                        <th>发行日期</th>
                        <th>加入收藏</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movieInfos.map((movie)=>(
                            <tr>
                                <td>{movie.movieId}</td>
                                <td>{movie.movieTitle}</td>
                                <td>{movie.releaseDate}</td>
                                <td>
                                    <Button onClick={()=>addToFavorite(movie.movieId)}>
                                        收藏
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
      );
}
export default SearchMovie;