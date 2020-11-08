
let mainMenu = images.fromBase64("data:image/png;base64,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");

let prepareMenu = images.fromBase64("data:image/png;base64,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");

let gameOver = images.fromBase64("data:image/png;base64,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");

let settleMenu = images.fromBase64("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAYAAACPgGwlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAaaSURBVHhe7d3fT1NnHMfx74GWDVZpSwBBhxR/LVMk/FIztxgXNy/moiaL2YVX2x8gXrgx3QXcbG7Jkk2z7crEK7e4zLm5eMGmmctkEySCqGE6UEFAxooilOL6c+c5fTRKKG3haXvY9/MyJz7nlNDKm/P0tD2tWv7yyv4whZ0ETGhhLX9F5Yg+yotsAAZCGXIAjCA6Q4jOEKIzhOgMITpDiM4QojOE6AwhOkOIzhCiM4ToDCE6Q4jOEKIzhOgMITpDiM4QojOE6AwhOkOIzhCiM4ToDCE6Q4jOEKIzhOgMITpDiM4QojOE6AwhOkOIzhCiM6Tlr6zCBw3NVjgsBzFomhyYQkhzbd6mR9cQfRY8fb1yNDPbklI5MoFwGJ8uxRGiM4ToDCE6Q4jOEKIzhOgMITpDiM4QojOE6AwhOkOIzhCiM4ToDCE6Q4jOEKIzZIroGZpGlsxMsloslCUWa+RvsS62i8tBnbSdI5eZkUEZxqJRdeliqi1/nhYVFZLNZjOC+wIB8ng8NDg0TBeudFF77wCFQmF9CVFQX8xgvp4jl/LoIrbYe7dUraZNL6yl5WUuctjt8tLo7o2OUs/NW3T2fBs1tV+hYDD98RE9BjFBW/Vpe2ttBW3fspnKXLP/Qdzo7aUfms7QqQudFNBnhDhPRFYO0Wcg7pMXOXKpbtcbtLamSv8FmPt9dFj/09rWTgePfkuD98f1f0vq0+MU6Cg0PXj5s8X0ZWM9raupVhJcEN9nfW01fdH4HpUvLtKvR14AMSU1utjDXfkO+rThXbLn5sqt0QWDQfL5/Y8WsR6L056rf/96Ks1zGr9gEFvSpvfIHr6QPmvYZxy4xSKm52++/5F+u9hprIt8L9VU0Js7thnrsfgDftrdeIC6BoZTdh+P6X2KYruNPti7O67gD41PTNLl/qFHy4R3Ul4Sm9VipQ/31lGRfr0ws6REt2Rm0J5dO+Oa0lVyOOz6weJO42EhRKf8pyOm5df0h2Xr9KP0RIknaqwW8cxc5Nk5sZ4I8dXr9evdWrsmsgGmlelY+ly9/uPKlutzJqbzd97aRXlOp9wSH3EMYLVkUO3KZbSxspw2Vq02nrgpLMiXXxEf8X0K9IO6U+dakv4wznf/vhzNLMvukCNTCCuNbuzlNWvo9S2bIxsSVFhQQK4lJY+WRIM/lOd00FBfH3XfGZZbkmO+Rlc7vet72csvrpcr6SP29k0b0n87zEppdPG4XEzJszUxOUmjY2NyGTfWZ2tFWRlenYtCafRq1+K4XjyZjrj//fr4Sdpet99YdtTto2MnTspLE5fntFPFkmK5Bo9TFl1MqesqVsk1c9hQiaP46Sjd04sXFsqRCei/hKa6PSaiNLotJ0eO0k/cmz+To+yR6P+K0ugWi1WOzCHLaq7bYxZKo/v9Pjkyh3/9fjmCxymNPj7hlaP0E8/FTXgmIivwBKXRB4f+liMT0B8CDgwl9xm5+UpZdPE4u6XzatKf746XuB3NHZHX5uFJSvf0jr47xlmrZjByb5Su9Jto5jERpdGF6z035Ci9rnX3yBFMpTa6PqWeaW6hUJqnePGGiF9+b5FrMJXS6CL1z5e66Ppf6d3LrnV30+nOP+UaTKV8ehd7+4mm03GdyZoM4s0PJ5rOyDWYjvLoYm9var9Kza0XUn4kbxyxt7ZR08WrcgtMR/2erhM//INffUfukbtyS3zEy9/iNXBjSfD8OGHYPUKHjh6XaxBNUqILbo+X9n9yiLwJnAjhsC+g2qUlxlJTVpLQ2bQer5fe16/PncBp01wl/b1sRbk2OvJxA2U/9bTxmrtqYlbxPnhAb9c30NB4ap8Gxpsdohga89Cexo/on5ER46GUSuL7DbvdVNd4IOXB5zPlp0BPZ2Riks7+0UJFTicVFxUab0aYy14v9m6fP0jNLW3U+Plhuj06Ji9JLZwCHYPXF6CzFy+Re3CA8vX4DnuucaKDEM8vgAgtlkAgSNd6btCRY8fp8KnT5E3jy6fzNXrKP4lCEIlfrVxlfBLFsjIX5TkcUfd+EVp84sTde6PUffMW/Xq+lX7q6JKXphc+lGAOKksX0Vr5mTM52dmUZc3Sp2+fceRvfObM5S7q6BuUX20eiM4Qjt5h3kB0hhCdIURnCNEZQnSGEJ0hRGcI0RlCdIYQnSFEZwjRGUJ0hhCdIURnCNEZQnSGEJ0hRGcI0RlCdIYQnSFEZwjRGUJ0hhCdIc31yrZ+CmmJ/X9aYBi/fUuOZragZPb/r41yWjj0H0bsG8o13ET0AAAAAElFTkSuQmCC");

