"use strict";
/*
function Program() {
    console.clear();
    this.stop = false;

    log(clearInterval);

    this.window = floaty.window(
        <vertical>
            <button id="start" text="start" style="Widget.AppCompat.Button.Colored" alpha="0.7" />
            <button id="over" text="stop" alpha="0.7" />
        </vertical>

    );

    this.running = setInterval(() => { log("运行中"); }, 1000);

    //指定确定按钮点击时要执行的动作
    this.window.start.click(function () {
        toast("您好!");
    });
    this.window.over.click(function () {
        toast("结束!");
        log(this.running);
        clearInterval(this.running);
    });
}

let program = new Program();
*/

if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}

// startRunning();

let downloadId = 10;
let stop = false;

// startRunning();

let window = floaty.window(
    <vertical>
        <button id="over" text="stop" style="Widget.AppCompat.Button.Colored" />
    </vertical>
);

//指定确定按钮点击时要执行的动作
window.over.click(function () {
    toast("结束!");
    stopRunning();
});

downloadId = setInterval(() => {
    log("运行中...");
    if (stop) {
        log("停止");
        log(downloadId);
        clearInterval(downloadId);
    }
}, 1000);


function stopRunning() {
    stop = true;

    // threads.shutDownAll();
    // log("停止");
    // log(downloadId);
    // clearInterval(downloadId);
}

threads.start(move);

function move() {

    press(230, 700, 5000); // move forward
    log("moving");

    if (!stop)
        move();

}