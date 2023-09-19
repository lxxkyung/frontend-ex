import { atom } from 'recoil';

const calendarData = {
    minDate: '',
    maxDate: '',
    dateFormat: '',
};

export const calendarState = atom({
    key: 'calendarState',
    default: calendarData,
});
