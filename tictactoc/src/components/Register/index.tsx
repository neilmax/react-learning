import React, { useState, useRef } from 'react';
import "./index.css"
import { Jumbotron, Button, Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import useReactRouter from "use-react-router"

axios.defaults.baseURL = '/api';



const Register = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const {history, location, match} = useReactRouter();

    const loginRequest = () => {

        axios.request({
            url:"/register",
            method:"post",
            data:{
                username: name,
                password: password,
            },
        }).then(res=>{
            console.log('post', res.data);
            history.push(res.data);
            // createBrowserHistory().push("#"+res.data);
        });
    }

    return (
        <div>
        <Jumbotron fluid>
            <Container fluid>
            <h1 className="display-3">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
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
                {/* <FormGroup>
                    <Label for="password">确认密码</Label>
                    <Input type="password" name="password" onChange={e=>setPassword(e.target.value)} placeholder="请输入密码" required />
                </FormGroup> */}
                <Button onClick={loginRequest}>注册</Button>
                {/* <a href="#/homepage">Homepage</a> */}
            </Form>
        </div>
        

        </div>
    );
};

export default Register;