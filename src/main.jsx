import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/css/index.css'
import { Layout } from './pages/layout.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Layout></Layout>
  </React.StrictMode>,
)
