import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/reset.css';
import '../styles/reservationPage.css';
import ReactModal from 'react-modal';
import '../styles/reservation-modal.css';
//# 예약페이지

export default function ReservationPage() {

  //% 모달창
  ReactModal.setAppElement('#root');

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
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
            <button onClick={openModal} className='reser-button open-modal-button'>예약 요청</button>

            <div className="modal-container">
              <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal-content"
                overlayClassName="modal-overlay"
              >
                <div className='reservation-modal-title'>예약 완료</div>
                <div className='modal-title-underline'></div>
                <div className='reservation-modal-info'>
                  <div>숙소 이름 : 데이터 가져오기</div>
                  <div>예약자 이름 : 데이터 가져오기</div>
                  <div>예약자 전화번호 : 가져오기</div>
                  <div>에약 날짜 : 가져오기</div>
                  <div>결제 금액 : 1,000,000 원</div>
                </div>
                <button
                  onClick={closeModal} className="close-modal-button"
                >
                  Close
                </button>
              </ReactModal>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
