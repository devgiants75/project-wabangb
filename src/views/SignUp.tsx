import React from 'react'
import '../styles/reset.css';
import '../styles/signUp.css';
// import Header from '../components/Header'
// import Footer from '../components/Footer'

export default function SignUp() {
  return (
    <>
      <div id='container' className='contanier'>
        <div className='row'>
          {/* sign up */}
          <div className='col align-items-center flex-col sign-up'>
            <div className='form-wrapper align-items-center'>
              <form className='form sign-up'>
                <h2>필수 입력</h2>
                {/* input group */}
                <div className='input-group'>
                  <i className='bx bxs-user'></i>
                  <input type="text" placeholder='아이디' />
                </div>

                <div className='input-group'>
                  <i className='bx bxs-user'></i>
                  <input type="password" placeholder='비밀번호' />
                </div>

                <div className='input-group'>
                  <i className='bx bxs-user'></i>
                  <input type="text" placeholder='이름' />
                </div>

                <div className='input-group'>
                  <i className='bx bxs-user'></i>
                  <input type="text" placeholder='주소' />
                </div>

                <div className='input-group'>
                  <i className='bx bxs-user'></i>
                  <input type="text" placeholder='생년월일' />
                </div>

                <h2>관심 여행지</h2>
                <div className='input-group'>
                  <i className='bx bxs-user'></i>
                  <input type="text" placeholder='관심 여행지' />
                </div>

                <button>회원가입</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
