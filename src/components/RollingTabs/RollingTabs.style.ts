import styled, { css } from 'styled-components';
import { Tab } from '@customTypes/common';

interface ButtonProps extends Pick<Tab, 'selected'> {}

export const StyledRollingTabs = styled.div`
  position: absolute;
  top: -5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem 0 3rem;
  .play {
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

export const StyledRollingTab = styled.button<ButtonProps>`
  width: 4rem;
  height: 2.4rem;
  margin-left: 0.6rem;
  border: 1px solid #2b3c47;
  background-color: transparent;
  color: #768894;
  font-size: 1.3rem;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    css`
      background-color: #2a3947;
      color: #67e8ff;
    `}
`;
