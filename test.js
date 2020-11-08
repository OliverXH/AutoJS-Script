

function Time() {

    this.start = Date.now()
    this.current = this.start
    this.elapsed = 0
    this.delta = 16
}
Time.prototype.getElapsed = function () {
    this.current = Date.now();
    return (this.current - this.start) / 1000;
}

let time = new Time();

setTimeout(() => {
    log(time.getElapsed());
    sleep(1000)
    log(time.getElapsed());
}, 1000);