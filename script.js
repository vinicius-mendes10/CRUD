const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-Nome')
const sFuncao = document.querySelector('#m-funcao')
const sSalario = document.querySelector('#m-salario')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id 

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

function loadItens(){
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.array.forEach((item, index) =>{
        insertItem(item, index)
    })
}

loadItens()

function insertItem(item, index){
    let tr = document.createElement('tr')

    tr.innerHTML = '
    '
}