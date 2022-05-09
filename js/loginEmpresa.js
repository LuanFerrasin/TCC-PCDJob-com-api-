"use strict"

let idEmpresa

const recuperarDados = async() => {
    const dados = {
        login: document.getElementById('email').value,
        senha: document.getElementById('senha').value
    }
    
    await autenticar(dados)
}

const autenticar = (dados) => {
    const url = 'http://10.107.144.26:8080/auth/empresa'
    const options = {
        method: 'POST',
        body:JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json',
        }
    }
    fetch(url, options)
    .then(resp => resp.json())
    .then(json => {
        idEmpresa = json.id
        if(idEmpresa != null) {
            console.log(idEmpresa)
            window.location.href = `listagemCandidatos.html?id=${idEmpresa}`
        }
    })
}

function voltarCadastro(){

   window.location.href="../empresa/cadastro.html";

}

document.getElementById('btnEntrar').addEventListener('click', recuperarDados)
document.getElementById('btn-cadastrar').addEventListener('click',voltarCadastro)