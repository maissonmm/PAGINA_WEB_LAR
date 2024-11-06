// VERIFICAÇÃO


const popupE0 = document.querySelector('#pop-upE0')
const popupE1 = document.querySelector('#pop-upE1')
const popupE2 = document.querySelector('#pop-upE2')
const popupE3 = document.querySelector('#pop-upE3')
const popupE4 = document.querySelector('#pop-upE4')
const popupE5 = document.querySelector('#pop-upE5')
const popupE6 = document.querySelector('#pop-upE6')
const popupE7 = document.querySelector('#pop-upE7')
const popupE8 = document.querySelector('#pop-upE8')
const popupE9 = document.querySelector('#pop-upE9')


const errado = document.querySelector('#respostaErrada')
const certo = document.querySelector('#certaResposta')
let nota = 0
// function confirmar() {
//     console.log(nota)
//     if (popupE0.style.display !== 'none') {

//         if (checkbox5.checked) {
//             certo.style.display = 'block';
//             popupE0.style.display = 'none';

//             nota += 1
//         }
//         else {

//             nota += 0
//             localStorage.setItem("total", nota.toString());

//             errado.style.display = 'block';
//             popupE0.style.display = 'none';
//         }
//     }
//     else if (popupE1.style.display !== 'none') {
//         if (checkbox10.checked) {
//             certo.style.display = 'block';
//             popupE1.style.display = 'none';


//             nota += 1;
//         }
//         else {

//             nota += 0;


//             errado.style.display = 'block';
//             popupE1.style.display = 'none';
//         }
//     }
//     else if (popupE2.style.display !== 'none') {
//         if (checkbox41.checked) {
//             certo.style.display = 'block';
//             popupE2.style.display = 'none';


//             nota += 1;

//         }
//         else {


//             nota += 0;


//             errado.style.display = 'block';
//             popupE2.style.display = 'none';
//         }
//     }
//     else if (popupE3.style.display !== 'none') {
//         if (checkbox22.checked) {
//             certo.style.display = 'block';
//             popupE3.style.display = 'none';


//             nota += 1;

//         }
//         else {


//             nota += 0;


//             errado.style.display = 'block';
//             popupE3.style.display = 'none';
//         }
//     }
//     else if (popupE4.style.display !== 'none') {
//         if (checkbox33.checked) {
//             certo.style.display = 'block';
//             popupE4.style.display = 'none';


//             nota += 1;

//         }
//         else {


//             nota += 0;


//             errado.style.display = 'block';
//             popupE4.style.display = 'none';
//         }
//     }
//     else if (popupE5.style.display !== 'none') {
//         if (checkbox54.checked) {
//             certo.style.display = 'block';
//             popupE5.style.display = 'none';


//             nota += 1;

//         }
//         else {


//             nota += 0;


//             errado.style.display = 'block';
//             popupE5.style.display = 'none';
//         }
//     }
//     else if (popupE6.style.display !== 'none') {
//         if (checkbox15.checked) {
//             certo.style.display = 'block';
//             popupE6.style.display = 'none';


//             nota += 1;

//         }
//         else {


//             nota += 0;


//             errado.style.display = 'block';
//             popupE6.style.display = 'none';
//         }
//     }
//     else if (popupE7.style.display !== 'none') {
//         if (checkbox46.checked) {
//             certo.style.display = 'block';
//             popupE7.style.display = 'none';


//             nota += 1;

//         }
//         else {


//             nota += 0;


//             errado.style.display = 'block';
//             popupE7.style.display = 'none';
//         }
//     }
//     else if (popupE8.style.display !== 'none') {
//         if (checkbox17.checked) {
//             certo.style.display = 'block';
//             popupE8.style.display = 'none';


//             nota += 1;

//         }
//         else {


//             nota += 0;


//             errado.style.display = 'block';
//             popupE8.style.display = 'none';
//         }
//     }
//     else if (popupE9.style.display !== 'none') {
//         if (checkbox28.checked) {
//             certo.style.display = 'block';
//             popupE9.style.display = 'none';


//             nota += 1;

//         }
//         else {


//             nota += 0;


//             errado.style.display = 'block';
//             popupE1.style.display = 'none';
//         }
//     };
//     console.log(nota)
// }

const h1 = document.querySelector('#h1')
const h2 = document.querySelector('#h2')
const h3 = document.querySelector('#h3')
const h4 = document.querySelector('#h4')
const primeiraPg = document.querySelector('#pop-upI')
const segundaPg = document.querySelector('#pop-upI1')
const acerto3 = document.querySelector('#acerto_ate3')
const acerto5 = document.querySelector('#acerto_ate5')
const acerto9 = document.querySelector('#acerto_ate9')
const acertotudo = document.querySelector('#acerto_tudo')

