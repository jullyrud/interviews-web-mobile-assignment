import { PostWrap, PostTitle, PostItem} from "./PostCardStyled";
import { useState } from "react";


export function PostCard({ post }) {

    const [isVisible, setVisible] = useState(false);
    console.log(post);

     function makeBodyVisible() {
    setVisible(st => !st)
  }
    const { title, body } = post 

    return (
     
        <PostWrap>
            <PostItem onClick={makeBodyVisible}>
                <PostTitle >{title}</PostTitle>
                { isVisible && <p>{body}</p>}
            </PostItem>
           
        </PostWrap>

        
        
    )
}