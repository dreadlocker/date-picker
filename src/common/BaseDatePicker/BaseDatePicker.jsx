import React, { useState } from 'react';
import { RangeDatePicker } from "react-google-flight-datepicker";
import 'react-google-flight-datepicker/dist/main.css';
import './BaseDatePicker.scss';
import BaseDatePickerPeriodPanel from './BaseDatePickerPeriodPanel';
import BaseDatePickerHeader from './BaseDatePickerHeader';
import BaseDatePickerFooter from './BaseDatePickerFooter';
import transformDateForRequest from '../../utilities/transformDateForRequest';

const BaseDatePicker = ({
  showDatePicker,
  setShowDatePicker,
  setDatePickerBtnText,
  customDate,
  setCustomDate,
  setIsApplyBtnClicked,
}) => {
  const closeModal = () => {
    setShowDatePicker(false)
  }

  const showDatePickerModal = (e) => {
    if (e.target.className !== "date-picker-modal-background show") return;
    closeModal()
  }
  const [selectedPeriod, setSelectedPeriod] = useState("Custom");

  let today = new Date();
  const startDate = transformDateForRequest(today)
  const sevenDaysBefore = transformDateForRequest(new Date(today.setDate(today.getDate() - 7)))
  today = new Date();
  const fourteenDaysBefore = transformDateForRequest(new Date(today.setDate(today.getDate() - 14)))
  today = new Date();
  const oneMonthBefore = transformDateForRequest(new Date(today.setMonth(today.getMonth() - 1)))
  today = new Date();
  const threeMonthsBefore = transformDateForRequest(new Date(today.setMonth(today.getMonth() - 3)))
  today = new Date();
  const sixMonthsBefore = transformDateForRequest(new Date(today.setMonth(today.getMonth() - 6)))
  today = new Date();
  const oneYearBefore = transformDateForRequest(new Date(today.setFullYear(today.getFullYear() - 1)))

  const defaultPeriodsTemplate = [
    {
      text: "Custom",
      active: true,
      periodFromTo: customDate,
    },
    {
      text: "Last 7 days",
      active: false,
      periodFromTo: {
        startDate: sevenDaysBefore,
        endDate: startDate,
      }
    },
    {
      text: "Last 14 days",
      active: false,
      periodFromTo: {
        startDate: fourteenDaysBefore,
        endDate: startDate,
      }
    },
    {
      text: "Last month",
      active: false,
      periodFromTo: {
        startDate: oneMonthBefore,
        endDate: startDate,
      }
    },
    {
      text: "Last 3 months",
      active: false,
      periodFromTo: {
        startDate: threeMonthsBefore,
        endDate: startDate,
      }
    },
    {
      text: "Last 6 months",
      active: false,
      periodFromTo: {
        startDate: sixMonthsBefore,
        endDate: startDate,
      }
    },
    {
      text: "Last year",
      active: false,
      periodFromTo: {
        startDate: oneYearBefore,
        endDate: startDate,
      }
    },
  ]

  const [defaultPeriods, setDefaultPeriods] = useState(defaultPeriodsTemplate);

  const onDateChange = (startDate, endDate) => {
    endDate = endDate ? endDate : startDate

    setCustomDate({
      startDate: transformDateForRequest(startDate),
      endDate: transformDateForRequest(endDate),
    })
    setSelectedPeriod("Custom")
    setDefaultPeriods(defaultPeriodsTemplate)
  }

  return (
    <>
      <div className={`modal-mask${showDatePicker ? " show" : ""}`}></div>
      <div className={`date-picker-modal-background${showDatePicker ? " show" : ""}`} onClick={showDatePickerModal}>
        <div className="date-picker-holder">
          <BaseDatePickerHeader closeModal={closeModal} />
          <div className="date-picker-content">
            <BaseDatePickerPeriodPanel
              setSelectedPeriod={setSelectedPeriod}
              customDate={customDate}
              setCustomDate={setCustomDate}
              defaultPeriods={defaultPeriods}
              setDefaultPeriods={setDefaultPeriods}
            />
            {showDatePicker
              ? <RangeDatePicker
                startDate={(customDate.startDate)}
                endDate={(customDate.endDate)}
                onChange={(startDate, endDate) => onDateChange(startDate, endDate)}
                minDate={new Date(1900, 0, 1)}
                maxDate={new Date()}
                monthFormat="MMMM YYYY"
                startDatePlaceholder="Start Date"
                endDatePlaceholder="End Date"
                disabled={false}
                startWeekDay="monday"
              />
              // Created because of animation glitch when datepicker disappears on modal close
              : <div className="dummy"></div>
            }
          </div>
          <BaseDatePickerFooter
            selectedPeriod={selectedPeriod}
            setDatePickerBtnText={setDatePickerBtnText}
            setIsApplyBtnClicked={setIsApplyBtnClicked}
            closeModal={closeModal}
          />
        </div>
      </div>
    </>
  )
}

export default BaseDatePicker;
