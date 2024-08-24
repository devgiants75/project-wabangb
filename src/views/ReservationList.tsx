import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuBarReservation from '../components/MenuBarReservation'
import '../styles/reservationList.css';
import { useNavigate } from 'react-router-dom';
import ReservationListComponent from '../components/ReservationListComponent';

//# 예약 리스트 페이지

export default function ReservationList() {
  const navigate = useNavigate();

  const goDetails = () => navigate('/lodgingdetails');

  return (
    <>
      <Header />
      <MenuBarReservation />

      <main className='reservationListContainer'>

        <div className='reservationBox'>
          <div className='reservationInfoBox'>
            <div className='imgBox' onClick={goDetails}>
              <img src={require('../assets/기장.jpg')} alt="기장 숙소 사진" />
            </div>

            <div className='infoBox'>
              <ReservationListComponent
                accommodationName='베스트루이스해밀턴호텔오션테라스'
                retext='부산광역시 기장군 기장읍 연화리 376-4'
                date='예약 날짜 : 2024-07-10'
              />
            </div>

          </div>
        </div>

        <div className='reservationBox'>
          <div className='reservationInfoBox'>
            <div className='imgBox' onClick={goDetails}>
              <img src={require('../assets/부산.jpg')} alt="부산 숙소 사진" />
            </div>

            <div className='infoBox'>
              <ReservationListComponent 
                accommodationName='상상스테이 부산'
                retext='부산광역시 부산진구 서면로 39 상상마당 7F'
                date='예약 날짜 : 2024-08-10'
              />
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  )
}
