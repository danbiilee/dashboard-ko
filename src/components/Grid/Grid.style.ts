import styled, { css } from 'styled-components';

interface StyledGridProps {
  type: string;
  length: number;
}

export const StyledGrid = styled.div<StyledGridProps>`
  // Layout
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #bee3ff;
  font-size: 1.9rem;
  .row {
    display: grid;
    border-top: 1px solid #14232b;
  }
  .thead {
    flex-basis: 3.2rem;
    background-color: #33454d;
    color: #a5bccc;
    text-shadow: 0px 1px 1px #000000f4;
    .row {
      height: 100%;
      grid-template-columns: ${({ type, length }) => {
        switch (type) {
          case 'month':
          case 'week':
          default:
            return `4.8rem 22.3rem minmax(21.8rem, auto) minmax(auto, ${length > 5 ? 'calc(8.3rem + 6px)' : '8.3rem'})`;
          case 'notTaken':
            return '4.8rem 27.3rem 6rem 26.6rem 9rem auto';
          case 'prepare':
            return `4.6rem 15.5rem minmax(16.7rem, auto) 5.6rem 5.6rem minmax(auto, ${
              length > 5 ? 'calc(9.5rem + 6px)' : '9.5rem'
            })`;
        }
      }};
    }
  }
  .tbody {
    flex: 1;
    overflow-y: auto;
    display: grid;
    grid-template-rows: repeat(${({ length }) => length}, 20%);
    .row {
      grid-template-columns: ${({ type }) => {
        switch (type) {
          case 'month':
          case 'week':
          default:
            return '4.8rem 22.3rem minmax(21.8rem, auto) 8.3rem';
          case 'notTaken':
            return '4.8rem 27.3rem 6rem 26.6rem 9rem auto';
          case 'prepare':
            return '4.6rem 15.5rem minmax(16.7rem, auto) 5.6rem 5.6rem 9.5rem';
        }
      }};
    }
    .row:hover div {
      background-color: #33454d;
    }
  }
  .cell {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.8rem 0 1rem;
    &:not(:first-of-type) {
      border-left: 1px solid #14232b;
    }
    text-shadow: 0px 1px 1px #000000bc;
    cursor: pointer;
    span {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: pointer;
    }
  }
  .thead .cell,
  .thead .cell .text {
    cursor: default;
  }

  // Color
  .odd {
    background-color: #13384d;
  }
  .even {
    background-color: #122e3d;
  }
  .cnt,
  .ratio {
    background-color: #135e32;
    color: #fff;
  }
  .grade {
    color: #fff;
    font-size: 1.87rem;
    text-shadow: 0px 1px 1px #000000;
  }
  .grade.critical {
    background-color: #e6361f;
  }
  .grade.warning {
    background-color: #ffc400;
  }
  .this-week {
    color: #ffc400;
  }
  .last-week {
    color: #52f9ff;
  }

  // Size
  .cell:is(.no, .cnt, .this-week, .last-week) {
    font-size: 2rem;
  }
  ${({ type }) =>
    type === 'prepare' &&
    css`
      .thead .cell:last-of-type {
        letter-spacing: -0.5px;
      }
    `}

  // Align
  .cell:is(.service-nm, .team-nm, .alarm-nm, .log) {
    justify-content: start;
  }
  .cell:is(.cnt, .this-week, .last-week, .day, .ratio) {
    justify-content: end;
  }

  // Arrow
  .inc,
  .dec {
    margin: -0.3rem 0.3rem 0 0;
    border: 0.6rem solid transparent;
  }
  .inc {
    border-bottom: 1.2rem solid #e6361f;
    border-top: 0;
  }
  .dec {
    border-top: 1.2rem solid #000093;
    border-bottom: 0;
  }
`;
