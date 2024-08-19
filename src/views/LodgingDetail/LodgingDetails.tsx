import React from 'react';
import LodgingDetailInfo from '../../components/LodgingDetailInfo'
import LodgingReview from '../../components/LodgingReview'
/** @jsxImportSource @emotion/react */
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function LodgingDetails() {
  return (
    <div className='detali-container'>
      <Header />
      <LodgingDetailInfo />
      <LodgingReview />
      <Footer/>
    </div>
  )
}
