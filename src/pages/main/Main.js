import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { LayoutWrap } from '@styled/common/common';

//메인 페이지
const Main = () => {
    return (
        <MainWrap>
            <h1>Main</h1>
            <Link to="/login">로그인</Link>
            <Link to="">수강권페이지</Link>
            <Link to="/reservation">수업예약</Link>
        </MainWrap>
    );
};

export default Main;

const MainWrap = styled.div`
    ${LayoutWrap}

    //임시 라벨
    display: flex;
    flex-direction: column;
    gap: 30px;
`;
