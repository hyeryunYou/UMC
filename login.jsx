import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import S from './Login.module.css';

const Login = () => {
    const schema = yup.object().shape({
        email: yup.string().required('이메일을 반드시 입력해주세요.').email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!'),
        password: yup.string().min(8, '비밀번호는 8~16자 사이로 입력해주세요!').max(16, '비밀번호는 8~16자 사이로 입력해주세요!').required(),
    })

    const {register, handleSubmit, formState: {errors}, trigger} = useForm({
        resolver: yupResolver(schema), mode:'onChange',
    });

    const onSubmit = (data) => {
        console.log('폼 데이터 제출')
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={S.stylesform}>
            <h1>로그인</h1>
            <div>
                <input 
                type="email" 
                {...register('email')}
                placeholder="이메일을 입력해주세요!"
                onFocus={() => trigger('email')}
                />
                <p>{errors.email?.message}</p>
            </div>
            
            <div>
                <input 
                type="password" 
                {...register("password")}
                placeholder="비밀번호를 입력해주세요!"  
                onFocus={()=>trigger("password")}
                />
                <p>{errors.password?.message}</p>
            </div>
            
            <button type="submit">로그인</button>
        </form>
    );
};

export default Login;
