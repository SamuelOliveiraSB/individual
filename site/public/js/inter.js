//-------------------login-------------------------------------------------------------------------------------------------------------------------------

function entrar() {

    var emailVar = usernamevalor.value;
    var senhaVar = passwordvalor.value;

    if (emailVar == "" || senhaVar == "") {
        var alertlogin = document.querySelector('.alertlogin')
        alertlogin.style.display = 'flex'
        return false;
    } else if (emailVar == "000" || senhaVar == "000") {
        setTimeout(function () {
            window.location.href = "./home.html";

        }, 500);
    } else {


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

                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.idusuario;





                    setTimeout(function () {
                        window.location.href = "./home.html";



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



}


//-------------------- metrica---------------------------------------------------------------------------------------------------------------------------------------------

function mostrarmetrica() {

    fetch("/usuarios/puxarmetrica").then(function (resposta) {

        if (resposta.ok) {
            resposta.json().then(function (json) {
                quanti.innerHTML = json[0].contagem
            })
        } else {
            console.log('nem foi as metricas')
        }

    })

    document.querySelector('#nomenoingresso1').innerHTML = sessionStorage.getItem("NOME_USUARIO")

    document.querySelector('#nomenoingresso2').innerHTML = sessionStorage.getItem("NOME_USUARIO")
    document.querySelector('#nomenoingresso3').innerHTML = sessionStorage.getItem("NOME_USUARIO")




    nusuario.innerHTML = sessionStorage.getItem("NOME_USUARIO")



}





var telalogin = document.querySelector('#telalogin')
var opcoesdelogin = document.querySelector('#opclog')
var opcoesdecadastro = document.querySelector('#opccad')

//-------------------------------------------------- cadastro e login-------------------------------------------------------------------------------------------------------------------------------

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



//----------------------------menu lateral-------------------------------------------------------------------------------------------------------------------------------


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
var metrica = document.querySelector('.drymetric')

var apagarfooter = document.querySelector('.footer')
var four = document.querySelector('.four')
var five = document.querySelector('.five')
var six = document.querySelector('.six')
var informs = document.querySelector(".acctexts")

function telagame() {
    apagarum.style.display = 'none'
    apagardois.style.display = 'none'
    apagartres.style.display = 'none'
    metrica.style.display = 'none'
    informs.style.display = 'none'
    apagarfooter.style.display = 'flex'
    four.style.display = 'flex'
    five.style.display = 'flex'
    six.style.display = 'flex'

}
function telahome() {
    four.style.display = 'none'
    five.style.display = 'none'
    six.style.display = 'none'
    informs.style.display = 'block'
    apagarum.style.display = 'flex'
    apagardois.style.display = 'flex'
    apagartres.style.display = 'block'
    apagarfooter.style.display = 'flex'
    metrica.style.display = 'flex'

}
//---------------------------- aparecer botao sair
var camposair = document.querySelector('.aexit')

function aparecersair() {
    if (camposair.style.display == 'flex') {

        camposair.style.display = 'none'
        listaingresso.style.display = 'none'

    } else {
        camposair.style.height = "20%";
        camposair.style.width = "20%";
        camposair.style.display = 'flex'

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
        mudarcarroedescricao(`assets/cars/evo9.png`, `lancer evo IX`, `2.4 Twin turbo V6`, `450 cv (390 kW)`, ` 51,72 kgf-m (340 lb·ft)`)
    } else if (nomecarro.innerHTML == `lancer evo IX`) {
        mboll(3)
        mudarcarroedescricao(`assets/cars/S15.png`, `SILVIA S15`, `3.8 Twin turbo V6`, `572 cv (420 kW)`, ` 49,95 kgf-m (430 lb·ft)`)
    }
    else if (nomecarro.innerHTML == `SILVIA S15`) {
        mboll(4)
        mudarcarroedescricao(`assets/cars/r35v2.png`, `nissan gtr r35`, `2.9 Twin turbo V12`, `172 cv (420 kW)`, ` 59,95 kgf-m (400 lb·ft)`)
    }
    else if (nomecarro.innerHTML == `nissan gtr r35`) {
        mboll(5)
        mudarcarroedescricao(`assets/cars/Nissan_Skyline_GT-R_VSpec_2_29.webp`, `nissan gtr r34`, `3.8 Twin turbo V6`, `572 cv (420 kW)`, ` 59,95 kgf-m (410 lb·ft)`)
    }
    else if (nomecarro.innerHTML == `nissan gtr r34`) {
        mboll(6)
        mudarcarroedescricao(`assets/cars/suprav2.png`, `gr supra`, `2.6 Twin turbo V8`, `320 cv (390 kW)`, ` 59,95 kgf-m (430 lb·ft)`)
    } else {
        mboll(1)
        mudarcarroedescricao("assets/cars/evo x.png", `lancer evo X`, `3.8 Twin turbo V6`, `480 cv (390 kW)`, ` 51,72 kgf-m (340 lb·ft)`)

    }

})

var esquerda = document.querySelector("#esquerda")

esquerda.addEventListener('click', () => {

    if (nomecarro.innerHTML == `lancer evo IX`) {
        mboll(1)
        mudarcarroedescricao("assets/cars/evo x.png", `lancer evo X`, `3.8 Twin turbo V6`, `480 cv (390 kW)`, ` 51,72 kgf-m (340 lb·ft)`)

    }
    else if (nomecarro.innerHTML == `SILVIA S15`) {
        mboll(2)
        mudarcarroedescricao(`assets/cars/evo9.png`, `lancer evo IX`, `2.4 Twin turbo V6`, `450 cv (390 kW)`, ` 51,72 kgf-m (340 lb·ft)`)

    }
    else if (nomecarro.innerHTML == `nissan gtr r35`) {
        mboll(3)
        mudarcarroedescricao(`assets/cars/S15.png`, `SILVIA S15`, `3.8 Twin turbo V6`, `572 cv (420 kW)`, ` 49,95 kgf-m (430 lb·ft)`)

    }
    else if (nomecarro.innerHTML == `nissan gtr r34`) {
        mboll(4)
        mudarcarroedescricao(`assets/cars/r35v2.png`, `nissan gtr r35`, `2.9 Twin turbo V12`, `172 cv (420 kW)`, ` 59,95 kgf-m (400 lb·ft)`)

    }
    else if (nomecarro.innerHTML == `gr supra`) {
        mboll(5)
        mudarcarroedescricao(`assets/cars/Nissan_Skyline_GT-R_VSpec_2_29.webp`, `nissan gtr r34`, `3.8 Twin turbo V6`, `572 cv (420 kW)`, ` 59,95 kgf-m (410 lb·ft)`)

    } else {
        mboll(6)
        mudarcarroedescricao(`assets/cars/suprav2.png`, `gr supra`, `2.6 Twin turbo V8`, `320 cv (390 kW)`, ` 59,95 kgf-m (430 lb·ft)`)

    }
})

function mboll(a) {
    divpai.querySelector('.animate').classList.remove('animate')
    divpai.querySelector(`#p${a}`).classList.add('animate')
}



















//---------------------------------------------- galery





function trocargalery() {


    var v1 = document.querySelector('#v1')
    var v2 = document.querySelector('#v2')
    var v3 = document.querySelector('#v3')
    var v4 = document.querySelector('#v4')
    var v5 = document.querySelector('#v5')
    var v6 = document.querySelector('#v6')
    var v7 = document.querySelector('#v7')
    var v8 = document.querySelector('#v8')

    var ft1 = document.querySelector('#f1')
    var ft2 = document.querySelector('#f2')
    var ft3 = document.querySelector('#f3')
    var ft4 = document.querySelector('#f4')
    var ft5 = document.querySelector('#f5')
    var ft6 = document.querySelector('#f6')
    var ft7 = document.querySelector('#f7')
    var ft8 = document.querySelector('#f8')

    var selects = selecttips.value

    if (selects == 'v') {
        console.log('video on')
        ft1.style.display = 'none'
        ft2.style.display = 'none'
        ft3.style.display = 'none'
        ft4.style.display = 'none'
        ft5.style.display = 'none'
        ft6.style.display = 'none'
        ft7.style.display = 'none'
        ft8.style.display = 'none'

        v1.style.display = 'block'
        v2.style.display = 'block'
        v3.style.display = 'block'
        v4.style.display = 'block'
        v5.style.display = 'block'
        v6.style.display = 'block'
        v7.style.display = 'block'
        v8.style.display = 'block'

    } else {

        console.log('foto on')

        v1.style.display = 'none'
        v2.style.display = 'none'
        v3.style.display = 'none'
        v4.style.display = 'none'
        v5.style.display = 'none'
        v6.style.display = 'none'
        v7.style.display = 'none'
        v8.style.display = 'none'

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

var vingresso = '$280.99'

var areaslide = document.querySelector('.treecontainerone')

setInterval(() => {
    setTimeout(() => {
        areaslide.style.transform = "translateX(0%)";
        vingresso = '$280.99'
        valor_ingresso.innerHTML = '$280.00'
    }, 0);
    setTimeout(() => {
        areaslide.style.transform = "translateX(-33.4%)";
        vingresso = '$310.59'
        valor_ingresso.innerHTML = '$310.59'

    }, 12000);
    setTimeout(() => {
        areaslide.style.transform = "translateX(-66.7%)";
        vingresso = '$280.00'
        valor_ingresso.innerHTML = '$280.00'

    }, 24000);
}, 30000);


//--------------------------segunda tela

var areatext = document.querySelector('#txt')


var c1 = document.querySelector('#c1').addEventListener('mouseover', () => {
    areatext.innerHTML = `O carro, produzido na fábrica de Hiroshima da Mazda, teve seu lançamento no Salão de Chicago de 1989, e segue uma filosofia de design denominada Jimba ittai[1] (人馬一体), que significa a união entre cavalo e cavaleiro. Suas principais características são seu pequeno porte, leveza, dinâmica equilibrada e simplicidade. O MX-5 foi desenhado como um sucessor espiritual dos pequenos esportivos ingleses e italianos dos anos 50 e 60, como o Triumph Spitfire e o Fiat Spider.

    O MX-5 está em sua quarta concepção. As gerações são denominadas por códigos de duas letras, a primeira sendo a NA (1989-1997), seguida pelas gerações NB (1998-2005), NC (2005-2015) e pela atual, a ND (2015-Presente).`

})
var c2 = document.querySelector('#c2').addEventListener('mouseover', () => {
    areatext.innerHTML = `Pontos positivos: comportamento dinâmico, consumo, dirigibilidade, confiabilidade, espaço interno, acabamento, desempenho. Comentários: estou na segunda forester, nesta versão que comprei "0km" no final de 2019, melhorou muito o motor e cambio, além do conforto interno e conectividade com celular.`

})
var c3 = document.querySelector('#c3').addEventListener('mouseover', () => {
    areatext.innerHTML = `Apurado comportamento dinâmico, design leve e um motor que agora se tornou famoso: essas são as três características que fizeram o sucesso do Mazda RX-7, um cupê esportivo que foi produzido por três gerações e foi comercializado pela fabricante de Hiroshima emtre 1978 e 2002.`

})
var c4 = document.querySelector('#c4').addEventListener('mouseover', () => {
    areatext.innerHTML = `O Skyline GT-R R34 é uma versão esportiva de grande prestígio do Nissan Skyline. A versão GT-R possui o motor Nissan RB26DETT, de 6 cilindros em linha com biturbo. A sigla GT-R surgiu depois de uma vitória da Nissan em 1964 com o S54 2000 GT-B. Em 1973 o modelo GT-R deixou de ser produzido. 16 anos depois a Nissan traz a sigla GT-R de volta com o modelo Nissan Skyline GT-R R32 com o motor RB26DETT e tração 4WD e um motor de 280 HP. A geração R32, também chamada de Godzila, foi até 1994, ano em que foi substituída pelo R33 que muitos reclamaram devido ao peso e tamanho. Em 1998 o R33 foi substituído pelo R34, o mais perfeito GT-R devido a potencia do R33 e tamanho reduzido próximo ao R32. Sua produção foi interrompida em 2002. Em 2007 a Nissan divulgou o lançamento de um novo modelo GT-R em dezembro após o Tokyo Motor Show com o motor VR38DETT, um motor 3.8 de 6 cilindros em V, dois turbos e 600 HP.`

})
var c5 = document.querySelector('#c5').addEventListener('mouseover', () => {
    areatext.innerHTML = `O Nissan Silvia é um coupé esportivo criado pela Nissan. A primeira apresentação do Nissan Silvia ocorreu no Tokyo Motor Show, em setembro de 1964. O modelo apresentado, foi feito a mão, baseado no Fairlady. Esse modelo, o Nissan Silvia CSP311, foi produzido até 1968, com apenas 554 exemplares produzidos. Depois foi produzido o modelo S10, o primeiro Silvia, sobre a plataforma "S". Logo depois vieram os modelos S110 e S12.`

})




//-------------- sortear carro e ver se esta certo

var listacarros = {
    nome: ['Acura', 'Toyota MR2', 'Mitsubishi Lancer Evo', 'Honda Del Sol', 'Toyota Supra', 'Mazda RX7', 'Datsun', 'Mazda RX8', 'Nissan 300ZX', 'Nissan 350Z', 'Nissan 370Z', 'Honda S2000', 'Mitsubishi Eclipse', 'Mazda MX5 Miata', 'Subaru Impreza WRX', 'Toyota Celica', 'Nissan 240SX', 'Mitsubishi 3000GT', 'Honda CRX', 'Acura RSX', 'Mazda Velocidade 3', 'Honda Civic SI', 'Mitsubishi Starion', 'Toyota MR2 Spyder', 'Toyota ae86', 'Skyline GT-R'],
    ano: ['1986', '1984', '1992', '1992', '1978', '1978', '1933', '2003', '1983', '2001', '2008', '1999', '1989', '1989', '2008', '1970', '1989', '1990', '1983', '2001', '1991', '1984', '1988', '1984', '1983', '1960']
}

var carros = [
    { nome: "Acura", ano: "1986" },
    { nome: "Acura", ano: "1986" },
    { nome: "Acura", ano: "1986" },
    { nome: "Acura", ano: "1986" },
    { nome: "Acura", ano: "1986" },
    { nome: "Acura", ano: "1986" },
    { nome: "Acura", ano: "1986" },
]


listacarros.nome[0]
listacarros.ano[0]

carros[0].nome
carros[0].ano

function verificar() {


    var carroslistados = 0

    campo.innerHTML = ``

    var de = Number(dee.value)
    var ate = Number(atee.value)

    if (ate >= de) {

        for (var cont = 0; cont <= listacarros.ano.length; cont++) {

            if (listacarros.ano[cont] >= de && listacarros.ano[cont] <= ate) {

                campo.innerHTML += `º${listacarros.nome[cont]} foi lançado em ${listacarros.ano[cont]}<br>`

                carroslistados++

            }
        }

    } else {
        alert('vc ta chapando, não vai continuar!')
    }


}





setInterval(() => {

    var sortear = parseInt(1 + Math.random() * 5)

    setTimeout(() => {



        if (sortear == 1) {
            fotocarrosorteio.src = `assets/cars/evo x.png`
        } else if (sortear == 2) {
            fotocarrosorteio.src = `assets/cars/suprav2.png`
        } else if (sortear == 3) {
            fotocarrosorteio.src = `assets/cars/r35v2.png`
        } else if (sortear == 4) {
            fotocarrosorteio.src = `assets/cars/S15.png`
        } else {
            fotocarrosorteio.src = `assets/cars/evo9.png`
        }



    }, 2000);

}, 5000);




//----------------------------abrircompras------------------

var listaingresso = document.querySelector('#mcompras')


function abrircompras() {



    if (listaingresso.style.display == 'block') {
        listaingresso.style.display = 'none'
        camposair.style.height = "20%";
        camposair.style.width = "20%";
    } else {
        listaingresso.style.display = 'block'
        camposair.style.height = "62%";
        camposair.style.width = "20%";
    }


}

//-------------------- COMPRA DE INGRESSO-----------------





function compraringresso() {
    console.log('entrou na função')
    var listaingresso = document.querySelector('#mcompras')
    var telalert = document.querySelector('.telaalert').style.display = 'flex'
    var animationcarregar = document.querySelector('.carregar').style.display = 'block'

    setTimeout(() => {
        var animationcarregar = document.querySelector('.carregar').style.display = 'none'
        var divalerta = document.querySelector('.alerta').style.display = 'flex'
    }, 6000);


    if (vingresso == '$280.99') {
        console.log('speed')
        listaingresso.innerHTML += `speednight - <span> PENDENTE </span> <br>`
    } else if (vingresso == '$310.59') {
        console.log('the fast')

        listaingresso.innerHTML += `the fast - <span> PENDENTE </span> <br>`

    } else {
        listaingresso.innerHTML += `redsuns - <span> PENDENTE </span> <br>`
    }

    setTimeout(() => {
        var telalert = document.querySelector('.telaalert').style.display = 'none'
        var divalerta = document.querySelector('.alerta').style.display = 'none'

    }, 12000);

}



function versenha() {
    console.log('função')

    var input = document.querySelector('#passwordvalor')
    var offf = document.querySelector(".off")

    if (offf.style.display != 'block') {
        console.log('senha')

        input.type = 'password';
        offf.style.display = 'block'
    } else {
        console.log('texto')

        input.type = 'text';
        offf.style.display = 'none'
    }
}



