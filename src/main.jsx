import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';
import Home from './pages/home/Home.jsx';
import Services from './pages/services/Services.jsx';
import Quotes from './pages/quotes/Quotes.jsx';
import About from './pages/about/About.jsx';
import Support from './pages/support/Support.jsx';
import Contact from './pages/contact/Contact.jsx'; 
import QuoteReceived from './pages/quotes/QuoteReceived.jsx';
import App from './App.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/quotes", element: <Quotes /> },
      { path: "/quote-received", element: <QuoteReceived />},
      { path: "/support", element: <Support /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
