import { styled } from '@mui/material'

export const DashboardSubHeadline = styled('h3')`
  margin-top: 30px;
  margin-bottom: 18px;

  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;

  color: ${(props) =>
    props.theme.palette.mode === 'light' ? props.theme.palette.grey['910'] : props.theme.palette.primary['200']};
  opacity: ${(props) => (props.theme.palette.mode === 'light' ? 1 : 0.6)};
`
export const DashboardSubSubHeadline = styled('h3')`
  margin-top: -10px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;

  font-family: ${(props) => props.theme.typography.fontFamily};
  color: ${(props) =>
  props.theme.palette.mode === 'light' ? props.theme.palette.grey['920'] : props.theme.palette.primary['200']};
  opacity: ${(props) => (props.theme.palette.mode === 'light' ? 1 : 0.6)};
`
