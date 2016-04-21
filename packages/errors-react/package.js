Package.describe({
  name: 'errors-react',
  version: '0.1.0',
  summary: 'A pattern to display application errors to the user',
  git: 'https://github.com/tmeasday/errors-react.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-beta.16');
  api.use(['ecmascript', 'react-meteor-data']);
  api.mainModule('errors-react.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('errors-react');
  api.mainModule('errors-react-tests.js');
});
