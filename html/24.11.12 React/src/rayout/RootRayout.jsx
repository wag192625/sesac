import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import WebtoonRayout from './WebtoonRayout';
import Nav from '../components/Nav';

export default function RootRayout() {
  return (
    <>
      <Header />
      {/* <Nav></Nav> */}
      <Outlet></Outlet>
      {/* <WebtoonRayout /> */}
    </>
  );
}
