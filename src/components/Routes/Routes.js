import React from 'react'
import { Route, Switch } from 'react-router-dom'
import posts from '../../../blog-posts.json'
import PostDetail from '../PostDetail/PostDetail'
import About from '../About/About'
import Home from '../Home/Home'
import NotFound from '../NotFound/NotFound'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={() => <Home posts={posts.posts} />} />
    <Route path='/about/' exact component={About} />
    <Route path='/post/:slug' component={props => {
      const post = posts.posts.filter(post => props.match.params.slug === post.slug)
      return <PostDetail post={post[0]} />
    }} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
