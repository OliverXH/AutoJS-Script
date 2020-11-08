let hall_start = images.read("/storage/emulated/0/DCIM/Screenshots/start_01.jpg");
let menu_start = images.read("/storage/emulated/0/DCIM/Screenshots/start_02.jpg");
let settlement_start = images.read("/storage/emulated/0/DCIM/Screenshots/start_03.jpg");
let leave = images.read("/storage/emulated/0/Android/data/com.tencent.mobileqq/Tencent/QQfile_recv/B$_B~DMF8(42@@Y1U3Y(]8R.png");

// let robotA = images.read("/storage/emulated/0/DCIM/Screenshots/robotA.jpg");
// let robotB = images.read("/storage/emulated/0/DCIM/Screenshots/robotB.jpg");
// let robotC = images.read("/storage/emulated/0/DCIM/Screenshots/robotC.jpg");
// let robotD = images.read("/storage/emulated/0/DCIM/Screenshots/robotD.jpg");
// let titan = images.read("/storage/emulated/0/DCIM/Screenshots/titan.jpg");

// images.fromBase64(base64);

if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}

// let result = Baidu_OCR(image);
let start = false,
    end = true,
    dead = false,
    ability = false;

// start = true;
// end = false;
let num = 0;
let k = 635 * 2 / Math.PI;
let delta;
let box = {};

let running = 10;
let stop = false;

let window = floaty.window(
    <vertical>
        <button id="over" text="stop" style="Widget.AppCompat.Button.Colored" alpha="0.5" />
    </vertical>
);
startRunning();
//指定确定按钮点击时要执行的动作
window.over.click(function () {
    toast("结束!");
    stop = true;
    // stopRunning();
});

// console.show();
// 635 / Math.PI * 0.5

function startRunning() {
    log("运行中...");

    running = setInterval(
        () => {

            let image = captureScreen();

            playing(image);

            if (start) {
                // toast("ok");
                longClick(230, 700);
            }

            if (stop) {
                log("停止");
                clearInterval(running);
            }
        },
        500
    );

    // threads.start(function () {
    //     //在新线程执行的代码
    //     while (true) {
    //         log("子线程");
    //         if (start)
    //             click(230, 700);
    //         // sleep(20);
    //     }
    //     // let duration = 1000 * 60 * 10;
    // });
}

function stopRunning() {
    stop = true;
}

function move() {

    press(230, 700, 5000); // move forward
    log("moving");
    if (start)
        move();

}

function playing(_image) {
    
    let image = _image;

    num++;

    log(num);

    if (num > 240) {
        start = false;
        end = true;

        back();
        let leave_pos = images.findImage(image, leave);
        click(leave_pos.x, leave_pos.y);
    }

    if (end) {
        num = 0;
        /** 
         * 未开始，检查当前状态
        */
        let hall_pos = images.findImage(image, hall_start);
        let menu_pos = images.findImage(image, menu_start);
        let settlement_pos = images.findImage(image, settlement_start);

        if (hall_pos) {
            // log(hall_pos.x, hall_pos.y);
            click(hall_pos.x, hall_pos.y);
        } else if (menu_pos) {
            // log(menu_pos.x, menu_pos.y);
            click(menu_pos.x, menu_pos.y);
            start = true;
            end = false;
        } else if (settlement_pos) {
            click(settlement_pos.x, settlement_pos.y);
        }
    }

    if (start) {
        let settlement_pos = images.findImage(image, settlement_start);
        let free_pos = images.findMultiColors(image, "#f6fafc", [[20, 0, "#0073a3"], [20, 20, "#006e9e"], [0, 20, "#006e9e"]]);
        let ad_pos = images.findMultiColors(image, "#d0faf8", [[975, 0, "#d0faf8"], [975, 549, "#d1faf8"], [0, 549, "#d1faf8"]]);

        if (settlement_pos) {
            start = false;
            end = true;
        } else if (free_pos) {
            sleep(500 + 500 * Math.random());
            click(free_pos.x, free_pos.y);
            start = false;
            end = true;
        } else if (ad_pos) {
            sleep(500 + 500 * Math.random());
            click(1390, 330);
            start = false;
            end = true;
        }

        /**
         * 滑动屏幕并射击
         */
        threads.start(function () {
            //在新线程执行的代码
            setTimeout(() => {
                a = false;
                log("子线程", a);
            }, 3000);
        });

        // 敌人红框
        let p_topLeft = images.findMultiColors(image, "#ff3333", [[10, 0, "#ff3333"], [0, 30, "#ff3333"]]);
        let p_topRight = images.findMultiColors(image, "#ff3333", [[-10, 0, "#ff3333"], [0, 30, "#ff3333"]]);
        // let p = images.findMultiColors(image, "#ff3333", [[74, 0, "#ff3333"], [74, 93, "#ff3333"], [0, 93, "#ff3333"]]);

        if (p_topLeft && p_topRight) {
            end = false;
            // log(p);
            box.x = (p_topLeft.x + p_topRight.x) / 2;
            box.y = p_topLeft.y + 46;
            let random = Math.random();
            let point = {
                x: 1570 + 140 * random,
                y: 730 + 140 * random
            }
            // log(box);
            // 135°
            delta = box.x - 960;
            let theta = Math.atan(delta / 440);
            // let px = theta / (Math.PI / 1240);
            let px = theta * k;
            if (ability) {
                click(1769, 346);
            }
            swipe(point.x, point.y, point.x + px, point.y - 100 * random, 500);

            if (delta > 500 || delta < -500)
                click(1630, 970);

        } else {
            /**
             * 检测准星
             */
            let point = images.findMultiColors(image, "#326f40", [[0, -20, "#4ecd76"], [0, -40, "#63e281"]], {
                region: [940, 100, 40, 600]
            });   // 模糊找色 findColor()
            if (!point) {
                swipe(800 + 200 * Math.random(), 200 + 200 * Math.random(), 1000, 200 + 200 * Math.random(), 500);
            }

            /**
             * 选择机器人
             */
            let robotA_pos = images.findMultiColors(image, "#2d2d1b", [[0, 20, "#1b1b13"], [10, 0, "#44432d"], [10, 10, "#181810"]]);
            let robotB_pos = images.findMultiColors(image, "#3c3c2a", [[20, 0, "#090904"], [20, 20, "#686868"], [0, 20, "#12120d"]]);
            let robotC_pos = images.findMultiColors(image, "#202020", [[20, 0, "#1f1f1f"], [20, 20, "#6e6d6d"], [0, 20, "#4f4545"]]);
            let robotD_pos = images.findMultiColors(image, "#835749", [[20, 0, "#656271"], [20, 20, "#4b576f"], [0, 20, "#2f384b"]]);

            // let robotA_pos = images.findImage(image, robotA);
            // let robotB_pos = images.findImage(image, robotB);
            // let robotC_pos = images.findImage(image, robotC);
            // let robotD_pos = images.findImage(image, robotD);
            // let titan_pos = images.findImage(image, titan);

            if (robotA_pos) {
                click(robotA_pos.x, robotA_pos.y);
            } else if (robotB_pos) {
                click(robotB_pos.x, robotB_pos.y);
            } else if (robotC_pos) {
                click(robotC_pos.x, robotC_pos.y);
            } else if (robotD_pos) {
                click(robotD_pos.x, robotD_pos.y);
                ability = true;
            }
            // else if (titan_pos) {
            //     click(titan_pos.x, titan_pos.y);
            // }
            // 

        }
    }
}







