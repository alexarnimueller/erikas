// select random javascript to execute
var scriptNum = Math.floor(Math.random() * 4);
// var scriptNum = 2;
document.write('<scr'+'ipt type="text/paperscript" src="./js/' + scriptNum + '.js" canvas="artcanvas"></scr'+'ipt>');
