import { Chip as MuiChip, styled } from '@mui/material'
import React from 'react'

const ChipContainer = styled('div')`
  display: flex;
`
const Chip = styled('div')`
  border-radius: 1rem;
  margin-right: 5px;
  height: 32px;
  display: inline-flex;
  justify-content: center;
  font-family: 'NotoSansSemiCondensed';
  font-size: 0.8125rem;
  padding-left: 12px;
  padding-right: 12px;
  min-width: 60px;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.3);
`
interface DeploymentStatusRowStagesProps {
  stages: Array<string>
}
export const DeploymentStatusRowStages = ({ stages }: DeploymentStatusRowStagesProps) => {
  return (
    <ChipContainer>
      {stages.map((stage) => (
        <Chip key={stage}>{stage}</Chip>
      ))}
    </ChipContainer>
  )
}
