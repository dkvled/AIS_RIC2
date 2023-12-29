import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


const Mypage = () => {
  

  return (
    <div className="Home">
      <div className="page">
        <div className="bulletinBoardContent">
          <div className="top_opt">
            <div className="mypage-name">마이페이지</div>
          </div>
        </div>
        <div className="mypage-list">
          <div className="button-row">
            <button className="mypage-button"><Link to="/page/ModifyProfile" className='linkStyle2'>프로필 수정</Link></button>
            <button className="mypage-button"><Link to="/page/MypagePost" className='linkStyle2'>내가 쓴 게시글</Link></button>
            <button className="mypage-button"><Link to="/page/MypageLike" className='linkStyle2'>좋아요 누른 게시글</Link></button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Mypage;
