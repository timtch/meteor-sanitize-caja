Package.describe({
  summary: "Sanitize html using Google Caja JsHtmlSanitizer and reasonable assumptions "
});

Npm.depends({
    'sanitize-caja': '0.1.0'
});

Package.on_use(function (api) {
  api.add_files('sanitize.js', 'server');
});
