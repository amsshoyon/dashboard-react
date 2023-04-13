import { useAppDispatch, useAppSelector } from '@/store/store'
import { notificationSlice } from '@/store/notificationSlice'

import React from 'react'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { styled } from '@mui/material'
import { motion } from 'framer-motion'

const StyledContainer = styled('div')`
  z-index: 100000;
  position: fixed;
  top: 0;
  right: 0;
  padding-right: 20px;
  padding-top: 20px;
  pointer-events: none;

  .MuiAlert-root {
    pointer-events: all;
    background: rgba(99, 115, 139, 0.25);
    backdrop-filter: blur(16px) saturate(180%);
    border-radius: 1.25rem;
    margin-top: 20px;
    width: 400px;
    border: 1px solid rgba(255, 255, 255, 0.125);

    &.MuiAlert-outlinedError {
      border: 1px solid rgba(255, 0, 0, 0.12);
    }
  }
`
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const Notifications = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.notification)

  const onCloseMessage = (key: string) => {
    dispatch(notificationSlice.actions.dismissNotification({ key: key }))
  }

  return (
    <StyledContainer>
      <motion.div animate={{ transition: { staggerChildren: 0.07, delayChildren: 0.2 } }}>
        {state.notifications.map((message) => {
          const alertProps: AlertProps = {
            variant: 'outlined',
            icon: false,
            severity: message.status,
          }

          if (onCloseMessage) {
            alertProps.onClose = () => onCloseMessage(message.key)
          }

          return (
            <motion.div
              layout
              key={message.key}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  type: 'Tween',
                  stiffness: 100,
                },
              }}
            >
              <Alert {...alertProps}>
                <div dangerouslySetInnerHTML={{ __html: message.message }} />
              </Alert>
            </motion.div>
          )
        })}
      </motion.div>
    </StyledContainer>
  )
}
