// Layout.js
import React from "react";
import Menu from "../components/Menu";
import "../css/Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="mainbody">
      <Menu />
      <div className="content">{children}</div>
      <br />
      <div className="contacts">
        <div className="contact-container">
          <img
            src="/contactprom.png"
            alt="contact-prom"
            className="contactprom"
          />
          <button className="contact-button">Liên Hệ Chúng Tôi</button>{" "}
          {/*This is where we will put the contact link like email or something*/}
        </div>
        <div className="partners">
        <img
            src="/partners.jpg"
            alt="partners-img"
            className="partnersimg"
          />
        </div>
        <div className="ft-list" id="contact">
          <p className="ft-list-title">
            <img src="logo.png" alt="Logo" className="contact-logo" />
            <h4>© 2018 - 2024  CÔNG TY TNHH XÂY DỰNG HOÀNG NGÔ</h4>
            
          </p>
          <ul className="ft-list-items">
            <li>
              <div className="contact-info">
                <a href="mailto:Connect.hnstudio@gmail.com">
                  Email: Connect.hnstudio@gmail.com
                </a>
                {/* <span>(Mr.Thắng)</span> */}
              </div>
            </li>

            <li>
              <div className="contact-info">
                <a href="tel:+84314017942">MST: 0314017942</a>
              </div>
            </li>

            <li>
              <div className="contact-info">
                <p>Địa Chỉ Liên Lạc: 132/6A Kha Vạn Cân, Tổ 21, Khu phố 3, Phường Hiệp Bình Chánh, <br></br>
                Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;
