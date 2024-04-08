/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import AppBar from './appbar/page/Appbar';
import LandingPage from './unsecure/landingPage/LandingPage';
import EventsPage from './unsecure/eventsPage/EventsPage';
import EventPage from './unsecure/eventPage/EventPage';
import NewsPage from './unsecure/newsPage/NewsPage';

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
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode >
);