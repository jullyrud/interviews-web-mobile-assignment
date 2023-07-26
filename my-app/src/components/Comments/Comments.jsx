import { fethComments } from "../../api/mainFetch"
import React, { useState, useEffect } from 'react';



export function Comments() {
  const [comments, setComments] = useState([]);

    useEffect(() => {
      fethComments().then(({ data }) => {
        if (data) {
        setComments(data)
      }})
  }, []);

  return (
    <>
    {console.log(comments)}
    <h1>here your comments</h1>
    </>
 
        
    )
}

  
  