const popE0 = document.querySelector('#pop-upE0')
const popE1 = document.querySelector('#pop-upIE1')
const popE2 = document.querySelector('#pop-upIE2')
const popE3 = document.querySelector('#pop-upIE3')
const popE4 = document.querySelector('#pop-upIE4')
const popE5 = document.querySelector('#pop-upIE5')
const popE6 = document.querySelector('#pop-upIE6')
const popE7 = document.querySelector('#pop-upIE7')
const popE8 = document.querySelector('#pop-upIE8')
const popE9 = document.querySelector('#pop-upIE9')
let pagina = 0

function proximo() {

    if (popupE0.style.display !== 'none') {

        if (checkbox5.checked) {
            popupE0.style.display = 'none';
            popupE1.style.display = 'block';
            nota += 1
        }
        else {
            nota += 0
            localStorage.setItem("total", nota.toString());
            popupE0.style.display = 'none';
            popupE1.style.display = 'block';
        }
    }
    else if (popupE1.style.display !== 'none') {
        if (checkbox10.checked) {
            popupE1.style.display = 'none';
            popupE2.style.display = 'block';

            nota += 1;
        }
        else {

            nota += 0;
            popupE2.style.display = 'block';
            popupE1.style.display = 'none';
        }
    }
    else if (popupE2.style.display !== 'none') {
        if (checkbox41.checked) {
            nota += 1;
            popupE2.style.display = 'none';
            popupE3.style.display = 'block';



        }
        else {


            nota += 0;
            popupE3.style.display = 'block';
            popupE2.style.display = 'none';
        }
    }
    else if (popupE3.style.display !== 'none') {
        if (checkbox22.checked) {
            nota += 1;
            popupE3.style.display = 'none';
            popupE4.style.display = 'block';



        }
        else {


            nota += 0;
            popupE3.style.display = 'none';
            popupE4.style.display = 'block';

        }
    }
    else if (popupE4.style.display !== 'none') {
        if (checkbox33.checked) {
            nota += 1;
            popupE4.style.display = 'none';
            popupE5.style.display = 'block';


        }
        else {


            nota += 0;
            popupE4.style.display = 'none';
            popupE5.style.display = 'block';

        }
    }
    else if (popupE5.style.display !== 'none') {
        if (checkbox54.checked) {
            nota += 1;
            popupE5.style.display = 'none';
            popupE6.style.display = 'block';



        }
        else {
            nota += 0;
            popupE5.style.display = 'none';
            popupE6.style.display = 'block';


        }
    }
    else if (popupE6.style.display !== 'none') {
        if (checkbox15.checked) {
            nota += 1;

            popupE6.style.display = 'none';
            popupE7.style.display = 'block';


        }
        else {


            nota += 0;
            popupE6.style.display = 'none';
            popupE7.style.display = 'block';

        }
    }
    else if (popupE7.style.display !== 'none') {
        if (checkbox46.checked) {
            nota += 1;
            popupE7.style.display = 'none';

            popupE8.style.display = 'block';


        }
        else {
            nota += 0;


            popupE7.style.display = 'none';
            popupE8.style.display = 'block';
        }
    }
    else if (popupE8.style.display !== 'none') {
        if (checkbox17.checked) {
            nota += 1;
            popupE8.style.display = 'none';
            popupE9.style.display = 'block';



        }
        else {

            popupE9.style.display = 'block';
            nota += 0;
            popupE8.style.display = 'none';
        }
    }
    else if (popupE9.style.display !== 'none') {

        if (checkbox28.checked) {
            nota += 1;
            primeiraPg.style.display = 'none';
            segundaPg.style.display = 'inline-flex';


            if (nota <= 3) {
                acerto3.style.display = 'block'
            }
            else if (nota <= 7) {
                acerto5.style.display = 'block'
            }
            else if (nota <= 9) {
                acerto9.style.display = 'block'
            }
            else {
                acertotudo.style.display = 'block'
            }

        }
        else {


            nota += 0;
            console.log(nota)


            primeiraPg.style.display = 'none';
            segundaPg.style.display = 'inline-flex';

            if (nota <= 3) {
                acerto3.style.display = 'block'
            }
            else if (nota <= 7) {
                acerto5.style.display = 'block'
            }
            else if (nota <= 9) {
                acerto9.style.display = 'block'
            }
            else {
                acertotudo.style.display = 'block'
            }
        }
    };
    console.log(nota);

}




function sair() {
    window.location.href = '/index.html'
}
function inicio() {
    window.location.href = '/index.html'
}


const vejaNota = document.getElementById('finalizar1') 
const vejaNota1 = document.getElementById('finalizar2')
const vejaNota2 = document.getElementById('finalizar3')
const vejaNota3 = document.getElementById('finalizar4')



function tira() {

    // Obtenha o valor da variável JavaScript que deseja enviar

    const nota3 = nota;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'dados.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
        } else {
        console.error('Ocorreu um erro durante o envio dos dados.');
        }
    }
    };

    const data = 'nota3=' + encodeURIComponent(nota3);
    xhr.send(data);

        segundaPg.style.display = 'none';
        usuario2.style.display = 'flex';
        pagina = 0;
        pontuacao.innerHTML = `${nota}`;
}




