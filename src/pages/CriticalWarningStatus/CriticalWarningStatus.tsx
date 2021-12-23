import React from 'react';
import Main from '@layouts/Main';
import { CriticalWarningContentBox as ContentBox } from '@layouts/ContentBox';
import InputGroup from '@layouts/InputGroup';
const CriticalWarningStatus = () => {
  return (
    <Main type="status">
      <InputGroup />
      <ContentBox>
        <div>test</div>
      </ContentBox>
    </Main>
  );
};

export default CriticalWarningStatus;
