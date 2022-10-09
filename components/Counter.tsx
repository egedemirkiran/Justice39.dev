import { useEffect, useState } from 'react';

export function Counter(Timestamp: number) {
    const [date, setDate] = useState(new Date(Timestamp));
    useEffect(() => {
      const id = setInterval(() => setDate(new Date(Timestamp)), 100);
      return () => clearInterval(id);
    }, [date]);
    return timeElapsed(date)
}

export const timeElapsed = (timestamp: any) => {
    const startTime = timestamp;
    const endTime = Number(new Date());
    let difference = (endTime - startTime) / 1000;
    const daysDifference = Math.floor(difference / 60 / 60 / 24);
    difference -= daysDifference * 60 * 60 * 24;
    const hoursDifference = Math.floor(difference / 60 / 60);
    difference -= hoursDifference * 60 * 60;
    const minutesDifference = Math.floor(difference / 60);
    difference -= minutesDifference * 60;
    const secondsDifference = Math.floor(difference);
    return `${hoursDifference >= 1 ? ("0" + hoursDifference).slice(-2) + ":" : ""}${("0" + minutesDifference).slice(
        -2
    )}:${("0" + secondsDifference).slice(-2)}`;
};

export function tsString(ts: any) {
    let date_time = new Date(ts ? ts : Date.now());
    return `${date_time.getMinutes()<10 ? "0"+date_time.getMinutes() : date_time.getMinutes()}:${date_time.getSeconds()<10 ? "0"+date_time.getSeconds() : date_time.getSeconds() }`;
}