const axios = require('axios');

module.exports = async (req, res) => {
  try {
    await axios({
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': req.headers.authorization
      },
      url: `https://${req.params.instance}.auth.marketingcloudapis.com/v2/userinfo`
    }).then((response) => {
      res.json(response.data);
    }).catch((error) => {
      res.json(error);
    });
  } catch (error) {
    console.log(error);
  }
}
