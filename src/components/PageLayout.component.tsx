import { Outlet } from 'react-router-dom'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { MenuDrawer, MenuDrawerProps, MenuItem } from '@/components/MenuDrawer.component'
import { userSettingsSlice } from '@/store/userSettings.slice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import DashboardIcon from '@mui/icons-material/Dashboard'

const getRouteEntry = ({
  label,
  route,
  id,
  icon,
  children,
}: {
  label: string
  route: string
  id?: string
  icon?: React.ReactNode
  children?: Array<MenuItem>
}): MenuItem => {
  return {
    id: id,
    key: route,
    label: label,
    icon: icon,
    route: route,
    activeOnRoutes: [
      {
        route: route,
        end: !children,
      },
    ],
    children: children,
  }
}

export const PageLayout = () => {
  const sidebarOpen = useAppSelector((state) => state.userSettings.sidebarOpen)
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const saveNewOpen = (newOpen: boolean) => {
    dispatch(userSettingsSlice.actions.setSidebarOpen(newOpen))
  }

  const menuItems: MenuItem[] = useMemo(() => {
    return [
      getRouteEntry({ label: t('navigation.dashboard'), route: '/', icon: <DashboardIcon />, id: 'menu__dashboard' }),
    ]
  }, [t])

  const bottomMenuItems: MenuItem[] = useMemo(() => {
    const result: MenuItem[] = [
      // getRouteEntry({ label: environment.version, route: '/version', icon: <EventNoteIcon />, id: 'menu__version' }),
    ]
    return result
  }, [t])

  const drawerProps: MenuDrawerProps = useMemo(() => {
    return {
      initialOpen: sidebarOpen,
      onChangeOpen: saveNewOpen,
      projectTitle: '',
      menuItems: menuItems,
      bottomMenuItems: bottomMenuItems,
    }
  }, [menuItems, bottomMenuItems])

  return (
    <>
      <MenuDrawer {...drawerProps} />
      <Outlet />
    </>
  )
}
