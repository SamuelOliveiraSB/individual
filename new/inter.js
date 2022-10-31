var botaologin = document.querySelector('#blogin')
var botaocadastro = document.querySelector('#bcadastro')
var telalogin = document.querySelector('#telalogin')
var opcoesdelogin = document.querySelector('#opclog')
var opcoesdecadastro = document.querySelector('#opccad')

botaologin.addEventListener('click',()=>{
    console.log('foi')
    telalogin.style.display = 'flex'
    opcoesdelogin.style.display = 'flex'
})

botaocadastro.addEventListener('click',()=>{
    telalogin.style.display = 'flex'
    opcoesdecadastro.style.display = 'flex'
})