// INTERAÇÃO DAS CHECKBOXS

const checkboxes = document.querySelectorAll('input[name="grupo"]');

function uncheckOthers() {
    checkboxes.forEach(checkbox => {
        if (checkbox !== this && checkbox.checked) {
            checkbox.checked = false;
        }
    });
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', uncheckOthers);
});
// 

const checkboxs1 = document.querySelectorAll('input[name="grupo1"]');

function uncheckOthers1() {
    checkboxs1.forEach(checkbox => {
        if (checkbox !== this && checkbox.checked) {
            checkbox.checked = false;
        }
    });
}

checkboxs1.forEach(checkbox => {
    checkbox.addEventListener('click', uncheckOthers1);
});
// 
const checkboxs2 = document.querySelectorAll('input[name="grupo2"]');

function uncheckOthers2() {
    checkboxs2.forEach(checkbox => {
        if (checkbox !== this && checkbox.checked) {
            checkbox.checked = false;
        }
    });
}

checkboxs2.forEach(checkbox => {
    checkbox.addEventListener('click', uncheckOthers2);
});
// 
const checkboxs3 = document.querySelectorAll('input[name="grupo3"]');

function uncheckOthers3() {
    checkboxs3.forEach(checkbox => {
        if (checkbox !== this && checkbox.checked) {
            checkbox.checked = false;
        }
    });
}

checkboxs3.forEach(checkbox => {
    checkbox.addEventListener('click', uncheckOthers3);
});
// 
const checkboxs4 = document.querySelectorAll('input[name="grupo4"]');

function uncheckOthers4() {
    checkboxs4.forEach(checkbox => {
        if (checkbox !== this && checkbox.checked) {
            checkbox.checked = false;
        }
    });
}

checkboxs4.forEach(checkbox => {
    checkbox.addEventListener('click', uncheckOthers4);
});
// 
const checkboxs5 = document.querySelectorAll('input[name="grupo5"]');

function uncheckOthers5() {
    checkboxs5.forEach(checkbox => {
        if (checkbox !== this && checkbox.checked) {
            checkbox.checked = false;
        }
    });
}

checkboxs5.forEach(checkbox => {
    checkbox.addEventListener('click', uncheckOthers5);
});
// 
const checkboxs6 = document.querySelectorAll('input[name="grupo6"]');

function uncheckOthers6() {
    checkboxs6.forEach(checkbox => {
        if (checkbox !== this && checkbox.checked) {
            checkbox.checked = false;
        }
    });
}

checkboxs6.forEach(checkbox => {
    checkbox.addEventListener('click', uncheckOthers6);
});
// 
const checkboxs7 = document.querySelectorAll('input[name="grupo7"]');

function uncheckOthers7() {
    checkboxs7.forEach(checkbox => {
        if (checkbox !== this && checkbox.checked) {
            checkbox.checked = false;
        }
    });
}

checkboxs7.forEach(checkbox => {
    checkbox.addEventListener('click', uncheckOthers7);
});
// 
const checkboxs8 = document.querySelectorAll('input[name="grupo8"]');

function uncheckOthers8() {
    checkboxs8.forEach(checkbox => {
        if (checkbox !== this && checkbox.checked) {
            checkbox.checked = false;
        }
    });
}

checkboxs8.forEach(checkbox => {
    checkbox.addEventListener('click', uncheckOthers8);
});
// 
const checkboxs9 = document.querySelectorAll('input[name="grupo9"]');

function uncheckOthers9() {
    checkboxs9.forEach(checkbox => {
        if (checkbox !== this && checkbox.checked) {
            checkbox.checked = false;
        }
    });
}

checkboxs9.forEach(checkbox => {
    checkbox.addEventListener('click', uncheckOthers9);
});





// INTERAÇÃO SETAS
var checkbox1 = document.getElementById("setaV1");
var checkbox2 = document.getElementById("setaA1");
var checkbox3 = document.getElementById("setaVer1");
var checkbox4 = document.getElementById("setaM1");
var checkbox5 = document.getElementById("setaAm1");

var checkbox10 = document.getElementById("check1");
var checkbox20 = document.getElementById("check2");
var checkbox30 = document.getElementById("check3");
var checkbox40 = document.getElementById("check4");
var checkbox50 = document.getElementById("check5");

var checkbox11 = document.getElementById("check1.1");
var checkbox21 = document.getElementById("check2.1");
var checkbox31 = document.getElementById("check3.1");
var checkbox41 = document.getElementById("check4.1");
var checkbox51 = document.getElementById("check5.1");

var checkbox12 = document.getElementById("check1.2");
var checkbox22 = document.getElementById("check2.2");
var checkbox32 = document.getElementById("check3.2");
var checkbox42 = document.getElementById("check4.2");
var checkbox52 = document.getElementById("check5.2");

