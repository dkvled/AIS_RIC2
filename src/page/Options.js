import React from 'react';
import { Link } from 'react-router-dom';

const Options = ({ selectedOption, handleOptionClick }) => {
  return (
    <div className="options">
      <div className="options_a">
            <h2
              className={`opt_bulletinBoard ${selectedOption === 'bulletinBoard' ? 'active' : ''}`}
              onClick={() => handleOptionClick('bulletinBoard')}
            >
              <Link to="/">
                게시판
              </Link>
            </h2>
            <h2
              className={`opt_mentorMentee ${selectedOption === 'mentorMentee' ? 'active' : ''}`}
              onClick={() => handleOptionClick('mentorMentee')}
            >
              멘토/멘티
            </h2>
          </div>
    </div>
  );
};

export default Options;