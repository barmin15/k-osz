import React from 'react';

import { useCountdown } from '../hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

import "../css/countdown.css"

export default function Timer({ date }) {
    const [days, hours, minutes, seconds] = useCountdown(date);
    return (
        <div className="show-counter">
            <div className="countdown-link">
                <DateTimeDisplay value={days} type={'Days'} />
                <p>:</p>
                <DateTimeDisplay value={hours} type={'Hours'} />
                <p>:</p>
                <DateTimeDisplay value={minutes} type={'Mins'} />
                <p>:</p>
                <DateTimeDisplay value={seconds} type={'Seconds'} />
            </div>
        </div>)
}