import './App.css';
import { fethPosts } from './api/mainFetch';
import React, { useState, useEffect } from 'react';
import { PostsList } from './components/PostsList/PostsList';

function App() {
  const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fethPosts().then(({ data }) => {
        if (data) {
        setPosts(data)
      }})
  }, []);


 
  return (
    <>
    
      <PostsList posts={posts} />
    
  </>
 )
}

export default App;
