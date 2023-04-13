import { from, Observable } from 'rxjs'
import { ApiResult } from '@/utils/error.utils'
import { DeploymentStatusRecord } from '@/typings/data/deploymentStatusRecord'
import axios from 'axios'
import { environment } from '@/constants/environment'

const loadData = (): Observable<ApiResult<Array<DeploymentStatusRecord>>> => {
  return new Observable((observer) => {
    const abortController = new AbortController()
    const subscription = from(
      new Promise<ApiResult<Array<DeploymentStatusRecord>>>(async (resolve, reject) => {
        try {
          axios({
            url: environment.API.API_HTTP_URI,
            method: 'GET',
          })
            .then((response) => {
              return resolve(response.data)
            })
            .catch((error) => {
              reject(error)
            })
        } catch (error: any) {
          console.log('parsing failed')
          return reject({
            result: undefined,
            rawError: error,
          })
        }
      }),
    ).subscribe(observer)

    return () => {
      abortController.abort()
      subscription.unsubscribe()
    }
  })
}

export const dashboardPageServiceFunctions = {
  loadData,
}
