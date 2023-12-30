import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ModifyProfile = () => {
  const [profilePic, setProfilePic] = useState('https://www.100ssd.co.kr/news/photo/202307/100261_80090_553.jpg');
  const [nickname, setNickname] = useState('천재농부');
  const [statusMessage, setStatusMessage] = useState('안녕하세요');
  const [phoneNumber, setPhoneNumber] = useState('010-1111-2222');
  const [email, setEmail] = useState('farmer@naver.com');
  const [password, setPassword] = useState('farmer');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 수정된 정보를 처리하는 로직을 추가할 수 있어
  };

  return (
    <div className="Home">
      <div className="page">
        <div className="bulletinBoardContent">
          <div className="top_opt">
            <div className="mypage-name">프로필 수정</div>
          </div>
        </div>
        <div className="mypage-list">
          <div className="profile-list">
            {/* 프로필 사진 수정 */}
            <img src={profilePic} alt="프로필 사진" className='Modify-img'/>
            {/* 나머지 정보 수정 폼 */}
            <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label>닉네임</label>
                <input
                className='modify-input'
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                />
            </div>
            <div className="input-wrapper">
                <label>상태 메세지</label>
                <input
                className='modify-input'
                type="text"
                value={statusMessage}
                onChange={(e) => setStatusMessage(e.target.value)}
                />
            </div>
            <div className="input-wrapper">
                <label>전화번호</label>
                <input
                type="text"
                className='modify-input'
                value={phoneNumber}
                />
            </div>
            <div className="input-wrapper">
                <label>이메일</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-wrapper">
                <label>비밀번호</label>
                <input
                className='modify-input'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="input-wrapper">
                <label>비밀번호 수정</label>
                <input
                className='modify-input'
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                />
            </div>
            <button type="submit" className='BtnModify'>수정하기</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyProfile;
