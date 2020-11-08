let hall_start = images.read("/storage/emulated/0/DCIM/Screenshots/start_01.jpg");
let menu_start = images.read("/storage/emulated/0/DCIM/Screenshots/start_02.jpg");
let settlement_start = images.read("/storage/emulated/0/DCIM/Screenshots/start_03.jpg");

let robotA = images.read("/storage/emulated/0/DCIM/Screenshots/robotA.jpg");
let robotB = images.read("/storage/emulated/0/DCIM/Screenshots/robotB.jpg");
let robotC = images.read("/storage/emulated/0/DCIM/Screenshots/robotC.jpg");
let robotD = images.read("/storage/emulated/0/DCIM/Screenshots/robotD.jpg");
// let titan = images.read("/storage/emulated/0/DCIM/Screenshots/titan.jpg");

if (!requestScreenCapture()) {
    log("请求截图失败");
    exit();
}

console.show();
/*
let img = captureScreen();
let settlement_pos = images.findImage(img, settlement_start);
if (settlement_pos) {
    log(settlement_pos);
} else {
    log("sorry")
}
*/

setInterval(() => {
    let img = captureScreen();

    let hall_pos = images.findImage(img, hall_start);
    let menu_pos = images.findImage(img, menu_start);
    let settlement_pos = images.findImage(img, settlement_start);

    if (hall_pos) {
        // log(hall_pos.x, hall_pos.y);
        click(hall_pos.x, hall_pos.y);
    } else if (menu_pos) {
        // log(menu_pos.x, menu_pos.y);
        click(menu_pos.x, menu_pos.y);
    } else if (settlement_pos) {
        click(settlement_pos.x, settlement_pos.y);
    }

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

}, 1000);



