import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavs } from './Navs.style';

const Navs = () => {
  return (
    <StyledNavs>
      <li>
        <NavLink exact to="/" className="link" activeClassName="selected">
          알람대시보드
        </NavLink>
      </li>
      <li>
        <NavLink to="/status" className="link" activeClassName="selected">
          심각/경고 알람추이
        </NavLink>
      </li>
    </StyledNavs>
  );
};

export default Navs;
