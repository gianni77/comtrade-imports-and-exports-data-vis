var Model = function(attrs) {
    if (!attrs) {
        attrs = {};
    }
    this._attrs = attrs;
};

Model.prototype.set = function(key, val) {
    this._attrs[key] = val;
};

Model.prototype.get = function(key) {
    return this._attrs[key];
};
