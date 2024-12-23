import './App.css'
import AddChart from './addChart'
import ChartList from './ChartList'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './Home'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Chartlist" element={<ChartList/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
