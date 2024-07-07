import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuBarReservation from '../components/MenuBarReservation'
import '../styles/reservationList.css';

//# 예약 리스트 페이지

export default function ReservationList() {
  return (
    <>
      <Header />
      <MenuBarReservation />

      <main className='reservationListContainer'>

        <div className='reservationBox'>
          <div className='reservationInfoBox'>
            <div className='imgBox'>
              <img src={require('../assets/기장.jpg')} alt="기장 숙소 사진" />
            </div>
            <div className='infoBox'>
              <div className='top'>
                <p>숙소 이름</p>
                <p>숙소 주소</p>
              </div>
              <div className='bottom'>
                <span>예약 날짜</span>
                <button>예약 취소</button>
              </div>
            </div>
          </div>
        </div>

        <div className='reservationBox'>
          <div className='reservationInfoBox'>
            <div className='imgBox'>
              <img src={require('../assets/부산.jpg')} alt="부산 숙소 사진" />
            </div>
            <div className='infoBox'>
              <div className='top'>
                <p>숙소 이름</p>
                <p>숙소 주소</p>
              </div>
              <div className='bottom'>
                <span>예약 날짜</span>
                <button>예약 취소</button>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  )
}
