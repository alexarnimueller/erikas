var raster = new Raster("../images/canape2.png");
raster.scale(0.75); 
raster.rotate(30);
raster.position = view.center;
function onFrame(event) {
    raster.rotate(1);
}                   
