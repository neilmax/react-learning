
import React , { SFC, useState, useEffect, useCallback } from 'react';  
import axios from 'axios';
import {Button, Table} from 'reactstrap'
import Nav from "../components/Nav";
import { IMovie, UserInfo } from '../types';
import "./favorite/favorite.css"
import {Link} from 'react-router-dom'
import useReactRouter from "use-react-router"


axios.defaults.baseURL = '/api';

const askSpring = () =>{
    axios
    .request({
        url:"/demo"
    })
    .then(res=>{
        const resData = res.data;
        console.log(resData);
    });
};

const Favorite:React.SFC = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [userInfos, setUserInfos] = useState<UserInfo[]>([]);
    const {history, location, match} = useReactRouter();
    let storage = window.localStorage;


    const loadList = () =>{
        axios
        .request<UserInfo[]>({
            url:"/user-info/list"
        })
        .then(res=>{
            const resData = res.data;
            console.log(resData);
            setUserInfos(resData);
        });
    };

    const toUserpage = (userid:string) =>{
        storage.currentuser = userid;
        history.push("/recommend/"+{userid})
    }

    const toRecommendpage = (userid:string) =>{
        storage.currentuser = userid;
        history.push("/toprecommend/"+{userid})
    }

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

    return(
        // <div>
        //     <a href="#/">返回主界面</a>
        // </div>
        <div className = "layout-container">
            <Nav siteName="用户信息列表" userName={storage.username} />
            {/* <div>
                <Button onClick={askSpring}>点击访问</Button>
            </div> */}

            

            <div className="favorite-container">

            <div className="loadmore">
                
                    {/* <Button color="primary" onClick={loadList}>
                        用户信息
                    </Button> */}
                </div>
            <Table striped>
                    <thead>
                        <tr>
                        <th>用户ID</th>
                        <th>年龄</th>
                        <th>性别</th>
                        <th>职业</th>
                        <th>邮编</th>
                        <th>查看推荐</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userInfos.map((user)=>(
                            <tr>
                                {/* <td>
                                    <Link to={'/recommend/'+user.userid}>{user.userid}</Link>
                                </td> */}
                                <td><Button onClick={()=>toUserpage(user.userid)}>{user.userid}</Button></td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>{user.occupation}</td>
                                <td>{user.zipcode}</td>
                                <td>
                                    <Button onClick={()=>toRecommendpage(user.userid)}>
                                        推荐
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </div>

            

        </div>


    )
}

export default Favorite;