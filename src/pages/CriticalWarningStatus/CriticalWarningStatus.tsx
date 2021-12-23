import React, { useState } from 'react';
import Main from '@layouts/Main';
import { CriticalWarningContentBox as ContentBox } from '@layouts/ContentBox';
import InputGroup from '@layouts/InputGroup';
import { SearchInputs } from '@customTypes/common';
import moment from 'moment';
import Chart from '@components/Chart';

const CriticalWarningStatus = () => {
  const [searchInputs, setSearchInputs] = useState<SearchInputs>({
    team: 'total',
    service: 'total',
    start_date: moment().subtract(5, 'M').locale('ko').format('YYYY-MM'),
    end_date: moment().locale('ko').format('YYYY-MM'),
  });

  return (
    <Main type="status">
      <InputGroup searchInputs={searchInputs} setSearchInputs={setSearchInputs} />
      <ContentBox>
        <Chart type="search" param={searchInputs} />
      </ContentBox>
    </Main>
  );
};

export default CriticalWarningStatus;
