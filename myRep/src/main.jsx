import React from 'react'
import ReactDOM from 'react-dom/client'
import   App   from './app.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={"/myRep"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
