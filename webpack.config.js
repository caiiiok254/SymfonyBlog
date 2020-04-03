var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    .addEntry('js/app',[
        './assets/js/app.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js'
    ])
    .addStyleEntry('css/app', [
        './assets/css/app.css',
        './node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])

    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())

module.exports = Encore.getWebpackConfig();
