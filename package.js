Package.describe({
  name: 'tmeasday:binary-test',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Testing forcing non-portability of packages',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/tmeasday/binary-test',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'meteor-force-non-portable': '1.0.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3-rc.6');
  api.use('ecmascript');
  api.mainModule('binary-test.js');
});
