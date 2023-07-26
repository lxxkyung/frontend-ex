import React, { useEffect } from 'react';

//로그인 페이지
const Login = () => {
    return (
        <div>
          <div>
            <label htmlFor="username">아이디</label>
            <input
              type="text"
              name="username"
            />
          </div>
    
          <div>
            <label htmlFor="password">패스워드</label>
            <input
              type="password"
              name="password"
            />
          </div>
    
          <button type="button" >
            로그인
          </button>
        </div>
      );
};

export default Login;
