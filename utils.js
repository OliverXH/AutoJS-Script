function Time() {
    this._start = Date.now();
    this._current = this._start;
    this._elapsed = 0;
    this._delta = 0;
}
Time.prototype.start = function () {
    this._start = Date.now();
}
Time.prototype.getElapsed = function () {
    this._current = Date.now();
    return (this._current - this._start);
}
Time.prototype.getDelta = function () {
    this._delta = (Date.now() - this._current);
    this._current = Date.now();
    return this._delta;
}

module.exports = Time;