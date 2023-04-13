import { Localization as MaterialTableLocalization } from '@material-table/core'

export const getMaterialTableTranslations = (t: any): MaterialTableLocalization => {
  if (t === undefined) {
    return {
      pagination: {
        labelDisplayedRows: '{from}-{to} von {count}',
        labelRowsPerPage: 'Zeilen pro Seite',
        firstTooltip: 'Erste Seite',
        previousTooltip: 'Vorherige Seite',
        nextTooltip: 'Nächste Seite',
        lastTooltip: 'Letzte Seite',
        labelRows: '',
      },
      toolbar: {
        nRowsSelected: '{0} Zeilen ausgewählt',
        addRemoveColumns: 'Spalten anzeigen',
      },
      header: {
        actions: '',
      },
      body: {
        addTooltip: 'Neu',
        editTooltip: 'Editieren',
        deleteTooltip: 'Löschen',
        editRow: {
          saveTooltip: 'Speichern',
          cancelTooltip: 'Abbrechen',
          deleteText: 'Wollen Sie wirklich löschen?',
        },
        emptyDataSourceMessage: 'Keine Daten gefunden',
        filterRow: {
          filterTooltip: 'Filter',
        },
      },
    }
  }
  return {
    pagination: {
      labelDisplayedRows: t('table.pagination.display', { defaultValue: '{from}-{to} von {count}' }),
      labelRowsPerPage: t('table.pagination.rowsPerPage', { defaultValue: 'Zeilen pro Seite' }),
      firstTooltip: t('table.pagination.firstTooltip', { defaultValue: 'Erste Seite' }),
      previousTooltip: t('table.pagination.previousTooltip', { defaultValue: 'Vorherige Seite' }),
      nextTooltip: t('table.pagination.nextTooltip', { defaultValue: 'Nächste Seite' }),
      lastTooltip: t('table.pagination.lastTooltip', { defaultValue: 'Letzte Seite' }),
      labelRows: '',
    },
    toolbar: {
      nRowsSelected: t('table.rowsSelected', { defaultValue: '{0} Zeilen ausgewählt' }),
      addRemoveColumns: t('table.addRemoveColumns', { defaultValue: 'Spalten anzeigen' }),
    },
    header: {
      actions: '',
    },
    body: {
      addTooltip: t('table.addTooltip', { defaultValue: 'Neu' }),
      editTooltip: t('table.editTooltip', { defaultValue: 'Editieren' }),
      deleteTooltip: t('table.deleteTooltip', { defaultValue: 'Löschen' }),
      editRow: {
        saveTooltip: t('table.saveTooltip', { defaultValue: 'Speichern' }),
        cancelTooltip: t('table.cancelTooltip', { defaultValue: 'Abbrechen' }),
        deleteText: t('table.deleteText', { defaultValue: 'Wollen Sie wirklich löschen?' }),
      },
      emptyDataSourceMessage: t('table.emptyDataSource', { defaultValue: 'Keine Daten gefunden' }),
      filterRow: {
        filterTooltip: t('table.filterTooltip', { defaultValue: 'Filter' }),
      },
    },
  }
}
