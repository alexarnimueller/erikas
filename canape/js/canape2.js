var imageArray = ['canape1.png', 'canape2.png', 'canape3.png', 'canape4.png', 'canape5.png'];
var randomNumber = Math.floor(Math.random() * imageArray.length);

var raster1 = new Raster('images/' + imageArray[randomNumber]);
raster1.width = 400;
raster1.height = 400;
raster1.position = new Point(view.center.x, view.center.y * 0.7);

function onFrame(event) {
    raster1.rotate(1);
}

function onResize(event) {
    raster1.position = new Point(view.center.x, view.center.y * 0.7);
}
