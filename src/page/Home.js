import React, { useState } from 'react';
import './Home.css';
import logo from './img/logo.png';
import farm from './img/farm.jpg';
import information from './img/information.png';
import event from './img/event.png';
import mentor from './img/mentor.png';
import mentee from './img/mentee.png';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState('bulletinBoard'); // 초기값은 'bulletinBoard'로 설정

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="Home">
      <div className="header">
        <img className="logo" src={logo} alt="로고" />
        <div className="mypage">
          마이페이지
        </div>
      </div>
      <div className="page">
        <div className="options">
          <div className="options_a">
            <h2
              className={`opt_bulletinBoard ${selectedOption === 'bulletinBoard' ? 'active' : ''}`}
              onClick={() => handleOptionClick('bulletinBoard')}
            >
              게시판
            </h2>
            <h2
              className={`opt_mentorMentee ${selectedOption === 'mentorMentee' ? 'active' : ''}`}
              onClick={() => handleOptionClick('mentorMentee')}
            >
              멘토/멘티
            </h2>
          </div>
        </div>
        {selectedOption === 'bulletinBoard' ? (
          <div className="bulletinBoardContent">
            {/* 게시판 페이지에 대한 컨텐츠 */}
            <button className="btn_bulletin">
              <img className="img_bulletin" src={farm}></img>
              <div className="text_bulletin">자유 게시판</div>
            </button>
            <button className="btn_bulletin">
              <img className="img_bulletin" src={information}></img>
              <div className="text_bulletin">정보 게시판</div>
            </button>
            <button className="btn_bulletin">
              <img className="img_bulletin" src={event}></img>
              <div className="text_bulletin">이벤트 게시판</div>
            </button>
          </div>
        ) : (
          <div className="mentorMenteeContent">
            {/* 멘토/멘티 페이지에 대한 컨텐츠 */}
            <button className="btn_mentorMentee">
              <img className="img_bulletin" src={mentor}></img>
              <div className="text_bulletin">멘토로 신청</div>
            </button>
            <button className="btn_mentorMentee">
              <img className="img_bulletin" src={mentee}></img>
              <div className="text_bulletin">멘티로 신청</div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;