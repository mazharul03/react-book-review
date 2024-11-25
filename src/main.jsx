import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import BookDetails from './Components/Book Details/BookDetails';
import ReadList from './Components/Read List/ReadList';
import WishList from './Components/Wishlist/WishList';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/listed',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("./books.json"),
        children: [
          {
            index: true,
            element: <ReadList></ReadList>,
          },
          {
            path:'wishList',
            element: <WishList></WishList>,
          },
        ]
      },
      {
        path:'/pages',
        element: <PagesToRead></PagesToRead>
      },
      {
        path:'/bookDetails/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('./books.json')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
    
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
