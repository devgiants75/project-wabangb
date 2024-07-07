import * as React from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';

export default function MenuBarInformation() {
  // 메뉴 상태 관리
  const [value, setValue] = React.useState(0);

  // 메뉴 선택에 따라 바뀌는 핸들러 함수
  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // 페이지 이동 네비게이트 정의
  const navigate = useNavigate();

  const goLodgingDetails = () => {
    navigate('/lodgingdetails');
  };

  const goLodingLocation = () => {
    navigate('/lodginglocation');
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab
          style={{fontSize: '16px'}}
          label='상세 정보' 
          onClick={goLodgingDetails}
        />
        <Tab 
          style={{fontSize: '16px'}}
          label='숙소 위치' 
          onClick={goLodingLocation}
        />
      </Tabs>
    </Box>
  )
}
