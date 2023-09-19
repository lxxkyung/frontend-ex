import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Main
const Main = lazy(() => import('@pages/main/Main'));

// Member
const Login = lazy(() => import('@pages/member/Login'));

// reservation
const Reservation = lazy(() => import('@pages/reservation/Reservation'));

const Router = () => {
    return (
        <Routes>
            {/* Main */}
            <Route path="/" element={<Main />} />

            {/* member */}
            <Route path="/login" element={<Login />} />

            {/* reservation */}
            <Route path="/reservation" element={<Reservation />} />
        </Routes>
    );
};

export default Router;
