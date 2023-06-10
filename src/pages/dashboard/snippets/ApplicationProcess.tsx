import { DocumentIcon } from '@/components/Icons'
import { Card, DottedList, DottedListItem } from '@/components/common'
import { Badge, Button } from '@mui/material'
import { Link } from 'react-router-dom'

interface Process {
    dateTime?: string,
    title: string,
    status: 'Done' | 'Open'
}

const processes: Process[] = [
    {
        dateTime: '2020/07/31   9:31 am',
        title: 'Application Photo',
        status: 'Done'
    },
    {
        dateTime: '2020/07/31   9:31 am',
        title: 'Cover letter',
        status: 'Done'
    },
    {
        title: 'Certificates ',
        status: 'Open'
    },
    {
        title: 'Resume',
        status: 'Open'
    },
    {
        title: 'Motivation letter ',
        status: 'Open'
    },
    {
        title: 'Application video ',
        status: 'Open'
    },
]

const ApplicationProcess = () => {
    return (
        <Card title='Application Process' icon={<DocumentIcon />} info={<></>}>
            <DottedList className='mb-14'>
                {processes.map((process: Process, i: number) =>
                    <DottedListItem key={i}>
                        {process.dateTime &&
                            <div className="text-12 text-[#9999A9] mb-1">{process.dateTime}</div>
                        }
                        <div className='py-3 px-4 bg-[#37374D] rounded'>
                            {process.status === 'Done' &&
                                <span className='bg-[#01D65A] rounded-full px-4 py-1 text-black font-semibold'>Done</span>
                            }
                            {process.status === 'Open' &&
                                <span className='bg-[#23233C] rounded-full px-4 py-1 text-white font-semibold'>Open</span>
                            }

                            <span className='ml-4 font-semibold'>{process.title}</span>
                        </div>
                    </DottedListItem>
                )}
            </DottedList>
            <div className="flex justify-center">
                <Link to={'/application'}>
                    <Button variant='contained' className='!rounded-none !bg-[#00CCCC] !text-black !px-10'>
                        Continue Application Process
                    </Button>
                </Link>
            </div>
        </Card>
    )
}

export default ApplicationProcess