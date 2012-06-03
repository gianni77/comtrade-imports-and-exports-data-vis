describe('A153.ImportsExports.Model.TradeRecord', function() {
    var TradeRecord = A153.ImportsExports.Model.TradeRecord;

    describe('#commodityCategoryIsTopLevel', function() {
        it('should return true if the commodity category for the trading ' +
           'record is a top level category', function() {
            var record = new TradeRecord({
                'commodityCode': '02'
            });

            record.commodityCategoryIsTopLevel().should.be.true;
        });

        it('should return false if the commodity category for the trading ' +
           'record is not a top level category', function() {
            var record = new TradeRecord({
                'commodityCode': '0202'
            });

            record.commodityCategoryIsTopLevel().should.be.false;
        });
    });

    describe('#isImport', function() {
        it('should return true if the trade record represents an import',
           function() {
            var record = new TradeRecord({
                'tradeFlow': 'import'
            });

            record.isImport().should.be.true;
        });

        it('should return false if the trade record does not represent an ' +
           'import', function() {
            var record = new TradeRecord({
                'tradeFlow': 'export'
            });

            record.isImport().should.be.false;
        });
    });
});

