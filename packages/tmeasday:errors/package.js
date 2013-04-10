Package.describe({
  name: "tmeasday:errors",
  summary: "A pattern to display application errors to the user",
  version: "1.0.0",
  documentation: null
});

Package.onUse(function (api, where) {
  api.versionsFrom('0.9.0');

  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export)
    api.export('Errors');
});
