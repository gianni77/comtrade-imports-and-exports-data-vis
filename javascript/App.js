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

    /*
     * Static methods
     */

    /**
     * Accepts an array of TradeRecord models and removes any that do not
     * represent a top level commodity category
     */
    App.filterRecordsWithLowLevelCommodityCategories = function(records) {
        return _.filter(records, function(record) {
            return record.commodityCategoryIsTopLevel();
        });
    };

    /**
     * Accepts an array of TradeRecord models and removes any that do not
     * represent an export
     */
    App.filterNonExportRecords = function(records) {
        return _.filter(records, function(record) {
            return record.isExport();
        });
    };

    /**
     * Filters records by a reporting country
     */
    App.filterRecordsByReportingCountry = function(records, country) {
        return _.filter(records, function(record) {
            return country === record.get('countryName');
        });
    };

    /**
     * Removes records for commodities that do not have a corresponding
     * import/export record
     */
    App.filterCommoditiesWithOnlyImportOrExport = function(records) {
        var importRecords = _.filter(records, function(record) {
            return record.isImport();
        });

        var mapToCommodityCodes = function(record) {
            return record.get('commodityCode');
        };
        var importCommodities = _.map(importRecords, mapToCommodityCodes);
        console.log(importCommodities);

        var exportRecords = _.filter(records, function(record) {
            return record.isExport();
        });
        var exportCommodities = _.map(exportRecords, mapToCommodityCodes);

        var commoditiesWithImportAndExport = _.intersection(
            importCommodities,
            exportCommodities
        );

        return _.filter(records, function(record) {
            return _.contains(commoditiesWithImportAndExport, record.get('commodityCode'));
        });
    };

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
            return new A153.ImportsExports.Model.TradeRecord({
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
            });
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
