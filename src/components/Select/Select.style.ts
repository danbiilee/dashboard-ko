import styled from 'styled-components';

export const StyledSelect = styled.div`
  display: inline-block;
  .ant-select {
    height: 4.8rem;
    &.team {
      width: 30rem;
    }
    &.service {
      width: 38rem;
    }
  }
  .ant-select-selection-item {
    cursor: pointer;
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    height: 100%;
    padding: 0 1rem;
    background-color: #33454d;
    border: 0;
    color: #fff;
    font-size: 2.3rem;
    font-weight: bold;
  }
  .ant-select-single .ant-select-selector .ant-select-selection-item {
    line-height: 4.8rem;
  }
  .ant-select-arrow {
    top: 0.6rem;
    right: 0;
    width: 4.9rem;
    height: 4.8rem;
  }
`;
