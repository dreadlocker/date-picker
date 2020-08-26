import React from 'react';
import './BaseDatePickerFooter.scss';

const BaseDatePickerFooter = React.memo(({
  selectedPeriod,
  setDatePickerBtnText,
  setIsApplyBtnClicked,
  closeModal
}) => {
  const submitDate = () => {
    setDatePickerBtnText(selectedPeriod)
    setIsApplyBtnClicked(true)
    closeModal()
  }

  return (
    <div className="date-picker-footer">
      <button onClick={closeModal} className="date-picker-footer-cancel-btn">Cancel</button>
      <button onClick={submitDate} className="date-picker-footer-apply-btn">Apply</button>
    </div >
  )
})

export default BaseDatePickerFooter;
