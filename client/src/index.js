import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider, createTheme } from '@mui/material/styles';

//pages
import AppBar from './appbar/page/Appbar';
import LandingPage from './unsecure/landingPage/LandingPage';
import EventsPage from './unsecure/eventsPage/EventsPage';
import EventPage from './unsecure/eventPage/EventPage';
import NewsPage from './unsecure/newsPage/NewsPage';
import TracksPage from './unsecure/tracksPage/TracksPage';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <AppBar />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/events',
        element: <EventsPage /> 
      }, 
      {
      path: '/event/:title',
      element: <EventPage />
      },
      {
        path: '/news',
        element: <NewsPage />
      },
      {
        path: '/tracks',
        element: <TracksPage />
      },
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme({
      palette: {
        primary: {
          main: 'rgba(0, 0, 0,.87)',
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