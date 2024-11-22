import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/slices/loginSlice';

export default function Header() {
  const { loginState } = useSelector((state) => state.logState);

  const dispatch = useDispatch();
  // const [id, loginState] = useState();

  // function logCheck() {}
  return (
    <header>
      <div>
        <button onClick={() => console.log(loginState)}>출력</button>

        {!loginState ? (
          <button
            onClick={() => {
              dispatch(login());
            }}
          >
            로그인
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(logout());
            }}
          >
            로그아웃
          </button>
        )}
      </div>
      <ul>
        <li>
          <Link to="/">Home으로</Link>
        </li>
        <li>
          <Link to="/posts">게시글로</Link>
        </li>
        {loginState && (
          <li>
            <Link to="/posts/create">게시글 생성</Link>
          </li>
        )}
      </ul>
    </header>
  );
}
