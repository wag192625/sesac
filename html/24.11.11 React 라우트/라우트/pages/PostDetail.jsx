import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function PostDetail() {
  const { postId } = useParams();
  const location = useLocation();
  const { post } = location.state;
  const { title, content } = post;
  return (
    <>
      <div>{title}</div>
      <div>{content}</div>
      {/* <p>{content}</p> */}
    </>
  );
}
