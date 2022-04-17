import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux';
import useStyles from "./styles"
function Posts() {

  const posts = useSelector((state) => state.posts);
  const classes = useStyles(); 

  console.log(posts);

  return (
    <>
    <div>Posts</div>
    <Post />
    <Post />
    </>
  )
}

export default Posts