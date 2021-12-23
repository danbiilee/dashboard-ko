import React from 'react';
import Main from '@layouts/Main';
import { CriticalWarningContentBox as ContentBox } from '@layouts/ContentBox';
const CriticalWarningStatus = () => {
  return (
    <Main type="status">
      <div>critical/warning status</div>
      <ContentBox>
        <div>test</div>
      </ContentBox>
    </Main>
  );
};

export default CriticalWarningStatus;
