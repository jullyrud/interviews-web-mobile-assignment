import './App.css';
import { Routes, Route } from "react-router-dom"
import React, { useState, useEffect } from 'react';

import { fethPosts } from './api/mainFetch';
import { PostsList } from './components/posts/PostsList/PostsList';
import { AppBar } from './components/AppBar/AppBar';
import { Comments } from './components/Comments/Comments';
import { Albums } from './components/Albums/Albums';
import { NotFound } from './components/NotFound/NotFound';


function App() {
const postPerPage = 10
const [posts, setPosts] = useState([]);
const [listPosts, setListPosts] = useState([]);
const [firstValuePage, setFirstValuePage] = useState(0);
const [laststValuePage, setLaststValuePage] = useState(postPerPage);
  
  
  
    useEffect(() => {
      fethPosts().then(({ data }) => {
        if (data) {
        setPosts(data)
        }
        const newData = posts.slice(0, laststValuePage);
        setListPosts(newData)
        })
  }, [firstValuePage, laststValuePage, listPosts.length, posts]);

  
  function onLoadMoreBtnClick() {
    setFirstValuePage(prevFirstValue => prevFirstValue + postPerPage);
    setLaststValuePage(prevLastValue => prevLastValue + postPerPage);
    setListPosts(st=>[...st, ])
  }

  return (
    <>
    <Routes>
        <Route path="/" element={<AppBar onLoadMoreBtnClick={onLoadMoreBtnClick}  />}>
          <Route index element={<PostsList posts={listPosts} />} />
          <Route path="/comments" element={<Comments />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="*" element={<NotFound />} />
        </ Route>
        
      </Routes>
    </>
 )
}

export default App;
