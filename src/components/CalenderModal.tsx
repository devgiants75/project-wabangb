/** @jsxImportSource @emotion/react */
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import  * as s  from '../styles/emotion/CalenderModal';


interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose, selectedDate, onDateChange }) => {
  if (!isOpen) return null;

  return (
    <div css={s.layout}>
      <div css={s.layout}>
        <span css={s.close} onClick={onClose}>&times;</span>
        <DatePicker
          selected={selectedDate}
          onChange={onDateChange}
          inline
        />
      </div>
    </div>
  );
};

export default CalendarModal;
