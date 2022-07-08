import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ newUser, setNewUser }) => {
  const [displayDate, setDisplayDate] = useState('');

  return (
    <DatePicker
      placeholderText="Date of Birth"
      selected={displayDate}
      onChange={(date) => {
        setDisplayDate(date);
        setNewUser({ ...newUser, dateOfBirth: date})}
      }
      />
  );
};

export default DateInput;
