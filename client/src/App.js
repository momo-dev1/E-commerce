import { ChakraProvider } from '@chakra-ui/react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from 'components/NavBar';



function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <Routes>
          {/* <Route path="/about" element={<About />} />
          <Route path="/topic/:topic🆔" element={<Topic />} /> */}
        </Routes>
      </Router>

    </ChakraProvider>
  );
}

export default App;
