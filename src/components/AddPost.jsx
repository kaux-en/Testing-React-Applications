import React, { useState } from "react";
import { Container, Form, Button } from 'react-bootstrap';



function AddPost () {
    const url = 'https://jsonplaceholder.typicode.com/posts/?_limit=10'
    const [newPost, setNewPost] = useState({
        title: '',
        body: ''
    })
    const [posts, setPosts] = useState([])


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
            });

        if (!response.ok) {
            throw new Error('Error adding the post:')
        } 

        console.log(newPost)
        const data = response.json()
        setPosts([data, ...newPost])
        setNewPost({title: '', body: '' })
   
        } catch (error) {
            console.log('Error:', error.message)
        }        
    };


    const handleChange = (event) => {
        const { name, value } = event.target
        setNewPost({
            ...newPost,
            [name]: value
        });
    };
        

    return (
        
        <Container>
            <h1>Add A Post</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Post Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter title" 
                        name="title"
                        value={newPost.title}
                        onChange={handleChange}
                        />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPostBody">
                    <Form.Label>What's your post</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Body" 
                        name="body"
                        value={newPost.body}
                        onChange={handleChange}
                        />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
      </Container>
      
    )
}

export default AddPost;