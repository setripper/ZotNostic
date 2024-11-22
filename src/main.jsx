import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LandingPage from './components/landingPage/landingPage.jsx'
import DiagnosePage from './components/diagnosePage/DiagnosePage.jsx'

//import ContextProvider from './backend/Context.jsx'


const router = createBrowserRouter([
  
  {
    path: '/',
    element: <LandingPage />,
  },

  {
    path: '/diagnose',
    element: <DiagnosePage />,
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
