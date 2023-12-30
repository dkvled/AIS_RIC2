import React, { useState } from 'react';

const SignUpMentor = () => {
  const [nickname, setNickname] = useState('');
  const [interest, setInterest] = useState('');
  const [mentorExpectation, setMentorExpectation] = useState('');

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleInterestChange = (e) => {
    setInterest(e.target.value);
  };

  const handleMentorExpectationChange = (e) => {
    setMentorExpectation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 상태 값을 활용하여 서버로 전송하거나 다른 작업을 수행할 수 있습니다.
    console.log('Nickname:', nickname);
    console.log('Interest:', interest);
    console.log('Mentor Expectation:', mentorExpectation);
    // 이후에 서버로 데이터를 보내거나 다른 로직을 수행할 수 있습니다.
  };

  return (
    <div className="Home">
      <div className="page">
        <div className="bulletinBoardContent">
          <div className="top_opt">
            <div className="mypage-name">멘티 신청</div>
          </div>
        </div>
        <div className="SignUp-list">
          <div className="SignUp-Content">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className='SignUp-label' htmlFor="nickname">닉네임</label>
                <input
                  className='SignUp-select'
                  type="text"
                  id="nickname"
                  value={nickname}
                  onChange={handleNicknameChange}
                />
              </div>
              <div className="form-group">
                <label className='SignUp-label' htmlFor="interest" >관심분야</label>
                <select className='SignUp-select' id="interest" value={interest} onChange={handleInterestChange}>
                  <option value="">선택해주세요</option>
                  <option value="밭">밭</option>
                  <option value="과수원">과수원</option>
                  <option value="낚시">낚시</option>
                </select>
              </div>
              <div className="form-group">
                <label className='SignUp-label' htmlFor="expectation">멘토에게 바라는 점</label>
                <textarea
                  className='SignUp-textarea'
                  id="expectation"
                  value={mentorExpectation}
                  onChange={handleMentorExpectationChange}
                ></textarea>
              </div>
              <button className='SignUp-button' type="submit">신청</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpMentor;
