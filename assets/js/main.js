const addChar = document.querySelector('.input-char');
const btnAddChar = document.querySelector('.btn-addchar');
const charList = document.querySelector('.char-list');
let boxes = document.getElementsByClassName('checkbox').length

function save() {
    for (let i = 1; i <= boxes; i++) {
        const checkbox = document.getElementById(String('box-' + i));
        localStorage.setItem("checkbox" + String(i), checkbox.checked);
    }
}

//for loading
for (let i = 1; i <= boxes; i++) {
    if (localStorage.length > 0) {
        const checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
        document.getElementById(String('box-' + i)).checked = checked;
    }
}


function criaLi() {
    const li = document.createElement('li');
    return li;
}

//Adiciona com click
btnAddChar.addEventListener('click', function (e) {
    if (!addChar.value) return;
    criaChar(addChar.value);
});

// Adiciona com Enter
addChar.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!addChar.value) return;
        criaChar(addChar.value);
    }
});

function limpaInput() {
    addChar.value = '';
    addChar.focus();
}

function deletaChar() {
    
}

function criaChar(nameChar) {
    const li = criaLi();
    li.innerText = nameChar;
    charList.appendChild(li);
    limpaInput();
}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('checkbox')) {
        saveMe();;
    }
});

window.addEventListener('change', save);
