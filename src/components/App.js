import Header from './Header.js';
import Home from '../pages/Home';
import NewPost from '../pages/NewPost';
import PostView from '../pages/PostView';
import { Route } from 'react-router-dom';

import '../App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/new">
        <NewPost />
      </Route> 
      <Route exact path="/posts/:postId">
        <PostView />
      </Route>

    </div>
  );
}

export default App;
