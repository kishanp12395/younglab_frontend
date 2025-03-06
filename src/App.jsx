import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserSearch from './pages/UserSearch';
import AddUser from './pages/AddUser';
import NotFound404 from './pages/NotFound404';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserSearch />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/*" element={<NotFound404/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
