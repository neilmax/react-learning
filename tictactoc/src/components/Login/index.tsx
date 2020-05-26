import React, { useState, useRef } from 'react';
import "./index.css"
import { Jumbotron, Button, Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import useReactRouter from "use-react-router"
import {Link} from "react-router-dom"

// axios.defaults.baseURL = '/api';

interface LoginProps {
    func: string;
  }

const Login: React.SFC<LoginProps> = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const {history, location, match} = useReactRouter();

    const loginRequest = () => {
        let storage = window.localStorage;
        axios.request({
            url:"/entry/login",
            method:"post",
            data:{
                username: name,
                password: password,
            },
        }).then(res=>{
            let page :string = res.data;
            console.log('post', page);
            if(page=="/homepage"){
                storage.username = name;
            }
            history.push(page);
            // createBrowserHistory().push("#"+res.data);
        });
    };

    const toRegister = ()=>{
    };

    return (
        <div>
        <Jumbotron fluid>
            <Container fluid>
            <h1 className="display-3">电影推荐系统</h1>
                <p className="lead">使用Spring Boot+React编写的前后端分离电影推荐界面</p>
                <hr className="my-2" />
            </Container>
        </Jumbotron>

        <div className="login-content">
            <Form>
                <FormGroup>
                    <Label for="username">用户名</Label>
                    <Input type="text" name="username" value={name} onChange={e=>setName(e.target.value)} placeholder="请输入用户名" required />
                    <FormText color="muted">
                    </FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="password">密码</Label>
                    <Input type="password" name="password" onChange={e=>setPassword(e.target.value)} placeholder="请输入密码" required />
                </FormGroup>
                <div className='func-btn'>
                    <Button onClick={loginRequest}>{props.func}</Button>
                    <Button >
                        <Link to="/register">注册</Link>
                    </Button>
                </div>
                
                {/* <a href="#/homepage">Homepage</a> */}
            </Form>
        </div>
        

        </div>
    );
};

export default Login;