import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface NameProps {
    username: string;
}

//! 유저 네임 경로 찾아서 가져올 수 있도록 해보기
export default function ReserInfoComponent() {

    const [username, setUsername] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsername = async() => {
            try {
                const response = await axios.get<NameProps>('http://localhost:4000/users')
                setUsername(response.data.username)
                setLoading(false);
            } catch(error: any) {
                setError(error.message);
                setLoading(false);
            }
        }

        fetchUsername();
    }, []);

    if (loading) {return <div>로딩 중...</div>};

    if (error) {return <div>에러 발생 : {error}</div>};

    return (
        <div className='reser-input-box'>
            <div>
                <input
                    className='reser-input'
                    type="text"
                    placeholder={username}
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
    )
}
