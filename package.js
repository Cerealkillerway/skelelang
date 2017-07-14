Package.describe({
  name: 'cerealkiller:skelelang',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.use([
        'mongo',
        'blaze-html-templates',
        'tap:i18n@1.8.2'
    ],
    ['client', 'server']);

    // i18n settings
    api.addFiles('package-tap.i18n', ['client', 'server']);

      // i18n
    api.addFiles([
        'i18n/en.i18n.json',
        'i18n/it.i18n.json'
    ], ['client', 'server']);
});
