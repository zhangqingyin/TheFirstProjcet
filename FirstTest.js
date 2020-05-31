function Thirdtest() {
    document.getElementById("demo2").innerHTML="hhhhhhhhhhhh";

}
var btn = document.querySelector("#First_test");
btn.onclick = function () {
    location.href="http://www.baidu.com";

}
//初始化，一个对象，对象去找querySelector中所选择的ID名字
var btn2 =document.querySelector("#Second_test");
//点击试一试按钮，调用功能function（）；
btn2.onclick = function () {
    document.getElementById("demo1").innerHTML = "hhhhhh";
    document.getElementById("demo").innerHTML = Date();

}

// function firstTry() {
//     document.getElementById("demo").innerHTML = "hhhhhhhh!"
//     document.getElementById("demo1").innerHTML = Date();
//
// }