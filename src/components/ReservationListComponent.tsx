import React from 'react'
import { useNavigate } from 'react-router-dom';

interface ReservationListProps {
    accommodationName: string;
    retext: string;
    date: string;
}

export default function ReservationListComponent({accommodationName, retext, date}: ReservationListProps) {

    const navigate = useNavigate();

    const goDetails = () => navigate('/lodgingdetails');
    const goCancel = () => navigate('/cancellation')

    return (
        <>
            <div className='top'>
                <p className='retext AccommodationName' onClick={goDetails}>
                    {accommodationName}
                </p>
                <p className='retext'>{retext}</p>
            </div>
            <div className='bottom'>
                <span>{date}</span>
                <button className='reserButton' onClick={goCancel}>예약 취소</button>
            </div>
        </>
    )
}
