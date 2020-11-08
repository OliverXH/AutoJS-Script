back();

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

num++;
if (num > 240) {
    start = false;
    end = true;

    back();
    let leave_pos = images.findImage(image, leave);
    click(leave_pos.x, leave_pos.y);
}