import { CloseIcon, ExploreIcon } from '@/components/Icons'
import { Card } from '@/components/common'
import { Button } from '@mui/material'
import ResultCard from './ResultCard'
import Marketing from './Tabs/Marketing'
import DonutChart from './chart/DonutChart';

const JobScout = () => {
  return (
    <Card title='Job Scout' subTitle='Jobs that fit your application' icon={<ExploreIcon />} info={<></>}>
      <DonutChart />

      <div className="border-t-2 border-[#000028] py-5">
        <div className="flex overflow-x-auto mb-4">
          <Button variant='contained' className='!rounded-full !bg-[#00FFB9] !text-black !px-6 !min-h-[36px] !text-14 !mr-3 !min-w-fit'>
            <span className="mr-4">Marketing</span>
            <div className="w-4">
              <CloseIcon />
            </div>
          </Button>
          <Button variant='outlined' className='!rounded-full !border-[#00CCCC] !bg-transparent !text-[#00CCCC] !px-6 !min-h-[36px] !text-14 !mr-3 !min-w-fit'>
            <span>Sales</span>
          </Button>
          <Button variant='outlined' className='!rounded-full !border-[#00CCCC] !bg-transparent !text-[#00CCCC] !px-6 !min-h-[36px] !text-14 !mr-3 !min-w-fit'>
            <span>Design</span>
          </Button>
          <Button variant='outlined' className='!rounded-full !border-[#00CCCC] !bg-transparent !text-[#00CCCC] !px-6 !min-h-[36px] !text-14 !mr-3 !min-w-fit'>
            <span>Developement</span>
          </Button>
        </div>
        <p className='mb-4'>12 results</p>
        <div className="flex overflow-x-auto no-scrollbar">
          <Marketing />
        </div>
      </div>
    </Card>
  )
}

export default JobScout