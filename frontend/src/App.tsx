import React from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';

import LoginView from './Views/LoginView';
import ProjectView from './Views/ProjectView';

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        // algorithm: theme.defaultAlgorithm,
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginView />} />
          <Route path="/project" element={<ProjectView />} />
          <Route path="/" element={<div>Главная страница</div>} />
          <Route path="*" element={<div>404 — Страница не найдена</div>} />
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
