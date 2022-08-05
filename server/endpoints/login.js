module.exports = (req, res) => {
  const instance = req.params.instance;
  const client_id = req.params.client_id;

  const redirect_uri = encodeURIComponent(`${process.env.CLIENT_URL}/backdoor`);
  const state = encodeURIComponent( JSON.stringify({ instance, client_id }) );
  // req.header('X-Frame-Options', 'SAMEORIGIN');
  res.json({ message: 'Test' });
  // if ( instance && client_id ) {
  //   try {
  //     res.header('X-Frame-Options', 'SAMEORIGIN');
  //     res.redirect(301, `https://${instance}.auth.marketingcloudapis.com/v2/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}`);
  //   } catch (error) {
  //     res.json({ message: 'Instance and client cannot be identified' });
  //   }
  // } else {
  //   res.redirect(301, `${process.env.CLIENT_URL}/error`);
  // }
}