// 请求横屏截图
if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}

function Time() {

    this._start = Date.now();
    this.current = this._start;
    this.elapsed = 0;
    this.delta = 16;
}
Time.prototype.start = function () {
    this._start = Date.now();
}
Time.prototype.getElapsed = function () {
    this.current = Date.now();
    return (this.current - this._start) / 1000;
}

let stop = false;

let window = floaty.window(
    <vertical>
        <button id="stop" text="stop script" style="Widget.AppCompat.Button.Colored" alpha="0.5" />
    </vertical>
);

window.stop.click(() => {
    stop = true;
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

let running = setInterval(() => {

    let img = captureScreen();

    let menu_pos;
    if (!gaming) {
        gaming = checkMode(img);
    }

    let delta = time.getElapsed();
    if (delta > 200 && gaming) {
        // stopGame(img);
        gaming = false;
        click(1830, 65);
        sleep(500);
        click(960, 800);
        sleep(500);
        click(760, 660);
        time.start();
    }

    /* playing */
    if (gaming) {
        playGame(img);
    }

    if (stop) {
        log("结束！");
        clearInterval(running);
        exit();
    }

}, 200);

function playGame(img) {
    switch (checkDeath(img)) {  // death
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
                    if (length > 200)
                        click(1630, 960);   // lock on target
                }
                else
                    click(point.x, point.y);
            } else {
                // lose target
                // turn left
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
    // switch (checkDeath(img)) {  // death
    //     case 0:
    //         selectRobot(img);
    //         break;

    //     case 1:     // live
    // click(1830, 65);
    // sleep(500);
    // click(960, 800);
    // sleep(500);
    // click(760, 660);
    // break;
    // }
}

function checkDeath(img) {
    // 获取在点(100, 100)的颜色值
    // 坐标系以图片左上角为原点。以图片左侧边为y轴，上侧边为x轴。
    let color_blue = images.pixel(img, 890, 37);
    let color_red = images.pixel(img, 1030, 37);

    let col_blue = colors.toString(color_blue);
    let col_red = colors.toString(color_red);

    if (col_blue == "#ff174f68" || col_red == "#ff681616")
        return 0;   // death
    else if (col_blue == "#ff47c6ff" || col_red == "ffff4545")
        return 1;   // live
    else
        return 2;   // other state
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
    // let menu_pos = images.findImage(img, prepareMenu);

    /* main menu */
    if (images.findImage(img, mainMenu) !== null) {
        click(1666, 166);
        return false;
    }
    /* menu */
    else if (images.findImage(img, prepareMenu) !== null) {
        // log(menu_pos.x, menu_pos.y);
        let random = Math.random();
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



/* 
let random = Math.random();
let point = {
    x: 1570 + 140 * random,
    y: 730 + 140 * random
}
swipe(point.x, point.y, point.x + px, point.y - 100 * random, 500);
 */
// swipe(x1, y1, x2, y2, duration);

function turnLeft(start, range) {

}

function turnRight(start, range) {

}

console.show();
