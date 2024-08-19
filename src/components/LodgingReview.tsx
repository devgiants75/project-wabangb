import React from 'react';
import '../styles/LodgingReview.css'

function LodgingReview() {
  return (
    <div className='lodgingReview-main'>
      <p className='review-name'>리뷰</p>
      <div className='review-div'>
        <div className='review-registerdiv'>
          <p>별점 등록: 별점 이미지 들어갈곳</p>
          <p>리뷰 내용: 리뷰 내용 들어가야할 곳 </p>
        </div>
      </div>
    </div>
  );
}

export default LodgingReview;