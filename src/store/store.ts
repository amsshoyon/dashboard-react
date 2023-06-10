import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import { EpicMiddlewareDependencies, GlobalState } from './store.types'
import { userSettingsSlice } from '@/store/userSettings.slice'
import { notificationSlice } from '@/store/notificationSlice'
import { dashboardPageSlice } from '@/pages/dashboard_old/DashboardPage.slice'
import { dashboardPageEffects } from '@/pages/dashboard_old/DashboardPage.effects'
import { notificationsEffects } from '@/store/notification.effects'

const reducer = combineReducers({
  notification: notificationSlice.reducer,
  userSettings: userSettingsSlice.reducer,
  dashboard: dashboardPageSlice.reducer,
})

const epics = combineEpics(...notificationsEffects, ...dashboardPageEffects)
const epicMiddlewareDependencies = {}
const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, any, EpicMiddlewareDependencies>({
  dependencies: epicMiddlewareDependencies,
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: true,
      serializableCheck: {
        ignoredActions: [],
      },
    }),
    epicMiddleware,
  ],
})

epicMiddleware.run(epics)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<GlobalState> = useSelector
