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
const pagTefTravado = document.getElementById("pagTefTravado")
const prodForaDeLinha = document.getElementById("prodForaDeLinha")
const pedidoOmniNDesce = document.getElementById("pedidoOmniNDesce")
const lojaOffline = document.getElementById("lojaOffline")
const haqImpressao = document.getElementById("haqImpressao")
const tribuNCadast = document.getElementById("tribuNCadast")

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
  outputCp.textContent = `cp${cp.value}.varejofacil.com`
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
      "A Segunda parte do Formulario, O Formulario do Caso, Preencher conforme o problema em questão!"

    tituloTag.textContent = "Utilizar a Tag:"
    nomeTag.textContent = "CM_Venda_Realizar Pagamento_Pinpad"
    tituloCategorizacao.textContent = "Categorização:"
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
      "A Segunda parte do Formulario, O Formulario do Caso, Preencher conforme o problema em questão!"

    tituloTag.textContent = "Utilizar a Tag:"
    nomeTag.textContent = "CM_Venda_Sistemas_PDx_Bug"
    tituloCategorizacao.textContent = "Categorização:"
  }
})

tituloTag.style.backgroundColor = "orange"
tituloTag.style.borderRadius = "3px"
nomeTag.style.border = "3px solid black"
tituloCategorizacao.style.backgroundColor = "orange"
tituloCategorizacao.style.borderRadius = "3px"
olCategorizacao.style.border = "3px solid black"
li2.style.marginTop = "10px"
li3.style.marginTop = "10px"

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
      "A Segunda parte do Formulario, O Formulario do Caso, Preencher conforme o problema em questão!"

    tituloTag.textContent = "Utilizar a Tag:"
    nomeTag.textContent = `CM_Fiscal_ExportaçãoXML
    _Pendências`
    tituloCategorizacao.textContent = "Categorização:"
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
      "A Segunda parte do Formulario, O Formulario do Caso, Preencher conforme o problema em questão!."

    tituloTag.textContent = "Utilizar a Tag:"
    nomeTag.textContent = "CM_Venda_Sistemas_S@T/MFE"
    tituloCategorizacao.textContent = "Categorização:"
  }
})

pagTefTravado.addEventListener("change", () => {
  if (pagTefTravado.checked) {
    relatado.value =
      "Franqueada(o) informa que seu PDV travou no momento da autorização do pagamento na forma de pagamento TEF."

    executado.value = `Acessado o PDV da loja, constatado que o PDV estava travado na tela de processamento de pagamento Com a tela branca sem responder.

Aberto o CMD e utilizado o comando 'taskmgr' para abrir o Gerenciador de Tarefas, Localizado o processo Syspdv_PDV e finalizado para que o PDV seja fechado.

Na sequência solicitado para que realize uma consulta no SITEF para verificar o status do pagamento que estava sendo processado para saber se estava pendente ou aprovado.

Verificado que estava pendente, foi então realizado a confirmação da transação no SITEF, Foi aberto o PDV novamente e observado que voltou para a tela da venda em questão na Etapa de finalização da venda, Orientado a Franqueada para que finalize a venda na forma de pagamento POS Credito/Debito para evitar duplicidade na transação e o valor entrar corretamente no seu caixa.`

    solucao.value = `Fechado o PDV pelo Gerenciador de Tarefas e conferido a venda no SITEF, como estava pendente foi confirmado a venda e lançada no PDV como POS.`

    artigo.value = "Não Encontrado"

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
      "A Segunda parte do Formulario, O Formulario do Caso, Preencher conforme o problema em questão!."

    tituloTag.textContent = "Utilizar a Tag:"
    nomeTag.textContent = "CM_Venda_Realizar Pagamento_PDV_Bug"
    tituloCategorizacao.textContent = "Categorização:"
  }
})

