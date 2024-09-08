import React from 'react'
import { useNavigate } from 'react-router-dom';

interface UsageDetailsProps {
    accommodationName: string;
    retext: string;
    date: string;
}

export default function UsageDetailsComponent({accommodationName, retext, date}: UsageDetailsProps) {

    const navigate = useNavigate();

    const goReview = () => navigate('/reviewpage');
    const goDetails = () => navigate('/lodgingdetails');

    return (
        <>
            <div className='uInfoBox'>
                <div className='uTop'>
                    <p
                        className='utext AccommodationName'
                        onClick={goDetails}
                    >
                        {accommodationName}
                    </p>
                    <p className='utext'>{retext}</p>
                </div>
                <div className='uBottom'>
                    <span >{date}</span>
                    <button className='usageButton' onClick={goReview}>리뷰</button>
                </div>
            </div>
        </>
    )
}
