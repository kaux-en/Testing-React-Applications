import React from 'react'
import FetchPosts from './components/FetchPosts'
import './App.css'
import AddPost from './components/AddPost'
import UpdatePosts from './components/UpdatePost'

function App() {
  

  return (
    <>
      <FetchPosts />
      <AddPost />
      <UpdatePosts />
    </>
  )
}

export default App
