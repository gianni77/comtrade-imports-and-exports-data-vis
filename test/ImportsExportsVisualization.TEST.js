describe('ImportsExportsVisualization', function() {
    describe('#mapCommodityCodeToDescription', function() {
        it('should map a commodity code to a commodity description', function() {
            var importsAndExports = new ImportsExportsVisualization([], [], [], [
                {
                    'AggregateLevel': '2',
                    'Code': '01',
                    'LongDescription': 'Live animals; animal products',
                    'ShortDescription': 'Live animals; animal products',
                    'isBasicLevel': '0',
                    'parentCode': 'TOTAL'
                },
                {
                    'AggregateLevel': '4',
                    'Code': '0101',
                    'LongDescription': 'Live horses, asses, mules and hinnies.',
                    'ShortDescription': 'Live horses, asses, mules and hinnies.',
                    'isBasicLevel': '0',
                    'parentCode': '01'
                }
            ]);

            importsAndExports.mapCommodityCodeToDescription('01').should.equal('Live animals; animal products');
            importsAndExports.mapCommodityCodeToDescription('0101').should.equal('Live horses, asses, mules and hinnies.');
        });
    });
});
