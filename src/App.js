import { useRoutes } from "react-router-dom";
import "./App.scss";
import Index from "./components/home/Index";
import TermLife from "./components/term-life/TermLife";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Index /> },
    { path: "/term", element: <TermLife /> },
   
  ]);
  return routes;
};

export default App;
