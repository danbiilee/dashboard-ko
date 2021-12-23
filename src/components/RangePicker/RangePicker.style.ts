import styled from 'styled-components';

export const StyledRangePicker = styled.div`
  display: inline-block;
  .tilde {
    margin: 0 1rem;
    color: #546f68;
    font-size: 2rem;
  }
  .ant-picker {
    width: 25.6rem;
    height: 4.8rem;
    background-color: #33454d;
    border: 0;
    outline: none;
    &:last-of-type {
      margin-right: 1.6rem;
    }
  }
  .ant-picker-input {
    cursor: pointer;
    input {
      color: #fff;
      font-size: 2.3rem;
      font-weight: bold;
      cursor: pointer !important;
    }
  }

  .ant-picker-clear {
    display: none;
  }
`;
