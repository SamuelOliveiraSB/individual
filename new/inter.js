var telalogin = document.querySelector('#telalogin')
var opcoesdelogin = document.querySelector('#opclog')
var opcoesdecadastro = document.querySelector('#opccad')

//-------------------------------------------------- cadastro e login
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



    } else {
        telalogin.style.display = 'flex'
        opcoesdelogin.style.display = 'flex'
    }

}

function validareexibir() {
    if (senha ) {

    }
}

function ircadastro() {
    telalogin.style.display = 'flex'
    opcoesdelogin.style.display = 'none'
    opcoesdecadastro.style.display = 'flex'
}

//--- de login pra home


function entrar() {
    window.location.href = "home.html";
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

var direita = document.querySelector("#direita").addEventListener('click', () => {

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

function trocargalery() {
    var vd = document.querySelector('video')
    var ft = document.querySelector('.galery div img')
    var select = selecttips.value

    if (select == 'v') {
        ft.style.display = 'none'
        vd.style.display = 'block'
        console.log('video')
    } else if (select == 'f') {
        vd.style.display = 'none'
        ft.style.display = 'block'
        console.log('foto')
    }
}