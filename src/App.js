import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './pages/Home';
import About from './pages/About/About';
import Article from './pages/Article/Article';
import ArticlesList from './pages/Article/ArticlesList';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <div id='page-body'>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/articles-list' component={ArticlesList} />
          <Route path='/article/:name' component={Article} />
        </div>
      </div>
    </Router>
  );
}

export default App;
