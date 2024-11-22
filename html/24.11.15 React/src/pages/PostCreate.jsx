import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../store/slices/postsSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PostCreate() {
  // const posts = useSelector((state) => state.posts);
  const [formData, setformData] = useState({ title: '', content: '' });

  const dispatch = useDispatch();
  //    ㄴ reducer를 실행시키는 녀석
  const navigete = useNavigate();

  function handleChange(e) {
    const inputValue = e.target.value;
    const key = e.target.name;
    // setPost({ title: inputValue, content: post.content });
    // setPost({ ...post, title: inputValue });
    setformData({ ...formData, [key]: inputValue });
  }

  function handleSubmit(e) {
    e.preventDefault();
    async function createPost() {
      const url = 'http://localhost:3000/posts';
      const response = await axios.post(url, formData);
      const data = response.data;
      const id = data.id;
      navigete(`/posts/${id}`);
    }
    createPost();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">제목 : </label>
        <input type="text" name="title" onChange={handleChange} />
        <label htmlFor="content">
          내용 :<textarea name="content" id="" onChange={handleChange}></textarea>
        </label>
        <button>제출</button>
      </form>
    </div>
  );
}
