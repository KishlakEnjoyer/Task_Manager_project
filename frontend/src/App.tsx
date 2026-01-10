import React from 'react';
import './styles/App.css';
import LoginView from './Views/LoginView';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginView />} />
          <Route path="/" element={<div>Главная страница</div>} />
          <Route path="*" element={<div>404 — Страница не найдена</div>} />
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
