const form = document.getElementById("container-form")

/* Inputs */

const nome = document.getElementById("nome")
const loja = document.getElementById("loja")

const naotem = document.getElementById("naotem")
const tem = document.getElementById("tem")
const artigo = document.getElementById("Artigo")

const cp = document.getElementById("CP")
const contato = document.getElementById("Contato")

const copiar = document.querySelector(".copiar")
const erroPinpad31One = document.getElementById("erro31Pinpad")
const precoZero = document.getElementById("precoZero")

/* textarea */

const relatado = document.getElementById("relatado")
const executado = document.getElementById("executado")
const solucao = document.getElementById("solucao")
let output = ""
let outputCp = document.getElementById("urlCp")
const divMessage = document.querySelector(".alert")

const msg = "Mascara copiada com Sucesso!!"

const mascaraN1 = document.getElementById("mascaraN1")
const mascaraN2 = document.getElementById("mascaraN2")
const labelSolucao = document.querySelector(".labelSolucao")
const apoioLabel = document.createElement("label")
const apoioInput = document.createElement("input")
const containerPaiApoio = document.querySelector(".container-pai-apoio")

let tituloMascara = ""
let tituloApoio = ""

const email = document.getElementById("email")
const horarioSegSexta = document.getElementById("horarioSegSex")
const horarioSab = document.getElementById("horarioSab")
const horarioDom = document.getElementById("horarioDom")

// Prrenchimento rapido
const wifiPdx = document.getElementById("wifiPdx")
const none = document.getElementById("none")
const reprocessamento = document.getElementById("reprocessamento")
const satDocPorta = document.getElementById("satDocPorta")

const container4 = document.querySelector(".container-4")

const tituloTag = document.createElement("p")
const nomeTag = document.createElement("p")
const tituloCategorizacao = document.createElement("p")
const olCategorizacao = document.createElement("ol")
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")

mascaraN1.addEventListener("change", () => {
  if (mascaraN1.checked) {
    tituloMascara = "Solução do caso"
    labelSolucao.textContent = tituloMascara
    containerPaiApoio.removeChild(apoioLabel)
    containerPaiApoio.removeChild(apoioInput)
    tituloApoio = ""
  }
})

mascaraN2.addEventListener("change", () => {
  if (mascaraN2.checked) {
    tituloMascara = "Resultado"
    labelSolucao.textContent = tituloMascara
    containerPaiApoio.appendChild(apoioLabel)
    tituloApoio = "Apoio Responsavel: "
    apoioLabel.textContent = tituloApoio
    containerPaiApoio.appendChild(apoioInput)
    apoioInput.classList.add("apoioInput")
  }
})

form.addEventListener("submit", (event) => {
  ativar()
  event.preventDefault()
})

cp.addEventListener("keyup", () => {
  outputCp.textContent = `cp${cp.value}.varejofacil.com.br`
})

const ativar = () => {
  const message = document.createElement("div")
  message.classList.add("message")
  message.innerText = msg
  divMessage.appendChild(message)

  setTimeout(() => {
    message.style.display = "none"
  }, 5000)
}

/* Preenchimentos Rapidos */

none.addEventListener("change", () => {
  if (none.checked) {
    relatado.value = ""
    executado.value = ""
    solucao.value = ""
    artigo.value = ""
    container4.removeChild(tituloTag)
    container4.removeChild(nomeTag)
    container4.removeChild(tituloCategorizacao)
    container4.removeChild(olCategorizacao)
  }
})