var checkbox13 = document.getElementById("check1.3");
var checkbox23 = document.getElementById("check2.3");
var checkbox33 = document.getElementById("check3.3");
var checkbox43 = document.getElementById("check4.3");
var checkbox53 = document.getElementById("check5.3");

var checkbox14 = document.getElementById("check1.4");
var checkbox24 = document.getElementById("check2.4");
var checkbox34 = document.getElementById("check3.4");
var checkbox44 = document.getElementById("check4.4");
var checkbox54 = document.getElementById("check5.4");

var checkbox15 = document.getElementById("check1.5");
var checkbox25 = document.getElementById("check2.5");
var checkbox35 = document.getElementById("check3.5");
var checkbox45 = document.getElementById("check4.5");
var checkbox55 = document.getElementById("check5.5");

var checkbox16 = document.getElementById("check1.6");
var checkbox26 = document.getElementById("check2.6");
var checkbox36 = document.getElementById("check3.6");
var checkbox46 = document.getElementById("check4.6");
var checkbox56 = document.getElementById("check5.6");

var checkbox17 = document.getElementById("check1.7");
var checkbox27 = document.getElementById("check2.7");
var checkbox37 = document.getElementById("check3.7");
var checkbox47 = document.getElementById("check4.7");
var checkbox57 = document.getElementById("check5.7");

var checkbox18 = document.getElementById("check1.8");
var checkbox28 = document.getElementById("check2.8");
var checkbox38 = document.getElementById("check3.8");
var checkbox48 = document.getElementById("check4.8");
var checkbox58 = document.getElementById("check5.8");




const imgV = document.querySelector('#seta0');
const imgA = document.querySelector('#seta1');
const imgVer = document.querySelector('#seta2');
const imgM = document.querySelector('#seta3');
const imgAm = document.querySelector('#seta4');



const imgV1 = document.querySelector('#seta0-1');
const imgA1 = document.querySelector('#seta1-1');
const imgVer1 = document.querySelector('#seta2-1');
const imgM1 = document.querySelector('#seta3-1');
const imgAm1 = document.querySelector('#seta4-1');

const imgV2 = document.querySelector('#seta0-2');
const imgA2 = document.querySelector('#seta1-2');
const imgVer2 = document.querySelector('#seta2-2');
const imgM2 = document.querySelector('#seta3-2');
const imgAm2 = document.querySelector('#seta4-2');

const imgV3 = document.querySelector('#seta0-3');
const imgA3 = document.querySelector('#seta1-3');
const imgVer3 = document.querySelector('#seta2-3');
const imgM3 = document.querySelector('#seta3-3');
const imgAm3 = document.querySelector('#seta4-3');

const imgV4 = document.querySelector('#seta0-4');
const imgA4 = document.querySelector('#seta1-4');
const imgVer4 = document.querySelector('#seta2-4');
const imgM4 = document.querySelector('#seta3-4');
const imgAm4 = document.querySelector('#seta4-4');

const imgV5 = document.querySelector('#seta0-5');
const imgA5 = document.querySelector('#seta1-5');
const imgVer5 = document.querySelector('#seta2-5');
const imgM5 = document.querySelector('#seta3-5');
const imgAm5 = document.querySelector('#seta4-5');

const imgV6 = document.querySelector('#seta0-6');
const imgA6 = document.querySelector('#seta1-6');
const imgVer6 = document.querySelector('#seta2-6');
const imgM6 = document.querySelector('#seta3-6');
const imgAm6 = document.querySelector('#seta4-6');

const imgV7 = document.querySelector('#seta0-7');
const imgA7 = document.querySelector('#seta1-7');
const imgVer7 = document.querySelector('#seta2-7');
const imgM7 = document.querySelector('#seta3-7');
const imgAm7 = document.querySelector('#seta4-7');

const imgV8 = document.querySelector('#seta0-8');
const imgA8 = document.querySelector('#seta1-8');
const imgVer8 = document.querySelector('#seta2-8');
const imgM8 = document.querySelector('#seta3-8');
const imgAm8 = document.querySelector('#seta4-8');


const imgV9 = document.querySelector('#seta0-9');
const imgA9 = document.querySelector('#seta1-9');
const imgVer9 = document.querySelector('#seta2-9');
const imgM9 = document.querySelector('#seta3-9');
const imgAm9 = document.querySelector('#seta4-9');

// Define a função a ser executada quando a checkbox for clicada



