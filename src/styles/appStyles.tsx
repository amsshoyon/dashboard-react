import { css, GlobalStyles, styled, Theme } from '@mui/material'
import React from 'react'
import { FONTS, TYPOGRAPHY_CLASS } from '@/styles/material.theme'

const TypographyStyles = (theme: Theme) => css`
  body {
    font-family: ${theme.typography.fontFamily};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  .${TYPOGRAPHY_CLASS.Display01} {
    font-family: ${theme.typography.fontFamily};
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 80px;
    letter-spacing: -0.04em;
    &.bold {
      font-weight: bold;
    }
    &.extra-bold {
      font-weight: 800;
    }
  }
  .${TYPOGRAPHY_CLASS.Display02} {
    font-family: ${theme.typography.fontFamily};
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 72px;
    letter-spacing: -0.04em;
    &.bold {
      font-weight: bold;
    }
    &.extra-bold {
      font-weight: 800;
    }
  }
  h1 {
    font-family: ${theme.typography.fontFamily};
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.04em;
    &.bold {
      font-weight: bold;
    }
    &.extra-bold {
      font-weight: 800;
    }
  }
  h2 {
    font-family: ${theme.typography.fontFamily};
    font-style: normal;
    font-weight: normal;
    font-size: 39px;
    line-height: 47px;
    letter-spacing: -0.02em;
    &.bold {
      font-weight: bold;
    }
    &.extra-bold {
      font-weight: 800;
    }
  }
  h3 {
    font-family: ${FONTS.Serif};
    font-style: normal;
    font-weight: normal;
    font-size: 33px;
    line-height: 40px;
    letter-spacing: -0.02em;
    &.bold {
      font-weight: bold;
    }
    &.extra-bold {
      font-weight: 800;
    }
  }
  h4 {
    font-family: ${theme.typography.fontFamily};
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: -0.02em;
    &.bold {
      font-weight: bold;
    }
    &.extra-bold {
      font-weight: 800;
    }
  }
  h5 {
    font-family: ${theme.typography.fontFamily};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.02em;
    &.bold {
      font-weight: bold;
    }
    &.extra-bold {
      font-weight: 800;
    }
  }
  h6 {
    font-family: ${theme.typography.fontFamily};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.02em;
    &.bold {
      font-weight: bold;
    }
    &.extra-bold {
      font-weight: 800;
    }
  }
  .${TYPOGRAPHY_CLASS.SubHeading} {
    font-family: ${theme.typography.fontFamily};
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    &.bold {
      font-weight: bold;
    }
    &.extra-bold {
      font-weight: normal;
      text-decoration-line: underline;
    }
  }
  .${TYPOGRAPHY_CLASS.Paragraph01} {
    font-family: ${theme.typography.fontFamily};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    &.bold {
      font-weight: bold;
    }
    &.extra-bold {
      font-weight: normal;
      text-decoration-line: underline;
    }
  }
  .${TYPOGRAPHY_CLASS.Paragraph02} {
    font-family: ${theme.typography.fontFamily};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    &.bold {
      font-weight: bold;
    }
    &.extra-bold {
      font-weight: normal;
      text-decoration-line: underline;
    }
  }
  .${TYPOGRAPHY_CLASS.Paragraph03} {
    font-family: ${theme.typography.fontFamily};
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    &.bold {
      font-weight: bold;
    }
    &.extra-bold {
      font-weight: normal;
      text-decoration-line: underline;
    }
  }
  .${TYPOGRAPHY_CLASS.Caption} {
    font-family: ${theme.typography.fontFamily};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    &.bold {
      font-weight: bold;
    }
    &.extra-bold {
      font-weight: normal;
      text-transform: uppercase;
    }
  }
  .${TYPOGRAPHY_CLASS.Footer} {
    font-family: ${theme.typography.fontFamily};
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    &.bold {
      font-weight: bold;
    }
    &.extra-bold {
      font-weight: normal;
      text-transform: uppercase;
    }
  }
`
const ButtonStyles = (theme: Theme) => css`
  .MuiButton-root.MuiButton-root.MuiButton-root {
    border-radius: 4px;

    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-transform: none;

    min-height: 51px;
    padding: 0 20px;

    .MuiSvgIcon-root {
      width: 20px;
      height: 20px;
    }
    &.MuiButton-sizeSmall {
      min-height: 38px;
      font-size: 16px;
      line-height: 18px;
      padding: 0 15px;

      .MuiSvgIcon-root {
        width: 18px;
        height: 18px;
      }
    }

    &.MuiButton-containedPrimary {
      background: ${theme.palette.primary[600]};
      color: #fff;
      &:hover,
      &.force-hover {
        background: ${theme.palette.primary[800]};
      }
      &.Mui-disabled {
        background: ${theme.palette.grey[600]};
        cursor: not-allowed;
      }
    }

    &.MuiButton-outlinedPrimary {
      border-width: 2px;
      border-color: ${theme.palette.primary[600]};
      color: ${theme.palette.primary[600]};
      &:hover,
      &.force-hover {
        background: ${theme.palette.primary[100]};
        border-color: ${theme.palette.primary[800]};
        color: ${theme.palette.primary[800]};
      }
      &.Mui-disabled {
        border-color: ${theme.palette.grey[700]};
        color: ${theme.palette.grey[700]};
        cursor: not-allowed;
      }
    }

    &.MuiButton-textPrimary {
      border-width: 0;
      color: ${theme.palette.primary[600]};
      &:hover,
      &.force-hover {
        background: ${theme.palette.primary[100]};
        color: ${theme.palette.primary[800]};
      }
      &.Mui-disabled {
        color: ${theme.palette.grey[700]};
        cursor: not-allowed;
      }
    }

    // TODO: can this be rmoved?
    &.MuiButton-outlinedSecondary {
      border-color: ${theme.palette.primary[600]};
      color: ${theme.palette.primary[600]};
    }
    &.MuiButton-containedSecondary {
      background: ${theme.palette.primary[600]};
      color: #fff;
    }
    &.MuiButton-textSecondary {
      color: ${theme.palette.mode === 'dark' ? '#FFFFFF' : theme.palette.grey[600]};

      &:hover {
        background: ${theme.palette.mode === 'dark' ? theme.palette.primary[800] : ''};
        color: ${theme.palette.mode === 'dark' ? '#FFFFFF' : theme.palette.grey[800]};
      }
    }
  }
`
const DatePickerStyles = (theme: Theme) => css`
  .DateRangePicker_picker,
  .SingleDatePicker_picker {
    z-index: 10001;
    background: transparent;
  }
  .DayPicker {
    box-shadow: 0 4px 4px 3px rgba(0, 0, 0, 0.25) !important;
  }
  .DayPicker__horizontal {
    color: ${theme.palette.mode === 'dark' ? 'white' : ''};
    background-color: ${theme.palette.mode === 'dark'
      ? theme.palette.primary[910]
      : theme.customColors?.backgrounds?.light ?? '#fff'};
  }

  .CalendarDay__selected_start {
    background: ${theme.palette.mode === 'dark' ? theme.palette.primary[300] : theme.palette.primary[910]};
    color: white;
  }

  .CalendarMonth {
    background: ${theme.palette.mode === 'dark'
      ? theme.palette.primary[910]
      : theme.customColors?.backgrounds?.light ?? '#fff'};
  }

  .CalendarMonth_caption {
    color: ${theme.palette.mode === 'dark' ? '#fff' : theme.palette.primary[910]};
  }

  .CalendarDay__default {
    color: ${theme.palette.mode === 'dark' ? '#fff' : 'black'};
    background: ${theme.palette.mode === 'dark'
      ? theme.palette.primary[910]
      : theme.customColors?.backgrounds?.light ?? '#fff'};

    border: none;
  }

  .CalendarDay__default:hover {
    background: ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : theme.palette.grey[300]};
    color: ${theme.palette.mode === 'dark' ? '#fff' : 'black'};
    border: none;
  }

  .CalendarMonthGrid {
    background: ${theme.palette.mode === 'dark' ? theme.palette.primary[910] : '#fff'};
  }

  .CalendarDay__today {
    background: ${theme.palette.mode === 'dark' ? theme.palette.primary[200] : theme.palette.primary[600]};
    color: white;
  }
  .CalendarDay__selected {
    background: ${theme.palette.mode === 'dark' ? theme.palette.primary[300] : theme.palette.primary[910]};
    color: ${theme.palette.mode === 'dark' ? '#fff' : '#fff'};
  }
  .CalendarDay__selected_span {
    background: ${theme.palette.mode === 'dark' ? theme.palette.primary[700] : theme.palette.primary[700]};
    color: ${theme.palette.mode === 'dark' ? '#fff' : '#fff'};
  }
  // Will edit when hovered over. _span style also has this property
  .CalendarDay__selected:hover {
    background: ${theme.palette.mode === 'dark' ? theme.palette.primary[800] : theme.palette.primary[910]};
    color: ${theme.palette.mode === 'dark' ? 'black' : '#fff'};
  }
  .CalendarDay__blocked_out_of_range {
    border: none;
    color: ${theme.palette.mode === 'dark' ? theme.palette.primary[900] : theme.palette.grey[600]};
  }

  .CalendarDay__hovered_span:hover,
  .CalendarDay__hovered_span {
    background: ${theme.palette.mode === 'dark' ? theme.palette.primary[800] : theme.palette.primary[700]};
  }
  .DayPickerNavigation_svg__disabled {
    fill: ${theme.palette.grey[800]} !important;
  }
  .DayPickerNavigation_button__default {
    background-color: ${theme.palette.mode === 'dark' ? theme.palette.primary[800] : theme.palette.primary[910]};
    border: none;
    .DayPickerNavigation_svg__horizontal {
      fill: ${theme.palette.mode === 'dark' ? 'white' : 'black'};
    }
  }
  .DayPicker_weekHeader {
    color: ${theme.palette.mode === 'dark' ? theme.palette.primary[500] : theme.palette.primary[500]};
  }
  .DayPickerKeyboardShortcuts_show {
    display: none;
  }
`
const AccordionStyles = (theme: Theme) => css`
  .MuiAccordion-root.MuiAccordion-root.MuiAccordion-root {
    margin: 0;
    background: transparent;
    box-shadow: none;

    &:before {
      display: none;
    }

    &.Mui-expanded {
      margin: 0;
    }

    .MuiAccordionSummary-root {
      min-height: 48px;
      &.Mui-expanded {
        min-height: 48px;
      }
    }
    .MuiAccordionSummary-content {
      &.Mui-expanded {
        margin: 12px 0;
      }
    }

    &.bordered {
      border: 1px solid ${theme.palette.mode === 'dark' ? '#fff' : '#e2e5e6'};
    }
    &.border-radius--none {
      border-radius: 0 !important;
    }

    &.inverse {
      .MuiAccordionSummary-root {
        flex-direction: row-reverse;
        padding-left: 0;
      }
    }

    &.no-margin {
      .MuiAccordionSummary-content {
        margin: 0;
        &.Mui-expanded {
          margin: 0;
        }
      }
    }
  }
`
const ScrollbarStyles = (theme: Theme) => css`
  html {
    --scrollbar-thumbBackground: ${theme.palette.mode === 'dark' ? '#163645' : '#e9e9e9'};
    --scrollbar-background: ${theme.palette.mode === 'dark' ? '#10242d' : '#fff'};
    /* Foreground, Background */
    scrollbar-color: var(--scrollbar-foreground) var(--scrollbar-background);
    scrollbar-width: thin;
  }
  *::-webkit-scrollbar {
    width: 16px; /* Mostly for vertical scrollbars */
    height: 16px; /* Mostly for horizontal scrollbars */
  }
  *::-webkit-scrollbar-thumb {
    /* Foreground */
    background: var(--scrollbar-thumbBackground);
    border-radius: 6px;
    border: 4px solid var(--scrollbar-background);
  }
  *::-webkit-scrollbar-track {
    /* Background */
    cursor: pointer;
    background: var(--scrollbar-background);
  }
  ::-webkit-scrollbar-corner {
    background: var(--scrollbar-background);
  }
`
const TooltipStyles = (theme: Theme) => css`
  .MuiTooltip-popper .MuiTooltip-tooltip {
    font-size: 16px;
    ${theme.palette.mode === 'light'
      ? `
    background: rgba(255, 255, 255, 0.75);
    color: ${theme.palette.grey['910']};
    border: 1px solid #ffffff;
    box-sizing: border-box;
    box-shadow: 2px 2px 15px rgba(91, 91, 91, 0.1);
    backdrop-filter: blur(15px);
    border-radius: 6px;
  `
      : `
    background: linear-gradient(180deg, rgba(99, 203, 255, 0.235) 25.01%, rgba(11, 36, 48, 0.165) 108.42%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(15px);
    border-radius: 5px;
  `}
  }
  .MuiTooltip-popper .MuiTooltip-arrow {
    font-size: 16px;
    ${theme.palette.mode === 'light'
      ? `
        color: rgba(255, 255, 255, 0.75);
  `
      : `
      color: rgba(99, 203, 255, 0.235); 
  `}
  }
`

const appStyles = (theme: Theme) => css`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    position: absolute;
    inset: 0;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  body {
    &.sb-show-main.sb-main-padded {
      padding: 0;
    }
  }

  #root {
    height: 100%;
    display: grid;
    grid-template-areas: 'content';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .app {
    grid-area: content;
    align-items: stretch;
    justify-content: stretch;
    max-height: 100%;
    overflow: hidden;
  }

  .ruled-title {
    border-bottom: 1px solid;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .TODO-ALWE {
    height: auto;
    .TODO-ALWE {
      fill: #fff;
    }
    path {
      fill: #fff;
    }
  }

  .MuiSvgIcon-root {
    transition: 0.3s ease transform;
  }
  .mui-icon-rotate--180 {
    transform: rotate(180deg);
  }

  ${ScrollbarStyles(theme)}
  ${TypographyStyles(theme)}
  ${ButtonStyles(theme)}
  ${DatePickerStyles(theme)}
  ${AccordionStyles(theme)}
  ${TooltipStyles(theme)}
  

  .MuiMenu-root.MuiMenu-root.MuiMenu-root {
    z-index: 10001;
  }
  .MuiAutocomplete-popper.MuiAutocomplete-popper.MuiAutocomplete-popper {
    z-index: 10001;
  }

  .MuiAutocomplete-option {
    .MuiAutocomplete-option__background {
      height: 32px;
      position: absolute;
      inset: 0;
      top: 8px;
      z-index: -1;
    }

    &:hover .MuiAutocomplete-option__background {
      background: linear-gradient(90deg, ${theme.customColors?.primaryPetrol} 3.17%, rgba(84, 94, 151, 0) 118.83%);
    }
    &[aria-selected='true'] .MuiAutocomplete-option__background {
      background: linear-gradient(90deg, ${theme.customColors?.primaryPetrol} 3.17%, rgba(84, 94, 151, 0) 118.83%);
    }
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .app {
    grid-area: content;
    align-items: stretch !important;
    justify-content: stretch !important;
    max-height: 100%;
    overflow: hidden;
  }

  main {
    flex: 1;
  }

  main.default-padding {
    padding: 110px 32px 32px 16px;
  }

  .empty-space-icon {
    width: 16px;
    height: 16px;
  }

  .filler {
    flex: 0.98;
  }

  .text-no-wrap {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  hr {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .d-flex {
    display: flex;
  }
  .flex-1 {
    flex: 1;
  }

  .flex-column {
    flex-direction: column;
  }

  .justify-content-end {
    justify-content: flex-end;
  }

  .justify-content-space-between {
    justify-content: space-between;
  }
  .align-items-end {
    align-items: flex-end;
  }

  .MuiTable-root {
    color: ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
    .MuiTableCell-root {
      color: ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};

      .MuiTableSortLabel-root {
        color: ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
        &.Mui-active {
          color: ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
          .MuiSvgIcon-root {
            color: ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
          }
        }
      }
      .MuiSvgIcon-root {
        color: ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
      }
    }
  }

  .table-header {
    display: flex;
    border-bottom: 1px solid var(--color-primary-cool-gray);
    padding-bottom: 4px;
    line-height: 16px;
    font-size: 12px;
    font-weight: bold;
    align-items: flex-end;
    height: 49px;
    margin-bottom: 1px;

    p {
      margin: 0;
    }

    .table-column-selection,
    .table-column-selection-small {
      align-items: flex-start;
      min-height: 21px;
    }
  }

  .table-header.sub {
    padding-top: 8px;
    padding-bottom: 7px;
  }

  .table-sub-header-notice {
    font-size: 20px;
    line-height: 28px;
    margin-top: 80px;
    text-align: center;
  }

  .table-column-selection {
    max-width: 48px;
    min-width: 48px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .table-column-filler {
    flex: 999;
  }

  .table-column-selection-small {
    max-width: 32px;
    min-width: 32px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .sub-table-row-container {
    display: block;
    padding-top: 2px;
  }

  .table-loading {
    width: 80px;
    height: 80px;
    margin: 100px auto;
    position: absolute;
    left: 50%;
    top: 35%;
  }

  .information-message {
    color: var(--color-primary-gray);
    font-size: 14px;
    line-height: 20px;
  }

  .MuiAutocomplete-popper {
    .MuiPaper-root {
      border-radius: 0;
    }

    .MuiAutocomplete-listbox {
      padding: 0;
    }

    .MuiAutocomplete-option {
      border-radius: 0;
    }
  }

  .MuiFilledInput-root {
    background-color: ${theme.palette.mode === 'dark' ? 'rgba(10, 56, 75, 1)' : 'rgba(0, 0, 0, 0.06)'} !important;
    border-radius: 0 !important;

    &:before {
      border-color: rgba(10, 56, 75, 1) !important;
    }
  }

  .text-error {
    color: ${theme.palette.error.main};
  }

  .MuiTabs-scroller {
    z-index: 1;
  }

  .MuiTabs-indicator.MuiTabs-indicator.MuiTabs-indicator {
    top: 0;
    height: auto;
    z-index: -1;
    background-color: var(--color-petrol-primary);
  }

  .MuiTab-textColorPrimary.MuiTab-textColorPrimary.MuiTab-textColorPrimary {
    color: ${theme.palette.mode === 'dark' ? '#fff' : '#8F9B9E'};

    &.Mui-selected {
      color: #fff;
    }
  }

  .recharts-legend-item {
    font-size: 20px;
  }

  .material-table--no-padding td {
    padding: 2px 6px !important;
  }

  .message-box-container {
    position: fixed;
    display: none;
    top: 10px;
    left: 100px;
    z-index: 10001;

    .message-box {
      position: absolute;
      top: 13px;
      left: -112px;
      width: 256px;
      padding: 12px 17px 11px;
      z-index: 1;

      font-size: 14px;
      line-height: 20px;
      background-color: #fff;
      border: 1px solid #c0c6c8;
      box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.3), 0 8px 12px 2px rgba(0, 0, 0, 0.15);
    }

    .message-box-arrow {
      display: block;
      position: absolute;
      width: 15px;
      height: 14px;
      top: 0;
      z-index: 2;
      left: 9px;
    }
  }

  .app-background {
    z-index: -1;
  }

  .MuiTableCell-root.MuiTableCell-root.MuiTableCell-root {
    padding: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .MuiTableCell-head.MuiTableCell-head.MuiTableCell-head {
    padding: 8px;
    background: transparent;

    .material-icons {
      right: 0 !important;
    }
  }

  .MuiTableCell-paddingNone.MuiTableCell-paddingNone.MuiTableCell-paddingNone {
    padding: 0;
  }

  .MuiTablePagination-root.MuiTablePagination-root .MuiTablePagination-toolbar {
    padding: 8px 0 !important;

    .MuiTypography-root {
      color: ${theme.palette.mode === 'dark' ? '#fff' : 'rgba(0, 0, 0, 0.87)'} !important;
    }
  }

  .MuiTablePagination-root.MuiTablePagination-root.MuiTablePagination-root {
    padding: 0;
  }

  .opac {
    opacity: 0.3;
  }

  .action-bar {
    position: absolute;
    right: 0;
  }
  .validation-container {
    font-size: 0.75rem !important;
    font-weight: normal !important;
    > div {
      padding-left: 14px;
      margin-top: 6px !important;
      a {
        margin-left: 6px !important;
      }
    }
  }

  .DateRangePicker_picker,
  .SingleDatePicker_picker {
    box-shadow: 4px 0 8px rgba(0, 0, 0, 0.1);
  }

  .material-table.material-table--small-padding {
    > .MuiPaper-root > .MuiToolbar-root:nth-of-type(1) {
      min-height: 0;
      top: 0;
    }
  }

  .MuiAutocomplete-popper .MuiPaper-root {
    background: ${theme.palette.mode === 'dark' ? '#254D61' : '#fff'};
  }

  .MuiTableSortLabel-root:not(.Mui-active):after {
    opacity: 0.7;
    // display: none;
  }

  .MuiTableCell-body.MuiTableCell-body.MuiTableCell-body > div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .MuiTableCell-head:active {
    z-index: 2 !important;
  }
  .MuiTableCell-head.MuiTableCell-alignCenter > [data-rbd-drag-handle-context-id],
  .MuiTableCell-head.MuiTableCell-alignCenter > [data-rfd-drag-handle-context-id] {
    justify-content: center;
  }
  .full-height-dialog .MuiDialog-paper {
    min-height: calc(95vh - 64px);
  }

  .range-list-scroll-detail-container {
    overflow-y: scroll !important;
  }

  #m--table--filter--row {
    .MuiInputBase-root {
      padding-left: 0;
      .MuiInputAdornment-positionStart {
        display: none;
      }
      input {
        padding: 4px 0px;
      }
    }
  }
`
const StyledGlobalStyles = styled(GlobalStyles, { name: 'AppGlobalStyles' })``

type AppGlobalStylesProps = {
  darkMode?: boolean
}
const AppGlobalStyles = ({ darkMode }: AppGlobalStylesProps) => {
  return (
    <>
      <StyledGlobalStyles styles={appStyles as any} />
    </>
  )
}
export const MemoizedAppGlobalStyles = React.memo(
  AppGlobalStyles,
  (prevProps, nextProps) => prevProps.darkMode === nextProps.darkMode,
)
