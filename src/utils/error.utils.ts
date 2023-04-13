import { AvailableNotficationStatus, getNotificationActionPayload, showNotification } from '@/store/notificationSlice'
import { translateWithGlobal } from './translationUtils'

export interface ApiResult<T> {
  result: T
  rawError?: any
}

export const addErrorNotificationWithTranslation = (key: string, autoHideAfter?: number) => {
  return showNotification(
    getNotificationActionPayload(translateWithGlobal(key), AvailableNotficationStatus.error, autoHideAfter),
  )
}

export const addSuccessNotificationWithTranslation = (key: string, autoHideAfter?: number) => {
  return showNotification(
    getNotificationActionPayload(translateWithGlobal(key), AvailableNotficationStatus.success, autoHideAfter),
  )
}
export const addWarningNotificationWithTranslation = (key: string, autoHideAfter?: number) => {
  return showNotification(
    getNotificationActionPayload(translateWithGlobal(key), AvailableNotficationStatus.warning, autoHideAfter),
  )
}
