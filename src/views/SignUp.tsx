import '../styles/reset.css';
import '../styles/signUp.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as React from 'react';
import Alert, { AlertColor } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
// import ReactModal from 'react-modal';

//# 모달창 요소 세팅
// ReactModal.setAppElement('#root');

//# 회원가입에 필요한 객체 인터페이스 정의

// 필수 입력란
interface SignupRequiredForm {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  email: string;
  phoneNumber: string;
};

// (id, name, email)는 묶어서 상태관리

// 선택 입력란 - 관심 여행지 여러 가지로 받기
// 택 중 하나만 값을 받을거면 타입이름만, 여러 값을 받을거면 옆에 []붙여서 배열형태로~
// 여행지 목록 - 택 중 하나만 선택 - 유니온 타입으로 값들 정의
type Travel = '서울' | '부산' | '제주도' | '유럽' | '미국' | '영국';
interface TravelOptionsForm {
  travelOptions?: Travel[]; 
};

//# 타입들 묶어주기
type SignupForm = SignupRequiredForm & TravelOptionsForm;

export default function SignUp() {
  //# 상태 관리
  // 기존 회원가입 폼 상태 관리
  const [signupFormState, setSignupFormState] = React.useState<SignupForm>({
    id: '',
    password: '',
    passwordConfirm: '',
    name: '',
    email: '',
    phoneNumber: ''
  });
  // 오류 메시지 상태 관리
  const [errors, setErrors] = React.useState({
    id: '',
    password: '',
    passwordConfirm: '',
    name: '',
    email: '',
    phoneNumber: ''
  });
  // 알림창 상태 관리
  const [alert, setAlert] = React.useState<{ message: string; severity: AlertColor } | null>(null);

  //# 유효성 검사 함수들
  const validateId = (id: string) => id.length >= 3 && /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}%/.test(id);
  const validatePassword = (password: string) => password.length >= 8 && /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(password);
  const validatePasswordConfirm = (password: string, passwordConfirm: string) => password === passwordConfirm;
  const validateName = (name: string) => name.length > 0;
  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const validatePhoneNumber = (phoneNumber: string) => /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/.test(phoneNumber);

  //# 함수 정의
  // 입력 내용 변경 시 호출되는 함수 (입력내용에 따라 값을 받는 함수)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setSignupFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // 유효성 검사 결과에 따른 폼 함수
  const validateForm = () => {
    // 검사할 속성들 따로 가져와서 구조분해할당
    const {id, password, passwordConfirm, name, email, phoneNumber} = signupFormState;

    const newErrors = {
      id: validateId(id) ? '' : '사용 불가능한 아이디 입니다.',
      password: validatePassword(password) ? '' : '사용 불가능한 비밀번호 입니다.',
      passwordConfirm: validatePasswordConfirm(password, passwordConfirm) ? '' : '비밀번호가 일치하지 않습니다.',
      name: validateName(name) ? '' : '이름을 입력해주세요.',
      email: validateEmail(email) ? '' : '유효하지 않은 이메일 주소입니다.',
      phoneNumber: validatePhoneNumber(phoneNumber) ? '' : '전화번호를 입력해주세요.'
    };
    setErrors(newErrors);

    // 필드별로 직접 에러 체크 - 에러 시 비우기
    return (
      newErrors.id === '' &&
      newErrors.password === '' &&
      newErrors.passwordConfirm === '' &&
      newErrors.name === '' &&
      newErrors.email === '' &&
      newErrors.phoneNumber === '' 
    );
  };

  // 부수효과 useEffect - 회원가입 폼 내용 중 하나라도 바뀔 때 유효성 검사 함수 호출
  React.useEffect(() => {
    const {id, password, passwordConfirm, name, email, phoneNumber} = signupFormState;
    if (id || password || passwordConfirm || name || email || phoneNumber) {
      validateForm();
    }
  }, [signupFormState]);

  // 폼 제출 함수
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 유효성 검사 함수 호출 - 내용이 유효하다면 전송, 유효하지 않다면 전송X
    if (validateForm()) {
      console.log('폼의 내용이 유효합니다. 데이터 전송', signupFormState);
      setAlert({message: '회원가입이 완료되었습니다.', severity: 'success'});
    } else {
      console.log('폼의 내용이 유효하지 않습니다.');
      setAlert({message: '회원가입에 실패했습니다.', severity: 'error'});
    }
  };

  // 에러 났을 때 에러 상태 명시
  const {id, password, passwordConfirm, name, email, phoneNumber} = signupFormState;
  const {
    id: idError,
    password: passwordError,
    passwordConfirm: passwordConfirmError,
    name: nameError,
    email: emailError,
    phoneNumber: phoneNumberError
  } = errors;

  //# 모달창 ====================================================================
  // 모달창 열기 상태 관리
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Header />
      <Stack sx={{ width: '100%' }} spacing={2}>
        {alert && (
          <Alert variant="outlined" severity={alert.severity}>
            {alert.message}
          </Alert>
        )}
      </Stack>
      {/*
        헤더와 푸터 위로 올라온 컨텐츠가 메인으로 감싸고 
        css를 만져주니 안으로 들어감.
      */}
      <main className='content-container'>
        <form className='input-box' onSubmit={handleSubmit}>
          <h3>필수 입력</h3>
          <div className='textForm'>
            <input
              type="text"
              name='id'
              value={signupFormState.id}
              onChange={handleInputChange}
              placeholder='아이디'
            />
            {idError && <span className='errorMessage'>{idError}</span>}
          </div>
          <div className='textForm'>
            <input
              type="password"
              name='password'
              value={signupFormState.password}
              onChange={handleInputChange}
              placeholder='비밀번호'
            />
            {passwordError && <span className='errorMessage'>{passwordError}</span>}
          </div>
          <div className='textForm'>
            <input
              type="passwordConfirm"
              name='passwordConfirm'
              value={signupFormState.passwordConfirm}
              onChange={handleInputChange}
              placeholder='비밀번호 확인'
            />
            {passwordConfirmError && <span className='errorMessage'>{passwordConfirmError}</span>}
          </div>
          <div className='textForm'>
            <input
              type="text"
              name='name'
              value={signupFormState.name}
              onChange={handleInputChange}
              placeholder='이름'
            />
            {nameError && <span className='errorMessage'>{nameError}</span>}
          </div>
          <div className='textForm'>
            <input
              type="email"
              name='email'
              value={signupFormState.email}
              onChange={handleInputChange}
              placeholder='이메일'
            />
            {emailError && <span className='errorMessage'>{emailError}</span>}
          </div>
          <div className='textForm'>
            <input
              type="text"
              name='phoneNumber'
              value={signupFormState.phoneNumber}
              onChange={handleInputChange}
              placeholder="'-' 없이 전화번호 입력"
            />
            {phoneNumberError && <span className='errorMessage'>{phoneNumberError}</span>}
          </div>

          <h3>관심 여행지</h3>
          <div className='textForm'>
            <input
              type="text"
              placeholder='관심 여행지'
            />
          </div>

          <button className='signupButton' type='submit'>회원가입</button>
        </form>
      </main>
      <Footer />
    </>
  )
}
