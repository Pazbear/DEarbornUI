import React, { useState } from 'react';
import {Typography} from 'antd'
import {useForm} from 'react-hook-form'
import './LoginPage.css'
const { Title } =Typography;


function LoginPage(props) {

    const [ID, setID] = useState("");
    const [Password, setPassword] = useState("")
    const [Disabled, setDisabled] = useState(true)


    const onIDChange = (event) => {
        setID(event.currentTarget.value)
    }

    const onPasswordChange = (event) => {
        setPassword(event.currentTarget.value)
    }

    const isDisabled = () =>{
        if(ID && Password){
            setDisabled(true)
        }else{
            setDisabled(false)
        }

    }

    const Form = () =>{
        const {register, handleSubmit} = useForm();

        const onSubmit = data =>{
            console.log(data)
        }

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="ID">ID</label>
                    <input name="ID" placeholder="Login ID" ref={register}></input>
                </div>
                <div className="form-group">
                <label htmlFor="Password">Password</label>
                    <input name="Password" placeholder="Password" ref={register}></input>
                </div>
                <input type="submit"/>
                <div style={{marginTop:'20px', borderTop:'1px solid gray'}}>
                    <a href>비밀번호 찾기</a><br/>
                    <a href="/register">회원가입</a>
                </div>
            </form>
        )
    }

    return (
        <div className="auth">
            <div className="auth-wrapper">
                <Title level={2}><a href="/">DEarborn</a></Title>
                <section style={{backgroundColor:'white', padding:'25px', borderRadius:'7px'}}>
                    {Form()}
                </section>
            </div>
        </div>
    );
}

export default LoginPage;