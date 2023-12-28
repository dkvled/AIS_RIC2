import React, { useState, useEffect } from 'react';
import './Home.css';

const Writing = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    const textarea = document.getElementById('content');
    textarea.style.height = 'auto'; // 자동 높이 설정
    textarea.style.height = `${textarea.scrollHeight}px`; // 스크롤 높이만큼 자동으로 조절
  }, [content]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageUpload = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const filteredFiles = selectedFiles.filter((file) => {
      const fileType = file.type.split('/')[0]; // 이미지인지 확인
      return fileType === 'image';
    });

    setImages([...images, ...filteredFiles]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 게시글 작성 로직을 추가할 수 있어요.
    console.log('제목:', title);
    console.log('내용:', content);
    console.log('이미지:', images);
    // 게시글 작성 후 처리할 로직을 넣어주세요.
  };

  return (
    <div className="page">
      <div className="writingPage">
        <h2 className="writeHeading">게시글 작성</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">제목</label>
          <input
            id="title"
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={handleTitleChange}
          />
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={handleContentChange}
            style={{ overflowY: 'hidden' }} // 세로 스크롤 제거
            rows={5}
            >
          </textarea>

          <label htmlFor="content">사진 추가</label>
          <div className="imageUploadContainer">
            {[1, 2, 3].map((index) => (
              <div className="imageBox" key={index}>
                <label htmlFor={`imageUpload${index}`} className="imageLabel">
                  {images[index - 1] ? (
                    <img
                      src={URL.createObjectURL(images[index - 1])}
                      alt={`Image ${index}`}
                      className="imagePreview"
                    />
                  ) : (
                    <div className="imagePlaceholder">
                      <div className='plus'>+</div>
                      <div className='imageplus'>상자 안에 </div>
                      <div className='imageplus'>사진을 넣어주세요</div>
                    </div>
                  )}
                </label>
                <input
                  type="file"
                  id={`imageUpload${index}`}
                  accept=".jpg, .jpeg, .png"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
              </div>
            ))}
          </div>
          <button type="submit" className="Writing_Button" onClick={handleSubmit}>게시
          </button>

        </form>
      </div>

    </div>
  );
};

export default Writing;
