import { IconButton } from '@mui/material'
import { ArrowDoubleRightIcon, ConfigureIcon, DashboardIcon, DocumentIcon, ExploreIcon, NotificationIcon } from '../Icons'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

const MenuButton = ({ url, children }: { url: string, children: ReactNode }) => {
    const activeClass = 'relative flex before:w-[3px] before:h-full before:absolute before:top-0 before:left-0 before:bg-[#00FFB9] before:transition- before:duration-300'
    return (
        <NavLink to={url} className={({ isActive }) => `${activeClass} ${isActive ? "before:scale-100 bg-primary" : "before:scale-0"}`}>
            <IconButton className='!rounded-sm w-full !py-4'>
                {children}
            </IconButton>
        </NavLink>
    )
}

const Sidebar = () => {
    return (
        <aside className='w-[52px] bg-secondary h-full flex flex-col justify-between'>
            <div>
                <MenuButton url='/dashboard'>
                    <DashboardIcon />
                </MenuButton>
                <MenuButton url='/application'>
                    <DocumentIcon />
                </MenuButton>
                <MenuButton url='/explore'>
                    <ExploreIcon />
                </MenuButton>
                <MenuButton url='/configure'>
                    <ConfigureIcon />
                </MenuButton>
                <MenuButton url='/notification'>
                    <NotificationIcon />
                </MenuButton>
            </div>
            <div className='border-t border-[#333353]'>
                <MenuButton url='/'>
                    <ArrowDoubleRightIcon />
                </MenuButton>
            </div>
        </aside>
    )
}

export default Sidebar