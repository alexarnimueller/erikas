
var raster1 = new Raster('images/canape5.png');
raster1.width = 400;
raster1.height = 400;
raster1.position = new Point(view.center.x, view.center.y * 0.7);

function onFrame(event) {
    raster1.rotate(1);
}

function onResize(event) {
    raster1.position = new Point(view.center.x, view.center.y * 0.7);
}
