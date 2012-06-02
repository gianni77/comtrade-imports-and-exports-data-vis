describe('A153.App', function() {
    describe('#mapCommodityCodeToDescription', function() {
        it('should map a commodity code to a commodity description', function() {
            var app = new A153.ImportsExports.App([], [], [], [
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

            app.mapCommodityCodeToDescription('01').should.equal('Live animals; animal products');
            app.mapCommodityCodeToDescription('0101').should.equal('Live horses, asses, mules and hinnies.');
        });
    });

});
