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
            <span>1,000,000</span>
            <span>원</span>
          </div>
        </div>
        <div className='RefundPolicyBox'></div>
        <div className='requestAndAgreeBox'></div>
      </main>

      <Footer />
    </>
  )
}
