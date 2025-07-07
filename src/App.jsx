import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Index from './pages/auth/index.jsx'  // Corrected default import and capitalized
import Expense from './pages/expense-tracker/expense.jsx'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Index />} />  
        <Route path="/expense" exact element={<Expense />} />  
      </Routes>
    </Router>
  )
}

export default App
