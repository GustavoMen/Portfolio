import { 
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";


// Components
import { Navbar } from "./pages/layout/Navbar";
import { Footer } from "./pages/layout/Footer";
import Container from "./pages/layout/Container";

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