module.exports = (req, res) => {
  // const instance = req.params.instance;
  // const client_id = req.params.client_id;

  // const redirect_uri = encodeURIComponent(`${process.env.CLIENT_URL}/backdoor`);
  // const state = encodeURIComponent( JSON.stringify({ instance, client_id }) );

  res.json({ message: 'Test', url: process.env.CLIENT_URL });

  // if ( instance && client_id ) {
  //   res.redirect(301, `https://${instance}.auth.marketingcloudapis.com/v2/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}`);
  // } else {
  //   res.json({ message: 'Instance and client cannot be identified' });
  // }
}