function checkboxClicada1() {
    if (checkbox1.checked) {
        // Checkbox foi marcada, faça algo
        imgV.style.display = 'block';
        imgA.style.display = 'none';
        imgVer.style.display = 'none';
        imgM.style.display = 'none';
        imgAm.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgV.style.display = 'none';
    }
}
function checkboxClicada2() {
    if (checkbox2.checked) {
        // Checkbox foi marcada, faça algo
        imgV.style.display = 'none';
        imgA.style.display = 'block';
        imgVer.style.display = 'none';
        imgM.style.display = 'none';
        imgAm.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgA.style.display = 'none';
    }
}
function checkboxClicada3() {
    if (checkbox3.checked) {
        // Checkbox foi marcada, faça algo
        imgV.style.display = 'none';
        imgA.style.display = 'none';
        imgVer.style.display = 'block';
        imgM.style.display = 'none';
        imgAm.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgVer.style.display = 'none';
    }
}
function checkboxClicada4() {
    if (checkbox4.checked) {
        // Checkbox foi marcada, faça algo
        imgV.style.display = 'none';
        imgA.style.display = 'none';
        imgVer.style.display = 'none';
        imgM.style.display = 'block';
        imgAm.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgM.style.display = 'none';
    }
}
function checkboxClicada5() {
    if (checkbox5.checked) {
        // Checkbox foi marcada, faça algo
        imgV.style.display = 'none';
        imgA.style.display = 'none';
        imgVer.style.display = 'none';
        imgM.style.display = 'none';
        imgAm.style.display = 'block';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgAm.style.display = 'none';
    }
}


function checkboxClicada10() {
    if (checkbox10.checked) {
        // Checkbox foi marcada, faça algo
        imgV1.style.display = 'block';
        imgA1.style.display = 'none';
        imgVer1.style.display = 'none';
        imgM1.style.display = 'none';
        imgAm1.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgV1.style.display = 'none';
    }
}
function checkboxClicada20() {
    if (checkbox20.checked) {
        // Checkbox foi marcada, faça algo
        imgV1.style.display = 'none';
        imgA1.style.display = 'block';
        imgVer1.style.display = 'none';
        imgM1.style.display = 'none';
        imgAm1.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgA1.style.display = 'none';
    }
}
function checkboxClicada30() {
    if (checkbox30.checked) {
        // Checkbox foi marcada, faça algo
        imgV1.style.display = 'none';
        imgA1.style.display = 'none';
        imgVer1.style.display = 'block';
        imgM1.style.display = 'none';
        imgAm1.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgVer1.style.display = 'none';
    }
}
function checkboxClicada40() {
    if (checkbox40.checked) {
        // Checkbox foi marcada, faça algo
        imgV1.style.display = 'none';
        imgA1.style.display = 'none';
        imgVer1.style.display = 'none';
        imgM1.style.display = 'block';
        imgAm1.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgM1.style.display = 'none';
    }
}
function checkboxClicada50() {
    if (checkbox50.checked) {
        // Checkbox foi marcada, faça algo
        imgV1.style.display = 'none';
        imgA1.style.display = 'none';
        imgVer1.style.display = 'none';
        imgM1.style.display = 'none';
        imgAm1.style.display = 'block';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgAm1.style.display = 'none';
    }
}


function checkboxClicada11() {
    if (checkbox11.checked) {
        // Checkbox foi marcada, faça algo
        imgV2.style.display = 'block';
        imgA2.style.display = 'none';
        imgVer2.style.display = 'none';
        imgM2.style.display = 'none';
        imgAm2.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgV2.style.display = 'none';
    }
}
function checkboxClicada21() {
    if (checkbox21.checked) {
        // Checkbox foi marcada, faça algo
        imgV2.style.display = 'none';
        imgA2.style.display = 'block';
        imgVer2.style.display = 'none';
        imgM2.style.display = 'none';
        imgAm2.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgA2.style.display = 'none';
    }
}
function checkboxClicada31() {
    if (checkbox31.checked) {
        // Checkbox foi marcada, faça algo
        imgV2.style.display = 'none';
        imgA2.style.display = 'none';
        imgVer2.style.display = 'block';
        imgM2.style.display = 'none';
        imgAm2.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgVer2.style.display = 'none';
    }
}
function checkboxClicada41() {
    if (checkbox41.checked) {
        // Checkbox foi marcada, faça algo
        imgV2.style.display = 'none';
        imgA2.style.display = 'none';
        imgVer2.style.display = 'none';
        imgM2.style.display = 'block';
        imgAm2.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgM2.style.display = 'none';
    }
}
function checkboxClicada51() {
    if (checkbox51.checked) {
        // Checkbox foi marcada, faça algo
        imgV2.style.display = 'none';
        imgA2.style.display = 'none';
        imgVer2.style.display = 'none';
        imgM2.style.display = 'none';
        imgAm2.style.display = 'block';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgAm2.style.display = 'none';
    }
}



