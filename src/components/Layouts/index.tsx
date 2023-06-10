import Topbar from './Topbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
  return (
    <div className='w-full flex flex-col h-full'>
      <Topbar />
      <div className="flex flex-1 h-full">
        <Sidebar />
        <div className='w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout