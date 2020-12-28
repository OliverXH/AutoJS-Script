let Time = require('test/utils.js');

let mainMenu = images.fromBase64("data:image/png;base64,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");

let prepareMenu = images.fromBase64("data:image/png;base64,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");

let gameOver = images.fromBase64("data:image/png;base64,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");

let settleMenu = images.fromBase64("data:image/png;base64,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");

// 请求横屏截图
if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}

let stop = false;

let window = floaty.window(
    <vertical>
        <button id="stop" text="stop script" style="Widget.AppCompat.Button.Colored" alpha="0.5" />
    </vertical>
);

window.stop.click(() => {
    stop = true;
    log("结束！");
    exit();
});

let k = 635 * 2 / Math.PI;

let gaming = false;
// let gaming = true;

let selectRobot = (function () {

    let robot = 0;

    return function (value) {
        // robot = value ? value : robot;
        if (robot <= 3) {
            click(360 + 300 * robot, 710);
            click(1755, 1035);
            robot++;
        } else {
            robot = 0;
            return;
        }
    }

})();

let time = new Time();

let img = captureScreen();
let delta = 0;

let searchBox = null

/* -------- */
/*
threads.start(function() {
    setInterval(function() {

        img = captureScreen();
        log(Date.now());

    }, 200);
});
*/

let setT;
let deltaT = 200;
let t = new Time();

while (!stop) {

    run();

}

function run(img) {

    /* ------ */
    // log(100, img);

    img = captureScreen();

    if (!gaming) {
        gaming = checkMode(img);
    }

    delta = time.getElapsed();
    if (delta > 150 && gaming) {
        stopGame(img);
        time.start();
    }

    /* playing */
    if (gaming) {
        playGame(img);
    }

    /*if (stop) {
        log("结束！");
        clearInterval(running);
        exit();
    }*/

    img.recycle();

    //sleep(50);

    /* ------ */
    // deltaT = t.getDelta();

    // setTimeout(run, 10);

}



/* -------- */

function playGame(img) {
    switch (checkDeath(img)) {
        // death
        case 0:
            selectRobot(img);
            break;

        case 1:
            let random = Math.random();
            let point = {
                x: 1570 + 140 * random,
                y: 730 + 140 * random
            }

            let box = getBoundingBox(img);

            if (box !== null) {
                // 135°
                let delta = box.x - 960;
                let length = Math.abs(delta);
                let theta = Math.atan(delta / 440);
                // let px = theta / (Math.PI / 1240);
                let px = theta * k;

                if (length > 4) {
                    swipe(point.x, point.y, point.x + px, point.y - 100 * random, 400);
                    if (length > 160)
                        click(1630, 960); // lock on target
                } else
                    click(point.x, point.y);
            } else {
                // lose target
                // turn around
                let random = Math.random();
                swipe(400 + 1000 * random, 200 + 200 * random, 900, 200 + 200 * random, 400);
            }

            break;

        case 2:
            checkMode(img);
            break;
    }
}

function stopGame(img) {
    if (checkDeath(img) != 0) {
        // death
        // case 0:
        selectRobot(img);
        //   leaveGame();
        //  break;

        // case 1: // live
    }
    leaveGame();
    //  break;
}

function leaveGame() {
    click(1830, 65);
    sleep(500);
    click(960, 800);
    sleep(500);
    click(760, 660);
}

function checkDeath(img) {
    // 获取在点(100, 100)的颜色值
    // 坐标系以图片左上角为原点。以图片左侧边为y轴，上侧边为x轴。
    let color_blue = images.pixel(img, 890, 37);
    //let color_red = images.pixel(img, 1030, 37);

    let col_blue = colors.toString(color_blue);
    //let col_red = colors.toString(color_red);

    
    if (col_blue == "#ff174f68" /*|| col_red == "#ff681616"*/)
        return 0; // death
    else if (col_blue == "#ff47c6ff" /*|| col_red == "ffff4545"*/)
        return 1; // live
    else
        return 2; // other state
  
}

function getBoundingBox(image) {

    let box = {};
    // let x, y;

    // 敌人红框
    let p_topLeft = images.findMultiColors(image, "#ff3333", [[10, 0, "#ff3333"], [0, 30, "#ff3333"]]);
    let p_topRight = images.findMultiColors(image, "#ff3333", [[-10, 0, "#ff3333"], [0, 30, "#ff3333"]]);

    if (p_topLeft && p_topRight) {
        box.x = (p_topLeft.x + p_topRight.x) / 2;
        box.y = p_topLeft.y + 46;

        return box;
    }

    return null;

}

function checkMode(img) {

    //log(200, img);
    // let menu_pos = images.findImage(img, prepareMenu);

    let random = Math.random();

    /* main menu */
    if (images.findImage(img, mainMenu) !== null) {
        click(1556 + 350 * random, 115 + 122 * random);
        return false;
    }
    /* menu */
    else if (images.findImage(img, prepareMenu) !== null) {
        // log(menu_pos.x, menu_pos.y);
        click(1320 + 357 * random, 850 + 86 * random);
        return true;
    }
    /* game over */
    else if (images.findImage(img, gameOver) !== null) {
        click(1390, 330);
        return false;
    }
    /* settlement */
    else if (images.findImage(img, settleMenu) !== null) {
        click(1700, 33);
        return false;
    }
}

console.show();