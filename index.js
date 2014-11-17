require('node-thrust')(function(err, api) {
  api.window({ root_url: 'http://localhost:3000' }).show();
});
