const axios = require('axios');

module.exports = async (req, res) => {
  try {
    await axios({
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      url: `https://${req.params.instance}.auth.marketingcloudapis.com/v2/token`,
      data: req.body
    }).then((response) => {
      res.json(response.data);
    }).catch((error) => {
      res.json(error);
    });
  } catch (error) {
    console.log(error);
  }
}
