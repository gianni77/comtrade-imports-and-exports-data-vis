(function() {
    /**
     * Represents a single trading record between two countries for a given
     * commodity. Has the following properties:
     *
     *  classification
     *  commodityCode
     *  commodityDescription
     *  estimationDescription
     *  netWeight
     *  countryName
     *  partnerName
     *  tradeFlow
     *  unitOfMeasurement
     *  quantity
     *  value
     */
    var TradeRecord = Backbone.Model.extend({
        /**
         * True if the trade record's commodity category is a top level
         * category.
         */
        commodityCategoryIsTopLevel: function() {
            return this.get('commodityCode').length == 2;
        }
    });

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
