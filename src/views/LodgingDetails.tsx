import React from 'react'
import LodgingDetailInfo from '../components/LodgingDetailInfo'
import LodgingReview from '../components/LodgingReview'
import '../styles/LodgingDetails.css'

export default function LodgingDetails() {
  return (
    <div className='detali-container'>
      <LodgingDetailInfo/>
      <LodgingReview/>
    </div>
  )
}
