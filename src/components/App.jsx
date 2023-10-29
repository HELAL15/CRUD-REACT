
import Results from "./Results/Results";
import { createHashRouter , RouterProvider } from "react-router-dom"


export default function App() {

  let routers = createHashRouter( [
    {path: '/' , element: <Results/> }
  ]);

  return <RouterProvider router={routers}/>;
}
