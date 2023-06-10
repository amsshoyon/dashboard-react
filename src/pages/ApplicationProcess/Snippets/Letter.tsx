import { UploadIcon } from '@/components/Icons'
import { Button } from '@mui/material'
import React, { Fragment } from 'react'

const Letter = ({ onChange, title, text }: { onChange: Function, title: string, text: string }) => {
    return (
        <Fragment>
            <div className="mb-16">
                <h2 className="text-40 mb-4">{title}</h2>
                <p className='text-light-dark'>{text}</p>
            </div>
            <div className="p-4 bg-secondary max-w-[724px] w-full text-14">
                <textarea
                    rows={10}
                    className='w-full bg-[#00183B] py-5 px-4 text-[#B3B3BE] mb-6'
                    onChange={() => onChange()}
                />
                <div className="flex flex-col items-center">
                    <span className='mb-6'>Or</span>
                    <Button
                        variant='outlined' className='!bg-transparent !text-[#00CCCC] !border-[#00CCCC]'
                    >
                        <span className='mr-2'>Upload Document</span>
                        <UploadIcon />
                    </Button>
                </div>

            </div>
        </Fragment>
    )
}

export default Letter