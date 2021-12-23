import styled from 'styled-components';
import { ContentBoxProps } from './AlarmContentBox';

interface StyledContentBoxProps extends Pick<ContentBoxProps, 'titleSize'> {}

export const StyledAlarmContentBox = styled.section<StyledContentBoxProps>`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #14232b;
  .header {
    position: relative;
    text-align: center;
  }
  .icon {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 1.9rem;
    height: 2.3rem;
    &:hover + .tooltip {
      visibility: visible;
    }
  }
  .tooltip {
    position: absolute;
    top: -2.7rem;
    left: -3.3rem;
    padding: 0.5rem 0.8rem;
    background-color: #ffeeb4;
    border-radius: 0.3rem;
    color: #2d3940;
    font-size: 1.2rem;
    visibility: hidden;
    &::after {
      content: '';
      position: absolute;
      bottom: -0.4rem;
      left: 4rem;
      border: 0.3rem solid transparent;
      border-top: 0.4rem solid #ffeeb4;
      border-bottom: 0;
    }
  }
  .title {
    margin-bottom: 2rem;
    color: #fff;
    font-size: ${({ titleSize }) => (titleSize === 'lg' ? '2.8rem' : '2.5rem')};
  }
`;

export const StyledContentBox = styled.div`
  flex: 1;
  display: flex;
  height: 0;
`;
