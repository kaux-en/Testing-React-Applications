import React, { useEffect, useState } from "react";


const FetchPosts = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        const fetchPost = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10');
            const data = await response.json();
            console.log(data)
            setPosts(data)
            } catch (error) {
                console.log("Error:", error)
            } 
            
        }; fetchPost();
}, [])

    const deletePost = async (id) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })   
            if (!response.ok) {
                console.log("Error deleting post")
            } else {
                setPosts(posts.filter(post => post.id !== id ))
                console.log(`${id}:  was deleted`)
            }   
        } catch (error) {
            console.log("Error:", error)
    }}


    return (
        <div>
            <h1>Posts</h1>
                <ul>
                {posts.length === 0 ? (
                    <p>No Posts Available</p>
                ):(
                posts.map(post => (
                    <li key={post.id}>
                        {post.title} - {post.body}
                        <button onClick={() => deletePost(post.id)}>Delete Post</button>
                    </li>
                ))
                )}
            </ul>
        </div>
    )
};

export default FetchPosts;