import * as React from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';

export default function MenuBar() {
  // 메뉴 상태 관리
  const [value, setValue] = React.useState(0);

  // 메뉴 선택에 따라 바뀌는 핸들러 함수
  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // 페이지 이동 네비게이트 정의
  const navigate = useNavigate();

  const goReservationList = () => {
    navigate('/reservationlist');
  };

  const goUsageDetails = () => {
    navigate('/usagedetails');
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab 
          label='예약리스트'
          onClick={goReservationList}
        />
        <Tab 
          label='이용내역' 
          onClick={goUsageDetails}
        />
      </Tabs>
    </Box>
  )
}
