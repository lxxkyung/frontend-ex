import { atom } from 'recoil';

const calendarData = {
    pageType: '',
    startDate: new Date(),
    minDate: new Date(),
    maxDate: '',
    customDates: [new Date('2023-09-26'), new Date('2023-09-29')],
};

export const calendarState = atom({
    key: 'calendarState',
    default: calendarData,
});
