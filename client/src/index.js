import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material/styles';

//pages
import Appbar from './appbar/page/Appbar';
import Home from './unsecure/pages/Home';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Appbar />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme({
      palette: {
        primary: {
          main: 'rgba(27, 36, 48,.9)',
        },
        secondary: {
          main: '#EEF5FF',
        },
        info: {
          main: "#222831"
        },
        success: {
          main: "#E1F0DA"
        },
        error: {
          main: "#FFCCCC"
        }
      },
    })}>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </React.StrictMode>
);