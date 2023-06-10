import { UploadIcon, ViewIcon } from '@/components/Icons'
import { CustomModal } from '@/components/common'
import { Button } from '@mui/material'
import { Fragment, useRef, useState } from 'react'

const VideoDocument = ({ onChange, title, text }: { onChange: Function, title: string, text: string }) => {
    const [value, setValue] = useState('')
    const [preview, setPreview] = useState(false)

    const hiddenFileInput = useRef(null);

    const handleClick = (event: any) => {
        // @ts-ignore
        hiddenFileInput.current.click();
    };

    const handleChange = (event: any) => {
        setValue(URL.createObjectURL(event.target.files[0]))
        onChange()
    }


    return (
        <Fragment>
            <div className="mb-16">
                <h2 className="text-40 mb-4">{title}</h2>
                <p className='text-light-dark'>{text}</p>
            </div>
            <div className="p-4 bg-secondary max-w-[724px] w-full grid grid-cols-5 gap-5 text-14">
                <div className='flex w-full col-span-2'>
                    <img
                        src={'/assets/placeholder-video.svg'}
                        alt=""
                        className={`w-full h-full object-left-top ${value && 'object-cover'}`}
                    />
                </div>
                <div className="col-span-3">
                    <div className="flex flex-col justify-between h-full">
                        <div className='w-full'>
                            <div className="">
                                <p className='mb-4'>No upload yet</p>
                                <p className='text-[#9999A9]'>
                                    Maximum file size: 400 MB <br />
                                    Supported file formats: .mov, .mp4
                                </p>
                            </div>
                            <input type="file" accept='video/*' className='hidden' ref={hiddenFileInput} onChange={handleChange} />
                        </div>
                        <div className="grid grid-cols-2 gap-5">

                            <Button
                                onClick={handleClick}
                                variant='outlined' fullWidth className='!bg-transparent !text-[#00CCCC] !border-[#00CCCC]'
                            >
                                <span className='mr-2'>Upload Video</span>
                                <UploadIcon />
                            </Button>

                            <Button
                                variant='outlined'
                                fullWidth
                                className={`!bg-transparent !text-[#00CCCC] !border-[#00CCCC] ${!value && 'grayscale'}`}
                                disabled={!value}
                                onClick={() => setPreview(true)}
                            >
                                <span className='mr-2'>View Video</span>
                                <ViewIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <CustomModal open={preview} onClose={() => setPreview(false)}>
                <div className="w-full h-full">
                    <video src={value} className='object-contain w-full' />
                </div>
            </CustomModal>
        </Fragment>
    )
}

export default VideoDocument