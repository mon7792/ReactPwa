import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './base.css'
import posts from '../blog-posts.json'
// import styles from './App.css'
import Header from './components/Header/Header'
// import Post from './components/Post/Post'
import PostDetail from './components/PostDetail/PostDetail'
import About from './components/About/About'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'

const App = () => (
  <Router>
  <div>
  <Header />
  <Switch>
  <Route path='/' exact component={Home} />
  <Route path='/about/' exact component={About} />
  <Route path='/post/:slug' component={props => {
    const post = posts.posts.filter( post => props.match.params.slug === post.slug)
    // console.log(props.match.params.slug);
    // posts.posts.map(post => console.log(post.slug))
    return <PostDetail post={post[0]}/>
  }} />
  <Route component={NotFound} />
  </Switch>
  </div>
  </Router>
)

export default App
