'use strict'

let palavra_chave = document.getElementById('pesquisa-input').value



console.log(palavra_chave);

const getBusca = async(palavra_chave) => {
    const urlListar = `http://10.107.144.22:8080/vaga/listar/buscar/?palavra=${palavra_chave}`
    const response = await fetch(urlListar).then(resp => resp.json()).then(dados => dados.content)

    return response
}

const criarVagaPesquisa = ({titulo, empresa, localTrabalho, id, deficiencia}) => {
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
                
            </div>
            <div class="footerVagas">
                <div class="tipoDeficiencia">
                    <h2>Deficiencia: ${deficiencia.map(item => item.tipoDeficiencia)}</h2>
                </div>
                <div class="botaoSaibaMais">
                    <button id="btnSaibaMais" onClick="abrirModal(${id})">Saiba mais</button>
                </div>
            </div>
    `

    return vaga;
}

const carregarVaga = async() => {
    const container = document.querySelector('.vagasConteiner')
    const vagas = await getVaga(idCandidato);
    const colunas = vagas.map(criarVaga)
    container.replaceChildren(...colunas)
}