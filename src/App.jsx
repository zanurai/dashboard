import React from "react";
import Support from "./pages/Support/Support";
import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TransactionPage from "./pages/Transaction/TransactionPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },

  {
    path: "/support",
    element: <Support />,
  },
]);
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <RouterProvider router={router} />
        {/* <Dashboard /> */}
      </div>
    </>
  );
}

export default App;
