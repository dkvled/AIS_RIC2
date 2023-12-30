import React from 'react';
import mentor from './img/mentor.png';
import mentee from './img/mentee.png';
import { Link } from 'react-router-dom';

const MentorMenteeContent = () => {
  return (
    <div className="page">
      
      <div className="mentorMenteeContent">
        <button className="btn_mentorMentee">
          <Link to="/page/SignUpMentor" className="linkStyle">
            <img className="img_bulletin" src={mentor}></img>
            <div className="text_bulletin">멘토로 신청</div>
          </Link>
        </button>
        <button className="btn_mentorMentee">
          <Link to="/page/SignUpMentee" className="linkStyle">
            <img className="img_bulletin" src={mentee}></img>
            <div className="text_bulletin">멘티로 신청</div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MentorMenteeContent;
