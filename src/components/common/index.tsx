import { Fragment, ReactNode } from "react";
import { HelpIcon } from "../Icons";
import { Breadcrumbs, Button, IconButton, Modal, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

interface CartProps {
    children: ReactNode,
    title?: string,
    subTitle?: string,
    icon?: JSX.Element | ReactNode,
    info?: JSX.Element | ReactNode
}

export const Card = ({ children, title, subTitle, icon, info }: CartProps) => (
    <div className="p-4 bg-secondary h-full">
        {title &&
            <div className="flex justify-between items-center mb-8">
                <div className="flex">
                    {icon}
                    <span className={icon ? 'ml-4' : ''}>
                        <span className="font-semibold">{title}</span> <br />
                        <span className="text-[#9999A9]">{subTitle}</span>
                    </span>
                </div>
                {info &&
                    <IconButton>
                        <HelpIcon />
                    </IconButton>
                }
            </div>
        }
        {children}
    </div>
)

export const DottedList = ({ children, className = '' }: { children: ReactNode, className?: string }) => (
    <div className={`border-l border-dashed border-[#66667E] ${className}`}>
        {children}
    </div>
)

export const DottedListItem = ({ children }: { children: ReactNode }) => (
    <div className='pl-4 relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-[#00cccc] before:-left-[5px] before:top-1 mb-5 last:mb-0 text-12'>
        {children}
    </div>
)

export interface BreadcrumbLink {
    name: string,
    onClick?: Function,
    active?: boolean
}

export const Breadcrumb = ({ breadcrumb }: { breadcrumb?: BreadcrumbLink[] }) => {
    return (
        <div className='w-full h-[58px] px-[60px] py-2 flex items-center border-b-[1px] border-[#333353]'>
            <Breadcrumbs separator=">" className='!text-12'>
                {breadcrumb?.map((item: BreadcrumbLink, i: number) => {
                    const { name, onClick, active } = item
                    return (
                        <Typography key={i} onClick={() => active && onClick && onClick()} className={`${active ? 'cursor-pointer text-[#00CCCC]' : 'text-[#9999A9]'}`}>
                            {name}
                        </Typography>
                    )
                })}
            </Breadcrumbs>
        </div>
    )
}

export const BreadcrumbWrapper = ({ children, breadcrumb }: { children: ReactNode, breadcrumb?: BreadcrumbLink[] }) => {
    return (
        <Fragment>
            <Breadcrumb breadcrumb={breadcrumb} />
            <div className='px-[60px] py-[24px] flex-1 h-[calc(100vh-108px)] overflow-y-auto'>
                {children}
            </div>
        </Fragment>
    )
}

export const CustomModal = ({ open, onClose, children }: { open: boolean, onClose: Function, children: ReactNode }) => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
    };

    return (
        <Modal
            open={open}
            onClose={()=>onClose()}
        >
            <Box sx={style} className="max-w-[90vw] max-h-[90vh] w-full">
                {children}
            </Box>
        </Modal>
    )
}