prodForaDeLinha.addEventListener("change", () => {
  if (prodForaDeLinha.checked) {
    relatado.value = `Franqueada(o) informa que ao tentar Lançar o Produto X no PDV apresenta o erro : "Produto fora de linha"`

    executado.value = `Primeiramente consultado o produto no Presto e na Bíblia do consumidor para verificar se o produto está no Ciclo Vigente, Na sequencia acessado o CP da loja, Indo na rotina: Produto > Cadastro > Produto, Consultado o produto em questão, Indo na Aba 'Informações, Em Opções Desmarcado o Checkbox "Fora de linha".

Na Sequencia acessado a Rotina : Frente de loja > Sincronização > Loja, Selecionado a loja em questão e enviado uma carga de Produtos, Após a sincronização ter finalizado utilizado a função 101/ para reiniciar o PDV e em seguida efetuado um teste e o produto foi incluso com sucesso para venda.`

    solucao.value = `Acessado o Cadastro do produto, na Aba Informações Desmarcado o Checkbox "Fora de linha", Efetuado uma sincronização com o PDV e agora é possível incluir o produto para venda com sucesso no PDV.`

    artigo.value = "000008643"

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
    li2.textContent = "Incluir Produto"
    listaOrdenadaCategorizacao.appendChild(li3)
    li3.textContent =
      "A Segunda parte do Formulario, O Formulario do Caso, Preencher conforme o problema em questão!."

    tituloTag.textContent = "Utilizar a Tag:"
    nomeTag.textContent = "CM_Venda_Incluir Produto_Produto_Fora de Linha"
    tituloCategorizacao.textContent = "Categorização:"
  }
})

prodPrecoZero.addEventListener("change", () => {
  if (prodPrecoZero.checked) {
    relatado.value = `Franqueada informa que ao tentar incluir Produto X está apresentando o Erro: Produto com preço zero.`

    executado.value = `Primeiramente consultado o produto em questão no presto e na Bíblia para saber se o produto está Vigente no Ciclo e Também Foi verificado que a CP não estava listada no artigo 8722, que são CPs com carga automática via Sync.

Na sequência acessado o CP da loja, Indo na Rotina: Produto > Cadastro > Produto, Consultado o produto em Questão e indo na Aba Preço verificado que o preço consta normalmente no produto, Indo na Aba Imposto verificado que todos os campos estão devidamente preenchidos, Clicado então em Gravar para gerar uma pendencia do item na sincronização.

Acessado a Rotina: Frente de loja > Sincronização > Loja, Selecionado a loja em questão e efetuado uma Carga de Produto Marcando também a Caixinha de 'Enviar Carga aos PDVs', Após finalizar a sincronização, efetuado um teste no PDV e agora o produto consta normalmente.`

    solucao.value = `Verificado o cadastro do produto no CP da loja para saber se não faltava alguma informação, Gravado o cadastro e efetuado uma carga para o PDV, Após procedimento problema resolvido.`

    artigo.value = "000008643"

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
    li2.textContent = "Incluir Produto"
    listaOrdenadaCategorizacao.appendChild(li3)
    li3.textContent =
      "A Segunda parte do Formulario, O Formulario do Caso, Preencher conforme o problema em questão!."

    tituloTag.textContent = "Utilizar a Tag:"
    nomeTag.textContent = "CM_Venda_Incluir Produto_Produto_Webclient"
    tituloCategorizacao.textContent = "Categorização:"
  }
})

pedidoOmniNDesce.addEventListener("change", () => {
  if (pedidoOmniNDesce.checked) {
    relatado.value = `Franqueada(o) informa que pedido Omni não está aparecendo no PDV.`

    executado.value = `Acessado PDV da loja, Solicitado para mostrar o pedido no Instore para verificar o seu status, constatado que ele está como Enviado para o PDV mas mesmo assim não está aparecendo.

Acessado o CP da loja e indo na Rotina: Venda > Vendas Externas > Monitoramento de pedido, Consultando o pedido e verificado que consta normalmente no Varejofácil.

No PDV aberto o CMD e com o comando 'services.msc' para abrir os Serviços, Localizado o Serviço SysPdv Service e Clicado para parar o serviço, aguardado alguns segundos e Iniciado novamente, Feito o procedimento depois de um tempinho o Pedido Desceu para o PDV`

    solucao.value = `Acessado o PDV da loja, Reiniciado o Serviço: SysPdv Service, Feito o procedimento depois de um tempinho o Pedido desceu para o PDV.`

    artigo.value = "Não Encontrado"

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
    li2.textContent = "Resgatar pedido Omni"
    listaOrdenadaCategorizacao.appendChild(li3)
    li3.textContent =
      "A Segunda parte do Formulario, O Formulario do Caso, Preencher conforme o problema em questão!."

    tituloTag.textContent = "Utilizar a Tag:"
    nomeTag.textContent = "CM_Venda_Omni_Config_PDV"
    tituloCategorizacao.textContent = "Categorização:"
  }
})

