import React, { useState } from 'react'
import BaseDatePicker from '../common/BaseDatePicker/BaseDatePicker';
import transformDateForRequest from '../utilities/transformDateForRequest';
import './Parent.scss';

const Parent = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePickerBtnText, setDatePickerBtnText] = useState("Last Year");
  const [customDate, setCustomDate] = useState({ startDate: transformDateForRequest(new Date()), endDate: transformDateForRequest(new Date()) });
  const [isApplyBtnClicked, setIsApplyBtnClicked] = useState(false);

  const openDatePicker = () => {
    setIsApplyBtnClicked(false);
    setShowDatePicker(true)
  }

  // FOR TEST PURPOSES - when you select date period and click Apply button - show result:
  // if (isApplyBtnClicked) console.log(customDate);
  if (isApplyBtnClicked) alert(JSON.stringify(customDate));
  // FOR TEST PURPOSES - when you select date period and click Apply button - show result:

  return (
    <>
      <div className="date-picker-btn" onClick={openDatePicker}>
        <div className="date-picker-btn-text">{datePickerBtnText}</div>
      </div>
      <BaseDatePicker
        showDatePicker={showDatePicker}
        setShowDatePicker={setShowDatePicker}
        setDatePickerBtnText={setDatePickerBtnText}
        customDate={customDate}
        setCustomDate={setCustomDate}
        setIsApplyBtnClicked={setIsApplyBtnClicked}
      />
    </>
  );
}

export default Parent;
