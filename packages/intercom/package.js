Package.describe({
  name: 'intercom',
  summary: "Intercom package",
  version: '1.0.0'
});

Package.on_use(function (api) {
  api.versionsFrom('0.9.4');
  api.add_files('intercom_loader.js', 'client');
  api.add_files('intercom_server.js', 'server');
  
  api.export('IntercomHash', 'server');
});