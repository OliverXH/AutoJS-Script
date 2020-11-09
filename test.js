
// let Time = require("utils.js");

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

// function Time() {

//     this.start = Date.now()
//     this.current = this.start
//     this.elapsed = 0
//     this.delta = 16
// }
// Time.prototype.getElapsed = function () {
//     this.current = Date.now();
//     return (this.current - this.start) / 1000;
// }

console.show();

// let time = new Time();

// setTimeout(() => {
//     log(time.getElapsed());
//     sleep(1000)
//     log(time.getElapsed());
// }, 1000);

// sleep(1000);

// log(time.getElapsed);

/* -------- */

let t = new Time();
let setT;
let deltaT = 200;

function run() {

    if (setT) clearTimeout(setT);

    setT = setTimeout(run, deltaT);

    t.start();

    /* ------ */
    
    log("kkk");
    sleep(2000);
    
    /* ------ */
    deltaT = t.getElapsed();

}

run();