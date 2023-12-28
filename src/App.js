import React, { useState } from 'react';
import './page/Home.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './page/Header';
import Options from './page/Options';
import BulletinBoardContent from './page/BulletinBoardContent';
import MentorMenteeContent from './page/MentorMenteeContent';
import BulFree from './page/BulFree';
import Writing from './page/Writing';
import Post from './page/Post';
import Mypage from './page/Mypage';


const App = () => {
  const [selectedOption, setSelectedOption] = useState('bulletinBoard');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Router>
      <div className="Home">
        <Header />
        <Options selectedOption={selectedOption} handleOptionClick={handleOptionClick} />
        <Routes>
          <Route path="/" element={
            selectedOption === 'bulletinBoard' ? <BulletinBoardContent /> : <MentorMenteeContent />
          } />
          <Route path="/page/BulFree" element={<BulFree/>} />
          <Route path="/page/Writing" element={<Writing/>} />
          <Route path="/page/Post" element={<Post/>} />
          <Route path="/page/Mypage" element={<Mypage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
