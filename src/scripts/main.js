'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

container.addEventListener('click', ev => {

    if (ev.target === appendRowBtn) {
        appendRows(table);
    }

    if (ev.target === removeRowBtn) {
        removeRows(table);
    }

    if (ev.target === appendColBtn) {
        appendColumns(table);
    }

    if (ev.target === removeColBtn) {
        removeColumns(table);
    }

    checkDisabledRows();
    checkDisabledColumns();
})

function appendRows(table) {

    const rowsCount = table.rows.length;
    const columnsCount = table.rows[0].cells.length;

    if (rowsCount === 10) {
        return;
    } 
    
    const newRow = table.insertRow();
    
    for (let i = 0; i < columnsCount; i++) {
        newRow.insertCell();
    }    
}

function removeRows(table) {
    if (table.rows.length === 2) {
        return;
    }
    
    const rowIndexToDelete = table.rows.length - 1;
    table.deleteRow(rowIndexToDelete);
}

function appendColumns(table) {
    const rows = [...table.rows];
    const columns = table.rows[0].cells.length;

    if (columns === 10) {
        return;
    }
    
    rows.forEach(row => {
        row.insertCell();
    })
}

function removeColumns(table) {
    const columns = table.rows[0].cells.length;
    
    if (columns === 2) {
        return;
    }
        
    const cellIndexToDelete = columns - 1;
    const rows = [...table.rows];

    rows.forEach(row => {
        row.deleteCell(cellIndexToDelete);
    })
}

function checkDisabledRows() {
    if (table.rows.length === 2) {
        removeRowBtn.disabled = true;
        appendRowBtn.disabled = false;
    }

    if (table.rows.length > 2) {
        removeRowBtn.disabled = false;
    }

    if (table.rows.length === 10) {
        appendRowBtn.disabled = true;
    }

    if (table.rows.length < 10) {
        appendRowBtn.disabled = false;
    }
}

function checkDisabledColumns() {
    if (table.rows[0].cells.length === 2) {
        removeColBtn.disabled = true;
        appendColBtn.disabled = false;
    }

    if (table.rows[0].cells.length > 2) {
        removeColBtn.disabled = false;
    }

    if (table.rows[0].cells.length === 10) {
        appendColBtn.disabled = true;
    }

    if (table.rows[0].cells.length < 10) {
        appendColBtn.disabled = false;
    }
}
