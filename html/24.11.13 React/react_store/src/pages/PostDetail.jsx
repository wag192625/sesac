import axios from 'axios';
import { replace } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import postApi from '../api/postApi';

export default function PostDetail() {
  const navigate = useNavigate();

  const { postId } = useParams();
  // const posts = useSelector((state) => state.posts);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const url = 'http://localhost:3000/posts';
    async function fetchPostList() {
      try {
        // const response = await axios(`${url}/${postId}`);
        // const postList = response.data;
        // setPost(postList.find((el) => el.id === parseInt(postId)));

        const data = await postApi.getPostById(postId);
        setPost(data);
      } catch (err) {
        // navigate('/posts');
        navigate('/not-found', { replace: true });
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPostList();
  }, []);

  if (loading === true) {
    return <div>로딩중</div>;
  }
  // if (error) {
  //   return <div>{error}</div>;
  // }
  // console.log(postList);

  return (
    <div>
      detail
      <h3>{post?.title}</h3>
      <p>{post?.content}</p>
    </div>
  );
}
