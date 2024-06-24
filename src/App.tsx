
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import DashboardUser from './pages/user/dashboard';
import DetailReportUser from './pages/user/detailReport';
import CreateReportUser from './pages/user/crateReport';
import AllReportUser from './pages/user/allReport';
import MyReportUser from './pages/user/myReport';
import DashboardOfficer from './pages/officer/dashboard';
import DetailRaportOfficer from './pages/officer/detailReport';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* router user */}
      <Route path="/dashboard-user" element={<DashboardUser />} />
      <Route path="/dashboard-user/buat-laporan-user" element={<CreateReportUser />} />
      <Route path=" " element={<DetailReportUser />} />
      <Route path="/semua-laporan-user" element={<AllReportUser />} />
      <Route path="/laporan-saya-user" element={<MyReportUser />} />

      {/* router officer */}
      <Route path="/dashboard-officer" element={<DashboardOfficer />} />
      {/* laporan saya */}
      <Route path="/dashboard-officer/detail-laporan-officer" element={<DetailRaportOfficer />} />


    </Routes>
  )
}

export default App
