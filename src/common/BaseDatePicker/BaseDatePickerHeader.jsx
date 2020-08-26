import React from 'react';
import './BaseDatePickerHeader.scss';

const BaseDatePickerHeader = React.memo(({ closeModal }) => {
  return (
    <div className="date-picker-header">
      <div className="date-picker-header-text">Select Date Range</div>
      <div className="date-picker-header-close-btn" onClick={closeModal}>&#215;</div>
    </div>
  )
})

export default BaseDatePickerHeader;
