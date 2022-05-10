'use strict';

let cidade = 'belval'

const getFiltro = async(cidade,estado,deficiencia,salario,suporte) => {
    const urlFiltragem = `http://10.107.144.22:8080/vaga/listar/?cidade=${cidade}&estado=${estado}&deficiencia=${deficiencia}&salario=${salario}&suporte=${suporte}`
    const response = await fetch(urlFiltragem).then(resp => resp.json()).then(dados => dados.content)

    console.log(urlFiltragem)

    return response
}



