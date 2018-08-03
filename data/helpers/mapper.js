module.exports = {
    boolToInt: function(bool) { return bool === true ? 1 : 0 },
    intToBool: function(int) { return int === 1 ? true : false },
    recordToBody: function(record) {
        const result = { ...record, complete: this.intToBool(record.completed) };
        return result;
    }
}
