import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PostList() {
  const navigate = useNavigate();
  const [posts, setPost] = useState([]); // 이니셜밸류
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const posts = useSelector((state) => state.posts);
  useEffect(() => {
    async function fetchPost() {
      try {
        const url = 'http://localhost:3000/posts';
        const response = await axios.get(url);
        // const response = await axios({ url: url });

        const data = response.data;
        setLoading(false);
        setPost(data);
      } catch (err) {
        setError('에러났어');
        console.error(err);
        console.log('에러남');
        // return <div>error</div>;
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, []);

  if (loading === true) {
    return <div>로딩중</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div>
        <h2>posts</h2>
        <ul>
          {posts.map((post) => {
            const { id, title, content } = post;
            return (
              <li key={id}>
                <Link to={`/posts/${id}`} state={{ post }}>
                  <h3>{title}</h3>
                </Link>
                {/* <h3
                  onClick={() => {
                    // 이동을 하고 싶다
                    navigate(`/posts/${id}`);
                  }}
                >
                  {title}
                </h3> */}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
