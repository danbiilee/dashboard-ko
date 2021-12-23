import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 6.4rem;
  padding: 0 2.4rem;
  background-color: #2d3940;
  .left {
    display: flex;
    align-items: center;
    text-align: left;
  }
  .middle {
    text-align: center;
  }
  .right {
    text-align: right;
  }
  & > div:not(.left) {
    line-height: 6.4rem;
  }
  .logo {
    margin-right: 3rem;
  }
  .title {
    color: #eaf0f6;
    font-size: 3.1rem;
    letter-spacing: 1rem;
  }
`;
