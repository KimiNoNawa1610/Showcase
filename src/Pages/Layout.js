// Layout.js
import React from 'react';
import Menu from '../components/Menu';
import '../css/Layout.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className="content">{children}</div>
      <br/>
      <div className='contacts'>
        this is contacts
      </div>
    </div>
  );
}

export default Layout;
