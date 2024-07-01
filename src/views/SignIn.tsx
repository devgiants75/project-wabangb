/* eslint-disable no-unreachable */
import '../styles/reset.css';
import '../styles/signIn.css';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

// 로그인에 필요한 객체들 타입 정의
interface SigninForm {
  userId: string;
  password: string;
};

export default function SignIn() {
  // 페이지 이동
  const navigate = useNavigate();

  // 로그인 폼 상태 관리
  const [formState, setFormState] = React.useState<SigninForm>({
    userId: '',
    password: ''
  });
  // 에러 상태 관리
  const [error, setError] = React.useState<string | null>(null);

  // 입력란 값을 감지해서 내용을 바꾸는 함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // 폼 제출 함수
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 로그인을 위한 API 호출
    try {
      const response = await fetch('apis/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState),
      })

      // 데이터를 제대로 못 들고 왔을 때
      if (!response.ok) {
        throw new Error('로그인 실패');
      }

      const data = await response.json();
      return (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert variant="outlined" severity="success">
            {`로그인에 성공하셨습니다. ${data}`}
          </Alert>
        </Stack>
      )
      // 성공 시 페이지 이동
      navigate('/homepage');
    } catch(error) {
      setError((error as Error).message);
      return (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert variant="outlined" severity="error">
            로그인에 실패하셨습니다.
          </Alert>
        </Stack>
      )
    }
  };

  return (
    <>
      <form className='box' onSubmit={handleSubmit}>
        <img src='images/wabangbSmall.png' alt="logo" />
        <input
          type="text"
          placeholder='아이디'
          name='userId'
          id='userId'
          value={formState.userId}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          placeholder='비밀번호'
          name='password'
          id='password'
          value={formState.password}
          onChange={handleInputChange}
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type='submit'>Sign in</button>
      </form>
    </>
  )
}
