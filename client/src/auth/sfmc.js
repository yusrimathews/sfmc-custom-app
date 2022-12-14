import axios from 'axios';

const SFMC = {
  async getToken(payload, callback) {
    const response = await axios({
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      url: `${process.env.REACT_APP_SERVER_URL}/token/${payload.instance}`,
      data: {
        'grant_type': 'authorization_code',
        'code': payload.code,
        'client_id': payload.client_id,
        'redirect_uri': `${process.env.REACT_APP_PUBLIC_URL}/backdoor`
      }
    });

    callback(response.data);
  },
  async refreshToken(payload, callback) {
    const response = await axios({
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      url: `${process.env.REACT_APP_SERVER_URL}/token/${payload.instance}`,
      data: {
        'grant_type': 'refresh_token',
        'refresh_token': payload.refresh_token,
        'client_id': payload.client_id
      }
    });

    callback(response.data);
  },
  async getUser(payload, callback) {
    const response = await axios({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${payload.token_type} ${payload.access_token}`
      },
      url: `${process.env.REACT_APP_SERVER_URL}/user/${payload.instance}`
    });

    callback(response.data);
  }
}

export default SFMC;
