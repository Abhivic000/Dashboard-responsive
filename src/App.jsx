import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard';
import Backlog from './pages/Backlog';
import ActiveSprint from './pages/ActiveSprint';
import Reports from './pages/Reports';
import Pages from './pages/Pages';
import Settings from './pages/Settings';

function App() {

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboards" />} />
            <Route path="/dashboards" element={<Dashboard/>} />
            <Route path="/backlog" element={<Backlog/>} />
            <Route path="/active-sprint" element={<ActiveSprint />} />
            <Route path="/report" element={<Reports />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
