import React, { useEffect } from 'react';

import { useRecoilState } from 'recoil'
import { signInFormState } from '@state/user/atoms/userState'

import {FormInput, Button} from '@components/form'

//로그인 페이지
const Login = () => {
  const [loginValue, setLoginValue] = useRecoilState(signInFormState);

  return (
      <div>
        <FormInput name={'id'} label={'아이디'} onChange={setLoginValue}/>
        <FormInput name={'password'} label={'패스워드'} onChange={setLoginValue}/>
  
        <Button btnTit={'로그인'}/>
      </div>
    );
};

export default Login;
