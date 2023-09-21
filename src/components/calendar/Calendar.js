import { useState } from 'react';

import { useRecoilState } from 'recoil';
import { calendarState } from '@state/calendar/atoms/calendarState';

import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';

import { CalendarWrap } from './style';

const Calendar = () => {
    const [calendarValue, setCalendarValue] = useRecoilState(calendarState);
    const { pageType, startDate, minDate, maxDate } = calendarValue;

    const today = moment().format('YYYY-MM-DD');

    const onChangeEvent = (update) => {
        setCalendarValue((prev) => ({
            ...prev,
            startDate: update,
        }));
    };

    return (
        <CalendarWrap>
            <DatePicker
                dateFormatCalendar="yyyy년 MM월"
                locale={ko}
                selected={startDate}
                onChange={(update) => onChangeEvent(update)}
                minDate={minDate}
                inline
                // filterDate={(date) => {
                //     // Disable weekends (Saturday and Sunday)
                //     return date.getDay() !== 0 && date.getDay() !== 6;
                // }}
            />
        </CalendarWrap>
    );
};
export default Calendar;
