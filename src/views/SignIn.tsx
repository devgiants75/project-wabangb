/* eslint-disable no-unreachable */
import '../styles/reset.css';
import '../styles/signIn.css';
import * as React from 'react';
import Alert, { AlertColor } from '@mui/material/Alert';
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
  // 알림창 상태 관리
  const [alert, setAlert] = React.useState<{ message: string; severity: AlertColor } | null>(null);

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
    //* apis/login 데이터 파일 생성해야 함.
    try {
      const response = await fetch('apis/login', {
        method: 'GET',
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
      console.log('로그인 성공 : ', data);

      // 알림창 표시
      setAlert({message: '로그인 성공!', severity: 'success'});

      // 입력란 초기화
      setFormState({
        userId: '',
        password: ''
      });

      // 로그인 성공 후 홈페이지 이동
      setTimeout(() => {
        setAlert(null);
        navigate('/homepage');
      }, 2000);
    } catch(error) {
      setError((error as Error).message);
      // 알림창 표시
      setAlert({message: '로그인 실패. 다시 시도해주세요.', severity: 'error'})
      // 입력란 초기화
      setFormState({
        userId: '',
        password: ''
      });

      // 일정 시간 후에 알림 숨김
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  };

  return (
    <>
      <Stack sx={{ width: '100%' }} spacing={2}>
        {alert && (
          <Alert variant="outlined" severity={alert.severity}>
            {alert.message}
          </Alert>
        )}
      </Stack>
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
        <button type='submit'>Sign in</button>
      </form>
    </>
  )
}
