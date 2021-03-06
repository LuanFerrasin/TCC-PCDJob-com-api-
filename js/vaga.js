'use strict';

const criarVaga = async() => {
        const vaga = document.createElement('div').classList.add("")
}

const renderizarVaga = async() => {

}

const postVaga =  async(vaga) => {
    const urlCadastro = 'http://10.107.144.26:8080/vaga/cadastrar'
    const options = {
        method: 'POST',
        body:JSON.stringify(vaga),
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json',
        }
    }

    await fetch(urlCadastro, options).then(resp=>console.log(resp.json(Object.id)))
   

}

const getVaga = () => {

    const urlListar = 'http://10.107.144.26:8080/vaga/listar'
    const options = {
        method: 'GET',
    }
    fetch(urlListar, options).then(resp=>console.log(resp))

}

const putVaga = async (vaga) => {
    const urlAtualizar = 'http://10.107.144.26:8080/vaga/atualizar/'
    const options = {
        method: 'PUT',
        body: JSON.stringify(candidato),
        headers: {
            'content-Type' : 'application/json'
        }
    }

    await fetch(`${urlAtualizar}${vaga.id}`, options)
}

const deleteProduto = async (vaga) => {
    const urldeletar = 'http://10.107.144.26:8080/vaga/deletar/'
    const options = {
        method: 'DELETE',
        headers: {
            'content-Type' : 'application/json'
        }
    }

    await fetch(`${urldeletar}${vaga.id}`, options)
}

