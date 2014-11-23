(function() {
  require.config({
    paths: {
      'jquery': '../vendore/jquery'
    }
  });

  require(['jquery'], function($) {
    var name;
    name = 'John';
    console.log("Hello, " + name + "! Greetings from CoffeeScript.");
    return console.log("jQuery version " + $.fn.jquery + " is loaded.");
  });

}).call(this);

//# sourceMappingURL=main.js.map
