import {
  Button as MuiButton,
  List as MuiList,
  ListItemButton as MuiListItemButton,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  styled,
  Theme,
} from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'
import React, { useState } from 'react'
import { matchPath, useLocation, useNavigate } from 'react-router'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { BrandIcon } from '@/components/BrandIcon.component'

const drawerWidth = 277
const drawerWidthClosed = 103
const subDrawerWidth = 275

const openedMixin = (theme: Theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: drawerWidthClosed,
})

// @ts-ignore
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '&&& .MuiDrawer-paper': {
    margin: '1rem',
    zIndex: 9999,
    height: 'calc(100vh - 2rem)',
    background: 'rgba(99, 115, 139, 0.25)',
    backdropFilter: 'blur(16px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.125)',
    boxShadow:
      '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
    borderRadius: '1.25rem',
  },
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

// @ts-ignore
const SecondLevelDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'mainOpen' })(
  ({ theme, open }) => ({
    width: 0,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '&&& .MuiDrawer-paper': {
      background: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.75)' : 'rgba(28, 58, 73, 0.3)',
      backdropFilter: 'blur(15px)',
      border: 0,
      boxShadow:
        theme.palette.mode === 'light' ? '2px 2px 15px rgba(91, 91, 91, 0.1)' : '0px 4px 4px rgba(0, 0, 0, 0.25)',
      transition: theme.transitions.create('transform', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflow: 'hidden',
      width: subDrawerWidth,
    },
    ...(open && {
      '&&&& .MuiDrawer-paper': {
        transform: `translate(${drawerWidthClosed}px,0) !important`,
      },
      '&&&&.mainOpen .MuiDrawer-paper': {
        transform: `translate(${drawerWidth}px,0) !important`,
      },
    }),
    '&&& .MuiBackdrop-root': {
      backgroundColor: 'transparent',
    },
    '&&& .title': {
      paddingTop: 45,
      paddingBottom: 31,
      paddingLeft: 24,
      fontSize: 19,
      fontWeight: 800,
      lineHeight: '24px',
      letterSpacing: '0.15px',
      textTransform: 'uppercase',
    },
  }),
)

const SecondLevelListItem = styled(MuiListItemButton)`
  padding-left: 24px;
  min-height: 55px;
  opacity: 1;

  &.active {
    opacity: 1;
    background: ${(props) => (props.theme.palette.mode === 'light' ? '#fff' : '#003047')};
  }

  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
`

const SecondLevelListItemText = styled(MuiListItemText)``

const ListItem = styled(MuiListItemButton)`
  padding-left: 24px;
  padding-top: 0;
  padding-bottom: 0;
  margin-bottom: 4px;
  @media screen and (max-height: 800px) {
    padding-left: 30px;
  }
  color: ${(props) => (props.theme.palette.mode === 'light' ? 'rgba(107, 112, 144, 1)' : 'rgba(255, 255, 255, 0.5)')};

  .MuiSvgIcon-root path {
    fill: ${(props) => (props.theme.palette.mode === 'light' ? 'rgba(107, 112, 144, 1)' : 'rgba(255, 255, 255, 0.5)')};
  }

  &.active {
    color: ${(props) => (props.theme.palette.mode === 'light' ? 'rgba(58, 65, 107, 1)' : 'rgba(255, 255, 255, 1.0)')};

    .MuiListItemIcon-root {
      background: rgba(99, 115, 139, 0.25);
      backdrop-filter: blur(16px) saturate(180%);
      border-radius: 5px;
    }

    &.open {
      background: ${(props) => (props.theme.palette.mode === 'light' ? 'rgba(58,65,107,0.09)' : '#003047')};
      .MuiListItemIcon-root {
        background: transparent;
      }
    }
    .MuiSvgIcon-root path,
    .TODO-ALWE path {
      fill: ${(props) => (props.theme.palette.mode === 'light' ? 'rgba(107, 112, 144, 1)' : 'rgba(255, 255, 255, 1)')};
    }
  }

  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-transform: uppercase;
`

