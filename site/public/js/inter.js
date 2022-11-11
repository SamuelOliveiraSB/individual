//-------------------login

function entrar() {

    var emailVar = usernamevalor.value;
    var senhaVar = passwordvalor.value;

    if (emailVar == "" || senhaVar == "") {
        var alertlogin = document.querySelector('.alertlogin')
        alertlogin.style.display = 'flex'
        return false;
    }


    console.log(emailVar);
    console.log(senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;

                setTimeout(function () {
                    window.location.href = "/home.html";

                }, 500); // apenas para exibir o loading

            });

        } else {
            var alertlogin = document.querySelector('.alertlogin')
            alertlogin.style.display = 'flex'
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}



var telalogin = document.querySelector('#telalogin')
var opcoesdelogin = document.querySelector('#opclog')
var opcoesdecadastro = document.querySelector('#opccad')

//-------------------------------------------------- cadastro e login


function irlogininit() {
    telalogin.style.display = 'flex'
    opcoesdelogin.style.display = 'flex'
}

var nome = ''
var email = ''
var senha = ''
var confsenha = ''

function irlogin() {

    nome = nomevalor.value
    email = emailvalor.value
    senha = senhavalor.value
    confsenha = csenha.value

    console.log(senha.length < 8)



    if (nome == '' || email == '' || senha == '' || confsenha == '' || senha != confsenha || senha.length < 8) {


        if (nome == '') {
            var inpnome = document.querySelector('#nomevalor')
            inpnome.style.borderColor = 'red'
            alertnome.innerHTML = ''
        }
        if (email == '') {
            var inpemail = document.querySelector('#emailvalor')
            inpemail.style.borderColor = 'red'
        }
        if (senha == '' || senha.length < 8) {
            var inpsenha = document.querySelector('#senhavalor')
            inpsenha.style.borderColor = 'red'
        }
        if (confsenha == '' || senha != confsenha) {
            var inpconfsenha = document.querySelector('#csenha')
            inpconfsenha.style.borderColor = 'red'
        }

        return false;



    }

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nome,
            emailServer: email,
            senhaServer: senha
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {

            alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...")

            setTimeout(() => {
                telalogin.style.display = 'flex'
                opcoesdelogin.style.display = 'flex';
            }, "2000")

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);

    });

    return false;

}

function validareexibir() {
    if (senha) {

    }
}

function ircadastro() {
    telalogin.style.display = 'flex'
    opcoesdelogin.style.display = 'none'
    opcoesdecadastro.style.display = 'flex'
}



//----------------------------menu lateral



var ulupnav = document.querySelector('.ulgeral')
var itenss = document.querySelectorAll('.ulgeral li')


itenss.forEach((icon, index) => {

    icon.addEventListener('click', () => {
        console.log(icon, index)

        ulupnav.querySelector('.iconsup').classList.remove('iconsup')
        icon.classList.add('iconsup')

    })


})
//------------------------ aba game
var apagarum = document.querySelector('.one')
var apagardois = document.querySelector('.two')
var apagartres = document.querySelector('.tree')
var apagarfooter = document.querySelector('.footer')

function telagame() {
    apagarum.style.display = 'none'
    apagardois.style.display = 'none'
    apagartres.style.display = 'none'
    apagarfooter.style.display = 'none'
}
function telahome() {
    apagarum.style.display = 'flex'
    apagardois.style.display = 'flex'
    apagartres.style.display = 'block'
    apagarfooter.style.display = 'flex'
}
//---------------------------- aparecer botao sair
var mostrarexit = document.querySelector('.exit')

function aparecersair() {
    if (mostrarexit.style.display == 'flex') {
        mostrarexit.style.display = 'none'
    } else {
        mostrarexit.style.display = 'flex'
    }

}
//--------------------sair do site

function sairdosite() {
    window.location.href = "index.html";
}
//------------------------------------------------- animacão pra trocar de carro

var divpai = document.querySelector('.divdown')
var divsfilhas = document.querySelectorAll('.divdown div')


divsfilhas.forEach((div, index) => {

    div.addEventListener('click', () => {

        divpai.querySelector('.animate').classList.remove('animate')
        div.classList.add('animate')

        if (index == 0) {
            mudarcarroedescricao(`assets/cars/evo x.png`, `lancer evo X`, ` <span id="motor">3.8 Twin turbo V6</span> `, ` <span id="potencia">572 cv (420 kW)</span>`, ` <span id="torque">59,95 kgf-m (430 lb·ft)</span>`)
        } else if (index == 1) {
            mudarcarroedescricao(`assets/cars/evo9.png`, `lancer evo IX`, ` <span id="motor">2.4 Twin turbo V6</span> `, `<span id="potencia">450 cv (390 kW)</span>`, ` <span id="torque">51,72 kgf-m (340 lb·ft)</span>`)
        }
        else if (index == 2) {
            mudarcarroedescricao(`assets/cars/S15.png`, `SILVIA S15`, ` <span id="motor">3.8 Twin turbo V6</span> `, `<span id="potencia">572 cv (420 kW)</span>`, ` <span id="torque">59,95 kgf-m (430 lb·ft)</span>`)
        }
        else if (index == 3) {
            mudarcarroedescricao(`assets/cars/r35v2.png`, `nissan gtr r35`, ` <span id="motor">3.8 Twin turbo V6</span> `, `<span id="potencia">572 cv (420 kW)</span>`, ` <span id="torque">59,95 kgf-m (430 lb·ft)</span>`)
        }
        else if (index == 4) {
            mudarcarroedescricao(`assets/cars/Nissan_Skyline_GT-R_VSpec_2_29.webp`, `nissan gtr r34`, ` <span id="motor">3.8 Twin turbo V6</span> `, `<span id="potencia">572 cv (420 kW)</span>`, ` <span id="torque">59,95 kgf-m (430 lb·ft)</span>`)
        }
        else if (index == 5) {
            mudarcarroedescricao(`assets/cars/suprav2.png`, `gr supra `, ` <span id="motor">3.8 Twin turbo V6</span> `, `<span id="potencia">572 cv (420 kW)</span>`, ` <span id="torque">59,95 kgf-m (430 lb·ft)</span>`)
        } else if (index == 6) {
            mudarcarroedescricao(`assets/cars/suprav4.png`, `supra mk4 `, ` <span id="motor">3.8 Twin turbo V6</span> `, `<span id="potencia">572 cv (420 kW)</span>`, ` <span id="torque">59,95 kgf-m (430 lb·ft)</span>`)
        }



    })


})

