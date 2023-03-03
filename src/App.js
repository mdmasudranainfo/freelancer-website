import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Route/MainRoute";
// slick slider css start
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// slick slider css end

function App() {
  return (
    <div className="">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
