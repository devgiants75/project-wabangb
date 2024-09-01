import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface RefundData {
    amount: string;
}

export default function CancellReFund() {

    const [refundAmount, setRefundAmount] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    //! 데이터를 특정해서 가져오는 것부터 시도
    useEffect(() => {
        const fetchRefundAmount = async () => {
            try {
                const response = await axios.get<RefundData>('http://localhost:4000/lodgings/amount/{1}');
                setRefundAmount(response.data.amount);
                setLoading(false);
            } catch(error: any) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchRefundAmount();
    }, []);

    if (loading) {return <div>로딩 중...</div>};

    if (error) {return <div>에러 발생 : {error}</div>};

    return (
        <div className='refundAmountBox'>
            <div className='amountTop'>예상 환불 금액</div>
            <div className='amountBottom'>
                <span className='amount'>{refundAmount}</span>
                <span>원</span>
            </div>
        </div>
    )
}
