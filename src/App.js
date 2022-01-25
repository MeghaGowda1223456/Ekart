import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddProduct from "./components/AddProduct";
import Home from "./components/Home";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>Ekart</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/products">Products</Link>
                <Link to="/add-product">Add Product</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Route exact={true} path="/" component={ Home} />
          <Route path="/products" component={Products} />
          <Route path="/add-product" component={AddProduct } />
        </div>
      </div>
    </Router>
  );
}

export default App;
