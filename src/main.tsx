import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import './index.css';

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Characters from './pages/people'
import { PaginateProvider } from './context/PaginateContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/people" replace /> // redirects to /people when accessing the root
  },
  {
    path: "people",
    element: <Characters />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <PaginateProvider>
        <RouterProvider router={router} />
    </PaginateProvider>
)
