
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/user/dashboard';
import CreateReport from './pages/user/crateReport';
import DetailReport from './pages/user/detailReport';
import AllReport from './pages/user/allReport';
import MyReport from './pages/myReport';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/buat-laporan" element={<CreateReport />} />
      <Route path="/dashboard/detail-laporan" element={<DetailReport />} />
      <Route path="/semua-laporan" element={<AllReport />} />
      <Route path="/laporan-saya" element={<MyReport />} />
    </Routes>
  )
}

export default App
