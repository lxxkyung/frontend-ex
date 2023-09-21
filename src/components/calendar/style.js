import styled from 'styled-components';

export const CalendarWrap = styled.div`
    margin-top: 20px;
    .react-datepicker {
        font-family: 'NanumSquareNeo', 'NanumSquare', sans-serif;
        width: 100%;
        border: 1px solid #e0e0e0;

        .react-datepicker__month-container {
            width: 100%;
        }

        .react-datepicker__header {
            width: 100%;
            padding: 20px 0;
            background: transparent;
            border: none;

            .react-datepicker__current-month {
                color: #3c5087;
                font-size: 20px;
                margin-bottom: 10px;
            }
        }

        .react-datepicker__day-name,
        .react-datepicker__day,
        .react-datepicker__time-name {
            width: 10vw;
            font-size: 4vw;
            line-height: 2.5;
        }

        .react-datepicker__day--today,
        .react-datepicker__month-text--today,
        .react-datepicker__quarter-text--today,
        .react-datepicker__year-text--today {
            font-weight: normal;
            color: #78a9ed;
        }

        .react-datepicker__day--selected {
            border-radius: 50%;
            background: #3c5087;
            color: #fff;
        }
    }
`;
