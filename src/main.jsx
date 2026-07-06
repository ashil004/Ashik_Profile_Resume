import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Error from './Component/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<Error/>,
    children:[
      // this is the child route of the root route
      {
        path:'/',
        element:<App/>
      
    }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
