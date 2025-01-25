import React, { useState } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  setYear,
  setMonth,
  getYear,
  getMonth,
} from 'date-fns';
import { km, enUS } from 'date-fns/locale';

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [locale, setLocale] = useState('en');
  const [selectedDay, setSelectedDay] = useState(null);
  const [isMonthDropdownOpen, setMonthDropdownOpen] = useState(false);
  const [isYearDropdownOpen, setYearDropdownOpen] = useState(false);

  const currentLocale = locale === 'km' ? km : enUS;

  // Get the days of the current month
  const startDate = startOfMonth(selectedDate);
  const endDate = endOfMonth(selectedDate);
  const daysInMonth = eachDayOfInterval({ start: startDate, end: endDate });

  // Generate month and year ranges for the dropdown
  const months = Array.from({ length: 12 }, (_, i) =>
    format(new Date(2023, i), 'MMMM', { locale: currentLocale }),
  );
  const yearRange = Array.from(
    { length: 20 },
    (_, i) => getYear(new Date()) - 10 + i,
  );

  // Handle month change
  const handleMonthChange = (index) => {
    setSelectedDate(setMonth(selectedDate, index));
    setMonthDropdownOpen(false);
  };

  // Handle year change
  const handleYearChange = (year) => {
    setSelectedDate(setYear(selectedDate, year));
    setYearDropdownOpen(false);
  };

  // Handle day click
  const handleDayClick = (day) => {
    setSelectedDay(day);
    alert(
      `Selected Date: ${format(day, 'yyyy-MM-dd', { locale: currentLocale })}`,
    );
  };

  return (
    <div className="rounded-lg p-4">
      {/* Header Section */}
      <div className="mb-4 flex items-center gap-3">
        {/* Month Selector */}
        <div className="relative">
          <div
            className="cursor-pointer rounded-lg bg-gray-700 px-4 py-2 text-white"
            onClick={() => setMonthDropdownOpen(!isMonthDropdownOpen)}
          >
            {months[getMonth(selectedDate)]}
          </div>
          {isMonthDropdownOpen && (
            <div className="absolute z-10 mt-2 max-h-40 w-40 overflow-y-auto rounded-lg  shadow-lg">
              {months.map((month, index) => (
                <div
                  key={index}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                  onClick={() => handleMonthChange(index)}
                >
                  {month}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Year Selector */}
        <div className="relative">
          <div
            className="cursor-pointer rounded-lg bg-gray-700 px-4 py-2 text-white"
            onClick={() => setYearDropdownOpen(!isYearDropdownOpen)}
          >
            {getYear(selectedDate)}
          </div>
          {isYearDropdownOpen && (
            <div className="absolute z-10 mt-2 max-h-40 w-40 overflow-y-auto rounded-lg bg-white shadow-lg">
              {yearRange.map((year) => (
                <div
                  key={year}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-200"
                  onClick={() => handleYearChange(year)}
                >
                  {year}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 text-center font-semibold">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={index} className="text-white">
            {format(new Date(2023, 0, index + 1), 'EEE', {
              locale: currentLocale,
            })}
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-2">
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            onClick={() => handleDayClick(day)}
            className={`cursor-pointer rounded-full p-2 text-center text-white ${
              format(day, 'yyyy-MM-dd') === format(selectedDay, 'yyyy-MM-dd')
                ? 'rounded-br-none bg-yellow-500 text-white'
                : ''
            } hover:bg-teal-200`}
          >
            {format(day, 'd', { locale: currentLocale })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateSelector;
