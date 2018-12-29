import React from 'react'
import Post from '../Post/Post'

const Home = (props) => (
  <div>
    { props.posts.length ? props.posts.map(post => <Post {...post} key={post.slug} titleLink />) : <p>Awaiting Posts!</p> }
  </div>
)

export default Home
