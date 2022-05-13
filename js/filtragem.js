'use strict';

// let cidade = 'belval'

// const getFiltro = async(cidade,estado,deficiencia,salario,suporte) => {
//     const urlFiltragem = `http://10.107.144.22:8080/vaga/listar/?cidade=${cidade}&estado=${estado}&deficiencia=${deficiencia}&salario=${salario}&suporte=${suporte}`
//     const response = await fetch(urlFiltragem).then(resp => resp.json()).then(dados => dados.content)

//     console.log(urlFiltragem)

//     return response
// }

// const getCidade = async (id) => {
//     const urlCidade = `http://10.107.144.22:8080/pesquisa/cidade/${id}`
//     const response = await fetch(urlCidade).then(resp => resp.json()).then(dados => dados.content)

//     return response
// }

const descarregarCidade = async () => {

    let selectedEstado = document.querySelector('sltEstados')
    selectedEstado[select.selectedIndex].dataset.id


    const urlCidade = `http://10.107.144.22:8080/pesquisa/cidade/1`
    const response = await fetch(urlCidade).then(resp => resp.json()).then(dados => dados.content)

    console.log(response)

    const criarEstado = (resp) => {
        const options = document.createElement('option');

        let id = resp.map(item => item.id)
        let sigla = resp.map(item => item.sigla)
        let estado = resp.map(item => item.estado)
        
        options.dataset.id = id
        options.value = estado
        options.textContent = sigla

        return options
    }
    
    const select = document.getElementById('sltEstados');
    const option = await criarEstado(response)
    console.log(option)
    select.replaceChildren(option)
    

}

const descarregarEstado = async () => {

    const urlEstado = 'http://10.107.144.22:8080/pesquisa/estado'
    const response = await fetch(urlEstado).then(resp => resp.json()).then(dados => dados.content)

    console.log(response)

    const criarEstado = (resp) => {
        const options = document.createElement('option');

        let id = resp.map(item => item.id)
        let sigla = resp.map(item => item.sigla)
        let estado = resp.map(item => item.estado)
        
        options.dataset.id = id
        options.value = estado
        options.textContent = sigla

        return options
    }
    
    const select = document.getElementById('sltEstados');
    const option = await criarEstado(response)
    console.log(option)
    select.replaceChildren(option)
    

}

descarregarCidade()

descarregarEstado()

// const getSuporte = async () => {
//     const urlCidade = 'http://10.107.144.22:8080/vaga/listar/suporte'
//     const response = await fetch(urlCidade).then(resp => resp.json()).then(dados => dados.content)

//     return response
// }


