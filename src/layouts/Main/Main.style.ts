import styled, { css } from 'styled-components';
import { MainProps } from './Main';

interface StyledMainProps extends Pick<MainProps, 'type'> {}

export const StyledMain = styled.main<StyledMainProps>`
  overflow: hidden;
  flex: 1;
  ${({ type }) =>
    type === 'dashboard'
      ? // 알람 대시보드
        css`
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, minmax(32.5%, 32.8%));
          gap: 1rem;
          height: 100%;
          padding: 2.4rem;
          section:nth-child(5) {
            grid-column: 2 / 4; // 알람 미조치 리스트 TOP5
          }
        `
      : // 심각/경고 알람추이
        css`
          flex: 1 1 0%;
          display: flex;
          flex-direction: column;
          padding: 4rem 4.8rem;
        `}
`;
