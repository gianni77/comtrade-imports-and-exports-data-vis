describe('Model', function() {
    describe('#get, #set', function() {
        it('set should set the value for an attribute on the model, get ' +
           'should retrieve the value', function() {
            var model = new Model();
            model.set('key', 'val');
            model.get('key').should.equal('val');
        });

        it('get should return undefined for an attribute that has not been ' +
           'set', function() {

            var model = new Model();
            if (undefined !== model.get('unsetKey')) {
                throw 'Model.get should return undefined for an unset key';
            }
        });

        it('should initialize with attributes passed to its ' +
           'constructor', function() {
            var model = new Model({
                'key1': 'val1',
                'key2': 'val2'
            });

            model.get('key1').should.equal('val1');
            model.get('key2').should.equal('val2');
        });
    });
});
