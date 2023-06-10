import { RightArrowIcon } from '@/components/Icons'
import React from 'react'

const ResultCard = () => {
    return (
        <div className='text-14 bg-[#37374D] min-w-[180px] mr-4'>
            <div className="p-4">
                <p className='mb-2'>Senior Marketing Manager</p>
                <p className='text-[#9999A9]'>Berlin</p>
            </div>
            <div className="border-t-2 border-[#000028] text-[#00CCCC] p-4 flex items-center">
                <span className="mr-2">See details</span> {'>'}
            </div>
        </div>
    )
}

export default ResultCard