define(["Models/data", "Views/headerView", "Views/addTrView"], function (data, HView, TView) {

    var init = (function () {

        var that = null;
        var appViewheader;
        var appViewTable;

        var model = function () {
            that = this;
        };

        model.prototype = {
            constructor: model,

            render: function () {
                that.headerRender();
                that.addTrRender();
            },

            headerRender: function () {
                appViewheader = new HView();
            },

            addTrRender: function () {
                appViewTable = new TView();
            }
        };

        return model;

    })();

    return init;

});