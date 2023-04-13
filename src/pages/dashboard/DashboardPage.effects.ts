import { ofType } from 'redux-observable'
import { catchError, exhaustMap, switchMap } from 'rxjs/operators'
import { dashboardPageServiceFunctions } from './DashboardPage.service'
import { dashboardPageSlice } from './DashboardPage.slice'
import { StoreEpic } from '@/store/store.types'
import { addErrorNotificationWithTranslation } from '@/utils/error.utils'

const sliceToUse = dashboardPageSlice
const serviceToUse = dashboardPageServiceFunctions

export const loadData$: StoreEpic = (action$, state$, dependencies) =>
  action$.pipe(
    ofType(sliceToUse.actions.loadData),
    switchMap(() => {
      return serviceToUse.loadData().pipe(
        exhaustMap((response) => [sliceToUse.actions.loadDataSuccess(response.result)]),
        catchError(() => [addErrorNotificationWithTranslation('errors.generic'), sliceToUse.actions.loadDataError()]),
      )
    }),
  )

export const dashboardPageEffects = [loadData$]