function checkboxClicada12() {
    if (checkbox12.checked) {
        // Checkbox foi marcada, faça algo
        imgV3.style.display = 'block';
        imgA3.style.display = 'none';
        imgVer3.style.display = 'none';
        imgM3.style.display = 'none';
        imgAm3.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgV3.style.display = 'none';
    }
}
function checkboxClicada22() {
    if (checkbox22.checked) {
        // Checkbox foi marcada, faça algo
        imgV3.style.display = 'none';
        imgA3.style.display = 'block';
        imgVer3.style.display = 'none';
        imgM3.style.display = 'none';
        imgAm3.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgA3.style.display = 'none';
    }
}
function checkboxClicada32() {
    if (checkbox32.checked) {
        // Checkbox foi marcada, faça algo
        imgV3.style.display = 'none';
        imgA3.style.display = 'none';
        imgVer3.style.display = 'block';
        imgM3.style.display = 'none';
        imgAm3.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgVer3.style.display = 'none';
    }
}
function checkboxClicada42() {
    if (checkbox42.checked) {
        // Checkbox foi marcada, faça algo
        imgV3.style.display = 'none';
        imgA3.style.display = 'none';
        imgVer3.style.display = 'none';
        imgM3.style.display = 'block';
        imgAm3.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgM3.style.display = 'none';
    }
}
function checkboxClicada52() {
    if (checkbox52.checked) {
        // Checkbox foi marcada, faça algo
        imgV3.style.display = 'none';
        imgA3.style.display = 'none';
        imgVer3.style.display = 'none';
        imgM3.style.display = 'none';
        imgAm3.style.display = 'block';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgAm3.style.display = 'none';
    }
}


function checkboxClicada13() {
    if (checkbox13.checked) {
        // Checkbox foi marcada, faça algo
        imgV4.style.display = 'block';
        imgA4.style.display = 'none';
        imgVer4.style.display = 'none';
        imgM4.style.display = 'none';
        imgAm4.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgV4.style.display = 'none';
    }
}
function checkboxClicada23() {
    if (checkbox23.checked) {
        // Checkbox foi marcada, faça algo
        imgV4.style.display = 'none';
        imgA4.style.display = 'block';
        imgVer4.style.display = 'none';
        imgM4.style.display = 'none';
        imgAm4.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgA4.style.display = 'none';
    }
}
function checkboxClicada33() {
    if (checkbox33.checked) {
        // Checkbox foi marcada, faça algo
        imgV4.style.display = 'none';
        imgA4.style.display = 'none';
        imgVer4.style.display = 'block';
        imgM4.style.display = 'none';
        imgAm4.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgVer4.style.display = 'none';
    }
}
function checkboxClicada43() {
    if (checkbox43.checked) {
        // Checkbox foi marcada, faça algo
        imgV4.style.display = 'none';
        imgA4.style.display = 'none';
        imgVer4.style.display = 'none';
        imgM4.style.display = 'block';
        imgAm4.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgM4.style.display = 'none';
    }
}
function checkboxClicada53() {
    if (checkbox53.checked) {
        // Checkbox foi marcada, faça algo
        imgV4.style.display = 'none';
        imgA4.style.display = 'none';
        imgVer4.style.display = 'none';
        imgM4.style.display = 'none';
        imgAm4.style.display = 'block';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgAm4.style.display = 'none';
    }
}




function checkboxClicada14() {
    if (checkbox14.checked) {
        // Checkbox foi marcada, faça algo
        imgV5.style.display = 'block';
        imgA5.style.display = 'none';
        imgVer5.style.display = 'none';
        imgM5.style.display = 'none';
        imgAm5.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgV5.style.display = 'none';
    }
}
function checkboxClicada24() {
    if (checkbox24.checked) {
        // Checkbox foi marcada, faça algo
        imgV5.style.display = 'none';
        imgA5.style.display = 'block';
        imgVer5.style.display = 'none';
        imgM5.style.display = 'none';
        imgAm5.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgA5.style.display = 'none';
    }
}
function checkboxClicada34() {
    if (checkbox34.checked) {
        // Checkbox foi marcada, faça algo
        imgV5.style.display = 'none';
        imgA5.style.display = 'none';
        imgVer5.style.display = 'block';
        imgM5.style.display = 'none';
        imgAm5.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgVer5.style.display = 'none';
    }
}
function checkboxClicada44() {
    if (checkbox44.checked) {
        // Checkbox foi marcada, faça algo
        imgV5.style.display = 'none';
        imgA5.style.display = 'none';
        imgVer5.style.display = 'none';
        imgM5.style.display = 'block';
        imgAm5.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgM5.style.display = 'none';
    }
}
function checkboxClicada54() {
    if (checkbox54.checked) {
        // Checkbox foi marcada, faça algo
        imgV5.style.display = 'none';
        imgA5.style.display = 'none';
        imgVer5.style.display = 'none';
        imgM5.style.display = 'none';
        imgAm5.style.display = 'block';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgAm5.style.display = 'none';
    }
}




