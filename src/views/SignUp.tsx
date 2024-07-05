import React from 'react'
import '../styles/reset.css';
import '../styles/signUp.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SignUp() {
  return (
    <>
      <Header />
      {/*
        헤더와 푸터 위로 올라온 컨텐츠가 메인으로 감싸고 
        css를 만져주니 안으로 들어감.
      */}
      <main className='content-container'>
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
        <button className='signupButton' type='submit'>회원가입</button>
        </form>
      </main>
      <Footer />
    </>
  )
}
