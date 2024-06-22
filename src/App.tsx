
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import CreateReport from './pages/crateReport';
import DetailReport from './pages/detailReport';
import AllReport from './pages/allReport';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/buat-laporan" element={<CreateReport />} />
      <Route path="/dashboard/detail-laporan" element={<DetailReport />} />
      <Route path="/semua-laporan" element={<AllReport />} />
    </Routes>
  )
}

export default App
