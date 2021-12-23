import styled from 'styled-components';

export const StyledNavs = styled.ul`
  display: flex;
  li {
    height: 32px;
  }
  li:first-child {
    width: 104px;
    margin-right: 1rem;
  }
  li:last-child {
    width: 144px;
  }
  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #81929d;
    font-size: 1.6rem;
  }
  .selected {
    border: 1px solid #73b900;
    color: #73b900;
  }
`;
