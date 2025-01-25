import { useState } from 'react';
import Calendar from 'react-calendar';
import Card from 'components/card';
import 'react-calendar/dist/Calendar.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import 'styles/MiniCalendar.css';

const MiniCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="bg-transparent">
      <Calendar
        onChange={onChange}
        value={value}
        prevLabel={<MdChevronLeft className="ml-1 h-6 w-6 " />}
        nextLabel={<MdChevronRight className="ml-1 h-6 w-6 " />}
        view={'month'}
      />
    </div>
  );
};

export default MiniCalendar;