function checkboxClicada15() {
    if (checkbox15.checked) {
        // Checkbox foi marcada, faça algo
        imgV6.style.display = 'block';
        imgA6.style.display = 'none';
        imgVer6.style.display = 'none';
        imgM6.style.display = 'none';
        imgAm6.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgV6.style.display = 'none';
    }
}
function checkboxClicada25() {
    if (checkbox25.checked) {
        // Checkbox foi marcada, faça algo
        imgV6.style.display = 'none';
        imgA6.style.display = 'block';
        imgVer6.style.display = 'none';
        imgM6.style.display = 'none';
        imgAm6.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgA6.style.display = 'none';
    }
}
function checkboxClicada35() {
    if (checkbox35.checked) {
        // Checkbox foi marcada, faça algo
        imgV6.style.display = 'none';
        imgA6.style.display = 'none';
        imgVer6.style.display = 'block';
        imgM6.style.display = 'none';
        imgAm6.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgVer6.style.display = 'none';
    }
}
function checkboxClicada45() {
    if (checkbox45.checked) {
        // Checkbox foi marcada, faça algo
        imgV6.style.display = 'none';
        imgA6.style.display = 'none';
        imgVer6.style.display = 'none';
        imgM6.style.display = 'block';
        imgAm6.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgM6.style.display = 'none';
    }
}
function checkboxClicada55() {
    if (checkbox55.checked) {
        // Checkbox foi marcada, faça algo
        imgV6.style.display = 'none';
        imgA6.style.display = 'none';
        imgVer6.style.display = 'none';
        imgM6.style.display = 'none';
        imgAm6.style.display = 'block';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgAm6.style.display = 'none';
    }
}



function checkboxClicada16() {
    if (checkbox16.checked) {
        // Checkbox foi marcada, faça algo
        imgV7.style.display = 'block';
        imgA7.style.display = 'none';
        imgVer7.style.display = 'none';
        imgM7.style.display = 'none';
        imgAm7.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgV7.style.display = 'none';
    }
}
function checkboxClicada26() {
    if (checkbox26.checked) {
        // Checkbox foi marcada, faça algo
        imgV7.style.display = 'none';
        imgA7.style.display = 'block';
        imgVer7.style.display = 'none';
        imgM7.style.display = 'none';
        imgAm7.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgA7.style.display = 'none';
    }
}
function checkboxClicada36() {
    if (checkbox36.checked) {
        // Checkbox foi marcada, faça algo
        imgV7.style.display = 'none';
        imgA7.style.display = 'none';
        imgVer7.style.display = 'block';
        imgM7.style.display = 'none';
        imgAm7.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgVer7.style.display = 'none';
    }
}
function checkboxClicada46() {
    if (checkbox46.checked) {
        // Checkbox foi marcada, faça algo
        imgV7.style.display = 'none';
        imgA7.style.display = 'none';
        imgVer7.style.display = 'none';
        imgM7.style.display = 'block';
        imgAm7.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgM7.style.display = 'none';
    }
}
function checkboxClicada56() {
    if (checkbox56.checked) {
        // Checkbox foi marcada, faça algo
        imgV7.style.display = 'none';
        imgA7.style.display = 'none';
        imgVer7.style.display = 'none';
        imgM7.style.display = 'none';
        imgAm7.style.display = 'block';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgAm7.style.display = 'none';
    }
}


function checkboxClicada17() {
    if (checkbox17.checked) {
        // Checkbox foi marcada, faça algo
        imgV8.style.display = 'block';
        imgA8.style.display = 'none';
        imgVer8.style.display = 'none';
        imgM8.style.display = 'none';
        imgAm8.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgV8.style.display = 'none';
    }
}
function checkboxClicada27() {
    if (checkbox27.checked) {
        // Checkbox foi marcada, faça algo
        imgV8.style.display = 'none';
        imgA8.style.display = 'block';
        imgVer8.style.display = 'none';
        imgM8.style.display = 'none';
        imgAm8.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgA8.style.display = 'none';
    }
}
function checkboxClicada37() {
    if (checkbox37.checked) {
        // Checkbox foi marcada, faça algo
        imgV8.style.display = 'none';
        imgA8.style.display = 'none';
        imgVer8.style.display = 'block';
        imgM8.style.display = 'none';
        imgAm8.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgVer8.style.display = 'none';
    }
}
function checkboxClicada47() {
    if (checkbox47.checked) {
        // Checkbox foi marcada, faça algo
        imgV8.style.display = 'none';
        imgA8.style.display = 'none';
        imgVer8.style.display = 'none';
        imgM8.style.display = 'block';
        imgAm8.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgM8.style.display = 'none';
    }
}
function checkboxClicada57() {
    if (checkbox57.checked) {
        // Checkbox foi marcada, faça algo
        imgV8.style.display = 'none';
        imgA8.style.display = 'none';
        imgVer8.style.display = 'none';
        imgM8.style.display = 'none';
        imgAm8.style.display = 'block';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgAm8.style.display = 'none';
    }
}




