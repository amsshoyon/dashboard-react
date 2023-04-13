import React from 'react'
import { styled } from '@mui/material'
import MaterialTable, { MaterialTableProps } from '@material-table/core'
import { merge } from 'lodash'
import { getMaterialTableTranslations } from '@/utils/materialTableTranslations'
import { TableSkeleton } from '@/components/TableSkeleton.component'
import { TABLE_ICONS } from '@/utils/materialTableUtils'

const StyledTableContainer = styled(`div`)`
  background: transparent;
  flex: 1;
  display: flex;
  overflow: hidden;

  .MuiPaper-root {
    background: transparent;
    border: 0;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;

    > .MuiBox-root {
      display: flex;
      flex: 1;
      > div {
        display: flex;
        flex: 1;
        > div {
          max-height: 100%;
          overflow: unset !important;

          display: flex;
          flex: 1;
          > div {
            flex: 1;
          }
        }
      }
    }
  }
  .MuiTableCell-root {
    border-bottom: ${(props) =>
      props.theme.palette.mode === 'dark'
        ? `0.5px solid rgba(255,255,255,0.03) !important`
        : `0.5px solid rgba(0,0,0,0.1) !important`};
  }
  .MuiTableCell-head {
    font-weight: bold;
    font-size: 13px;
    line-height: 21px;
    border-bottom: 1px solid ${(props) => props.theme.customColors?.borderTableBottom};
    padding: 16px;
    background: transparent;
  }
  .MuiTableSortLabel-root:not(.Mui-active):hover .MuiTableSortLabel-icon {
    opacity: 0;
  }
  .MuiTableSortLabel-root:not(.Mui-active):after {
    content: ' ';
    background-image: ${(props) =>
      props.theme.palette.mode === 'dark'
        ? 'url(./assets/images/sortBoth-white.svg)'
        : 'url(./assets/images/sortBoth.svg)'};
    background-size: 10px 18px;
    position: absolute;
    right: 8px;
    height: 18px;
    width: 10px;
  }
  .type-code-column {
    white-space: pre;
    max-width: 230px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .ipf-column {
    white-space: pre;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > .MuiPaper-root > .MuiToolbar-root:nth-of-type(1) {
    position: absolute;
    z-index: 1;
    left: -45px;
    top: 7px;
    padding: 0 !important;
  }

  .MuiToolbar-root {
    padding: calc(${(props) => props.theme.spacing(2)} * 3) 0 !important;
  }

  &.material-table--small-padding {
    .MuiTableCell-head {
      padding: 6px 6px;
    }

    td {
      padding: 16px 6px;
    }
  }
`

export interface DataTableProps<RowData extends object> extends MaterialTableProps<RowData> {
  smallPadding?: boolean
  translationFunc?: any
  loading?: boolean
}

export const DataTable = <RowData extends object>(props: DataTableProps<RowData>) => {
  const materialTableTranslations = getMaterialTableTranslations(props.translationFunc)

  const translationsToUse = merge(materialTableTranslations, props.localization)
  const optionsToUse = merge(
    {
      sorting: true,
      draggable: false,
      columnsButton: false,
      thirdSortClick: false,
      showTitle: false,
      search: false,
      pageSizeOptions: [10, 25, 50],
      pageSize: 10,
      selection: false,
      showSelectAllCheckbox: false,
      header: true,
      toolbar: true,
      showTextRowsSelected: false,
    },
    props.options,
  )

  return (
    <StyledTableContainer className={`material-table ${props.smallPadding ? 'material-table--small-padding' : ''}`}>
      {!props.data || props.loading ? (
        <TableSkeleton column={props.columns.length} rows={10} />
      ) : (
        <MaterialTable icons={TABLE_ICONS} {...props} localization={translationsToUse} options={{ ...optionsToUse }} />
      )}
    </StyledTableContainer>
  )
}
