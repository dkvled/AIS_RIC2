import React from 'react';
import { Link } from 'react-router-dom';
import farm from './img/farm.jpg';
import information from './img/information.png';
import event from './img/event.png';

const BulletinBoardContent = () => {
  return (
    <div className="page">
      <div className="bulletinBoardContent">
        <button className="btn_bulletin">
        <Link to="/page/BulFree">
          <img className="img_bulletin" src={farm}></img>
          <div className="text_bulletin">자유 게시판</div>
          </Link>
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
    </div>
  );
};

export default BulletinBoardContent;