import React, { useState } from 'react';
import { StyledRangePicker } from './RangePicker.style';
import { SelectProps } from '@components/Select/Select';
import { DatePicker } from 'antd';
import moment from 'moment';
import SuffixIcon from '@images/icon-daterange.png';

interface RangePickerProps extends Pick<SelectProps, 'searchInputs' | 'handleChange'> {}

const RangePicker: React.FC<RangePickerProps> = ({ searchInputs, handleChange }) => {
  const [endOpen, setEndOpen] = useState(false);

  const disabledStartDate = (startDate: moment.Moment) => {
    if (!startDate || !searchInputs.end_date) {
      return false;
    }

    const endDate = moment(searchInputs.end_date);
    const isLaterThanEndDate = startDate.valueOf() > endDate.valueOf();
    const isOverThanMaxRange = startDate.valueOf() < endDate.subtract(11, 'M').valueOf();

    return isLaterThanEndDate || isOverThanMaxRange;
  };

  const disabledEndDate = (endDate: moment.Moment) => {
    if (!endDate || !searchInputs.start_date) {
      return false;
    }

    const startDate = moment(searchInputs.start_date);
    const isUnderThanMinRange = endDate.valueOf() <= startDate.add(2, 'M').valueOf();
    const isOverThanMaxRange = endDate.valueOf() > startDate.add(11, 'M').valueOf();
    const isOverToday = endDate.valueOf() > moment().valueOf();

    return isUnderThanMinRange || isOverThanMaxRange || isOverToday;
  };

  const onStartChange = (date: moment.Moment | null, dateString: string) => {
    handleChange('start_date', dateString);
  };

  const onEndChange = (date: moment.Moment | null, dateString: string) => {
    handleChange('end_date', dateString);
  };

  const handleStartOpenChange = (open: boolean) => {
    if (!open) {
      setEndOpen(true);
    } else {
      setTimeout(() =>
        setTimeout(() => {
          var inputs = document.getElementsByClassName('ant-picker-input');
          if (inputs.length > 0 && inputs[0]) {
            (inputs[0] as HTMLInputElement).blur();
          }
        }),
      );
    }
  };

  const handleEndOpenChange = (open: boolean) => {
    setEndOpen(open);
    var inputs = document.getElementsByClassName('ant-picker-input');
    if (inputs.length > 0 && inputs[0]) {
      (inputs[0] as HTMLInputElement).blur();
    }
  };

  return (
    <StyledRangePicker>
      <DatePicker
        picker="month"
        placeholder="시작일"
        suffixIcon={<img src={SuffixIcon} alt="picker suffix" />}
        value={moment(searchInputs.start_date)}
        onChange={onStartChange}
        disabledDate={disabledStartDate}
        onOpenChange={handleStartOpenChange}
        allowClear={false}
      />
      <span className="tilde"> ~ </span>
      <DatePicker
        picker="month"
        placeholder="종료일"
        suffixIcon={<img src={SuffixIcon} alt="picker suffix" />}
        value={moment(searchInputs.end_date)}
        onChange={onEndChange}
        disabledDate={disabledEndDate}
        onOpenChange={handleEndOpenChange}
        open={endOpen}
        allowClear={false}
      />
    </StyledRangePicker>
  );
};

export default React.memo(RangePicker);
