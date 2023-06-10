import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DeploymentStatusRecord } from '@/typings/data/deploymentStatusRecord'
import { DeploymentStatusRow } from '@/typings/data/deploymentStatusRow'

export interface DashboardPageState {
  loading: boolean
  data: Array<DeploymentStatusRow>
}

export const getInitialState = (): DashboardPageState => ({
  loading: true,
  data: [],
})

export const dashboardPageSlice = createSlice({
  name: 'dashboardPage',
  initialState: getInitialState(),
  reducers: {
    setInitialState: () => ({ ...getInitialState() }),

    loadData: (state) => {
      state.loading = true
      state.data = []
    },
    loadDataSuccess: (state, action: PayloadAction<Array<DeploymentStatusRecord>>) => {
      state.data = transformDeploymentStatusRecordToRow(action.payload)
      console.log(state.data)
      state.loading = false
    },
    loadDataError: (state) => {
      state.data = []
      state.loading = false
    },
  },
})

const transformDeploymentStatusRecordToRow = (data: Array<DeploymentStatusRecord>) => {
  const result: Array<DeploymentStatusRow> = []
  const serviceNameToDeploymentStatusRecordMap: { [serviceName: string]: DeploymentStatusRecord } = {}
  const serviceVersionToStageMap: {
    [serviceName: string]: {
      [serviceVersion: string]: Array<string>
    }
  } = {}
  for (let singleRecord of data) {
    serviceNameToDeploymentStatusRecordMap[singleRecord.name] = singleRecord
    if (!serviceVersionToStageMap[singleRecord.name]) {
      serviceVersionToStageMap[singleRecord.name] = {}
    }
    if (!serviceVersionToStageMap[singleRecord.name][singleRecord.version]) {
      serviceVersionToStageMap[singleRecord.name][singleRecord.version] = []
    }

    serviceVersionToStageMap[singleRecord.name][singleRecord.version].push(singleRecord.stage)
  }

  for (let serviceName of Object.keys(serviceVersionToStageMap)) {
    for (let serviceVersion of Object.keys(serviceVersionToStageMap[serviceName])) {
      result.push({
        name: serviceName,
        version: serviceVersion,
        stages: serviceVersionToStageMap[serviceName][serviceVersion],
      })
    }
  }
  return result
}
