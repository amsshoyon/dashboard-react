import { BreadcrumbLink, BreadcrumbWrapper } from '@/components/common'
import { useState } from 'react';
import { Button } from '@mui/material';
import Document from './Snippets/Document';
import Letter from './Snippets/Letter';
import VideoDocument from './Snippets/VideoDocument';
import Recognition from './Snippets/Recognition';

enum Steps {
    photo = 0,
    coverLetter = 1,
    certificates = 2,
    resume = 3,
    MotivationLetter = 4,
    video = 5,
    recognition = 6
}

const ApplicationProcessPage = () => {
    const [stepperValue, setStepperValue] = useState(Steps.certificates);

    const [applicationData, setApplicationData] = useState({
        photo: 'given',
        coverLetter: 'given',
        certificates: '',
        resume: '',
        MotivationLetter: '',
        video: ''
    })

    const breadcrumb: BreadcrumbLink[] = [
        {
            name: 'Application photo',
            onClick: () => setStepperValue(Steps.certificates),
            active: stepperValue >= Steps.certificates ? true : false
        },
        {
            name: 'Cover letter',
            onClick: () => setStepperValue(Steps.coverLetter),
            active: stepperValue >= Steps.coverLetter ? true : false
        },
        {
            name: 'Resume',
            onClick: () => setStepperValue(Steps.resume),
            active: stepperValue >= Steps.resume ? true : false
        },
        {
            name: 'Motivation letter',
            onClick: () => setStepperValue(Steps.MotivationLetter),
            active: stepperValue >= Steps.MotivationLetter ? true : false
        },
        {
            name: 'Application video',
            onClick: () => setStepperValue(Steps.video),
            active: stepperValue >= Steps.video ? true : false
        },
    ]

    const handleForward = () => {
        setStepperValue(stepperValue + 1)
    }

    const handleBackward = () => {
        setStepperValue(stepperValue - 1)
    }

    let enumKey = Steps[stepperValue];
    // @ts-ignore
    let disabled = applicationData[enumKey] ? false : true

    return (
        <BreadcrumbWrapper breadcrumb={breadcrumb}>
            <div className="flex flex-col justify-between h-full">
                <div>
                    {stepperValue === Steps.certificates &&
                        <Document
                            onChange={() => setApplicationData({ ...applicationData, certificates: 'given' })}
                            title='Certificates '
                            text='Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. '
                        />
                    }
                    {stepperValue === Steps.resume &&
                        <Document
                            onChange={() => setApplicationData({ ...applicationData, resume: 'given' })}
                            title='Resume'
                            text='Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. '
                        />
                    }
                    {stepperValue === Steps.MotivationLetter &&
                        <Letter
                            onChange={() => setApplicationData({ ...applicationData, MotivationLetter: 'given' })}
                            title='Motivation letter'
                            text="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
                        />
                    }
                    {stepperValue === Steps.video &&
                        <VideoDocument
                            onChange={() => setApplicationData({ ...applicationData, video: 'given' })}
                            title="Application video"
                            text="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
                        />
                    }
                    {stepperValue === Steps.recognition &&
                        <Recognition />
                    }
                </div>
                {stepperValue !== Steps.recognition &&
                    <div className="flex justify-end absolute bottom-20 right-20">
                        <Button
                            variant='outlined'
                            className='!bg-transparent !text-[#00CCCC] !border-[#00CCCC]'
                            onClick={handleBackward}
                        >Back</Button>

                        <Button
                            variant='contained'
                            className={`!bg-[#00CCCC] !text-black !ml-4 ${disabled && '!bg-[#333353] !text-[#737389]'}`}
                            disabled={disabled}
                            onClick={handleForward}
                        >Continue</Button>
                    </div>
                }
            </div>
        </BreadcrumbWrapper>
    )
}

export default ApplicationProcessPage