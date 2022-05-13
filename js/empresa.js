'use strict';

let idEmpresa = 0

const getList = (string) => {
    const variable = document.getElementById(string).value
    const array = [variable]
    return array
}

const validacao = ({nome, email, senha, telefone}) => {

    if(nome.length > 3 && nome.length <= 50 && email.length > 9 && email.length <= 100  && senha.length > 3 && senha.length <= 50 && telefone.length > 1 && telefone.length <= 15) {
        return true

    } else {
        return false
    }

} 

const cadastrarEmpresa = async() => {
    const empresa = {
        nome: document.getElementById('nome').value,
        email: getList('email'),
        senha: document.getElementById('senha').value,
        telefone: getList('telefone'),
        areaAtuacao: document.getElementById('area-atuacao').value
    }
    await postEmpresa(empresa)
}

const setId = (id) => {
    console.log(id)
    sessionStorage.setItem('id', id)
    
}


document.getElementById('btnCadastro').addEventListener('click', cadastrarEmpresa)


const postEmpresa =  async(empresa) => {
    const urlCadastro = 'http://10.107.144.22:8080/empresa/cadastrar'
    const options = {
        method: 'POST',
        body:JSON.stringify(empresa),
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json',
        }
    }

    await fetch(urlCadastro, options).then(resp => resp.json()).then(json => {
        idEmpresa = json.id
        window.location.href = `segundoCadastro.html?id=${idEmpresa}`
    }).catch(err => {
        alert("Houve algum erro")
        console.log(err)
    })

}

const exibir = (id) => {
    console.log(id)
}

function voltarLoginEmpresa(){

    window.location.href = '../empresa/login.html';
}



document.getElementById('btn-entrar').addEventListener('click',voltarLoginEmpresa)