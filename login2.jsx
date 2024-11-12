import React from 'react';
import styled from 'styled-components'
import useForm from '../../hooks/use-form.js';
import {validateLogin} from '../../utils/validate.js'
import './login.css';

const LoginPage = () => {
    const login = useForm({
        initialValue: {
            email: '',
            password: '',
        },
        validate: validateLogin,
    });

    const handlePressLogin = () => {
        console.log(login.values.email, login.values.password);
    };

    return (
        <div className = "Container">
            <h1>로그인</h1>
            <input
                type="email"
                placeholder="이메일을 입력해주세요!"
                {...login.getTextInputProps('email')}
            />
            {login.touched.email && login.errors.email && <p className="ErrorText">{login.errors.email}</p>}
            
            <input
                type="password"
                placeholder="비밀번호를 입력해주세요!"
                {...login.getTextInputProps('password')}
            />
            {login.touched.password && login.errors.password && <p className="ErrorText">{login.errors.password}</p>}
            
            <button onClick={handlePressLogin}>로그인</button>
        </div>
    );
};

export default LoginPage;