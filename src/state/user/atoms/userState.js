import { atom } from 'recoil';

//로그인 된 유저 데이터
const loginUserData = {
    id: '',
    email: '',
    name: '',
    nickname: '',
};

//로그인 폼 데이터
const signInFormData ={
    id:'',
    // email:'',
    password: '',
};

// 회원가입 폼 데이터
const signUpFormData = {
    id:'',
    email: '',
    password: '',
    name: '',
    nickname: '',
};



//login state
export const loginState = atom({
    key: 'loginState', // unique ID (다른 atoms/selectors을 구별하기 위해서)
    default: loginUserData, // default value (aka initial value)
});

//signIn state
export const signInFormState = atom({
    key: 'signInState',
    default: signInFormData
});

//signUp state
export const signUpFormState = atom({
    key: 'signUpState',
    default: signUpFormData
});

export const isAuthenticatedState = atom({
    key: 'isAuthentication',
    default: false
})
