(function() {
    function App(records, countryData, measurementData,
                                         commodityClassificationData) {
        this.records = records;
        this.countryData = countryData;
        this.measurementData = measurementData;
        this.commodityClassificationData = commodityClassificationData;
    }

    App.prototype.mapCommodityCodeToDescription = function(code) {
        return _.find(this.commodityClassificationData, function(el) {
            return (el.Code === code);
        }).ShortDescription;
    };

    var exports = window;

    if (!('A153' in exports)) {
        exports.A153 = {};
    }

    if (!('ImportsExports' in exports.A153)) {
        exports.A153.ImportsExports = {};
    }

    exports.A153.ImportsExports.App = App;
})();
