import React from 'react';
import { Link } from 'react-router-dom';
import Clock from '@components/Clock';
import Navs from '@components/Navs';
import Logo from '@images/logo.png';
import { StyledHeader } from './Header.style';

const Header = () => {
  return (
    <StyledHeader>
      <div className="left">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <Navs />
      </div>
      <div className="middle">
        <h1 className="title">알람대시보드</h1>
      </div>
      <div className="right">
        <Clock />
      </div>
    </StyledHeader>
  );
};

export default Header;
