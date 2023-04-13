import { styled } from '@mui/material'

export const DashboardCardHeadline = styled('h3')`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) =>
    props.theme.palette.mode === 'light' ? props.theme.palette.grey['910'] : props.theme.palette.primary['200']};
  opacity: ${(props) => (props.theme.palette.mode === 'light' ? 0.6 : 0.6)};
`
