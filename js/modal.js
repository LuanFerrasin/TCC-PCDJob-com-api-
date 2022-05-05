'use strict';

var url_string = window.location.href;
var url = new URL(url_string);
var idCandidato = url.searchParams.get("id");


const abrirModal =  async(id) => {
    let idVaga = id
 
    console.log(idCandidato, idVaga);

    const urlBuscar = `http://10.107.144.26:8080/vaga/buscar/${idVaga}`
    const response = await fetch(urlBuscar).then(resp => resp.json()).then(dados => dados)

    console.log(response);
    
    const criarModal = ({titulo, empresa, formacaoDesejada, deficiencia, horario, localTrabalho, salario, tipoContrato, beneficio}) => {

        const modal = document.createElement('div')
        modal.innerHTML=`
            <span OnClick="closeModal()" href="#fechar" title="Fechar" class="fechar">
                <img src="../img/close-modal-icon.png" alt="close-modal">
            </span>
            <div id="headerVaga">
                <div id="imgPreviewEmpresa">
                    <img src="" alt="">
                </div>
                <div id="informacoesVaga">
                    <div id="tituloDeficienciaVaga">
                        <div id="tituloVaga">
                            <h1>${titulo}</h1>
                        </div>
                        <div id="deficienciaVaga">
                            <p>Deficiencia: ${deficiencia.map(item => item.tipoDeficiencia)}</p>
                        </div>
                    </div>
                    <div id="nomeEmpresa">
                        <img src="../img/empresaIcon.svg" alt=""> <p>${empresa.empresa}</p>
                    </div>
                    <div id="localVaga">
                        <img src="../img/localIcon.svg" alt=""> <p>${localTrabalho.cidade}-${localTrabalho.sigla}</p>
                    </div>
                </div>
            </div>
            <div id="buttonsContainer">
                <button id='btnCandidata' onClick='candidatar(${idVaga}, ${idCandidato}, 1)' class="formatacaoButton active"><a>Candidatar-se</a></button>
                <button id='btnSalva' onClick='candidatar(${idVaga}, ${idCandidato}, 2) 'class="formatacaoButton activeSec"><img src="../img/saveIcon.svg" alt=""><a>Salvar</a></button>
                <button id='btnDispensa' onClick='candidatar(${idVaga}, ${idCandidato}, 3) 'class="formatacaoButton activeSec"><img src="../img/dispensarIcon.svg" alt=""><a> Dispensar</a></button>
            </div>
            <div id="containerDescricao">
                <div class="topicoContainer">            
                    <div class="tituloContainer formatacaoTitulo">
                        <img src="../img/topicoIcon.svg" alt=""><h1>Area de atuação</h1>
                    </div>
                    <div class="textoContainer formatacaoTexto">
                        <p>
                            ${formacaoDesejada.map(item => item.areaAtuacao)}
                        </p>
                    </div>
                </div>
                <div class="topicoContainer">            
                    <div class="tituloContainer formatacaoTitulo">
                        <img src="../img/topicoIcon.svg" alt=""><h1>Horários</h1>
                    </div>
                    <div class="textoContainer formatacaoTexto">
                        <p>
                            ${horario.horarioInicio} - ${horario.horarioFinal}
                        </p>
                    </div>
                </div>
                <div class="topicoContainer">            
                    <div class="tituloContainer formatacaoTitulo">
                        <img src="../img/topicoIcon.svg" alt=""><h1>Tipo de Contrato</h1>
                    </div>
                    <div class="textoContainer formatacaoTexto">
                        <p>
                            ${tipoContrato.tpoContrato}
                        </p>
                    </div>
                </div>
                <div class="topicoContainer">            
                    <div class="tituloContainer formatacaoTitulo">
                        <img src="../img/topicoIcon.svg" alt=""><h1></h1>
                    </div>
                    <div class="textoContainer formatacaoTexto">
                        <p>
                        </p>
                    </div>
                </div>
                <div class="topicoContainer">            
                    <div class="tituloContainer formatacaoTitulo">
                        <img src="../img/topicoIcon.svg" alt=""><h1>Informações</h1>
                    </div>
                    <div class="textoContainer formatacaoTexto">
                        <p>
                        </p>
                    </div>
                </div>
            </div>
            <div id="footerModal">
                <img src="" alt="">
                <a href="">Visite nosso perfil.</a>
            </div>
        `

        return modal
    }
    
    console.log(response)

    const container = document.querySelector('#containerModal')
    const resposta = criarModal(response)
    container.replaceChildren(resposta)
    // await getVaga(idVaga)
    // console.log(response)

    const modal = document.getElementById('containerModal')
    modal.classList.add('active');
}

const candidatar = async(idVaga, idCandidato, idStatus) => {

    const urlAcoes = `http://10.107.144.26:8080/vaga/candidatar?idVaga=${idVaga}&idStatus=${idStatus}&idCandidato=${idCandidato}`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json',
        }
    }
    await fetch(urlAcoes, options).then(resp => resp.json()).then(json => {

        if(idStatus == 1){

            closeModal()
            alert('VAGA CANDIDATADA')

        }if (idStatus == 2) {
            
            closeModal()
            alert('VAGA SALVA')

        } else {
            
            closeModal()
            alert('VAGA DISPENSADA')
        }
    }).catch(() => {
        alert('Houve algum problema ao interagir com a vaga.')
    })

}

const closeModal = () => {
    const modal = document.getElementById('containerModal')
    modal.classList.remove('active');
    
}

