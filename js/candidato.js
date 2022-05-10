'use strict';

const validacao = ({nome, email, senha}) => {

    if(nome.length > 3 && nome.length <= 50 && email.length > 9 && email.length <= 100  && senha.length > 3 && senha.length <= 50) {
        return true

    } else {
        return false
    }

} 

const cadastrarCandidato = async() => {
    const candidato = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        genero: "PREFIRO_NAO_INFORMAR"
    }

        await postCandidato(candidato).then(resp => id)
        
}

document.getElementById('btnCadastro').addEventListener('click', cadastrarCandidato)


const postCandidato =  async(candidato) => {
    const urlCadastro = 'http://10.107.144.22:8080/candidato/cadastrar'
    const options = {
        method: 'POST',
        body:JSON.stringify(candidato),
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json',
        }
    }

    await fetch(urlCadastro, options).then(resp=>console.log(resp.json(Object.id)))
   

}

