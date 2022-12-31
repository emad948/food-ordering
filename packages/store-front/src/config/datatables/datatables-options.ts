import { MUIDataTableTextLabels } from 'mui-datatables';

const textLabels: Partial<MUIDataTableTextLabels> = {
  body: {
    noMatch: 'Leider konnten keine Einträge gefunden werden.',
    toolTip: 'Sortieren',
  },
  pagination: {
    displayRows: 'von',
    rowsPerPage: 'Einträge pro Seite',
    next: 'Weiter',
    previous: 'Zurück',
  },
  filter: {
    all: 'Alle',
    reset: 'Zurücksetzen',
    title: 'Filter',
  },
  selectedRows: {
    text: 'Eintrag ausgewählt',
    delete: 'Löschen',
    deleteAria: 'Löschen',
  },
  viewColumns: {
    title: 'Felder einblenden',
    titleAria: 'Felder einblenden',
  },
  toolbar: {
    filterTable: 'Tabelle filtern',
    search: 'Suchen',
    viewColumns: 'Felder einblenden',
  },
};

export default textLabels;
