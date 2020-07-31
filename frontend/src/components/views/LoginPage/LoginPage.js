import React, { useState } from 'react';
import {Typography} from 'antd'
import {useForm} from 'react-hook-form'
import './LoginPage.css'
import { useDispatch } from 'react-redux';

import {loginUser} from '../../../_actions/user_action'

const { Title } =Typography;


function LoginPage(props) {

    const dispatch = useDispatch()
    const rememberEmailChecked = localStorage.getItem('rememberEmail') ? true : false

    const [RememberEmail, setRememberEmail] = useState(rememberEmailChecked)

    const handleRememberEmail = () =>{
        setRememberEmail(!RememberEmail)
    }

    const Form = () =>{
        const {register, handleSubmit} = useForm();

        const onSubmit = data =>{
            dispatch(loginUser(data))
            .then(response =>{
                if(response.payload.success){
                    window.localStorage.setItem('userId', response.payload.userId)
                    if(RememberEmail){
                        window.localStorage.setItem('rememberEmail', data.email)
                    }else{
                        localStorage.removeItem('rememberEmail')
                    }
                    props.history.push('/')
                }else{
                    return alert(response.payload.message)
                }
            })
        }

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="email" value={window.localStorage.getItem('rememberEmail')} ref={register}></input>
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password" ref={register}></input>
                </div>
                <div style={{float:'left', marginLeft:'1rem'}}>
                <input type="checkbox" onChange={handleRememberEmail} checked={RememberEmail}></input>
                <label>remember Email</label>
                </div><br/>
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