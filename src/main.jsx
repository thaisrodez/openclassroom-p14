import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home.jsx'
import { Layout } from './layout'
import { Provider } from 'react-redux'
import { store } from './utils/store'
import { EmployeeList } from './pages/employeeList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'employees',
        element: <EmployeeList />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
    </Provider>
,
)
