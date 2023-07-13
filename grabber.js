const axios = require('axios');

const credentials = {
  clientId: '',
  clientSecret: '',
  username: '',
  password: '',
};

const getToken = async () => {
  try {
    const response = await axios.post('https://auth.tidal.com/v1/oauth2/token', null, {
      params: {
        grant_type: 'password',
        scope: 'r_usr+w_usr',
        username: credentials.username,
        password: credentials.password,
        client_id: credentials.clientId,
        client_secret: credentials.clientSecret,
      },
    });

    const { access_token } = response.data;
    console.log('Token de acesso do Tidal:', access_token);
  } catch (error) {
    console.error('Erro ao obter o token:', error.response.data);
  }
};


getToken();
