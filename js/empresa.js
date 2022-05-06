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
    const urlCadastro = 'http://10.107.144.26:8080/empresa/cadastrar'
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

const putProduto = async (empresa) => {
    const urlAtualizar = 'http://10.107.144.26:8080/empresa/atualizar/'
    const options = {
        method: 'PUT',
        body: JSON.stringify(empresa),
        headers: {
            'content-Type' : 'application/json'
        }
    }

    await fetch(`${urlAtualizar}${empresa.id}`, options)
}

const deleteProduto = async (empresa) => {
    const urldeletar = 'http://10.107.144.26:8080/empresa/deletar/'
    const options = {
        method: 'DELETE',
        headers: {
            'content-Type' : 'application/json'
        }
    }

    await fetch(`${urldeletar}${empresa.id}`, options)
}

const getEmpresa = () => {

    const urlListar = 'http://10.107.144.26:8080/empresa/listar'
    const options = {
        method: 'GET',
    }
    fetch(urlListar, options).then(resp=>console.log(resp))

}