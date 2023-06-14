import axios from 'axios';
 
export async function MakeONORequest(name, data) {
  return axios.post('http://${ono_server_ip}:7576/grpc/${name}', name, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

import { MakeONORequest } from './ono_requests';
const getDrawerReq = {
    id: 1
  };
   
  const getDrawerRes = await MakeONORequest('GetDrawerFromID', getDrawerReq);
  console.log(JSON.stringify(getDrawerRes));