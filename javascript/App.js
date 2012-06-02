(function() {
    function App(records, countryData, measurementData,
                 commodityClassificationData, estimationData, tradeFlowData) {
        this.records = records;
        this.countryData = countryData;
        this.measurementData = measurementData;
        this.commodityClassificationData = commodityClassificationData;
        this.estimationData = estimationData;
        this.tradeFlowData = tradeFlowData;
    }

    App.prototype.mapCommodityCodeToDescription = function(code) {
        return _.find(this.commodityClassificationData, function(el) {
            return (el.Code === code);
        }).ShortDescription;
    };

    App.prototype.mapCountryCodeToName = function(code) {
        return _.find(this.countryData, function(el) {
            return (el['Country Code'] === code);
        })['Country Fullname English'];
    };

    App.prototype.mapEstimationCodeToDescription = function(code) {
        return _.find(this.estimationData, function(el) {
            return (el.estimationCode === code);
        }).description;
    };

    App.prototype.mapMeasurementCodeToDescription = function(code) {
        return _.find(this.measurementData, function(el) {
            return (el['UN Comtrade Code'] === code);
        }).Description;
    };

    App.prototype.mapRecordsToModels = function(records) {
        return _.map(records, function(record) {
            return {
                'classification': record['Classification'],
                'commodityCode': record['Commodity Code'],
                'commodityDescription': this.mapCommodityCodeToDescription(
                    record['Commodity Code']),
                'estimationDescription': this.mapEstimationCodeToDescription(
                    record['Estimation Code']
                ),
                'netWeight': record['Netweight (kg)'],
                'countryName': this.mapCountryCodeToName(
                    record['Reporter Code']
                ),
                'partnerName': this.mapCountryCodeToName(
                    record['Partner Code']
                ),
                'tradeFlow': this.mapTradeFlowCodeToDescription(
                    record['Trade Flow Code']
                ),
                'unitOfMeasurement': this.mapMeasurementCodeToDescription(
                    record['Quantity Unit Code']
                ),
                'quantity': record['Supplementary Quantity'],
                'value': record['Value']
            };
        }, this);
    };

    App.prototype.mapTradeFlowCodeToDescription = function(code) {
        return _.find(this.tradeFlowData, function(el) {
            return (el.tradeFlowCode === code);
        }).description;
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
