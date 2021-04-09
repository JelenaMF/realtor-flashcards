const showBttn = document.createElement('button');
showBttn.textContent = 'Show hint';
const hint = document.querySelector('.hint');
hint.style.display = 'none';
document.getElementById('content').appendChild(showBttn);
showBttn.addEventListener('click', (e) => {
    hint.style.display = '';
    showBttn.style.display = 'none';
});