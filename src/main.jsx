import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Details from './Pages/Details/Details';
import AuthProvider from './Auth/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';
import About from './Pages/About/About';
import Errorpage from './Pages/Error/Errorpage';




const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Errorpage/> ,
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/services.json')
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/details/:id',
        loader:() => fetch('/services.json'),
        element: <PrivateRoute><Details /></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/registration',
        element: <Registration />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
