import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/Home/home';
import Products from './pages/products/productsList';
import LoginPage from './pages/login/login';
import SignUpPage from './pages/login/logout';
import ErrorPage from './pages/error/errorPage';
import CartsPage from './pages/carts/carts';
import ProductDetails from './pages/products/productDetails';


const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <ErrorPage />,
  children: [
    { index: true, element: <Products /> },
    { path: '/products', element: <Products />, index: true },
    { path: '/products/:id', element: <ProductDetails /> },
    { path: '/carts', element: <CartsPage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/signup', element: <SignUpPage /> }
  ]
}]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
