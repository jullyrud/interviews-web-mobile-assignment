import { PostCard } from "../PostrCart/PostCart"


export function PostsList( {posts} ) {
    
 return (
     <>
        
         {posts.map((post) => <PostCard key={post.id} post={post} />)}
     </>
        
    )
}

