import { Routes, Route } from "react-router-dom";

import './App.css'

import Contribute from "./pages/home/Contribute";
import Home from "./pages/home/Home";


function App() {


  return (
    <>


      <div className="bg-gradient-to-r from-sky-400 via-blue-900 to-black">
        <div className='p-4'></div>
       

      <Routes>

         <Route path="/contribute-data" element={<Contribute />} />
          <Route path="/" element={<Home />} />

      </Routes>
    
      </div>





    </>
  )
}

export default App
