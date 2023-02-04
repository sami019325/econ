import logo from './logo.svg';
import './App.css';
import RoutingPage from './Components/RoutingPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <RoutingPage /> },
    { path: '*', element: <div>404</div> },
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
