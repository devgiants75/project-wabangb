import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuBarReservation from '../components/MenuBarReservation'
import '../styles/reset.css';
import '../styles/cancellation.css';

export default function Cancellation() {
  return (
    <>
      <Header />
      <MenuBarReservation />

      <main id='cancelWrap'>
        <div className='refundAmountBox'>
          <div className='amountTop'>예상 환불 금액</div>
          <div className='amountBottom'>
            <span className='amount'>1,000,000</span>
            <span>원</span>
          </div>
        </div>
        <div className='RefundPolicyBox'>
          <div className='RefundPolicy'>
            <h3 className='refundTitle'>1. 환불 규정</h3>
            <ul className='refundList'>
              <li>5일 전 100% 환불</li>
              <li>4일 전 80% 환불</li>
              <li>3일 전 70% 환불</li>
              <li>2일 전 60% 환불</li>
              <li>전날, 당일 환불 불가합니다.</li>
            </ul>
          </div>
          <div className='notifiCation'>
            <h3 className='refundTitle'>2. 예약 안내 사항</h3>
            <ul className='refundList'>
              <li>모든 예약은 결제 완료와 동시에 예약이 확정됩니다.</li>
              <li>무통장 입금 시 30분 내 입금하지 않으시면 자동 취소 처리 됩니다.</li>
            </ul>
          </div>
        </div>
        <div className='requestAndAgreeBox'>
          <form className='agreeContainer'>
            <input type="radio" id='agree' name='consent' value='agree' />
            <label htmlFor="agree" className='firstRadio'>동의</label>
            <input type="radio" id='disagree' name='consent' value='disagree' />
            <label htmlFor="disagree">미동의</label>

            <div>
              <button 
                type='submit'
                className='cancelRequestButton'
              >
                취소 요청 버튼
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  )
}
