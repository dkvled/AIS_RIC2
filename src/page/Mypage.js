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
            <button className="mypage-button">프로필 수정</button>
            <button className="mypage-button">내가 쓴 게시글</button>
            <button className="mypage-button">좋아요 누른 게시글</button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Mypage;
