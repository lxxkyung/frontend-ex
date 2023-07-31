import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

//메인 페이지
const Main = () => {
    return (
        <div>
            <h1>Main</h1>
            <h2><Link to="/login">로그인</Link></h2>
        </div>
    );
};

export default Main;
