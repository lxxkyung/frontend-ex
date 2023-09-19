import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { CalendarWrap } from './style';

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <CalendarWrap className="calendar-container">
            <DatePicker
                selected={startDate}
                onChange={(update) => {
                    setStartDate(update);
                }}
                inline
            />
        </CalendarWrap>
    );
};
export default Calendar;
