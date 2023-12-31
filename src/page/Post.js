import React, { useState, useRef } from 'react';
import './Home.css';
import profile from './img/a.png';

const Post = () => {
  //댓글사용자정보
  const currentUser = {
    profileImage: 'https://www.palnews.co.kr/news/photo/202010/203411_43193_327.jpg', // 사용자 프로필 사진 URL
    userName: '천재농부', // 사용자 이름
  };

  // 사용자 정보 예시 (임시 데이터)
  const [userData, setUserData] = useState({
    profileImage: 'https://www.palnews.co.kr/news/photo/202010/203411_43193_327.jpg',
    userName: '천재농부',
    postDate: '12월 31일',
    postTitle: '복숭아 따기 축제',
    postContent: '제 과수원에 복숭아가 많이 남아서 복숭아 따기 축제를 개최합니다.',
    postContent2: '날짜: 2024.1.2 ~ 2024.1.20',
    postContent3: '위치: 청도군 화양읍 범곡리11',
    postContent4: '참가비: 10000원',
    postContent5: '많은 참여 부탁드립니다:>',

    photos: [
      'https://health.chosun.com/site/data/img_dir/2023/06/01/2023060101900_0.jpg',
      'https://www.100ssd.co.kr/news/photo/202307/100261_80090_553.jpg',
      'https://sanghafarm.co.kr/sanghafarm_Data/upload/shop/product/202309/C0009537_2023090810423105885.jpg',
    ],
    likeCount: 0,
    commentCount: 0,
    
    comments: [
      //{ id: 1, content: '댓글 내용 1', date: '12월 25일' },
      //{ id: 2, content: '댓글 내용 2', date: '12월 26일' },
    ],
  });

  //댓글
  const [newComment, setNewComment] = useState('');
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setUserData({ ...userData, likeCount: userData.likeCount + 1 });
      setLiked(true);
    } else {
      setUserData({ ...userData, likeCount: userData.likeCount - 1 });
      setLiked(false);
    }
  };

  const commentSectionRef = useRef(null);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString();

    const updatedComments = [
      ...userData.comments,
      {
        id: userData.comments.length + 1,
        userName: currentUser.userName,
        profileImage: currentUser.profileImage,
        content: newComment,
        date: currentDate,
      },
    ];

    setUserData({
      ...userData,
      comments: updatedComments,
      commentCount: userData.commentCount + 1, // 댓글 수 증가
    });
    setNewComment('');

    if (commentSectionRef.current) {
      commentSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };
  

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };
  
  const handleTextareaKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // 엔터 키 입력 시 새 줄이 생성되는 것을 방지합니다
      handleCommentSubmit(e); // 댓글 제출 함수를 호출합니다
    }
  };
  
  //이미지 모달 창 구현
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="Home">
      <div className="page-post">
        <div className="postPage">
            {/* 작성자 정보 */}
          <div className="author-info">
            <img src={userData.profileImage} alt="프로필 사진" />
            <div className="author-details">
              <p className="user-name">{userData.userName}</p>
              <p className="post-date">{userData.postDate}</p>
            </div>
          </div>

          {/* 게시글 제목 */}
          <h1>{userData.postTitle}</h1>

          {/* 게시글 내용 */}
          <p>{userData.postContent}</p>
          <p>{userData.postContent2}<br/>
          {userData.postContent3}<br/>
          {userData.postContent4}</p>
          <p>{userData.postContent5}</p>

          {/* 사진 일렬로 표시 */}
          <div className="image-gallery">
            {userData.photos.slice(0, 3).map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Photo ${index + 1}`}
                onClick={() => handleImageClick(photo)}
              />
            ))}
          </div>

          {/* 모달 */}
          {selectedImage && (
            <div className="modal" onClick={handleCloseModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="modal-close" onClick={handleCloseModal}>
                  &times;
                </span>
                <img src={selectedImage} alt="Selected" />
              </div>
            </div>
          )}
          

            {/* 좋아요, 댓글 기능 */}
          <div className="interactions">
            <button onClick={handleLike} disabled={liked}>
              좋아요
            </button>
            <p>좋아요 수: {userData.likeCount}</p>
            <p>댓글 수: {userData.commentCount}</p>
            </div>
          </div>

          {/* 댓글 섹션 */}
          <div className="commentPage">


      {/* 댓글 목록 */}
      <div className="comments">
        {userData.comments.map((comment) => (
          <div key={comment.id} className="comment">
            <img src={comment.profileImage} alt={`${comment.userName}의 프로필`} />
            <div className="comment-details">
              <p className="comment-user">{comment.userName}</p>
              <p className="comment-date">{comment.date}</p>
            </div>
            
            <p className="comment-content">{comment.content}</p>
          </div>
        ))}
        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <div className="comment-input">
            <textarea
              name="content"
              placeholder="댓글을 입력하세요"
              value={newComment}
              onChange={handleInputChange}
              onKeyPress={handleTextareaKeyPress} // 키 입력 핸들러를 추가합니다
            />
            <button type="submit">작 성</button>
          </div>
       </form>
      </div>
      </div>
  </div>
  </div>
  );
};

export default Post;