lojaOffline.addEventListener("change", () => {
  if (lojaOffline.checked) {
    relatado.value = `Franqueada informa que as informações do seu caixa e vendas não estão aparecendo nada no Varejofácil.`

    executado.value = `Acessado o CP da loja, Indo na rotina: Frente de loja > Sincronização > Lojas, Constatado que a loja se encontra OFFLINE.

Acessado o PDV da loja, Aberto o CMD e Utilizado o comando 'services.msc' para abrir os serviços, Localizado o Serviço 'SysPDV WebClient' parado o serviço e iniciado novamente, Após alguns segundos a Loja voltou a ficar online e todas informações que estava pendente subiu para o Varejofácil.`

    solucao.value = `Acessado o PDV da loja, Reiniciado o serviço SysPDV WebCliente, Após alguns segundos Verificado que todas informações pendentes subiram para o Varejofácil.`

    artigo.value = "Não Encontrado"

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
    li2.textContent = "Consultar relatórios"
    listaOrdenadaCategorizacao.appendChild(li3)
    li3.textContent =
      "A Segunda parte do Formulario, O Formulario do Caso, Preencher conforme o problema em questão!."

    tituloTag.textContent = "Utilizar a Tag:"
    nomeTag.textContent = "CM_Venda_Relatórios_Subida de Vendas_Webclient"
    tituloCategorizacao.textContent = "Categorização:"
  }
})

haqImpressao.addEventListener("change", () => {
  if (haqImpressao.checked) {
    relatado.value = `Franqueada(o) informa que ao tentar finalizar venda no Mobshop(PDX) da erro e apresenta a MSG : Erro de impressão.`

    executado.value = `Acessado o PDV da loja, Aberto o CMD e utilizado o comando 'services.msc' para abrir os Serviços, Localizado o Serviço 'HAQ' e Parado e Iniciado novamente.

Na sequência solicitado a franqueada para reiniciar o aparelho(Mobshop), Após reiniciar solicitado para logar no Mobshop e foi feito uma Carga Total, Após procedimentos efetuado um teste e a venda foi emitida e o cupom impresso com sucesso.`

    solucao.value = `Acessado o PDV da loja, Reiniciado o serviço HAQ, e reiniciado o Mobshop, Feito uma Carga total, efetuado um teste e a venda foi efetuada e impressa com sucesso..`

    artigo.value = "000008753"

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
      "A Segunda parte do Formulario, O Formulario do Caso, Preencher conforme o problema em questão!."

    tituloTag.textContent = "Utilizar a Tag:"
    nomeTag.textContent = "CM_Venda_Sistemas_PDx_Bug"
    tituloCategorizacao.textContent = "Categorização:"
  }
})

tribuNCadast.addEventListener("change", () => {
  if (tribuNCadast.checked) {
    relatado.value = `Franqueada(o) informa que ao tentar inlcuir produto no PDV é retornado o erro : Tributação Não Cadastrada.`

    executado.value = `Acessado o CP da loja, indo na rotina : Produto > Cadastro > Produto, e consultado o(os) itens em questão, constatado que os campos de tributação na Aba Imposto estão devidamente cadastrados, Salvado então o cadastro do produto para que seja gerado uma pendencia de sincronização.

Foi verificado que a CP não estava listada no artigo 8722, que são CPs com carga automática via Sync.

Na Sequencia acessado a Rotina: Frente de loja > Sincronização > Lojas, e Feito uma carga dos produtos para o PDV, efetuado um teste e agora é possível incluir o produto no PDV normalmente.`

    solucao.value = `Feito uma carga de produtos para o PDV para descer as informações da tributação, efetuado um teste, Informações integradas com sucesso no PDV.`

    artigo.value = "Não Encontrado."

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
    li2.textContent = "Incluir produto"
    listaOrdenadaCategorizacao.appendChild(li3)
    li3.textContent =
      "A Segunda parte do Formulario, O Formulario do Caso, Preencher conforme o problema em questão!."

    tituloTag.textContent = "Utilizar a Tag:"
    nomeTag.textContent = "CM_Venda_Incluir Produto_Produto_Sem tributação"
    tituloCategorizacao.textContent = "Categorização:"
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

Número do Artigo: ${artigo.value}
    
Premissas:
Nome: ${nome.value}
Código da Loja: ${loja.value}
CP: cp${cp.value}.varejofacil.com
Contato: ${contato.value}
E-mail: ${email.value}
Horário de Atendimento : Segunda a Sexta: ${horarioSegSexta.value} Sábado: ${horarioSab.value} Domingo: ${horarioDom.value}`)
}
