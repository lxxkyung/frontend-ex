import { useCallback, useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import { calendarState } from '@state/calendar/atoms/calendarState';

import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';

import moment from 'moment';

import { CalendarWrap } from './style';

const Calendar = () => {
    const [calendarValue, setCalendarValue] = useRecoilState(calendarState);
    const { pageType, startDate, minDate, maxDate, customDates } = calendarValue;

    const today = moment().format('YYYY-MM-DD');

    const onChangeEvent = (update) => {
        setCalendarValue((prev) => ({
            ...prev,
            startDate: update,
        }));
    };
    console.log(customDates);
    console.log(new Date('2023-09-26').getMonth() + 1);

    const renderCustomDates = useCallback((date) => {
        const customDate = customDates.filter((cDate) => cDate.getDate() === date).length;

        if (customDate > 0) {
            return (
                <div className="custom-date-cell">
                    {date}
                    <i className="icon"></i>
                </div>
            );
        } else {
            return <div>{date}</div>;
        }
    }, []);

    return (
        <CalendarWrap>
            <DatePicker
                dateFormatCalendar="yyyy년 MM월"
                locale={ko}
                selected={startDate}
                onChange={(update) => onChangeEvent(update)}
                minDate={minDate}
                inline
                renderDayContents={(date) => renderCustomDates(date)}
                // renderMonthContent={(date) => renderCustomDates(date)}
                // filterDate={(date) => {
                //     // Disable weekends (Saturday and Sunday)
                //     return date.getDay() !== 0 && date.getDay() !== 6;
                // }}
            />
        </CalendarWrap>
    );
};
export default Calendar;