erroPinpad31One.addEventListener("change", () => {
  if (erroPinpad31One.checked) {
    relatado.value =
      "Franqueada informa que não está conseguindo passar venda no TEF está retornando Erro: 31 - Erro Pinpad"
    executado.value =
      "Acessado o PDV da loja e utilizado o comando 622/ para ver se o Pinpad estava comunicando com o PDV. \n\nRetornado que tinha um pinpad comunicando com o PDV então foi utilizado o comando 101/ para reiniciar o PDV.\n\nSolicitado para que seja feito um teste e o Pinpad agora está funcionando normalmente."
    solucao.value =
      "Utilizado o comando 622/ para verificar se o Pinpad estava comunicando, como estava, utilizado o comando 101/ para reiniciar o PDV, Feito um teste, Pinpad agora funcionando normalmente."
    artigo.value = "000008058"

    container4.appendChild(tituloTag)
    container4.appendChild(nomeTag)
    container4.appendChild(tituloCategorizacao)
    container4.appendChild(olCategorizacao)

    olCategorizacao.classList.add("ol-categorizacao")

    const listaOrdenadaCategorizacao =
      document.querySelector(".ol-categorizacao")

    listaOrdenadaCategorizacao.appendChild(li1)
    li1.textContent = "Venda"
    listaOrdenadaCategorizacao.appendChild(li2)
    li2.textContent = "Realizar Pagamento"
    listaOrdenadaCategorizacao.appendChild(li3)
    li3.textContent =
      "A Segunda parte, O Formulario do Caso Preencher conforme situação do caso!"

    tituloTag.textContent = "Utilizar a Tag:"
    nomeTag.textContent = "CM_Venda_Realizar Pagamento_Pinpad"
    tituloCategorizacao.textContent = "Categorização"
  }
})

wifiPdx.addEventListener("change", () => {
  if (wifiPdx.checked) {
    relatado.value =
      "Franqueada informa que o Mobshop não está conectando o Wifi está pedindo uma senha"
    executado.value =
      "Em Contato com a Franqueada Informado o seguinte passo a passo : Acessar o App Hub na tela inicial, Seleciona a opção : Este Dispositivo > Perfis e clicar em reaplicar perfil.\n\nApós procedimento o Mobshop foi conectado a rede e está funcionando perfeitamente."
    solucao.value =
      "Em Contato com a Franqueada Informado o seguinte passo a passo : Acessar o App Hub na tela inicial, Seleciona a opção : Este Dispositivo > Perfis e clicar em reaplicar perfil."
    artigo.value = "000002955 tópico 4.2"

    container4.appendChild(tituloTag)
    container4.appendChild(nomeTag)
    container4.appendChild(tituloCategorizacao)
    container4.appendChild(olCategorizacao)

    olCategorizacao.classList.add("ol-categorizacao")

    const listaOrdenadaCategorizacao =
      document.querySelector(".ol-categorizacao")

    listaOrdenadaCategorizacao.appendChild(li1)
    li1.textContent = "Venda"
    listaOrdenadaCategorizacao.appendChild(li2)
    li2.textContent = "Inicializar sistemas e dispositivos"
    listaOrdenadaCategorizacao.appendChild(li3)
    li3.textContent =
      "A Segunda parte, O Formulario do Caso Preencher conforme situação do caso!"

    tituloTag.textContent = "Utilizar a Tag:"
    nomeTag.textContent = "CM_Venda_Sistemas_PDx_Bug"
    tituloCategorizacao.textContent = "Categorização"
  }
})

reprocessamento.addEventListener("change", () => {
  if (reprocessamento.checked) {
    relatado.value =
      "Franqueada(o) informa que tem algumas vendas em contingencia e gostaria que fosse corrigido/reenviado."
    executado.value =
      "Acessado o PDV da loja, Aberto o SysPDV Server, Acessado a Rotina : Comunicação PDV > Monitoramento NFCe, Consultado pelo periodo informado pela franqueada.\n\nSelecionado os cupons pendentes e reenviados, Cupons reenviados com sucesso."
    solucao.value =
      "Acessado o SysPDV Server na rotina de Comunicaçao PDV > Monitoramento NFCe, consultado e reenviado os cupons pendentes"
    artigo.value = "000008754"

    container4.appendChild(tituloTag)
    container4.appendChild(nomeTag)
    container4.appendChild(tituloCategorizacao)
    container4.appendChild(olCategorizacao)

    olCategorizacao.classList.add("ol-categorizacao")

    const listaOrdenadaCategorizacao =
      document.querySelector(".ol-categorizacao")

    listaOrdenadaCategorizacao.appendChild(li1)
    li1.textContent = "Fiscal"
    listaOrdenadaCategorizacao.appendChild(li2)
    li2.textContent = "Exportação de XML"
    listaOrdenadaCategorizacao.appendChild(li3)
    li3.textContent =
      "A Segunda parte, O Formulario do Caso Preencher conforme situação do caso!"

    tituloTag.textContent = "Utilizar a Tag:"
    nomeTag.textContent = "CM_Fiscal_ExportaçãoXML_Pendências"
    tituloCategorizacao.textContent = "Categorização"
  }
})

