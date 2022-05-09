" use strict"

fetch('http://10.107.144.22:8080/empresa/buscar/1')

const putEmpresa = async (empresa) => {
    const urlAtualizar = 'http://10.107.144.22:8080/empresa/atualizar/3'
    const options = {
        method: 'PUT',
        body: JSON.stringify(empresa),
        headers: {
            'content-Type' : 'application/json'
        }
    }

    await fetch(`${urlAtualizar}${empresa.id}`, options)
}

const getEmpresa = () => {

    const urlListar = 'http://10.107.144.22:8080/empresa/buscar/1'
    const options = {
        method: 'GET',
    }
    fetch(urlListar, options).then(resp=>console.log(resp))

}

