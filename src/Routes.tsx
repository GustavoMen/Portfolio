import { 
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";


// PAGES 
import { Navbar } from "./pages/layout/Navbar";
import { Footer } from "./pages/layout/Footer";
import { Home } from "./pages/Home";


export function AppRoutes() {
    return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={< Home/>} />
        </Routes>
      <Footer />
    </Router>
    )
}