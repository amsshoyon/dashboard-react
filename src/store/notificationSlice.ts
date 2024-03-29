import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { randomUuid } from '@/utils/stringUtils'
import { environment } from '@/constants/environment'
import { cloneDeep } from 'lodash'

enum Status {
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Success = 'success',
}

export interface NotificationMessage {
  key: string
  message: string
  autoHideAfter?: number
  status: 'success' | 'info' | 'warning' | 'error'
}

export interface NotificationSliceState {
  notifications: Array<NotificationMessage>
  snackbarOpen: boolean
  snackbarMessage: string
  snackbarStatus: boolean
  type: Status
}

export const getInitialState = (): NotificationSliceState => ({
  notifications: [],
  snackbarOpen: false,
  snackbarMessage: '',
  snackbarStatus: false,
  type: Status.Success,
})
type NotificationStatus = 'success' | 'info' | 'warning' | 'error'

export enum AvailableNotficationStatus {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error',
}

export type ShowNotificationAction = PayloadAction<{
  key: string
  message: string
  status: NotificationStatus
  autoHideAfter?: number
}>
const DEFAULT_AUTO_HIDE_DURATION = 5000
export const getNotificationActionPayload = (message: string, status?: NotificationStatus, autoHideAfter?: number) => {
  return {
    key: randomUuid(),
    message: message,
    status: status ?? 'success',
    autoHideAfter: autoHideAfter ?? DEFAULT_AUTO_HIDE_DURATION,
  }
}
export const notificationSlice = createSlice({
  name: 'notification',
  initialState: getInitialState(),
  reducers: {
    showNotification: (state, action: ShowNotificationAction) => {
      state.notifications.push({
        message: action.payload.message,
        status: action.payload.status,
        autoHideAfter: action.payload.autoHideAfter,
        key: action.payload.key,
      })
    },
    dismissNotification: (state, action: PayloadAction<{ key: string }>) => {
      state.notifications = state.notifications.filter((notification) => notification.key !== action.payload.key)
    },
  },
})

export const { showNotification } = notificationSlice.actions
export default notificationSlice.reducer
