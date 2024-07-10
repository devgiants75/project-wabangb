import React from 'react'
import Header from '../components/Header'
import MenuBarReservation from '../components/MenuBarReservation'
import Footer from '../components/Footer'
import '../styles/usageDetails.css';

//# 이용내역 리스트

export default function UsageDetails() {
  return (
    <>
      <Header />
      <MenuBarReservation />

      <main className='usageDetailsContainer'>

        <div className='usageBox'>
          <div className='usageInfoBox'>
            <div className='usageImgBox'>
              <img src={require('../assets/기장.jpg')} alt="기장 숙소 사진" />
            </div>
            <div className='uInfoBox'>
              <div className='uTop'>
                <p className='utext'>베스트루이스해밀턴호텔오션테라스</p>
                <p className='utext'>부산광역시 기장군 기장읍 연화리 376-4</p>
              </div>
              <div className='uBottom'>
                <span >예약 날짜 : 2024-07-10</span>
                <button className='usageButton'>예약 취소</button>
              </div>
            </div>
          </div>
        </div>

        <div className='reservationBox'>
          <div className='reservationInfoBox'>
            <div className='usageImgBox'>
              <img src={require('../assets/부산.jpg')} alt="부산 숙소 사진" />
            </div>
            <div className='uInfoBox'>
              <div className='uTop'>
                <p className='utext'>상상스테이 부산</p>
                <p className='utext'>부산광역시 부산진구 서면로 39 상상마당 7F</p>
              </div>
              <div className='uBottom'>
                <span>예약 날짜 : 2024-08-10</span>
                <button className='usageButton'>예약 취소</button>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  )
}
