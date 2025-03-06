import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserSearch from './pages/UserSearch';
import AddUser from './pages/AddUser';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserSearch />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
