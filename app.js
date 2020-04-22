const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({ origin: '*' }))

app.get('/:document', (request, response) => {
    response.send({
        "CPF_CNPJ": request.params.document,
        "AlertaDocumentos":{
           "TotalOcorrencias":0,
           "Mensagem":"NAO CONSTAM OCORRENCIAS"
        },
        "PendenciasInternas":{
           "TotalOcorrencias":0,
           "Ocorrências": [],
           "Mensagem":"NAO CONSTAM OCORRENCIAS"
        },
        "RestricoesFinanceiras":{
           "TotalOcorrencias":0,
           "Ocorrências": [],
           "Mensagem":"NAO CONSTAM OCORRENCIAS"
        },
        "PendenciasFinanceiras":{
           "TotalOcorrencias":0,
           "Ocorrências": [],
           "Mensagem":"NAO CONSTAM OCORRENCIAS"
        },
        "PendenciasBacen":{
           "TotalOcorrencias":0,
           "Ocorrências": [],
           "Mensagem":"NAO CONSTAM OCORRENCIAS"
        },
        "Protestos":{
           "TotalOcorrencias":0,
           "Ocorrências": [],
           "Mensagem":"NAO CONSTAM OCORRENCIAS"
        },
        "AcoesJudiciais":{
           "TotalOcorrencias":0,
           "Ocorrências": [],
           "Mensagem":"NAO CONSTAM OCORRENCIAS"
        },
        "AcheiRecheque":{
           "TotalOcorrencias":0,
           "Ocorrências": [],
           "Mensagem":"NAO CONSTAM OCORRENCIAS"
        },
        "ConvemDevedores":{
           "TotalOcorrencias":0,
           "Ocorrências": [],
           "Mensagem":"NAO CONSTAM OCORRENCIAS"
        },
        "ParticipacoesFalencias":{
           "TotalOcorrencias":0,
           "Ocorrências": [],
           "Mensagem":"NAO CONSTAM OCORRENCIAS"
        },
        "RiskScore":{
        },
        "Mensagem":"CONSULTA REALIZADA COM SUCESSO",
        "Status":true,
        "Transacao":{
           "Status":true,
           "CodigoStatus":"G000M011",
        }
     })
})

app.listen(3333, () => console.log('LISTENING ON PORT 3333'))