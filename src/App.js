import './App.css';
import BodyComponent from './BodyComponent';
import Header from './Header';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import MovieContainer from './MovieContainer';
import MovieDesPage from './MovieDesPage';


const createRouter = createBrowserRouter([
  {
    path: "/",
    element: <BodyComponent />,
    // children: [
    //   { index: true, element: <MovieContainer /> }
    //   , {
    //     path: "/movieDesc/:id",
    //     element: <MovieDesPage />,
    //   }],
  },
  {
    path: "/movieDesc/:id",
    element: <MovieDesPage />,
  }
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={createRouter} />
      {/* <Outlet /> */}
    </>
  );
}

export default App;
