import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import { StyledClock } from './Clock.style';

const Clock = () => {
  const [dateTime, setDateTime] = useState(moment());

  const getFormatDate = useCallback((date: moment.Moment) => {
    return date.locale('ko').format('YYYY.MM.DD (dd) A h:mm');
  }, []);

  useEffect(() => {
    const id = setInterval(() => setDateTime(moment()), 5000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <StyledClock>{getFormatDate(dateTime)}</StyledClock>;
};

export default Clock;
