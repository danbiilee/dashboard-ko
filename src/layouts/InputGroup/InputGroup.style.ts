import styled from 'styled-components';

export const StyledInputGroup = styled.div`
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
`;
