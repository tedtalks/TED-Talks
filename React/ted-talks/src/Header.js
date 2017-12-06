import React from 'react';
import tedLogo from './img/tedLogo.svg'
import { Link, withRouter } from 'react-router-dom'
import Items from './Items';
import './Header.css'

const Header = withRouter(({ history }) =>
    <div className="header">
      <div className="headerText" onClick={() => { history.push(`${process.env.PUBLIC_URL}/`) }}>
        <img src={tedLogo} className="tedLogo" alt="logo" />
        <div className="subtitle">Dataset worth analyzing</div>
      </div>
      <Items />
    </div>);


export default Header;