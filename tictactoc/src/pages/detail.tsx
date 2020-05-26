
import React from 'react';  
import axios from 'axios';
import {Button} from 'reactstrap'

axios.defaults.baseURL = '/api';
// axios.defaults.baseURL = '/movie';

const askSpring = () =>{
    axios
    .request({
        url:"/movie/add",
        method:"GET"
    })
    .then(res=>{
        const resData = res.data;
        console.log(resData);
    });
};

const Detail = () => {
    return(
        // <div>
        //     <a href="#/">返回主界面</a>
        // </div>

        <div>
            <Button onClick={askSpring}>点击访问</Button>
        </div>


    )
}

export default Detail;