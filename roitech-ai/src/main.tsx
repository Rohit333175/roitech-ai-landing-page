import React from 'react'
import ReactDOM from 'react-dom/client'

// IMPORTANT: import Tailwind CSS BEFORE rendering
import './index.css'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
