import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';


function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App body */}

      {/* Sidebar */}

      <div className="app__body">
        <Sidebar />
      </div>

      {/* Feed */}
      
      {/* Widgets */}

    </div>
  );
}

export default App;
