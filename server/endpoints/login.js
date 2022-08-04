module.exports = (req, res) => {
  const instance = req.params.instance;
  const client_id = req.params.client_id;

  const redirect_uri = encodeURIComponent('https://127.0.0.1:3000/backdoor');
  const state = encodeURIComponent( JSON.stringify({ instance, client_id }) );

  if ( instance && client_id ) {
    try {
      res.redirect(301, `https://${instance}.auth.marketingcloudapis.com/v2/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}`);
    } catch (error) {
      res.json({ message: 'Instance and client cannot be identified' });
    }
  } else {
    res.redirect(301, 'https://127.0.0.1:3000/error');
  }
}
