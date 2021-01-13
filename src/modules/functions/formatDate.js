/*
    форматирует дату по заданному формату со здвигом на 1 день вперед
*/

export function formatDate (date, i) {
    let dd = date.getDate() + i;
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yyyy = date.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
}
