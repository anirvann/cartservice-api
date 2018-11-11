var faker = require('faker');
var chalk = require('chalk');
var fs = require('fs');
var jsf = require('json-schema-faker');
var productSchema = require('./productSchema');

const { green, red } = chalk;

jsf.extend('faker', function () {
  faker.custom = {
    securedImgProtocol: function() {
      return faker.image.imageUrl(250, 180, 'food', 'restaurant').replace('http://', 'https://');
    }
  };
  return faker;
});

const compiledProductSchema = jsf(productSchema);

const products = compiledProductSchema.products;

const json = JSON.stringify({
  products
});

fs.writeFile('functions/database/db.json', json, err => {
  if (err) {
    console.log(red(err.message));
  } else {
    console.log(green('Mock API data generated.'));
  }
});