function checkboxClicada18() {
    if (checkbox18.checked) {
        // Checkbox foi marcada, faça algo
        imgV9.style.display = 'block';
        imgA9.style.display = 'none';
        imgVer9.style.display = 'none';
        imgM9.style.display = 'none';
        imgAm9.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgV9.style.display = 'none';
    }
}
function checkboxClicada28() {
    if (checkbox28.checked) {
        // Checkbox foi marcada, faça algo
        imgV9.style.display = 'none';
        imgA9.style.display = 'block';
        imgVer9.style.display = 'none';
        imgM9.style.display = 'none';
        imgAm9.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgA9.style.display = 'none';
    }
}
function checkboxClicada38() {
    if (checkbox38.checked) {
        // Checkbox foi marcada, faça algo
        imgV9.style.display = 'none';
        imgA9.style.display = 'none';
        imgVer9.style.display = 'block';
        imgM9.style.display = 'none';
        imgAm9.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgVer9.style.display = 'none';
    }
}
function checkboxClicada48() {
    if (checkbox48.checked) {
        // Checkbox foi marcada, faça algo
        imgV9.style.display = 'none';
        imgA9.style.display = 'none';
        imgVer9.style.display = 'none';
        imgM9.style.display = 'block';
        imgAm9.style.display = 'none';
    } else {
        // Checkbox foi desmarcada, faça algo
        img9.style.display = 'none';
    }
}
function checkboxClicada58() {
    if (checkbox58.checked) {
        // Checkbox foi marcada, faça algo
        imgV9.style.display = 'none';
        imgA9.style.display = 'none';
        imgVer9.style.display = 'none';
        imgM9.style.display = 'none';
        imgAm9.style.display = 'block';
    } else {
        // Checkbox foi desmarcada, faça algo
        imgAm9.style.display = 'none';
    }
}



// Adiciona o evento de clique à checkbox
checkbox1.addEventListener("click", checkboxClicada1);
checkbox2.addEventListener("click", checkboxClicada2);
checkbox3.addEventListener("click", checkboxClicada3);
checkbox4.addEventListener("click", checkboxClicada4);
checkbox5.addEventListener("click", checkboxClicada5); //metal

checkbox10.addEventListener("click", checkboxClicada10);//plastico
checkbox20.addEventListener("click", checkboxClicada20);
checkbox30.addEventListener("click", checkboxClicada30);
checkbox40.addEventListener("click", checkboxClicada40);
checkbox50.addEventListener("click", checkboxClicada50);

checkbox11.addEventListener("click", checkboxClicada11);
checkbox21.addEventListener("click", checkboxClicada21);
checkbox31.addEventListener("click", checkboxClicada31);
checkbox41.addEventListener("click", checkboxClicada41); //maça
checkbox51.addEventListener("click", checkboxClicada51);

checkbox12.addEventListener("click", checkboxClicada12);
checkbox22.addEventListener("click", checkboxClicada22);//papel
checkbox32.addEventListener("click", checkboxClicada32);
checkbox42.addEventListener("click", checkboxClicada42);
checkbox52.addEventListener("click", checkboxClicada52);

checkbox13.addEventListener("click", checkboxClicada13);
checkbox23.addEventListener("click", checkboxClicada23);
checkbox33.addEventListener("click", checkboxClicada33);//vidro
checkbox43.addEventListener("click", checkboxClicada43);
checkbox53.addEventListener("click", checkboxClicada53);

checkbox14.addEventListener("click", checkboxClicada14);
checkbox24.addEventListener("click", checkboxClicada24);
checkbox34.addEventListener("click", checkboxClicada34);
checkbox44.addEventListener("click", checkboxClicada44);
checkbox54.addEventListener("click", checkboxClicada54);//parafuso

checkbox15.addEventListener("click", checkboxClicada15);//copo
checkbox25.addEventListener("click", checkboxClicada25);
checkbox35.addEventListener("click", checkboxClicada35);
checkbox45.addEventListener("click", checkboxClicada45);
checkbox55.addEventListener("click", checkboxClicada55);

checkbox16.addEventListener("click", checkboxClicada16);
checkbox26.addEventListener("click", checkboxClicada26);
checkbox36.addEventListener("click", checkboxClicada36);
checkbox46.addEventListener("click", checkboxClicada46);//banana
checkbox56.addEventListener("click", checkboxClicada56);

checkbox17.addEventListener("click", checkboxClicada17);//galao
checkbox27.addEventListener("click", checkboxClicada27);
checkbox37.addEventListener("click", checkboxClicada37);
checkbox47.addEventListener("click", checkboxClicada47);
checkbox57.addEventListener("click", checkboxClicada57);

checkbox18.addEventListener("click", checkboxClicada18);
checkbox28.addEventListener("click", checkboxClicada28);
checkbox38.addEventListener("click", checkboxClicada38);
checkbox48.addEventListener("click", checkboxClicada48);
checkbox58.addEventListener("click", checkboxClicada58);



//DADO ENVIADOR PARA PHP 

