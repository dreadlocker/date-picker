import React, { useCallback } from 'react';
import './BaseDatePickerPeriodPanel.scss';
import transformDateForRequest from '../../utilities/transformDateForRequest';

const BaseDatePickerPeriodPanel = React.memo(({
  setSelectedPeriod,
  customDate,
  setCustomDate,
  defaultPeriods,
  setDefaultPeriods,
}) => {
  const changeActiveElement = useCallback((index) => {
    // Add class to make element look active
    const defaultPeriodsCopy = [...defaultPeriods]
    defaultPeriodsCopy.map(period => period.active = false)
    const currentPeriod = defaultPeriodsCopy[index]
    currentPeriod.active = true;
    return [defaultPeriodsCopy, currentPeriod]
  }, [defaultPeriods])

  const selectRange = (index) => {
    const [defaultPeriodsCopy, currentPeriod] = changeActiveElement(index)
    // Save which element has active class
    setDefaultPeriods(defaultPeriodsCopy)
    // Change the text of the button that opened the date picker, after clicking "Apply"
    setSelectedPeriod(currentPeriod.text)
    // Mark days in the calendar
    currentPeriod.text === "Custom"
      ? setCustomDate({ startDate: transformDateForRequest(new Date()), endDate: transformDateForRequest(new Date()) })
      : setCustomDate(currentPeriod.periodFromTo);
  }

  return (
    <div className="date-picker-period-holder">
      {
        defaultPeriods.map((period, index) =>
          <div
            className={`date-picker-period body-long-02${period.active ? " active-period" : ""}`}
            onClick={() => selectRange(index)} key={period.text}>{period.text}
          </div>)
      }
    </div>
  )
})

export default BaseDatePickerPeriodPanel;
