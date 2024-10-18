import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // No need for .jsx extension in TypeScript
import './index.css';

const container = document.getElementById('root');
if (!container) {
  throw new Error("Root container is not found");
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
