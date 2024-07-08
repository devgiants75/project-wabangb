import React, { useState } from "react";
import "../styles/MainSearch.css";
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import ReactModal from "react-modal";

interface Item {
  [key: string]: any;
}

// 검색 결과 기능
function Main_Search() {
  const [DataList, setDataList] = useState<Item[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredResults, setFliteredResults] = useState<Item[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // const searchRef : {
  //   name: ;
  //   date: ;
  //   person: ;
  // } = {
  //   name: useRef(),
  //   date: useRef(),
  //   person: useRef(),
  // };

  // const nextSearch = (e) => {
  //   if (e.keyCode === 13) {
  //     if (e.target.name === "name") {
  //       searchRef.date.current.focus();
  //     }
  //     if (e.target.date === "date") {
  //       searchRef.date.current.focus();
  //     }
  //   }
  // };

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
    setModalOpen(false); // 모달을 닫음
  };


  // 결과 리스트 받는
  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filterdData = DataList.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFliteredResults(filterdData);
    } else {
      setFliteredResults(DataList);
    }
  };

  return (
    <div className="container">
      <div className="search-continer">
        <div className="search">
          <div className="search-element">
            <input
              className="search-area"
              placeholder="지역명"
              type="text"
              name="area"
              onChange={(e) => searchItems(e.target.value)}
              // onKeyDown={nextSearch}
            />

            <button className="search-date" name="date" onClick={openModal}>
              날짜
            </button>

            {/* 모달 */}
            <ReactModal
              isOpen={modalOpen}
              onRequestClose={closeModal}
              className="modal-content"
              overlayClassName="modal-overlay"
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateCalendar']}>
                  <DateCalendar
                    value={selectedDate}
                    onChange={(newValue) => handleDateChange(newValue as Dayjs)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </ReactModal>

            <input
              className="search-Personnel"
              placeholder="인원수"
              type="text"
              name="person"
              onChange={(e) => searchItems(e.target.value)}
              // onKeyDown={searchRef.person.current}
            />
            <button className="search-button">검색</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_Search;