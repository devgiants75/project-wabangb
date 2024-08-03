import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/reset.css';
import '../styles/reservationPage.css';
//# 예약페이지

export default function ReservationPage() {
  // 전화 번호 상태 관리
  const [telNumber, setTelNumber] = useState<String | null>(null);

  // 전화번호가 입력된 경우 제출, 미입력 시 알림창 띄우고 input창 비우기
  const handleTelNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    
  }

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
                  placeholder="'-' 없이 전화번호를 입력하세요."
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
