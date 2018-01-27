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
        'i18n/en/en.i18n.json',
        'i18n/en/errors.en.i18n.json',
        'i18n/en/menu.en.i18n.json',
        'i18n/en/date.en.i18n.json',
        'i18n/en/buttons-tooltips.en.i18n.json',
        'i18n/en/messages.en.i18n.json',
        'i18n/en/texts.en.i18n.json',

        'i18n/it/it.i18n.json',
        'i18n/it/errors.it.i18n.json',
        'i18n/it/menu.it.i18n.json',
        'i18n/it/date.it.i18n.json',
        'i18n/it/buttons-tooltips.it.i18n.json',
        'i18n/it/messages.it.i18n.json',
        'i18n/it/texts.it.i18n.json'
    ], ['client', 'server']);
});
