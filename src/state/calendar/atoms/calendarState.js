import { atom } from 'recoil';

const calendarData = {
    pageType: '',
    startDate: new Date(),
    minDate: new Date(),
    maxDate: '',
};

export const calendarState = atom({
    key: 'calendarState',
    default: calendarData,
});
