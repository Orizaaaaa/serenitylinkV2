
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import CreateReport from './pages/crateReport';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/buat-laporan" element={<CreateReport />} />
    </Routes>
  )
}

export default App
