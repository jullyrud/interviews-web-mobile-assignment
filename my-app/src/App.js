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
const [posts, setPosts] = useState([]);
const [listPosts, setListPosts] = useState([]);
const [postPerPage, setPostPerPage] = useState(10);
  
    useEffect(() => {
      fethPosts().then(({ data }) => {
        if (data) {
        setPosts(data)
        }})
  }, []);

  useEffect(() => {
    function makeListWiev(data, postPerPage) {
      const newData = data.slice(0, postPerPage);
      setListPosts(newData);
    }
makeListWiev(posts, postPerPage);
  }, [posts, postPerPage]);

  return (

    <>
    <Routes>
        <Route path="/" element={<AppBar />}>
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