satDocPorta.addEventListener("change", () => {
  if (satDocPorta.checked) {
    relatado.value =
      "Franqueada(o) informa que ao tentar efetuar uma venda no PDV quando estava finalizando apresentou erro,  Aparecendo apenas as opções 'Tentar Reenviar novamente' e 'Cancelar este Cupom'."
    executado.value =
      "Acessado o PDV da loja, constatado que o erro mencionado é o ' Documento não Autenticado ', Clicado em Tentar reenviar novamente mas o erro ainda persiste.\n\nNa Área de trabalho do PDV aberto o programa 'Bematech Activation Software' e indo em Menu > Consultas > Clicado em Consulta SAT, Foi retornado a MSG : Erro na abertura da porta de comunicação SAT,\n\nNa Sequencia foi acessado a pasta C:>ProgramFiles>Bematech>ActivationSoftwarePackage>ActivationSoftware, Copiado os arquivos BemaSat.dll e BEMASAT.XML, Com os arquivos copiados acessado a pasta C:>SyspdvCFE>bematech>RB1000 ou (RB2000), depedendo do modelo do sat, excluido o arquivo .sat atual na pasta e colado os arquivos, Na Sequencia renomeado o arquivo BemaSat.dll para Sat.dll\n\nNa Sequencia Recortado o Arquivo BEMASAT.XML que foi colado, e indo na pasta C:>Syspdv, colado na pasta Raiz, Foi solicitado para que fosse feito um teste e a venda com efetivada com sucesso e cupom impresso.\n\n"
    solucao.value =
      "Efetuado a substituição dos arquivos sat.dll e bemasat.xml o SAT voltou a funcionar e o cupom foi emitido com sucesso."
    artigo.value = "000008127"

    container4.appendChild(tituloTag)
    container4.appendChild(nomeTag)
    container4.appendChild(tituloCategorizacao)
    container4.appendChild(olCategorizacao)

    olCategorizacao.classList.add("ol-categorizacao")

    const listaOrdenadaCategorizacao =
      document.querySelector(".ol-categorizacao")

    listaOrdenadaCategorizacao.appendChild(li1)
    li1.textContent = "Venda"
    listaOrdenadaCategorizacao.appendChild(li2)
    li2.textContent = "Inicializar sistemas e dispositivos"
    listaOrdenadaCategorizacao.appendChild(li3)
    li3.textContent =
      "A Segunda parte, O Formulario do Caso Preencher conforme situação do caso!"

    tituloTag.textContent = "Utilizar a Tag:"
    nomeTag.textContent = "CM_Venda_Sistemas_S@T/MFE"
    tituloCategorizacao.textContent = "Categorização"
  }
})

//Copiar

const copiarMask = () => {
  if (naotem.checked) {
    output = "Não tem"
  } else {
    output = "Em Anexo"
  }

  let inputApoio = document.querySelector(".apoioInput")

  if (inputApoio) {
    inputApoio = inputApoio.value
  } else {
    inputApoio = ""
  }

  if (mascaraN1.checked) {
    tituloMascara = "Solução do caso"
  }

  navigator.clipboard.writeText(`Problema relatado: 
    
${relatado.value}

Procedimento Executado: 

${executado.value}

Evidencias: ${output}
    
${tituloMascara}: 

${solucao.value}

${tituloApoio} ${inputApoio}

Numero do Artigo: ${artigo.value}
    
Premissas:
Nome: ${nome.value}
Código da Loja: ${loja.value}
CP: cp${cp.value}.varejofacil.com
Contato: ${contato.value}
Email: ${email.value}
Horario de Atendimento : Segunda a Sexta: ${horarioSegSexta.value} Sabado: ${horarioSab.value} Domingo: ${horarioDom.value}`)
}
