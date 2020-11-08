// 请求横屏截图
if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}


function playGame(img) {
    switch (checkDeath(img)) {  // death
        case 0:

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
                let theta = Math.atan(delta / 440);
                // let px = theta / (Math.PI / 1240);
                let px = theta * k;

                swipe(point.x, point.y, point.x + px, point.y - 100 * random, 500);
            }


            break;

        case 2:

            break;
    }
}

function checkDeath(img) {
    // 获取在点(100, 100)的颜色值
    // 坐标系以图片左上角为原点。以图片左侧边为y轴，上侧边为x轴。
    let color = images.pixel(img, 890, 37);

    let col = colors.toString(color);

    if (col == "#ff174f68")
        return 0;   // death
    else if (col == "#ff47c6ff")
        return 1;   // live
    else
        return 2;   // other state
}