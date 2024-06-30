import React, { useState } from 'react'
import '../styles/signIn.css';

// 로그인에 필요한 객체들 타입 정의
interface SignInProps {
  userId: string;
  password: string;
};

export default function SignIn() {
  //* 아이디, 비밀번호 입력을 감지해서 상태를 변경
  const [values, setValues] = useState<SignInProps>({
    userId: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  };
  
  //* 에러 상태 관리
  const [errors, setErrors] = useState<string | null>(null);

  //* 유효성 검사 함수
  const onSubmit = async (a: React.FormEvent<HTMLInputElement>) => {

  };


  return (
    <div className='signin-box'>
      <img src='images/wabangbSmall.png' alt="" />
      <input 
        type="text"
        placeholder='아이디' 
        autoFocus
      />
      <input 
        type="text"
        placeholder='비밀번호' 
      />
      <button type='submit'>Sign in</button>
    </div>
  )
}
