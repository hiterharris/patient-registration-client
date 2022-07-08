import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ newUser, setNewUser }) => {
  const [defaultDate, setDefaultDate] = useState(new Date());
  return (
    <DatePicker selected={defaultDate} onChange={(date) => { setDefaultDate(date); setNewUser({ ...newUser, dateOfBirth: date})} } />
  );
};

export default DateInput;
