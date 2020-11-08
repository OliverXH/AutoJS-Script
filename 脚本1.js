log('here');
app.launch("com.oppo.usercenter");
sleep(5000);
click("签到");
sleep(500);
click("签到");
sleep(3000);

app.launch("com.oppo.store");
sleep(5000);
click("我的");

id("text_tab").className("android.widget.TextView").text("我的").findOne().click();
log(text("我的").findOne());
sleep(500);
text("签到").findOne().click();
sleep(3000);
