import React , { SFC, useState, useEffect, useCallback } from 'react';  
import axios from 'axios';
import {Button, Table} from 'reactstrap'
import { IMovie, UserRating, MovieAndRating } from '../types';
import Nav from '../components/Nav'
import "./recommend/recommend.css"
import {withRouter} from 'react-router-dom'

axios.defaults.baseURL = '/api';


const Recommend:React.SFC = () => {


    const [userRatings, setUserRatings] = useState<UserRating[]>([]);
    const [ratings, setRatings] = useState<MovieAndRating[]>([]);

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

    let userid = storage.currentuser;

    // const loadList = () =>{
    //     axios
    //     .request<UserRating[]>({
    //         url:"/rating/favorite",
    //         method:"post",
    //         data:{
    //             "userid": userid,
    //         }
    //     })
    //     .then(res=>{
    //         const resData = res.data;
    //         console.log(resData);
    //         setUserRatings(resData);
    //     });
    // };

    const loadList = () =>{
        axios
        .request<MovieAndRating[]>({
            url:"/rating/favorite",
            method:"post",
            data:{
                "userid": userid,
            }
        })
        .then(res=>{
            const resData = res.data;
            console.log(resData);
            setRatings(resData);
        });
    };

     

    // const addToFavorite = (movieid:string) =>{
    //     console.log(storage.username)
    //     console.log(movieid)
    //     axios.request({
    //         url:"/favorite/add",
    //         method:"post",
    //         data:{
    //             "user_id":storage.username,
    //             "movie_id":movieid,
    //         },
    //     }).then(res=>{
    //         alert(res.data);
    //     });
    // };

    useEffect(()=>{
        loadList();
    }, []);


    return (
        <div className = "layout-container">
            <Nav siteName="用户观影列表" userName={storage.username} />
            <div className = "searchmovie-container">
                {/* <div className="loadmore">
                    {/* <Button color="primary" onClick={loadList}>
                        搜索电影
                    </Button> */}
                {/* </div> */} 
                <div className="loadmore">
                    用户 #{storage.currentuser} 的观影及评分记录
                </div>
                <Table striped>
                    <thead>
                        <tr>
                        <th>电影序号</th>
                        <th>电影名称</th>
                        <th>发行日期</th>
                        <th>用户评分</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ratings.map((rating)=>(
                            <tr>
                                <td>{rating.movieId}</td>
                                <td>{rating.movieTitle}</td>
                                <td>{rating.releaseDate}</td>
                                <td>{rating.rating}</td>
                                {/* <td>
                                    <Button onClick={()=>addToFavorite(movie.movieId)}>
                                        收藏
                                    </Button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
      );
}
export default Recommend;