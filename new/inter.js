var telalogin = document.querySelector('#telalogin')
var opcoesdelogin = document.querySelector('#opclog')
var opcoesdecadastro = document.querySelector('#opccad')

//-------------------------------------------------- cadastro e login
function irlogin(){
    telalogin.style.display = 'flex'
    opcoesdelogin.style.display = 'flex'
}

function ircadastro(){
    telalogin.style.display = 'flex'
    opcoesdelogin.style.display = 'none'
    opcoesdecadastro.style.display = 'flex'
}

//--- de login pra home


function entrar(){
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
            imagemdocarro.src = 'assets/cars/Nissan_Skyline_GT-R_VSpec_2_29.webp'
            nomecarro.innerHTML=`nissan gtr r34`
            motor.innerHTML=``
            potencia.innerHTML=``
            torque.innerHTML=``
        } else if (index == 1) {
            imagemdocarro.src = 'assets/cars/r35v2.png'
            nomecarro.innerHTML=`nissan gtr r35`
            motor.innerHTML=``
            potencia.innerHTML=``
            torque.innerHTML=``
        }
        else if (index == 2) {
            imagemdocarro.src = 'assets/cars/r35v2.png'
            nomecarro.innerHTML=`toyota supra mk4`
            motor.innerHTML=``
            potencia.innerHTML=``
            torque.innerHTML=``
        }

        

    })


})

