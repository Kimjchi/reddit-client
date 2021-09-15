import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Posts from './features/posts/Posts';
import Post from './features/posts/Post';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/post/:subreddit/:postId">
            <Post />
          </Route>
          <Route path="/">
            <Posts/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
