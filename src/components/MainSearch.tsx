import React, { useState } from "react";
import "../styles/MainSearch.css";
import dayjs, { Dayjs } from 'dayjs';
import CalenderModal from "./CalenderModal";

interface Item {
  [key: string]: any;
}

// 검색 결과 기능
function Main_Search() {
  const [DataList, setDataList] = useState<Item[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredResults, setFliteredResults] = useState<Item[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
    setIsModalOpen(false); // 모달을 닫음
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
            <button onClick={openModal}>달력 열기</button>
            <CalenderModal isOpen={isModalOpen} onClose={closeModal} />

            <input
              className="search-Personnel"
              placeholder="인원수"
              type="text"
              name="person"
              onChange={(e) => searchItems(e.target.value)}
              // onKeyDown={searchRef.person.current}
            />
            <button className="search-button" style={{textDecoration:"none"}}>검색</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_Search;