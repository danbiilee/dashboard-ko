import React from 'react';
import { StyledExcelButton } from './Button.style';
import { defaultAlertState, InputGroupProps } from '@layouts/InputGroup/InputGroup';
import { getQueryString } from '@customUtils/index';
import IconExcel from '@images/icon-excel.png';

interface ExcelButtonProps extends Pick<InputGroupProps, 'searchInputs'> {
  setAlert: React.Dispatch<React.SetStateAction<typeof defaultAlertState>>;
}

const ExcelButton: React.FC<ExcelButtonProps> = ({ searchInputs, setAlert }) => {
  const onClick = () => {
    if (ENV.IS_LOCAL) {
      alert('지원하지 않는 기능입니다');
      return;
    }
    if (searchInputs.team === 'total') {
      setAlert({ status: true, message: '팀명을 선택하세요' });
      return;
    }
    if (searchInputs.service === 'total') {
      setAlert({ status: true, message: '서비스명을 선택하세요' });
      return;
    }

    const mode = process.env['NODE_ENV']!;
    const url = `${ENV.API_URL[mode]}/${ENV.API_REST_URI.EXCEL}?${getQueryString(searchInputs)}`;

    window.location.href = url;
  };

  return (
    <StyledExcelButton onClick={onClick}>
      <img src={IconExcel} alt="excel button" />
    </StyledExcelButton>
  );
};

export default ExcelButton;
