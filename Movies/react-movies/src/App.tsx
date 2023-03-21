import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { routes } from './routing/route-config'
import Nav from './components/Nav'
import Home from "./pages/Home";

export default function App() {
    return(
      <Router>
        <Nav />
        <Routes>
          {
            routes.map((route, i) => 
              <Route path={route.path} element={<route.element/>} key={i} />
            )
          }
          <Route path="*" element={<Home />} />
        </Routes>

      </Router>
    )
}