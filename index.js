const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/:document', (req, res) => res.send(
   {
      "CPF_CNPJ": req.params.document,
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
   }
  ))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
