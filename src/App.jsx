// src/App.js
import { useState } from 'react';
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import TasksPage from './pages/TasksPage';
import NotFoundPage from './pages/NotFoundPage';
import TaskPage from './pages/TaskPage';
import AddTaskPage from './pages/AddTaskPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  const correctCode = 'ABCDEF';
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage correctCode={correctCode} onLoginSuccess={onLoginSuccess} />}
        />
        <Route
          path="/"
          element={
            isAuthenticated ? <MainLayout /> : <Navigate to="/login" replace />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="jobs" element={<TasksPage />} />
          <Route path="add-job" element={<AddTaskPage />} />
          <Route path="jobs/:id" element={<TaskPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
