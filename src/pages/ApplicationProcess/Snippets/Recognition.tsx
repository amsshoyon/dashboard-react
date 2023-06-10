import { CheckIcon, DotedIcon } from '@/components/Icons'
import { Button } from '@mui/material'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const data = [
    {
        label: 'Name',
        value: 'Sebastian Mustermann'
    },
    {
        label: 'Anschrift',
        value: 'Musterstraße 1a, 01234 Musterort'
    },
    {
        label: 'Email',
        value: 'sebastian.mustermann@web.de'
    },
    {
        label: 'Nummer',
        value: '+49 01234567 8'
    },
    {
        label: 'Birthday',
        value: '01.01.1999'
    },
    {
        label: 'nationality',
        value: 'german'
    },
    {
        label: 'Marital status',
        value: 'single'
    },
    {
        type: 'submit'
    }
]

const Recognition = () => {
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, (data.length - 1) * 1200);
    }, [])


    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-[#000028] py-[144px] overflow-y-auto flex flex-col items-center'>
            <div className="mb-8 text-center ">
                <h2 className='mb-4'>Application X Recognition</h2>
                <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
            </div>
            <div className='max-w-[440px] w-full relative'>
                {data.map((item: any, i: number) => {
                    return (
                        <motion.div
                            initial={{ opacity: 0, height: 0, y: '-20px' }}
                            animate={{ opacity: 1, height: 74, y: '0px' }}
                            transition={{
                                duration: .6,
                                delay: i * 1.2,
                            }}
                            key={i}
                        >
                            {(item.type !== 'submit') ?
                                <div className="py-2">
                                    <div
                                        className={`rounded bg-[#23233C] pl-[40px] pr-4 py-2 flex justify-between items-center`}
                                    >
                                        <div>
                                            <p className="text-12 text-[#9999A9]">{item.label}</p>
                                            <p>{item.value}</p>
                                        </div>
                                        <DotedIcon />
                                    </div>
                                </div>
                                :
                                <div className="flex justify-center w-full py-10">
                                    <Link to={'/dashboard'}>
                                    <Button variant='contained' className='!bg-[#00CCCC] !text-black'>
                                        <CheckIcon />
                                        <span className='ml-3'>Confirm</span>
                                    </Button>
                                    </Link>
                                </div>
                            }
                        </motion.div>
                    )
                })}
                {loader &&
                    <div className=' absolute -left-12 bottom-0 -translate-y-7 transition-all duration-75'>
                        <div className='animate-spin w-fit' style={{ animationDirection: 'reverse' }}>
                            <img src='assets/spinner.png' alt='' />
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

export default Recognition