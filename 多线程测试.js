



if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}

let image = captureScreen();

let a = true;

function Baidu_OCR(imgFile) {
    let access_token = http.get("https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=YIKKfQbdpYRRYtqqTPnZ5bCE&client_secret=hBxFiPhOCn6G9GH0sHoL0kTwfrCtndDj").body.json().access_token;
    let url = "https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic" + "?access_token=" + access_token;
    let imag64 = images.toBase64(imgFile);
    let res = http.post(url, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, image: imag64, image_type: "BASE64", language_type: "JAP" });
    let str = JSON.parse(res.body.string()).words_result.map(val => val.words).join('\n');
    return str;
}

threads.start(function () {
    //在新线程执行的代码
    // image = images.clip(image, 1587, 21, 307, 90);

    let result = Baidu_OCR(image);

    setTimeout(() => {
        
        log("子线程", result);

    }, 3000);
});

setInterval(() => {
    log("主线程", a);
}, 1000);

