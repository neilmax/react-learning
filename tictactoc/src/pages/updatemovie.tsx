
import React, { useState, useRef } from 'react';  
import axios from 'axios';
import { Jumbotron, Button, Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./updatemovie/updatemovie.css"
import Nav from "../components/Nav";

axios.defaults.baseURL = '/api';

interface LoginProps {
    func: string;
  }

const UpdateMovie :React.SFC<LoginProps>= (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    let storage = window.localStorage;


    const addMovie = () =>{
        axios
        .request({
            url:"/movie/add",
            method:"post",
            data:{
                name:name,
                label:password,
            },
        })
        .then(res=>{
            const resData = res.data;
            console.log(resData);
            alert("添加成功");
        });
    };

    return(
        // <div>
        //     <a href="#/">返回主界面</a>
        // </div>

        <div className = "layout-container">
            <Nav siteName={storage.username} userName={storage.username} />
            <div className="login-content">
            <Form>
                <FormGroup>
                    <Label for="username">电影名称</Label>
                    <Input type="text" name="movietitle" value={name} onChange={e=>setName(e.target.value)} placeholder="请输入电影名称" required />
                    <FormText color="muted">
                    </FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="password">电影类别</Label>
                    <Input type="text" name="genres" value={password} onChange={e=>setPassword(e.target.value)} placeholder="请输入电影种类" required />
                </FormGroup>

                <div className='func-btn'>
                    <Button onClick={addMovie}>添加</Button>
                </div>
                
                {/* <a href="#/homepage">Homepage</a> */}
            </Form>
        </div>

        </div>
       

    );
};

export default UpdateMovie;