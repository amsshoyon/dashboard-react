import { Route, Routes } from 'react-router-dom';
import DashboardLayout from './components/Layouts'
import HomePage from './pages/HomePage';
import Dashboard from './pages/dashboard';
import ApplicationProcessPage from './pages/ApplicationProcess';

export const PageRoutes = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />

      <Route path="/" element={<DashboardLayout />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/application' element={<ApplicationProcessPage />} />
        <Route path='/explore' element={<Dashboard />} />
        <Route path='/configure' element={<Dashboard />} />
        <Route path='/notification' element={<Dashboard />} />
      </Route>

      <Route path="*" element={<>Not Found</>} />
    </Routes>
  )
}