import styled from 'styled-components';

export const StyledInputGroup = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 12.8rem;
  margin-bottom: 4rem;
  background-color: #1b2a338b;
  border: 1px solid #5470805c;
  & > label:not(:last-of-type)::after {
    content: '';
    height: 3.5rem;
    padding: 0.5rem 3.2rem 0.5rem 0;
    margin-right: 3.2rem;
    border-right: 2px solid #708c9d5c;
  }
  button:last-of-type {
    margin-left: 3.2rem;
  }
  .ant-alert {
    position: absolute;
    top: -1rem;
    font-size: 2rem;
  }
  .ant-alert-warning {
    padding: 2rem 2.5rem 2.5rem 3rem;
    border: 1px solid #f5c010;
    .ant-alert-icon {
      margin-top: 0.1rem;
      color: #f5c010;
      font-size: 3rem;
    }
    .ant-alert-message {
      margin-bottom: 0.8rem;
      font-size: 2.1rem;
    }
    .ant-alert-description {
      font-size: 1.8rem;
    }
    .ant-alert-close-icon {
      margin-left: 15rem;
      font-size: 1.8rem;
      cursor: pointer;
      * {
        cursor: pointer;
      }
    }
  }
`;
