Package.describe({
  name: 'cerealkiller:skelelang',
  version: '2.0.115',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
    // namespace
    api.addFiles(['namespace.js'], ['client', 'server']);

    api.versionsFrom('METEOR@1.8.0.2');

    api.use([
        'blaze-html-templates@1.1.2'
    ],
    ['client']);

    api.use([
        'ecmascript',
        'ostrio:i18n@3.1.0'
    ],
    ['client', 'server']);

      // i18n
    api.addFiles([
        'i18n-config.js',

        'en/en-buttons-tooltips.js',
        'en/en-date.js',
        'en/en-errors.js',
        'en/en-labels.js',
        'en/en-menu.js',
        'en/en-messages.js',
        'en/en-texts.js',

        'it/it-buttons-tooltips.js',
        'it/it-date.js',
        'it/it-errors.js',
        'it/it-labels.js',
        'it/it-menu.js',
        'it/it-messages.js',
        'it/it-texts.js'
    ], ['client', 'server']);


    // exports
    api.export(['Skelelang']);
});
