// @ts-nocheck
import http from 'k6/http';
import { check } from 'k6';

export const options = {
   vus: 1,
   //duration: '10S',
  /*stages: [
    { duration: '30s', target: 1000 },
    { duration: '150s', target: 1000 },
    { duration: '1s', target: 0 },
  ],*/
};

export default function () {
  
  let baseUrl = 'https://cloudloyaltyapimanprd001.azure-api.net'
  let ocp = 'dde8f0f121924452a48872863c6091d8'
  let catalogId = '81513'
  let customerId = '50828'
  let participantid = '56250042'
  let campaignid = '71447'
  let username = '40790325870'
  let Authorization = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCMUE3MDNCRkRDMDNDNzI5NDAzREZCMzIyMjQxQTIwOTlFN0ZEMTNSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InF4cHdPXzNBUEhLVUE5LXpJaVFhSUpubl9STSJ9.eyJuYmYiOjE3MDI1ODQwMTcsImV4cCI6MTcwMjY3MDQxNywiaXNzIjoiaHR0cHM6Ly9mYW1pbGhhby1zc28tcHJvZC0wMDEuYXp1cmV3ZWJzaXRlcy5uZXQiLCJjbGllbnRfaWQiOiJwcmQuNzE0NDciLCJqdGkiOiI0RDhFMDBCMEM1Q0QxRDAyRDAzMTNFMzYzMENDMjVEMiIsImlhdCI6MTcwMjU4NDAxNywic2NvcGUiOiJ3ZWJwcmVtaW9zLmJhY2tvZmZpY2UvYWxsLnJlYWQgd2VicHJlbWlvcy5iYWNrb2ZmaWNlL2FsbC53cml0ZSB3ZWJwcmVtaW9zLmNhbXBhaWducy83MTQ0NyJ9.ptJQq09zBLZkFMEPtCwOM4AFHd-Xwhmyu8KiIXv0bfD4MWMxlM6yG7JMJjKFJQaQM9v5VVxtZnl-LsbI6lGwERWQQFGQK8TVBuaMC298TpV0CTZN_HAGQRTVvksS_qaK9oSGFZEBdoNYxABbR2Ys0zU_oBlcHmDB-8WhgvRcN7ysoE-jpXIoYqSGOCOp6n3aVJyNzkuqyFOZR1edr_auRit_2fGWHIMyd2aSaJKXMWWSeCND9gthEfBNrJpJ11TTI3TuogJMsJ7ouHUb9lA7O_xk3ywVUaVj1f_u3l7Eki_uV30zkFxqTp6hCCUk_dyyvZ3extQuBr07OeprRUtsgg'
  
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