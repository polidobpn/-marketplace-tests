// @ts-nocheck
import http from 'k6/http';
import { check } from 'k6';

export const options = {
   //vus: 1,
   //duration: '10S',
  stages: [
    { duration: '30s', target: 100},
    { duration: '150s', target: 200},
    { duration: '1s', target: 0 },
  ],
};

export default function () {
  
  let baseUrl = 'https://cloudloyaltyapimanprd001.azure-api.net'
  let ocp = 'dde8f0f121924452a48872863c6091d8'
  let catalogId = '81513'
  let customerId = '50828'
  let participantid = '56250042'
  let campaignid = '71447'
  let username = '40790325870'
  let Authorization = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCMUE3MDNCRkRDMDNDNzI5NDAzREZCMzIyMjQxQTIwOTlFN0ZEMTNSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InF4cHdPXzNBUEhLVUE5LXpJaVFhSUpubl9STSJ9.eyJuYmYiOjE3MDI2NzI4ODcsImV4cCI6MTcwMjc1OTI4NywiaXNzIjoiaHR0cHM6Ly9mYW1pbGhhby1zc28tcHJvZC0wMDEuYXp1cmV3ZWJzaXRlcy5uZXQiLCJjbGllbnRfaWQiOiJwcmQuNzE0NDciLCJqdGkiOiJFOUYwQzY2RkJFMTg3NDFCNzlFRDBBRjE2QzJGNjYyRCIsImlhdCI6MTcwMjY3Mjg4Nywic2NvcGUiOiJ3ZWJwcmVtaW9zLmJhY2tvZmZpY2UvYWxsLnJlYWQgd2VicHJlbWlvcy5iYWNrb2ZmaWNlL2FsbC53cml0ZSB3ZWJwcmVtaW9zLmNhbXBhaWducy83MTQ0NyJ9.CtpDy8UMqz_4pLvhvZEOFn-ibI8FyKhWz3DPmQdRCuwp12HrqfNHz4cToVh1mWetuFUyy_ZMZdQUzui91G7uyM6P0uB4AP6Rys5U0xJMI-IRmqZXiRZ1AIWU3rkt75EXlGXMIc2H1PDIxiBPpW7Cbn7x0h1I1gHFrrICk8KwITS7RD_N5zLCfJGpmN54PdVT6Ejlxy9WihdFXo2mqUZGQyBzxnAfirtSDDwZ0D490rP3qIqQTfoeRmXVaZu-UhweRxwN-6PhsMJoF0wtj81JuBnuuleDJq6eDIbCs_xQ-zxrt_QbqMa04R6IZ91VlMDaNL1QSYsKkOlr_t1f6qEqPA'
  
  const params = {
    headers: {
      'Ocp-Apim-Subscription-Key': ocp ,
      'Authorization': `Bearer ${Authorization}`,
      'catalogId' : 81513,
      'participantid' : 56250042
    },
  };
  
  let response = http.get( baseUrl + `/cloudloyalty/v2/showcases/5?identifier=familhao&cachedPrice=false` , params,)
  check(response, {
    'Get response is status 200': r => r.status === 200,

      })

      console.log(response.status)
      console.log(response)
      }