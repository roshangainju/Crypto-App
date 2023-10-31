import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Component/Header"
import Home from "./Component/Home"
import Exchange from "./Component/Exchange"
import Coins from "./Component/Coins"
import CoinDetails from "./Component/CoinDetails"
import Footer from "./Component/Footer"



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coin" element={<Coins/>}/>
        <Route path="/exchange" element={<Exchange/>}/>
        <Route path="/coin/:id" element={<CoinDetails/>}/>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
