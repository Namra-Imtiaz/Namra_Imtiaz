import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SplashPage from "./pages/SplashPage"
import MainPage from "./pages/MainPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<MainPage />} />
        <Route path="/" element={<SplashPage />} />
      </Routes>
    </Router>
  )
}

export default App