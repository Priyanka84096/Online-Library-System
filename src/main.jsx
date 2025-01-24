import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './components/Home.jsx';
import NotFound from './components/NotFound.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BrowseBooks from './components/BrowseBooks.jsx';
import BookDetails from './components/BookDetails.jsx';
import AddBook from './components/AddBook.jsx';
import "./style.css";

//creating Routing Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:
           <Home/>
        
      },
      {
        path: "/books",
        element: <BrowseBooks />,
      },
      {
        path: "/books/:category",
        element: <BrowseBooks />,
      },
      {
        path: "/book/:id",   // dynamic parameter as id
        element: <BookDetails/>,
      },
      {
        path: "/add-book",
        element: <AddBook/>
      }
    ],
    errorElement: <NotFound />,
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
);

