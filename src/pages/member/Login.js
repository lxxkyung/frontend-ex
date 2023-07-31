import React, { useEffect } from 'react';

import {FormInput, Button} from '@components/form'

//로그인 페이지
const Login = () => {
    return (
        <div>
          <FormInput name={'username'} label={'아이디'}/>
          <FormInput name={'password'} label={'패스워드'}/>
    
          <Button btnTit={'로그인'}/>
        </div>
      );
};

export default Login;
