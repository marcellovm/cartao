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