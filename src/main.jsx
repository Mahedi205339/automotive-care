import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import UseOpen from './components/Context/useOpen.jsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseOpen>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </UseOpen>
    <Toaster />
  </React.StrictMode>,
)
