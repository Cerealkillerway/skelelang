/* Isomorphic (Both Server and Client) */
const i18nConfig = {
    settings: { //--> Config object
        defaultLocale: 'it',
        it: {
            code: 'it',
            isoCode: 'it-IT',
            name: 'Italiano'
        },
        en: {
            code: 'en',
            isoCode: 'en-US',
            name: 'English'
        },
    }
};

import I18N from 'meteor/ostrio:i18n';
Skelelang.i18n = new I18N({i18n: i18nConfig});


// re-define helper
if (Meteor.isClient) {
    Template.registerHelper(Skelelang.i18n.helperName, function() {
        let i18n = Skelelang.i18n;

        return i18n.get.apply(i18n, arguments);
    });
}
