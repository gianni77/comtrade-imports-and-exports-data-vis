function ImportsExportsVisualization(records, countryData, measurementData,
                                     commodityClassificationData) {
    this.records = records;
    this.countryData = countryData;
    this.measurementData = measurementData;
    this.commodityClassificationData = commodityClassificationData;
}

ImportsExportsVisualization.prototype.mapCommodityCodeToDescription = function(code) {
    return _.find(this.commodityClassificationData, function(el) {
        return (el.Code === code);
    }).ShortDescription;
};
