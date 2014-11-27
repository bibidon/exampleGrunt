requirejs.config({
    paths: {
        jquery: "../../bower_components/jquery/dist/jquery",
        backbone: "../../bower_components/backbone/backbone",
        underscore: "../../bower_components/underscore/underscore",
    },
    shim: {
        "underscore": { exports: "_" },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "backbone"
        }
    }
});

require(["init"], function (Init) {
    var start = new Init();
    start.render();
});