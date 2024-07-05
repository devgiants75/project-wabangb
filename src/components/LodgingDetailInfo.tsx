import React from 'react';
import '../styles/LodgingDetailInfo.css';

function LodgingDetailInfo() {
  return (
    <div className='loadging-info'>
      <div className='loadging-container'>
        <div className='loadging-mainimg'>

        </div>
        <div className='loadging-subimg'>

        </div>
      </div>

      <div className='loadging-Info-container'>
        <div className='loadging-Info-reservation'>
          <button className='reservation-btn'>예약 버튼</button>
        </div>
        <div className='loadging-reservation-container'>
          <div className='loadging-reservation-info'>
              옵션 정보
          </div>
        </div>
        <div className='loadging-detail-container'>
          <div className='loadging-detail-address'> 
              상세주소
          </div>

        </div>
      </div>
    </div>
  );
}

export default LodgingDetailInfo;