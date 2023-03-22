let meses = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
];
for (let m = 0; m <= 11; m++) {
    mes.innerHTML += "<option>" + meses[m] + "</option>";
}
for (let a = 2023; a <= 2043; a++) {
    ano.innerHTML += `<option>${a}</option>`;
}

