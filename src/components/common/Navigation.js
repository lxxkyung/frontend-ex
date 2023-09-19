import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { CommonNav } from './style';
import { navigationState } from '@state/navigation/atoms/navigationState';

const Navigation = () => {
    const [navigationList] = useRecoilState(navigationState);
    return (
        <CommonNav>
            {navigationList?.map((list, index) => (
                <div key={index}>
                    <Link to={list.src}>{list.name}</Link>
                </div>
            ))}
        </CommonNav>
    );
};

export default Navigation;
