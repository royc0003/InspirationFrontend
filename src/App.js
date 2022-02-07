import React from 'react';

// Redux-Store Related Imports
import { bindActionCreators } from 'redux';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import auth from './reducers/auth';



export function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Landingpage />}/>
        <Route path="/view/:postId" element={<Single/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route
        path="/photogrid"
        element={
          // Good! Do your composition here instead of wrapping <Route>.
          // This is really just inverting the wrapping, but it's a lot
          // more clear which components expect which props.
          <RequireAuth redirectTo="/login">
            <PhotoGrid/>
          </RequireAuth>
        }
      />
        {/* <Route path="/photogrid" element={<PhotoGrid/>}/> */}
        <Route path="/formpage" element={<Formpage/>}/>
      </Routes>
    </div>
    
  );
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// https://stackoverflow.com/questions/62384395/protected-route-with-react-router-v6
function RequireAuth({ children, redirectTo }) {
  if(auth.isLoading) {
    return <h2>Loading...</h2>
  }
  else if(!auth.isAuthenticated){
    return <Navigate to="/login"/>
  }else {
    <Navigate to={redirectTo}  />
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default connect(mapStateToProps, mapDispatchToProps)(Main);
