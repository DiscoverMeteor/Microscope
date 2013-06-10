Package.describe({
  summary: "Intercom package"
});

Package.on_use(function (api) {
  api.add_files('intercom.js', 'client');
  if(api.export)
    api.export('Intercom');
});