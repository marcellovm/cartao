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

document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.frente').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.verso').style.transform = 'perspective(1000px) rotateY(0deg)'; 
}    
document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.frente').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.verso').style.transform = 'perspective(1000px) rotateY(180deg)';
}
document.querySelector('.cvv-input').oneinput = () => {
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').ariaValueMax;
}