function mudarcarroedescricao(a, b, c, d, e) {
    imagemdocarro.src = a
    nomecarro.innerHTML = b
    motor.innerHTML = c
    potencia.innerHTML = d
    torque.innerHTML = e
}

//-----------------

var direitaa = document.querySelector("#direita")

direitaa.addEventListener('click', () => {

    if (nomecarro.innerHTML == `lancer evo X`) {
        mboll(2)
        mudarcarroedescricao(`assets/cars/evo9.png`, `lancer evo IX`, ` <span id="motor">2.4 Twin turbo V6</span> `, `<span id="potencia">450 cv (390 kW)</span>`, ` <span id="torque">51,72 kgf-m (340 lb·ft)</span>`)
    } else if (nomecarro.innerHTML == `lancer evo IX`) {
        mboll(3)
        mudarcarroedescricao(`assets/cars/S15.png`, `SILVIA S15`, ` <span id="motor">3.8 Twin turbo V6</span> `, `<span id="potencia">572 cv (420 kW)</span>`, ` <span id="torque">59,95 kgf-m (430 lb·ft)</span>`)
    }
    else if (nomecarro.innerHTML == `SILVIA S15`) {
        mboll(4)
        mudarcarroedescricao(`assets/cars/r35v2.png`, `nissan gtr r35`, ` <span id="motor">3.8 Twin turbo V6</span> `, `<span id="potencia">572 cv (420 kW)</span>`, ` <span id="torque">59,95 kgf-m (430 lb·ft)</span>`)
    }
    else if (nomecarro.innerHTML == `nissan gtr r35`) {
        mboll(5)
        mudarcarroedescricao(`assets/cars/Nissan_Skyline_GT-R_VSpec_2_29.webp`, `nissan gtr r34`, ` <span id="motor">3.8 Twin turbo V6</span> `, `<span id="potencia">572 cv (420 kW)</span>`, ` <span id="torque">59,95 kgf-m (430 lb·ft)</span>`)
    }
    else if (nomecarro.innerHTML == `nissan gtr r34`) {
        mboll(6)
        mudarcarroedescricao(`assets/cars/suprav2.png`, `gr supra `, ` <span id="motor">3.8 Twin turbo V6</span> `, `<span id="potencia">572 cv (420 kW)</span>`, ` <span id="torque">59,95 kgf-m (430 lb·ft)</span>`)
    }
    else if (nomecarro.innerHTML == `gr supra`) {
        mboll(7)
        mudarcarroedescricao(`assets/cars/suprav4.png`, `supra mk4 `, ` <span id="motor">3.8 Twin turbo V6</span> `, `<span id="potencia">572 cv (420 kW)</span>`, ` <span id="torque">59,95 kgf-m (430 lb·ft)</span>`)
    }
})

function mboll(a) {
    divpai.querySelector('.animate').classList.remove('animate')
    divpai.querySelector(`#p${a}`).classList.add('animate')
}



















//---------------------------------------------- galery
var ft1 = document.querySelector('#f1')
    var ft2 = document.querySelector('#f2')
    var ft3 = document.querySelector('#f3')
    var ft4 = document.querySelector('#f4')
    var ft5 = document.querySelector('#f5')
    var ft6 = document.querySelector('#f6')
    var ft7 = document.querySelector('#f7')
    var ft8 = document.querySelector('#f8')


function trocargalery() {
    
    var select = selecttips.value

    if (select == 'v') {
        ft1.style.display = 'none'
        ft2.style.display = 'none'
        ft3.style.display = 'none'
        ft4.style.display = 'none'
        ft5.style.display = 'none'
        ft6.style.display = 'none'
        ft7.style.display = 'none'
        ft8.style.display = 'none'

    } else if (select == 'f') {
        ft1.style.display = 'block'
        ft2.style.display = 'block'
        ft3.style.display = 'block'
        ft4.style.display = 'block'
        ft5.style.display = 'block'
        ft6.style.display = 'block'
        ft7.style.display = 'block'
        ft8.style.display = 'block'
    }
}

//---------------------------- slide de eventos

var areaslide = document.querySelector('.treecontainerone')

setInterval(() => {
    setTimeout(() => {
        areaslide.style.transform = "translateX(0%)";
    }, 0);
    setTimeout(() => {
        areaslide.style.transform = "translateX(-33.4%)";
    }, 12000);
    setTimeout(() => {
        areaslide.style.transform = "translateX(-66.7%)";
    }, 24000);
}, 30000);