export const MenuDrawerListItemIcon = styled(MuiListItemIcon)`
  min-width: 55px;
  min-height: 55px;
  @media screen and (max-height: 800px) {
    min-width: 45px;
    min-height: 45px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease margin-right;

  &.closed {
    margin-right: 40px;
  }
`
export const MenuDrawerBottomListItem: any = styled(ListItem)`
  text-transform: none;
`
export const MenuDrawerListItemText: any = styled(MuiListItemText)`
  margin-left: 5px;
`

const MenuLogo = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 800;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.15px;
  color: ${(props) => (props.theme.palette.mode === 'light' ? 'rgba(30, 34, 55, 0,87)' : 'rgba(255, 255, 255, 0.87)')};
  height: 150px;
  @media screen and (max-height: 800px) {
    height: 100px;
  }

  &&& .brand-shape-1 {
    border-radius: 1.25rem;
    padding: 10px;
    width: 70px;
    transition: 0.3s ease all;

    path {
      fill: #fff;
    }
  }

  &&& span {
    transform: translate(-19px, 9px);
    transition: 0.3s ease all;

    color: ${(props) => props.theme.palette.primary['600']};
  }
`
const TopList = styled(MuiList)`
  padding: 0;
`
const SecondLevelList = styled(MuiList)`
  padding: 0;
`
const BottomList = styled(MuiList)`
  margin-top: auto;
  padding: 0;
`

const CloseButton = styled(MuiButton)`
  --items: 1;
  position: absolute;
  right: 0;
  display: none;
  bottom: 0;
  width: 55px;
  height: 55px;
  min-height: 0 !important;
  @media screen and (max-height: 800px) {
    width: 45px;
    height: 45px;
  }
  transition: 0.3s ease all;

  .TODO-ALWE path {
    fill: ${(props) => (props.theme.palette.mode === 'light' ? 'rgba(107, 112, 144, 1)' : 'rgba(255, 255, 255, 0.5)')};
  }

  &.closed {
    transform: translate(0, calc(-60px * var(--items))) rotate(180deg);
    @media screen and (max-height: 800px) {
      transform: translate(0, calc(-50px * var(--items))) rotate(180deg);
    }
    width: 103px;
  }

  &.items2 {
    --items: 2;
  }

  &.items3 {
    --items: 3;
  }

  &.items4 {
    --items: 4;
  }

  &.items5 {
    --items: 5;
  }
