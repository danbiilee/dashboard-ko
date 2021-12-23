import styled from 'styled-components';

export const StyledChart = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  & > div {
    z-index: 1;
    flex: 1;
  }
  .today {
    position: absolute;
    bottom: -0.7rem;
    right: 1.9rem;
    padding: 0.3rem 0.7rem;
    background-color: #70ad47;
    border-radius: 3px;
    font-size: 1.2rem;
    text-shadow: 0px 1px 1px #000000f4;
  }
`;
