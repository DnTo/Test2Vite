import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import FetchData2 from "./components/FetchData2";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    path: '/fetch-data2',
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    index: true,
  
    element: <FetchData2 />
  }
];

export default AppRoutes;
