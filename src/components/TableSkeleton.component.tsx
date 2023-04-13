import { Box } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import React from 'react'
import { styled } from '@mui/material/styles'

export interface TableSkeletonProps {
  rows?: number
  column?: number
  className?: string
  hasCheckBox?: boolean
}

const Container = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 0.2px solid white;
  padding: 20px;
  padding-bottom: 10px;
`

const StyledBoxHeader = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 0.2px solid white;
`

export const TableSkeleton = ({ rows, column, className, hasCheckBox = true }: TableSkeletonProps) => {
  const iterationsRow = rows ? rows : 5
  const filledArrayRow = new Array(iterationsRow).fill('')
  const iterationsColumn = column ? column : 5
  const filledArrayColumn = new Array(iterationsColumn).fill('')
  return (
    <Container className={className}>
      <StyledBoxHeader>
        <Skeleton variant="rectangular" width={'100%'} height={40} />
      </StyledBoxHeader>
      {filledArrayRow.map((_, index) => (
        <StyledBox key={index}>
          {hasCheckBox && (
            <Skeleton
              variant="rectangular"
              style={{ marginRight: 15, border: '1px solid white', flexShrink: 0 }}
              width={30}
              height={30}
            />
          )}
          {filledArrayColumn.map((_, index) => (
            <Skeleton style={{ marginRight: 15, flexShrink: 0 }} key={index} width={80} height={40} />
          ))}
        </StyledBox>
      ))}
    </Container>
  )
}
