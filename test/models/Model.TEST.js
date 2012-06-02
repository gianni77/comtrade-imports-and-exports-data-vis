describe('Model', function() {
    describe('#get, #set', function() {
        it('set should set the value for an attribute on the model, get ' +
           'should retrieve the value', function() {
            var model = new Model();
            model.set('key', 'val');
            model.get('key').should.equal('val');
        });
    });
});
