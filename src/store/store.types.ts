import { UserSettingsState } from './userSettings.slice'
import { Epic } from 'redux-observable'
import { NotificationSliceState } from '@/store/notificationSlice'
import { DashboardPageState } from '@/pages/dashboard/DashboardPage.slice'

export interface GlobalState {
  notification: NotificationSliceState
  userSettings: UserSettingsState
  dashboard: DashboardPageState
}

export type EpicMiddlewareDependencies = {}

export type StoreEpic = Epic<any, any, GlobalState, EpicMiddlewareDependencies>
