describe('A153.ImportsExports.App', function() {
    var TradeRecord = A153.ImportsExports.Model.TradeRecord;
    var App = A153.ImportsExports.App;

    describe('#mapCommodityCodeToDescription', function() {
        it('should map a commodity code to a commodity description', function() {
            var app = new App([], [], [], [
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

    describe('#mapCountryCodeToName', function() {
        it('should map a country code to the correct country name', function() {
            var app = new App([], [{
                'Country Abbrevation': "China",
                'Country Code': "156",
                'Country Fullname English': "China",
                'Country Name English': "China",
                'Cty Comments': "NULL",
                'End Valid Year': "2061",
                'ISO2-digit Alpha': "CN",
                'ISO3-digit Alpha': "CHN",
                'Start Valid Year': "1962"
            }, {
                'Country Abbrevation': 'India',
                'Country Code': '699',
                'Country Fullname English': 'India',
                'Country Name English': 'India',
                'Cty Comments': 'NULL',
                'End Valid Year': '2061',
                'ISO2-digit Alpha': 'IN',
                'ISO3-digit Alpha': 'IND',
                'Start Valid Year': '1975'
            }], [], []);
            
            app.mapCountryCodeToName('156').should.equal('China');
            app.mapCountryCodeToName('699').should.equal('India');
        });
    });

    describe('#mapMeasurementCodeToDescription', function() {
        it('should map a measurement code to the correct description', function() {
            var app = new App([], [], [{
                'Description': 'No quantity',
                'UN Comtrade Code': '1',
                'WCO Abbreviation': '-'
            }, {
                'Description': 'Area in square meters',
                'UN Comtrade Code': '2',
                'WCO Abbreviation': 'm2'
            }, {
                'Description': 'Electrical energy in thousands of kilowatt-hours',
                'UN Comtrade Code': '3',
                'WCO Abbreviation': '1000 kWh'
            }], []);

            app.mapMeasurementCodeToDescription('1').should.equal('No quantity');
            app.mapMeasurementCodeToDescription('2').should.equal('Area in square meters');
            app.mapMeasurementCodeToDescription('3').should.equal('Electrical energy in thousands of kilowatt-hours');
        });
    });

    describe('#mapEstimationCodeToDescription', function() {
        it('should map an estimation code to the correct description', function() {
            var app = new App([], [], [], [], [{
                'estimationCode': '0',
                'description': 'No estimation'
            }, {
                'estimationCode': '2',
                'description': 'Quantity estimated'
            }, {
                'estimationCode': '4',
                'description': 'Net Weight estimated'
            }, {
                'estimationCode': '6',
                'description': 'Quantity and Net Weight estimated'
            }]);

            app.mapEstimationCodeToDescription('0').should.equal('No estimation');
            app.mapEstimationCodeToDescription('2').should.equal('Quantity estimated');
            app.mapEstimationCodeToDescription('4').should.equal('Net Weight estimated');
            app.mapEstimationCodeToDescription('6').should.equal('Quantity and Net Weight estimated');
        });
    });

    describe('#mapTradeFlowCodeToDescription', function() {
        it('should map a trade flow code to the correct description', function() {
            var app = new App([], [], [], [], [], [{
                'tradeFlowCode': '1',
                'description': 'import'
            }, {
                'tradeFlowCode': '2',
                'description': 'export'
            }, {
                'tradeFlowCode': '3',
                'description': 're-export'
            }, {
                'tradeFlowCode': '4',
                'description': 're-import'
            }]);

            app.mapTradeFlowCodeToDescription('1').should.equal('import');
            app.mapTradeFlowCodeToDescription('2').should.equal('export');
            app.mapTradeFlowCodeToDescription('3').should.equal('re-export');
            app.mapTradeFlowCodeToDescription('4').should.equal('re-import');
        });
    });

    describe('#mapRecordsToModels', function() {
        it('should map an array of records from the csv to an array of ' +
           'models consumable by the application', function() {
            var app = new App([], [
                {
                    'Country Abbrevation': "China",
                    'Country Code': "156",
                    'Country Fullname English': "China",
                    'Country Name English': "China",
                    'Cty Comments': "NULL",
                    'End Valid Year': "2061",
                    'ISO2-digit Alpha': "CN",
                    'ISO3-digit Alpha': "CHN",
                    'Start Valid Year': "1962"
                },
                {
                    'Country Abbrevation': 'India',
                    'Country Code': '699',
                    'Country Fullname English': 'India',
                    'Country Name English': 'India',
                    'Cty Comments': 'NULL',
                    'End Valid Year': '2061',
                    'ISO2-digit Alpha': 'IN',
                    'ISO3-digit Alpha': 'IND',
                    'Start Valid Year': '1975'
                }
            ], [
                {
                    'Description': 'No quantity',
                    'UN Comtrade Code': '1',
                    'WCO Abbreviation': '-'
                }, {
                    'Description': 'Weight in kilograms',
                    'UN Comtrade Code': '8',
                    'WCO Abbreviation': 'kg'
                }
            ], [
                {
                    'AggregateLevel': '6',
                    'Code': '010619',
                    'LongDescription': '--  Other',
                    'ShortDescription': 'Live mammals, n.e.s.',
                    'isBasicLevel': '1',
                    'parentCode': '0106'
                }, {
                    'AggregateLevel': '4',
                    'Code': '0202',
                    'LongDescription': 'Meat of bovine animals, frozen.',
                    'ShortDescription': 'Meat of bovine animals, frozen.',
                    'isBasicLevel': '0',
                    'parentCode': '02'
                }
            ], [
                {
                    'estimationCode': '0',
                    'description': 'No estimation'
                },
                {
                    'estimationCode': '2',
                    'description': 'Quantity estimated'
                },
                {
                    'estimationCode': '4',
                    'description': 'Net Weight estimated'
                },
                {
                    'estimationCode': '6',
                    'description': 'Quantity and Net Weight estimated'
                }
            ], [
                {
                    'tradeFlowCode': '1',
                    'description': 'import'
                },
                {
                    'tradeFlowCode': '2',
                    'description': 'export'
                },
                {
                    'tradeFlowCode': '3',
                    'description': 're-export'
                },
                {
                    'tradeFlowCode': '4',
                    'description': 're-import'
                }
            ]);

            var records = [{
                'Classification': 'H3',
                'Commodity Code': '010619',
                'Estimation Code': '4',
                'Netweight (kg)': '2',
                'Partner Code': '156',
                'Quantity Unit Code': '1',
                'Reporter Code': '699',
                'Supplementary Quantity': '',
                'Trade Flow Code': '2',
                'Value': '109',
                'Year': '2010'
            }, {
                'Classification': 'H3',
                'Commodity Code': '0202',
                'Estimation Code': '6',
                'Netweight (kg)': '19911',
                'Partner Code': '156',
                'Quantity Unit Code': '8',
                'Reporter Code': '699',
                'Supplementary Quantity': '19911',
                'Trade Flow Code': '2',
                'Value': '68010',
                'Year': '2010'
            }];

            var models = app.mapRecordsToModels(records);

            models[0].toJSON().should.eql({
                'classification': 'H3',
                'commodityCode': '010619',
                'commodityDescription': 'Live mammals, n.e.s.',
                'estimationDescription': 'Net Weight estimated',
                'netWeight': '2',
                'countryName': 'India',
                'partnerName': 'China',
                'tradeFlow': 'export',
                'unitOfMeasurement': 'No quantity',
                'quantity': '',
                'value': '109'
            });

            models[1].toJSON().should.eql({
                'classification': 'H3',
                'commodityCode': '0202',
                'commodityDescription': 'Meat of bovine animals, frozen.',
                'estimationDescription': 'Quantity and Net Weight estimated',
                'netWeight': '19911',
                'countryName': 'India',
                'partnerName': 'China',
                'tradeFlow': 'export',
                'unitOfMeasurement': 'Weight in kilograms',
                'quantity': '19911',
                'value': '68010'
            });

        });
    });

    describe('#filterRecordsWithLowLevelCommodityCategories', function() {
        it('should return an array of models with only high level commodity ' +
           'categories', function() {
            var records = [
                new TradeRecord({commodityCode: '0202'}),
                new TradeRecord({commodityCode: '02'}),
                new TradeRecord({commodityCode: '03'}),
                new TradeRecord({commodityCode: '0303'})
            ];

            var filteredRecords = App.filterRecordsWithLowLevelCommodityCategories(records);
            filteredRecords.length.should.equal(2);
            filteredRecords[0].get('commodityCode').should.equal('02');
            filteredRecords[1].get('commodityCode').should.equal('03');
        });
    });

    describe('#filterNonExportRecords', function() {
        it('should return an array of trade records representing exports only',
           function() {
            var export1 = new TradeRecord({tradeFlow: 'export'});
            var import1 = new TradeRecord({tradeFlow: 'import'});
            var import2 = new TradeRecord({tradeFlow: 'import'});
            var export2 = new TradeRecord({tradeFlow: 'export'});

            var records = [
                export1,
                import1,
                import2,
                export2
            ];

            var filteredRecords = App.filterNonExportRecords(records);
            filteredRecords.length.should.equal(2);
            filteredRecords[0].should.equal(export1);
            filteredRecords[1].should.equal(export2);
        });
    });

    describe('#filterRecordsByReportingCountry', function() {
        it('should return an array of trade records for a specific reporting ' +
           'country', function() {
            var record1 = new TradeRecord({countryName: 'India'});
            var record2 = new TradeRecord({countryName: 'China'});
            var record3 = new TradeRecord({countryName: 'China'});
            var record4 = new TradeRecord({countryName: 'India'});

            var records = [
                record1,
                record2,
                record3,
                record4
            ];

            var filteredRecords = App.filterRecordsByReportingCountry(records, 'India');
            filteredRecords.length.should.equal(2);
            filteredRecords[0].should.equal(record1);
            filteredRecords[1].should.equal(record4);
        });
    });

    describe('#filterCommoditiesWithOnlyImportOrExport', function() {
        it('should return an array of trade records that have a corresponding ' +
           'import/export record', function() {
            var record1Import = new TradeRecord({commodityCode: '01', tradeFlow: 'import'});
            var record1Export = new TradeRecord({commodityCode: '01', tradeFlow: 'export'});
            var record2Import = new TradeRecord({commodityCode: '02', tradeFlow: 'import'});
            var record3Export = new TradeRecord({commodityCode: '03', tradeFlow: 'export'});
            var record4Import = new TradeRecord({commodityCode: '04', tradeFlow: 'import'});
            var record4Export = new TradeRecord({commodityCode: '04', tradeFlow: 'export'});

            var records = [
                record1Import,
                record1Export,
                record2Import,
                record3Export,
                record4Import,
                record4Export
            ];

            var filteredRecords = App.filterCommoditiesWithOnlyImportOrExport(records);
            filteredRecords.length.should.equal(4);
            filteredRecords[0].should.equal(record1Import);
            filteredRecords[1].should.equal(record1Export);
            filteredRecords[2].should.equal(record4Import);
            filteredRecords[3].should.equal(record4Export);
        });
    });
});