`

export const setSidebarOpenCSSVariable = (newOpen: boolean) => {
  document.documentElement.style.setProperty('--sidebarWidth', newOpen ? '277px' : '103px')
}

interface ActiveOnRoute {
  route: string
  end: boolean
}
export interface MenuItem {
  id?: string
  key: string
  label?: string
  renderItem?: (openOrClosedClassName: string) => React.ReactNode
  icon?: React.ReactNode
  route?: string
  activeOnRoutes?: ActiveOnRoute[]
  children?: MenuItem[]
}

type MenuDrawerState = {
  clickedMenuItem: MenuItem | undefined
  open: boolean
}
export type MenuDrawerProps = {
  menuItems: MenuItem[]
  bottomMenuItems: MenuItem[]
  projectTitle: string
  initialOpen?: boolean
  onChangeOpen?: (newOpen: boolean) => void
}
export const MenuDrawer = ({
  menuItems,
  bottomMenuItems,
  projectTitle,
  initialOpen,
  onChangeOpen,
}: MenuDrawerProps) => {
  const location = useLocation()
  const navigate = useNavigate()

  const [state, setState] = useState<MenuDrawerState>(() => {
    const initialOpenToUse = initialOpen ?? true
    setSidebarOpenCSSVariable(initialOpenToUse)
    return {
      clickedMenuItem: undefined,
      open: initialOpenToUse,
    }
  })

  const openOrClosedClassName = state.open ? 'open' : 'closed'

  const menuItemIsActive = (menuItem: MenuItem) => {
    if (menuItem.key === state.clickedMenuItem?.key) {
      return true
    }
    if (!menuItem.activeOnRoutes || !menuItem.route) {
      return false
    }
    for (let activeOnRoute of menuItem.activeOnRoutes) {
      const match = matchPath(
        {
          caseSensitive: false,
          end: activeOnRoute.end,
          path: activeOnRoute.route,
        },
        location.pathname,
      )
      if (match !== null) {
        return true
      }
    }

    return false
  }

  const renderSecondLevelContent = () => {
    if (!state.clickedMenuItem || !state.clickedMenuItem.children) {
      return null
    }

    return (
      <>
        <span className={'title'}>select</span>
        <SecondLevelList>
          {state.clickedMenuItem.children.map((menuItem) => (
            <SecondLevelListItem
              id={menuItem.id}
              key={menuItem.key}
              className={menuItemIsActive(menuItem) ? 'active' : ''}
              onClick={() => menuItemClick(menuItem)}
            >
              <SecondLevelListItemText primary={menuItem.label} />
            </SecondLevelListItem>
          ))}
        </SecondLevelList>
      </>
    )
  }

  const toggleSubMenu = (menuItem: MenuItem | undefined) => {
    setState((prevState) => {
      return {
        ...prevState,
        clickedMenuItem: menuItem,
      }
    })
  }

  const toggleMainMenu = () => {
    setState((prevState) => {
      const newOpen = !prevState.open
      setSidebarOpenCSSVariable(newOpen)
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'))
      }, 301)
      onChangeOpen?.(newOpen)
      return {
        ...prevState,
        open: newOpen,
      }
    })
  }

  const menuItemClick = (menuItem: MenuItem) => {
    if (menuItem.children) {
      toggleSubMenu(menuItem)
      return
    }
    if (menuItem.route) {
      navigate(menuItem.route)
    }
    toggleSubMenu(undefined)
  }

  return (
    <div>
      <SecondLevelDrawer
        id={'main_menu__second_level'}
        anchor={'left'}
        onClose={() => toggleSubMenu(undefined)}
        open={state.clickedMenuItem !== undefined}
        hideBackdrop={false}
        variant={'temporary'}
        className={state.open ? 'mainOpen' : ''}
        keepMounted
      >
        {renderSecondLevelContent()}
      </SecondLevelDrawer>
      <Drawer variant="permanent" open={state.open} id={'main_menu'}>
        <MenuLogo className={openOrClosedClassName}>
          <BrandIcon />
          <span>{projectTitle}</span>
        </MenuLogo>
        <TopList>
          {menuItems.map((menuItem) => (
            <ListItem
              id={menuItem.id}
              key={menuItem.key}
              className={`${openOrClosedClassName} ${menuItemIsActive(menuItem) ? 'active' : ''}`}
              onClick={() => menuItemClick(menuItem)}
            >
              <MenuDrawerListItemIcon
                className={`${openOrClosedClassName} ${menuItemIsActive(menuItem) ? 'active' : ''}`}
              >
                {menuItem.icon}
              </MenuDrawerListItemIcon>
              <MenuDrawerListItemText primary={menuItem.label} />
            </ListItem>
          ))}
        </TopList>
        <BottomList>
          {bottomMenuItems.map((menuItem) => {
            if (menuItem.renderItem) {
              return <React.Fragment key={menuItem.key}>{menuItem.renderItem(openOrClosedClassName)}</React.Fragment>
            }
            return (
              <MenuDrawerBottomListItem
                key={menuItem.key}
                id={menuItem.id}
                className={menuItemIsActive(menuItem) ? 'active' : ''}
                onClick={() => menuItemClick(menuItem)}
              >
                <MenuDrawerListItemIcon
                  className={`${openOrClosedClassName} ${menuItemIsActive(menuItem) ? 'active' : ''}`}
                >
                  {menuItem.icon}
                </MenuDrawerListItemIcon>
                <MenuDrawerListItemText primary={menuItem.label} />
              </MenuDrawerBottomListItem>
            )
          })}
        </BottomList>
        <CloseButton
          id={'toggle_menu_button'}
          className={`${openOrClosedClassName} items${bottomMenuItems.length} `}
          onClick={toggleMainMenu}
        >
          <ChevronLeftIcon />
        </CloseButton>
      </Drawer>
    </div>
  )
}
