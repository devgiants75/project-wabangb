import React, { useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import Modal from 'react-modal';
import '../styles/CalenderModal.css';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose }) => {
  const [selectedDates, setSelectedDates] = useState<DateObject[]>([]);

  const handleDateChange = (dates: DateObject[]) => {
    setSelectedDates(dates);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Calendar Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>여러 날짜 선택</h2>
        <DatePicker
          multiple
          value={selectedDates}
          onChange={handleDateChange}
          format="YYYY-MM-DD"
          sort
        />
        <div className="selected-dates">
          <h3>선택된 날짜들:</h3>
          <ul>
            {selectedDates.map((date, index) => (
              <li key={index}>{date.format("YYYY-MM-DD")}</li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default CalendarModal;