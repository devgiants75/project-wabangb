import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/reset.css';
import '../styles/reservationPage.css';
//# 예약페이지

export default function ReservationPage() {
  return (
    <>
      <Header />
      <main id='reservation-main'>
        <div className='reservation-container'>
          <div className='reser-input-container'>
            <div className='reser-input-box'>
              <div>
                <input
                  className='reser-input'
                  type="text" 
                  placeholder='데이터에서 가져온 username'
                  disabled
                />
              </div>
              <div>
                <input 
                  className='reser-input'
                  type="text" 
                  placeholder='전화번호를 입력하세요.'
                />
              </div>
            </div>
          </div>
          <div className='request-box'>
            <button className='reser-button'>예약 요청</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
