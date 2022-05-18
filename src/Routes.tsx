import { 
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";


// Components
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Container from "./components/layout/Container";

// PAGES 
import { Home } from "./pages/Home";


export function AppRoutes() {
    return (
    <Router>
      <Navbar />
      <Container>
          <Routes>
            <Route path="/" element={< Home/>} />
          </Routes>
      </Container>
      <Footer />
    </Router>
    )
}