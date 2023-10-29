import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
  } from "react-router-dom"
  
  
import Login from "../components/Login"
import Create from "../components/Create";
import LandingPage from "../components/LandingPage";
import { Dashboard } from "@mui/icons-material";
  import DashboardPage from "../components/DashboardPage";
import AdDetail from "../components/AdDetail";
  
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [,
  
  
        {
          path: "/",
          element: <Login/>,
        },
  
        {
          path: "/LandingPage",
          element: <LandingPage/>,
        },
        {
          path: "/signup",
          element: <Create/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "/dashboard",
          element: <DashboardPage/>,
        },
        {
          path: "/adDetail",
          element: <AdDetail/>,
        },
      ]
  
    }
  ]);
  
  function Router() {
    return <RouterProvider router={router} />
  }
  
  function Main() {
    const navigate = useNavigate()
  
    return <div>
  <Outlet/>
    </div>
  }
  
  export default Router