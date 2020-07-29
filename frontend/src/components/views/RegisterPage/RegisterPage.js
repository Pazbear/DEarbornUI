import React, { useState } from 'react';
import {Typography} from 'antd'
import {useForm} from 'react-hook-form'
import '../LoginPage/LoginPage.css'
import {useDispatch} from 'react-redux'
import axios from 'axios'

import {registerUser} from '../../../_actions/user_action'

const { Title } =Typography;


function RegisterPage(props) {

    const [ID, setID] = useState("");
    const [Password, setPassword] = useState("")
    const [Disabled, setDisabled] = useState(true)

    const dispatch = useDispatch()

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
            if(data.confirmPassword !== data.password){
                return alert("2차 패스워드가 다릅니다.")
            }
            axios.post('/api/user/checkEmail', {email : data.email})
            .then(response => {
                if(!response.data.success){
                    return alert('이메일이 이미 있습니다.')
                }
                //이메일 중복이 아닐경우 이메일 체킹
            })
            dispatch(registerUser(data)).then(response =>{
                if(response.payload.success){
                    props.history.push('/login')
                }else{
                    alert(response.payload.err.errmsg)
                }
            })
        }

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Email" ref={register}></input>
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password" ref={register}></input>
                </div>
                <div className="form-group">
                <label htmlFor="confirmPassword">Password2</label>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" ref={register}></input>
                </div>
                <div className="form-group">
                <label htmlFor="nickname">Nickname</label>
                    <input name="nickname" placeholder="Name" ref={register}></input>
                </div>
                <input type="submit"/>
                <div style={{marginTop:'20px', borderTop:'1px solid gray'}}>
                    <a href="/login">로그인</a><br/>
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

export default RegisterPage;