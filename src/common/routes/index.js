import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Main
const Main = lazy(() => import('@pages/main/Main'));

// Member
const Login = lazy(() => import('@pages/member/Login'));

const Router = () => {
    return (
        <Routes>
            {/* Main */}
            <Route path="/" element={<Main />} />

            {/* member */}
            <Route path="/login" element={<Login />} />

        </Routes>
    );
};

export default Router;
