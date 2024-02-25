// Layout.js
import React from 'react';
import Menu from './Menu';

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className="content">{children}</div>
    </div>
  );
}

export default Layout;
