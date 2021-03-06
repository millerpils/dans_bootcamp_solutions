const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const {
  allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access');

Handlebars.registerPartial('footer', '{{footer}}');
Handlebars.registerPartial('head', '{{head}}');
Handlebars.registerPartial('navbar', '{{navbar}}');

// setup our templating engine
const handlebars = expressHandlebars({
  handlebars: allowInsecurePrototypeAccess(Handlebars),
});

module.exports = handlebars;
