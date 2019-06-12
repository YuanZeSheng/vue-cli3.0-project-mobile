/**
 * *@2018-11-16
 * *@author mikeYuan 
 * *@webpack 3.x配置文件
 */

fnResize();
window.onresize = function () {
  fnResize();
}
function fnResize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
  if (deviceWidth >= 750) {
    deviceWidth = 750;
  }
  if (deviceWidth <= 320) {
    deviceWidth = 320;
  }
  document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
}