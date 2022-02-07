import React from 'react';

// Redux-Store Related Imports
import { bindActionCreators } from 'redux';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';

// Component Related Imports
import Header from './components/Header';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// Pages Related Imports
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Landingpage } from './pages/Landingpage';
import Formpage from './pages/Formpage';



export function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Landingpage />}/>
        <Route path="/view/:postId" element={<Single/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/photogrid" element={<PhotoGrid/>}/>
        <Route path="/formpage" element={<Formpage/>}/>
      </Routes>
    </div>
    
  );
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default connect(mapStateToProps, mapDispatchToProps)(Main);
