(function() {
    var TradeRecord = Backbone.Model.extend();

    var exports = window;

    if (!('A153' in exports)) {
        exports.A153 = {};
    }

    if (!('ImportsExports' in exports.A153)) {
        exports.A153.ImportsExports = {};
    }

    if (!('Model' in exports.A153.ImportsExports)) {
        exports.A153.ImportsExports.Model = {};
    }

    exports.A153.ImportsExports.Model.TradeRecord = TradeRecord;

})();
