// src/App.js
import { useState } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
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
  // The "correctCode" variable stores the code. In a real app, this could come from an env variable.
  const correctCode = 'ABCDEF';

  // Local state to track if user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/login"
          element={<LoginPage correctCode={correctCode} onLoginSuccess={onLoginSuccess} />}
        />
        
        {/* Protect these routes: if not authenticated, redirect to /login */}
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
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
