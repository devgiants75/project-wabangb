import React, { useState } from "react";
import "../styles/MainSearch.css";
import dayjs, { Dayjs } from 'dayjs';
import CalendarModal from "./CalenderModal";

interface Item {
  [key: string]: any;
}

const DataList: Item[] = [
  { id: 1, name: "Seoul", description: "Capital of South Korea" },
  { id: 2, name: "Busan", description: "Port city in South Korea" },
  { id: 3, name: "Incheon", description: "City near Seoul" },
  // Add more items as needed
];
// 검색 결과 기능
export default function MainSearch() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState(DataList);

  const openModal = () => {
    console.log("on");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("off");
    setIsModalOpen(false);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    closeModal();
  };

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = DataList.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(DataList);
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

            {/* 모달 */}
            <button  className="search-date" name="date" onClick={openModal}>
              날짜
            </button>
            {
              isModalOpen ?
              isModalOpen && (
                <CalendarModal
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  selectedDate={selectedDate}
                  onDateChange={handleDateChange}
                  />
              )
              :
              null
            }

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

