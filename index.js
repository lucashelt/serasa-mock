const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const PROCESSES = ['PendenciasBacen', 'AcoesJudiciais', 'ParticipacoesFalencias']
const BACK_PENDENCIES = ['RestricoesFinanceiras', 'PendenciasFinanceiras', 'AcheiRecheque', 'ConvemDevedores']
const PENDENCIES = ['PendenciasInternas']

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/:document', (req, res) => {
      let RiskScore = 0

      let serasaData = {
         "CPF_CNPJ": req.params.document,
      }

      PROCESSES.forEach( process => {
         let processesNumber = Math.floor(Math.random() * 5)
         if(processesNumber > 0 && processesNumber < 4) {

            let occurrences = []

            for(let i = 0; i < processesNumber; i++){
               occurrences.push({
                  "NÚMERO DO PROCESSO": Math.floor(Math.random() * 999999),
                  "ESTADO": processesNumber < 2 ? 'MT' : 'SP'
               })
            }

            serasaData[process] = {
               "TotalOcorrencias":occurrences.length,
               "Ocorrências": occurrences,
               "Mensagem":"CONSTAM OCORRENCIAS"
            }

            RiskScore += (occurrences.length * 25)
         } else {
            serasaData[process] = {
               "TotalOcorrencias":0,
               "Ocorrências": [],
               "Mensagem":"NAO CONSTAM OCORRENCIAS"
            }
         }
      })

      BACK_PENDENCIES.forEach( bankPendecy => {
         let bankPendecyNumber = Math.floor(Math.random() * 5)
         if(bankPendecyNumber > 0 && bankPendecyNumber < 4) {

            let occurrences = []
            let total_sum = 0

            for(let i = 0; i < bankPendecyNumber; i++){
               let value = Math.random() * 9999
               total_sum += value

               occurrences.push({
                  "NÚMERO DA OCORRÊNCIA": Math.floor(Math.random() * 999999),
                  "CÓDIGO DO BANCO": Math.floor(Math.random() * 51),
                  "VALOR": value.toFixed(2)
               })
            }

            serasaData[bankPendecy] = {
               "TotalOcorrencias":occurrences.length,
               "Ocorrências": occurrences,
               "TOTAL SOMADO": total_sum.toFixed(2),
               "Mensagem":"CONSTAM OCORRENCIAS"
            }

            RiskScore += (occurrences.length * 50)
         } else {
            serasaData[bankPendecy] = {
               "TotalOcorrencias":0,
               "Ocorrências": [],
               "TOTAL SOMADO": 0,
               "Mensagem":"NAO CONSTAM OCORRENCIAS"
            }
         }
      })

      PENDENCIES.forEach( process => {
         let processesNumber = Math.floor(Math.random() * 5)
         if(processesNumber > 0 && processesNumber < 4) {

            let occurrences = []

            for(let i = 0; i < processesNumber; i++){
               occurrences.push({
                  "CÓDIGO INTERNO DA PENDÊNCIA": Math.floor(Math.random() * 999999),
                  "STATUS": processesNumber < 2 ? 'EM PROCESSO' : 'CONCLUÍDA'
               })
            }

            serasaData[process] = {
               "TotalOcorrencias":occurrences.length,
               "Ocorrências": occurrences,
               "Mensagem":"CONSTAM OCORRENCIAS"
            }

            RiskScore += (occurrences.length * 10)
         } else {
            serasaData[process] = {
               "TotalOcorrencias":0,
               "Ocorrências": [],
               "Mensagem":"NAO CONSTAM OCORRENCIAS"
            }
         }
      })

      if(Math.floor(Math.random() * 10) > 5) {
         serasaData['AlertaDocumentos'] = {
            "TotalOcorrencias":1,
            "Ocorrências": [{
               'TIPO': 'CPF/CNPJ',
               'SITUAÇÃO': 'IRREGULAR'
            }],
            "Mensagem":"CONSTAM OCORRENCIAS"
         }
      } else {
         serasaData['AlertaDocumentos'] = {
            "TotalOcorrencias":0,
            "Ocorrências": [],
            "Mensagem":"NÃO CONSTAM OCORRENCIAS"
         }
      }

      serasaData["Mensagem"] = "CONSULTA REALIZADA COM SUCESSO"
         serasaData["Status"] = true
         serasaData["Transacao"] = {
            "Status":true,
            "CodigoStatus":"G000M011",
         }

   res.send(serasaData)
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))