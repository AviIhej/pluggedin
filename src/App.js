import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Login from './components/Login/Login';
import Widgets from './components/Widgets/Widgets';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import './App.css';
import { auth } from './firebase';


function App() {

  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))

        console.log(userAuth.email)
      }else {
        // user is logged out
        dispatch(logout())
      }
    }) // listens to any authentication changes
  }, [])

  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? <Login /> : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
