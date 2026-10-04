import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import MainPage from "./pages/MainPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/portfolio" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
