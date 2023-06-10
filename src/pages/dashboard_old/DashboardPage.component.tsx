import Grid from '@mui/material/Grid/Grid'
import React, { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { dashboardPageSlice } from './DashboardPage.slice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { MainContainerWithBackground } from '@/components/MainContainerWithBackground.component'
import { DashboardHeadline } from '@/components/DashboardHeadline.component'
import { DashboardCard } from '@/components/DashboardCard.component'
import { DataTable } from '@/components/DataTable.component'
import { Column } from '@material-table/core'
import { Uptime } from '@/components/Uptime.component'
import { DeploymentStatusRow } from '@/typings/data/deploymentStatusRow'
import { DeploymentStatusRowStages } from '@/components/DeploymentStatusRowStages.component'

export const DashboardPage = () => {
  const translationPrepend = 'dashboard'
  const { data, loading } = useAppSelector((state) => state.dashboard)
  const uniqueStagesLookup = useMemo(() => {
    const result: { [stage: string]: string } = {}

    for (let singleData of data) {
      for (let stage of singleData.stages) {
        result[stage] = stage
      }
    }
    return result
  }, [data])
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(dashboardPageSlice.actions.setInitialState())
    dispatch(dashboardPageSlice.actions.loadData())
  }, [])

  const columns: Array<Column<DeploymentStatusRow>> = [
    {
      title: t('statusEntry.name'),
      field: 'name',
      width: 130,
      defaultSort: 'asc',
      render: (data) => (
        <div className={'text-no-wrap'} title={data.name ?? ''}>
          {data.name}
        </div>
      ),
    },
    {
      title: t('statusEntry.version'),
      field: 'version',
      width: 130,
      defaultSort: 'asc',
      render: (data) => (
        <div className={'text-no-wrap'} title={data.version ?? ''}>
          {data.version}
        </div>
      ),
    },
    {
      title: t('statusEntry.stage'),
      field: 'stage',
      width: 130,
      defaultSort: 'asc',
      lookup: uniqueStagesLookup,
      customFilterAndSearch: (filter, rowData) => {
        if (!filter || filter.length === 0) {
          return true
        }
        return rowData.stages.some((r) => filter.includes(r))
      },
      render: (data) => <DeploymentStatusRowStages stages={data.stages} />,
    },
    {
      title: t('statusEntry.uptime'),
      field: 'uptime',
      width: 130,
      filtering: false,
      defaultSort: 'asc',
      render: (data: any) => (
        <div className={'text-no-wrap'} title={data.stage ?? ''}>
          <Uptime />
        </div>
      ),
    },
  ]

  return (
    <MainContainerWithBackground>
      <DashboardHeadline>{t(`${translationPrepend}.headline`)}</DashboardHeadline>

      <Grid spacing={4} container>
        <Grid item xs={12} style={{ marginTop: 40, paddingLeft: 40, paddingRight: 40 }}>
          <DashboardCard style={{ minHeight: 400, display: 'flex', justifyContent: 'space-between', paddingBottom: 0 }}>
            <DataTable
              translationFunc={t}
              data={data}
              columns={columns}
              loading={loading}
              options={{
                searchFieldVariant: 'standard',
                filtering: true,
              }}
            />
          </DashboardCard>
        </Grid>
      </Grid>
    </MainContainerWithBackground>
  )
}
