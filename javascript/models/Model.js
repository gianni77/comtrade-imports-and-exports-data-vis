var Model = function(attrs) {
};

Model.prototype.set = function(key, val) {
    this[key] = val;
};

Model.prototype.get = function(key) {
    return this[key];
};
