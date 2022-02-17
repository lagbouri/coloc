import { Flex } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import Rooms from "./pages/Rooms";
import Profiles from "./pages/Profiles";
import Home from "./pages/Home";
import ListRoom from './pages/ListRoom';
import FindRoom from './pages/FindRoom';

function App() {

  return (
    <Flex minHeight="100vh" direction="column">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="rooms/create" element={<ListRoom />} />
        <Route path="profiles" element={<Profiles />} />
        <Route path="profile/create" element={<FindRoom />} />
      </Routes>
      <Footer/>
    </Flex>
  );
}

export default App;