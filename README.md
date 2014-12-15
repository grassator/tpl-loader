# Lodash template for webpack

Lodash template loader for [webpack](http://webpack.github.io/). Uses `_.template` function to compile templates.

## Installation

`npm install tpl-loader`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var template = require("tpl!./file.html");
// => returns the template function compiled with undesrcore (lodash) templating engine.

// And then use it somewhere in your code
template(data) // Pass object with data
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)



