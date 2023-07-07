import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { months, years } from '../../utils/datesHelper'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import PropTypes from 'prop-types';

export function CustomDatePicker({ id, name, startDate, handleDateChange }) {
  const customHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => (
    <div
      className='m-2 flex justify-center space-x-2'
    >
      <button type='button' onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        <ChevronLeftIcon className='w-4 h-4' />
      </button>
      <select
        className='input'
        value={date.getFullYear()}
        onChange={({ target: { value } }) => { changeYear(parseInt(value)) }}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <select
        className='input'
        value={months[date.getMonth()]}
        onChange={({ target: { value } }) => { changeMonth(months.indexOf(value)) }
        }
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      <button type='button' onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        <ChevronRightIcon className='w-4 h-4' />
      </button>
    </div>
  )

  const handleChange = (date) => {
    handleDateChange(name, date)
  }

  return (
    <ReactDatePicker
      id={id}
      name={name}
      selected={startDate}
      onChange={handleChange}
      todayButton="Today"
      renderCustomHeader={customHeader}
      className='input'
      showPopperArrow={false}
    />

  )
}

CustomDatePicker.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  startDate: PropTypes.instanceOf(Date),
  handleDateChange: PropTypes.func
}
