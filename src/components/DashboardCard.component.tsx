import { styled } from '@mui/material'
import Card from '@mui/material/Card'

export const DashboardCard = styled(Card)`
  background: rgba(99, 115, 139, 0.25);
  backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  border-radius: 1.25rem;

  padding: 35px;
  display: flex;
  flex-direction: column;
`
