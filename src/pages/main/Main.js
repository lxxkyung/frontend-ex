import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { LayoutWrap } from '@styled/common/common';

//메인 페이지
const Main = () => {
    return (
        <MainWrap>
            <h1>Main</h1>
            <h2>
                <Link to="/login">로그인</Link>
            </h2>
        </MainWrap>
    );
};

export default Main;

const MainWrap = styled.div`
    ${LayoutWrap}
`;
