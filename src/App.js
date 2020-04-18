import React from 'react';
import { Provider } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Landing from './components/home/Landing'
import store from './store'
import Movie from './components/home/Movie'

function App() {
  return (

    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          {/* <Landing/> */}
          <Route exact path="/" component={Landing}/>
          <Route exact path="/movie/abc/:id" component={Movie}/>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
