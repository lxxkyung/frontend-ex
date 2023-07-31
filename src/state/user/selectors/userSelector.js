import { selector } from 'recoil';

import { userState } from '../atoms/userState';

export const userSelector = selector({
    key: 'userSelector',
    get: ({ get }) => {}, //로그인 정보..
    set: ({ set }, newValue) => set(userState, newValue),
});
