import * as React from 'react'
import '../styles/signIn.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';

// 로그인에 필요한 객체들 타입 정의
interface SignInForm {
  userId: string;
  password: string;
};

export default function SignIn() {
  // 폼 데이터 상태 관리
  const [formData, setFormData] = React.useState<SignInForm>({
    userId: '',
    password: ''
  });

  // 입력 필드 변경을 감지하는 이벤트 핸들러 함수
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  };

  // 유효성 검사 함수
  const validateUserId = (userId: string) => {
    if (userId.trim() === '') {
      return  <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="outlined" severity="error">
          아이디를 입력해주세요.
        </Alert>
      </Stack>
    }
  };

  const validatePassword = (password: string) => {
    if (password.trim() === '') {
      return  <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert variant="outlined" severity="error">
          비밀번호를 입력해주세요.
        </Alert>
      </Stack>
    }
  };

  // 폼 제출 함수
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userIdError = validateUserId(formData.userId);
    const passworedError = validatePassword(formData.password);
  };

  return (
    <>
      <form className='box'>
        <img src='images/wabangbSmall.png' alt="logo" />
        <input
          type="text"
          placeholder='아이디'
          autoFocus
          onChange={handleInputChange}
          name='userId'
          // value={userId}
        />
        <input
          type="text"
          placeholder='비밀번호'
          onChange={handleInputChange}
          name='password'
          // value={password}
        />
        <button type='submit'>Sign in</button>
      </form>
    </>
  )
}
