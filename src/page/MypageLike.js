import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

const MypageLike = () => {

  const [liked, setLiked] = useState(null);

  const handleLike = (postId) => {
      setLiked(postId === liked ? null : postId);
    };
  //페이지 수 설정
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // 검색어와 필터링된 게시물을 저장하는 상태
  const postsPerPage = 15; // 페이지 당 게시글 수
  const posts = [
    {
      id: 1,
      title: '위 코드는 게시판 페이',
      date: '2023-01-15',
    },
    {
      id: 2,
      title: '구조를 구현한 것입니다.',
      date: '2023-02-12',
    },
    {
      id: 3,
      title: '예를 들어, 다음과 같은 CSS를 사용',
      date: '2023-04-17',
    },
    {
      id: 4,
      title: '다만 디자인에 따라 ',
      date: '2023-11-27',
    },
    
  ];
  //페이지 수 설정
  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const slicedPosts = posts.slice(indexOfFirstPost, indexOfLastPost); // 페이지당 게시글 수로 슬라이스
    setCurrentPosts(slicedPosts);
    
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    setPageNumbers(pageNumbers);

    // 검색어를 기반으로 게시물 필터링
    const filteredPosts = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setCurrentPosts(filteredPosts.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, searchQuery, posts, postsPerPage]);
  
  

  const handleClick = (number) => {
    setCurrentPage(number);
  };


  const handleSearch = event => {
    setSearchQuery(event.target.value); // 검색어 상태 업데이트
  };
  return (
    <div className="Home">
      <div className="page">
        <div className="bulletinBoardContent">
          <div className="top_opt">
            <div className="bulletinName">좋아요 누른 게시글</div>
            <div className="Search">
              <input type="search" 
                     className='searchWord' 
                     placeholder=" 검색어를 입력해 주세요."
                     onChange={handleSearch}>
              </input>
              <button className="BtnSearch" type="submit">검색</button>
            </div>
          </div>
        </div>
        <div className="bulletinList">
          <div className="bulletinIndex">
              <div className="title">제목</div>
              <div className="date">작성 날짜</div>
              <div className="views"></div>
          </div>
          <div className="bulletinContent">
          {currentPosts.map(post => (
      <div className="contentItem" key={post.id}>
        <div className="contentTitle">
          <Link to="/page/Post" className='linkStyle2'>{post.title}</Link>
        </div>
        <div className="contentDate">{post.date}</div>
        <div className="contentViews">
          <FontAwesomeIcon
            icon={liked === post.id ? farHeart : faHeart}
            className='linkStyle4'
            onClick={() => handleLike(post.id)}
          />
        </div>
      </div>
    ))}
          </div>
          <div className="pagination">
          {pageNumbers.map((number) => (
            <span
              key={number}
              onClick={() => handleClick(number)}
              className={currentPage === number ? 'active' : ''}
            >
              {number}
            </span>
          ))}
        </div>
        </div>
      </div>
      </div>
  );
};

export default MypageLike;
