import { atom } from 'recoil';

const navigationList = [
    {
        name: '홈',
        src: '/',
    },
    {
        name: '예약',
        src: '/reservation',
    },
    {
        name: '이용내역',
        src: '/',
    },
    {
        name: '커뮤니티',
        src: '/',
    },
    {
        name: '마이페이지',
        src: '/',
    },
];

export const navigationState = atom({
    key: 'navigationState',
    default: navigationList,
});
