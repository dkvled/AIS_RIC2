import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

    // 함수를 통해 새 알림을 추가하는 예시
  const addNotification = () => {
    const newNotification = "ㅌ님이 회원님의 게시글에 좋아요를 눌렀습니다.";
    setNotifications([newNotification, ...notifications]);
  };
  
  return (
    <div className="header">
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="로고" />
        </Link>
      </div>
      
      <div className="alarm" onClick={toggleDropdown}>
      <button onClick={addNotification}>새 알림 추가</button>
        <FontAwesomeIcon icon={faBell} />
        {showDropdown && (
          <div className="dropdown">
            {/* 알림 목록 */}
            {notifications.map((notification, index) => (
              <div key={index} className="notification">
                {notification}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mypage">
        <Link to="/page/Mypage">마이페이지</Link>
      </div>
      
    </div>
  );
};

export default Header;
