function Baidu_OCR(imgFile) {
    let access_token = http.get("https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=YIKKfQbdpYRRYtqqTPnZ5bCE&client_secret=hBxFiPhOCn6G9GH0sHoL0kTwfrCtndDj").body.json().access_token;
    let url = "https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic" + "?access_token=" + access_token;
    let imag64 = images.toBase64(imgFile);
    let res = http.post(url, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, image: imag64, image_type: "BASE64", language_type: "JAP" });
    let str = JSON.parse(res.body.string()).words_result.map(val => val.words).join('\n');
    return str;
}

// let src = "/storage/emulated/0/DCIM/Screenshots/Screenshot_2020-05-01-10-32-28-87.png";
// let imgFile = images.read(src);
// imgFile = images.clip(imgFile, 1587, 21, 307, 90);
// let p = images.findMultiColors(imgFile, "#ff3333", [[74, 0, "#ff3333"], [74, 93, "#ff3333"], [0, 93, "#ff3333"]]);
// if (p) {
//     log(p);
// } else {
//     toast("没找到");
// }

if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}

// let result = Baidu_OCR(imgFile);
let start = false,
    end = true,
    dead = false;
let delta;
let box = {};

let hall_start = images.read("/storage/emulated/0/DCIM/Screenshots/start_01.jpg");
let menu_start = images.read("/storage/emulated/0/DCIM/Screenshots/start_02.jpg");
let settlement_start = images.read("/storage/emulated/0/DCIM/Screenshots/start_03.jpg");

let robotA = images.read("/storage/emulated/0/DCIM/Screenshots/robotA.jpg");
let robotB = images.read("/storage/emulated/0/DCIM/Screenshots/robotB.jpg");
let robotC = images.read("/storage/emulated/0/DCIM/Screenshots/robotC.jpg");
let robotD = images.read("/storage/emulated/0/DCIM/Screenshots/robotD.jpg");
// let titan = images.read("/storage/emulated/0/DCIM/Screenshots/titan.jpg");

console.show();
// 620 / Math.PI * 0.5

setInterval(
    () => {
        let img = captureScreen();

        let robotA_pos = images.findImage(img, robotA);
        let robotB_pos = images.findImage(img, robotB);
        let robotC_pos = images.findImage(img, robotC);
        let robotD_pos = images.findImage(img, robotD);
        // let titan_pos = images.findImage(img, titan);

        if (robotA_pos) {
            click(robotA_pos.x, robotA_pos.y);
        } else if (robotB_pos) {
            click(robotB_pos.x, robotB_pos.y);
        } else if (robotC_pos) {
            click(robotC_pos.x, robotC_pos.y);
        } else if (robotD_pos) {
            click(robotD_pos.x, robotD_pos.y);
        }
        // else if (titan_pos) {
        //     click(titan_pos.x, titan_pos.y);
        // }

        let clip_A, clip_B, clip_C, clip_end, clip_change;
        let result_A, result_B, result_C, result_end, result_change;

        if (end) {
            /** 
             * 未开始，检查当前状态
            */
            let hall_pos = images.findImage(img, hall_start);
            let menu_pos = images.findImage(img, menu_start);
            let settlement_pos = images.findImage(img, settlement_start);

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

            /*
            clip_A = images.clip(imgFile, 1580, 120, 200, 90);
            clip_B = images.clip(imgFile, 1587, 21, 307, 90);
            clip_C = images.clip(imgFile, 1319, 840, 307, 90);

            result_A = Baidu_OCR(clip_A);
            result_B = Baidu_OCR(clip_B);
            result_C = Baidu_OCR(clip_C);

            if (result_A == "前往战斗") {
                log("战斗");
                click(1580 + 100, 120 + 45);
            }
            if (result_B == "前往战斗") {
                log("战斗");
                click(1587 + 150, 21 + 45);
            }
            if (result_C == "前往战斗") {
                log("战斗");
                click(1319 + 150, 840 + 45);
                start = true;
                end = false;
            }
            */
        }

        if (start) {
            let settlement_pos = images.findImage(img, settlement_start);
            if (settlement_pos) {
                start = false;
                end = true;
            }
            /**
             * 滑动屏幕
             */
            let p = images.findMultiColors(imgFile, "#ff3333", [[74, 0, "#ff3333"], [74, 93, "#ff3333"], [0, 93, "#ff3333"]]);

            if (p) {
                end = false;
                // log(p);
                box.x = p.x + 37;
                box.y = p.y + 46;
                let random = Math.random();
                let point = {
                    x: 1570 + 140 * random,
                    y: 730 + 140 * random
                }
                // log(box);
                // 135°
                delta = box.x - 960;
                if (delta > 100)
                    click(1630, 970);
                let theta = Math.atan(delta / 398);
                let px = theta / (Math.PI / 1240);
                swipe(point.x, point.y, point.x + px, point.y - 200 * random, 500);

            } else {
                /**
                 * 检测准星
                 */
                let point = findColor(imgFile, 0x5edf80, {
                    region: [840, 100, 1080, 600]
                });   // 模糊找色 findColor()
                if (!point) {
                    swipe(800 + 200 * Math.random(), 200 + 200 * Math.random(), 1000, 200 + 200 * Math.random(), 500);
                }


                /**
                 * 检测是否游戏结束
                 */
                // clip_B = images.clip(imgFile, 1587, 21, 307, 90);
                // result_B = Baidu_OCR(clip_B);

                // clip_end = images.clip(imgFile, 860, 280, 200, 90);
                // result_end = Baidu_OCR(clip_end);

                // clip_change = images.clip(imgFile, 1490, 740, 140, 80);
                // result_change = Baidu_OCR(clip_change);
                // sleep(100);

                // if (result_B == "前往战斗") {
                //     log("结束");
                //     start = false;
                //     end = true;
                // } else if (result_end == "你的奖励") {
                //     log("结束");
                //     click(1390, 320);
                //     start = false;
                //     end = true;
                // } else if (result_change == "未购买") {
                /**
                 * 选择机器人
                 */
                let robotA_pos = images.findImage(img, robotA);
                let robotB_pos = images.findImage(img, robotB);
                let robotC_pos = images.findImage(img, robotC);
                let robotD_pos = images.findImage(img, robotD);
                // let titan_pos = images.findImage(img, titan);

                if (robotA_pos) {
                    click(robotA_pos.x, robotA_pos.y);
                } else if (robotB_pos) {
                    click(robotB_pos.x, robotB_pos.y);
                } else if (robotC_pos) {
                    click(robotC_pos.x, robotC_pos.y);
                } else if (robotD_pos) {
                    click(robotD_pos.x, robotD_pos.y);
                }
                // else if (titan_pos) {
                //     click(titan_pos.x, titan_pos.y);
                // }
                // }

            }
        }
    },
    500
);



