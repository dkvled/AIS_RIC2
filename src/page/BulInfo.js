import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Home.css';

const BulFree = () => {
  //페이지 수 설정
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // 검색어와 필터링된 게시물을 저장하는 상태
  const postsPerPage = 15; // 페이지 당 게시글 수
  const posts = [
    {
      id: 1,
      title: '안녕하세요 청도 주민입니다',
      date: '2023-12-31',
      views: 25,
    },
    {
      id: 2,
      title: '경상북도의 군. 인구는 약 4만 3천 명 정도',
      date: '2023-12-31',
      views: 45,
    },
    {
      id: 3,
      title: '인접한 자치단체로는 경상북도 경산시, 경주시, 영천시',
      date: '2023-12-31',
      views: 126,
    },
    {
      id: 4,
      title: '마스코트 변신 싸움 소 바우',
      date: '2023-12-31',
      views: 2,
    },
    {
      id: 5,
      title: '농경문화의 대표격인 소를 통해 적대적 계가 아닌 협동',
      date: '2023-12-31',
      views: 89,
    },
    {
      id: 6,
      title: '1977년부터 2002년까지 사용한 청도군의 옛 군기(郡旗).',
      date: '2023-12-30',
      views: 45,
    },
    {
      id: 7,
      title: '삼국 시대 초기 이서소국(伊西小國)의 땅이었다 ',
      date: '2023-12-30',
      views: 83,
    },
    {
      id: 8,
      title: '러다가 신라 유리 이사금 때 신라에 병합되었다',
      date: '2023-12-30',
      views: 18,
    },
    {
      id: 9,
      title: '위 코드는 게시판 페이',
      date: '2023-12-30',
      views: 25,
    },
    {
      id: 10,
      title: '구조를 구현한 것입니다.',
      date: '2023-12-30',
      views: 45,
    },
    {
      id: 11,
      title: '예를 들어, 다음과 같은 CSS를 사용',
      date: '2023-12-30',
      views: 126,
    },
    {
      id: 12,
      title: '다만 디자인에 따라 ',
      date: '2023-12-30',
      views: 2,
    },
    {
      id: 13,
      title: '시판 페이지를 만드는 데 도움을 드리',
      date: '2023-12-30',
      views: 89,
    },
    {
      id: 14,
      title: ' 조회수는 임의로 설정하',
      date: '2023-12-30',
      views: 45,
    },
    {
      id: 15,
      title: '청도청도',
      date: '2023-12-30',
      views: 83,
    },
    {
      id: 16,
      title: '안녕하세요',
      date: '2023-12-30',
      views: 18,
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
            <div className="bulletinName">정보 게시판</div>
            <div className="Search">
              <input type="search" 
                     className='searchWord' 
                     placeholder=" 검색어를 입력해 주세요."
                     onChange={handleSearch}>
              </input>
              <button className="BtnSearch" type="submit">검색</button>
            </div>
            <div className="btnWriting">
              <Link to="/page/Writing" className='linkStyle2'>글 작성하기</Link>
            </div>
          </div>
        </div>
        <div className="bulletinList">
          <div className="bulletinIndex">
              <div className="title">제목</div>
              <div className="date">작성 날짜</div>
              <div className="views">조회수</div>
          </div>
          <div className="bulletinContent">
            {currentPosts.map(post => (
              <div className="contentItem" key={post.id}>
                <div className="contentTitle">
                  <Link to="/page/Post" className='linkStyle2'>{post.title}</Link>
                </div>
                <div className="contentDate">{post.date}</div>
                <div className="contentViews">{post.views}</div>
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

export default BulFree;
