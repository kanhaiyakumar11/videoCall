import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoRoom from './pages/VideoRoom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/room/:roomId' element={<VideoRoom />} />
    </Routes>
  )
}

export default App

