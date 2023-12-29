import React, { useState } from 'react';
import './page/Home.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './page/Header';
import Options from './page/Options';
import BulletinBoardContent from './page/BulletinBoardContent';
import MentorMenteeContent from './page/MentorMenteeContent';
import BulFree from './page/BulFree';
import BulInfo from './page/BulInfo';
import BulEvent from './page/BulEvent';
import Writing from './page/Writing';
import Post from './page/Post';
import Mypage from './page/Mypage';
import ModifyProfile from './page/ModifyProfile'
import MypageLike from './page/MypageLike'
import MypagePost from './page/MypagePost'
import Writing2 from './page/Writing2'


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
          <Route path="/page/BulInfo" element={<BulInfo/>} />
          <Route path="/page/BulEvent" element={<BulEvent/>} />
          <Route path="/page/Writing" element={<Writing/>} />
          <Route path="/page/Post" element={<Post/>} />
          <Route path="/page/Mypage" element={<Mypage/>} />
          <Route path="/page/ModifyProfile" element={<ModifyProfile/>} />
          <Route path="/page/MypageLike" element={<MypageLike/>} />
          <Route path="/page/MypagePost" element={<MypagePost/>} />
          <Route path="/page/Writing2" element={<Writing2/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;