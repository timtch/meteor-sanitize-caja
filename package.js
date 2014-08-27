Package.describe({
  summary: "Sanitize html using Google Caja JsHtmlSanitizer and reasonable assumptions",
  version: "0.1.0",
  git: " https://github.com/timtch/meteor-sanitize-caja.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('timtch:sanitize-caja.js', 'server');
  api.export('sanitizeCaja', 'server');

});
 
Npm.depends({'sanitize-caja': '0.1.0'});
