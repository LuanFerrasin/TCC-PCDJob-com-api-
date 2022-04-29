'use strict';

const getVaga = async() => {

    const urlListar = 'http://10.107.144.26:8080/vaga/listar'
    const response = await fetch(urlListar).then(resp => resp.json()).then(dados => dados.content).then(content => content.filter (item => item.status == 1))
    return response

}

const salvarVaga = () => {
    
}

const criarVaga = ({titulo, empresa, localTrabalho, id, deficiencia}) => {
        const vaga = document.createElement('div')
        vaga.classList.add("vagas")
        vaga.innerHTML = `
                <div class="headerVagas">
                    <div class="informacaoVaga">
                        <div class="imgEmpresa">
                            <img src="../img/logoEmpresa.png" alt="">
                        </div>
                        <div class="conteudoVaga">
                            <h1>${titulo}</h1>
                            <div class="empresaVaga">
                                <img src="../img/empresa.png" alt=""> 
                                <p>${empresa.empresa}</p> 
                            </div>
                            <div class="empresaVaga">
                                <img src="../img/local.png" alt=""> 
                                <p>${localTrabalho.cidade} - ${localTrabalho.sigla}</p> 
                            </div>
                        </div>
                    </div>
                    <div class="salvarVaga">
                        <button data-id="${id}">
                            <img src="../img/salvar.png" alt=""> 
                            <p>Salvar</p>
                        </button> 
                    </div>
                </div>
                <div class="footerVagas">
                    <div class="tipoDeficiencia">
                        <h2>Deficiencia: ${deficiencia.map(item => item.tipoDeficiencia)}</h2>
                    </div>
                    <div class="botaoSaibaMais">
                        <button>Saiba mais</button>
                    </div>
                </div>
        `

        return vaga;
}

const carregarVaga = async() => {
    const container = document.querySelector('.vagasConteiner')
    const vagas = await getVaga();
    const colunas = vagas.map(criarVaga)
    container.replaceChildren(...colunas)
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

carregarVaga()

document.getElementById('')