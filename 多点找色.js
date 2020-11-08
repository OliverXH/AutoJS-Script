let src = "/storage/emulated/0/DCIM/Screenshots/Screenshot_2020-05-01-10-32-28-87.png";
let imgFile = images.read(src);

let p = images.findMultiColors(imgFile, "#5edf80", [[-69, 75, "#63e17f"], [0, 143, "#5ed"], [0, 93, "#ff3333"]]);
