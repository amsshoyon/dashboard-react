import { Fragment } from 'react'
import ApplicationProcess from './snippets/ApplicationProcess'
import JobScout from './snippets/JobScout'
import Notifications from './snippets/Notifications'
import { BreadcrumbWrapper } from '@/components/common'

const Dashboard = () => {
  return (
    <BreadcrumbWrapper breadcrumb={[{name: 'Dashboard'}]}>
      <div className="mb-16">
        <h2 className="text-40 mb-4">Hello Sebastian,</h2>
        <p className='text-light-dark'>You are nearly there! Finish the Application process to raise your chance of getting hired</p>
      </div>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-3">
          <ApplicationProcess />
        </div>
        <div className="col-span-3">
          <JobScout />
        </div>
        <div className="col-span-2">
          <Notifications />
        </div>
      </div>
    </BreadcrumbWrapper>
  )
}

export default Dashboard