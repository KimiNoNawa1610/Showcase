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
        <div className="ft-list" id="contact">
            <p className="ft-list-title">HOANG NGO CONSTRUCTION COMPANY LIMITED</p>
            <ul className="ft-list-items">
              <li>
                <a href="mailto:Connect.hnstudio@gmail.com">Connect.hnstudio@gmail.com</a>
              </li>
              <li>
                <a href="tel:+84975409010">Hotline: 0975409010 (Mr.Thắng)</a>
              </li>
              <li>
                <a href="tel:+84939959195">0939959195 (Mrs. Anh)</a>
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default Layout;
