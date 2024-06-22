
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/user/dashboard';
import CreateReport from './pages/user/crateReport';
import DetailReport from './pages/user/detailReport';
import AllReport from './pages/user/allReport';
import MyReport from './pages/user/myReport';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard-user" element={<Dashboard />} />
      <Route path="/dashboard-user/buat-laporan-user" element={<CreateReport />} />
      <Route path="/dashboard-user/detail-laporan-user" element={<DetailReport />} />
      <Route path="/semua-laporan-user" element={<AllReport />} />
      <Route path="/laporan-saya-user" element={<MyReport />} />
    </Routes>
  )
}

export default App
