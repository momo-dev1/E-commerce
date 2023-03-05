import { ChakraProvider } from '@chakra-ui/react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from 'components/NavBar';
import ProductsPage from 'pages/ProductsPage';



function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          {/* <Route path="/topic/:topic🆔" element={<Topic />} /> */}
        </Routes>
      </Router>

    </ChakraProvider>
  );
}

export default App;
