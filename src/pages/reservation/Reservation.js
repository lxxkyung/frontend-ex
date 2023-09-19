import styled from 'styled-components';
import { LayoutWrap } from '@styled/common/common';
import Calendar from '@components/calendar/Calendar';

//예약 페이지
const Reservation = () => {
    return (
        <ResevWrap>
            예약 페이지
            <Calendar />
        </ResevWrap>
    );
};
export default Reservation;

const ResevWrap = styled.div`
    ${LayoutWrap}
`;
