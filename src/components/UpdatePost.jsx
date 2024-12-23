import React, { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';

function UpdatePosts () {
    const [posts, setPosts] = useState([])
    const [showForm, setshowForm] = useState(false)
    const [buttonPressed, setButtonPressed] = useState(false)
    const [edittedPost, setEdittedPost] = useState({
        title: '',
        body: ''
    })

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

    const handleEdit = (post) => {
        setshowForm(true)
        setButtonPressed(true)
        setEdittedPost({title: post.title, body: post.body})
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEdittedPost(prevState => ({
            ...prevState,
            [name]: value
        }));
    }


    const handleEditSubmit = (event) => {
        event.preventDefault();
        console.log(edittedPost)
        setButtonPressed(false)
        setshowForm(false)
    }


    return (
        <div>
            <h1>Update Posts</h1>
            <ul>
                {
                posts.map(post => (
                    <li key={post.id}>
                        {post.title} - {post.body}
                        <button onClick={() => handleEdit(post)}>Edit</button>
                    </li>
                ))
                }
            </ul>

            {
                (buttonPressed) ? (
                    <Form onSubmit={handleEditSubmit}>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Edit Post Title</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter title" 
                                name="title"
                                value={edittedPost.title}
                                onChange={handleChange}
                                />
                                </Form.Group>
                
                        <Form.Group className="mb-3" controlId="formPostBody">
                            <Form.Label>Edit Post Body</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Body" 
                                name="body"
                                value={edittedPost.body}
                                onChange={handleChange}
                                />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Form>
                ) : (
                    ''
                )
            }
        </div>
    )
}

export default UpdatePosts;