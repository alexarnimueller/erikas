
var raster1 = new Raster('images/canape5.png');
raster1.scale(0.6);
raster1.position = new Point(view.center.x * 1.25, view.center.y * 0.33);

var raster2 = new Raster('images/canape2.png');
raster2.scale(0.6);
raster2.position = new Point(view.center.x * 0.75, view.center.y * 0.33);

var raster3 = new Raster('images/canape3.png');
raster3.scale(0.6);
raster3.position = new Point(view.center.x * 0.75, view.center.y * 1.66);

var raster4 = new Raster('images/canape4.png');
raster4.scale(0.6);
raster4.position = new Point(view.center.x * 1.25, view.center.y * 1.66);

function onFrame(event) {
    raster1.rotate(1);
    raster2.rotate(1);
    raster3.rotate(1);
    raster4.rotate(1);
}

function onResize(event) {
    raster1.position = new Point(view.center.x * 1.5, view.center.y * 0.33);
    raster2.position = new Point(view.center.x * 0.5, view.center.y * 0.33);
    raster3.position = new Point(view.center.x * 0.5, view.center.y * 1.66);
    raster4.position = new Point(view.center.x * 1.5, view.center.y * 1.66);
}
