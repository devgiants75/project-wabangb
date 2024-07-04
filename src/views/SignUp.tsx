import React from 'react'
import '../styles/reset.css';
import '../styles/signUp.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SignUp() {
  return (
    <>
      <Header />
      <form className='input-box'>
        <h3>필수 입력</h3>
        <div className='textForm'>
          <input 
            type="text"
            placeholder='아이디'
          />
        </div>
        <div className='textForm'>
          <input 
            type="password"
            placeholder='비밀번호'
          />
        </div>
        <div className='textForm'>
          <input 
            type="password"
            placeholder='비밀번호 확인'
          />
        </div>
        <div className='textForm'>
          <input 
            type="text"
            placeholder='이름'
          />
        </div>
        <div className='textForm'>
          <input 
            type="email"
            placeholder='이메일'
          />
        </div>
        <div className='textForm'>
          <input 
            type="number"
            placeholder='전화번호'
          />
        </div>
        <h3>관심 여행지</h3>
        <div className='textForm'>
          <input 
            type="text"
            placeholder='관심 여행지'
          />
        </div>
      </form>
      <button type='submit'>회원가입</button>
      <Footer />
    </>
  )
}
