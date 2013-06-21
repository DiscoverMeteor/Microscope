Package.describe("Mailchimp API library");

Npm.depends({mailchimp: '1.0.3'});

Package.on_use(function (api) {
  api.add_files('mailchimp.js', 'server');
});
