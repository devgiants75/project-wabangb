import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/CalenderModal.css'

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose, selectedDate, onDateChange }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
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