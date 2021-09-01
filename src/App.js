import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Posts from './features/posts/Posts';
import Post from './features/posts/Post';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/post/:postId">
            <Post />
          </Route>
          <Route path="/">
            <Posts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
