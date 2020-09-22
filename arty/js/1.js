
var heart = new Path('M514.69629,624.70313c-7.10205,-27.02441 -17.2373,-52.39453 -30.40576,-76.10059c-13.17383,-23.70703 -38.65137,-60.52246 -76.44434,-110.45801c-27.71631,-36.64355 -44.78174,-59.89355 -51.19189,-69.74414c-10.5376,-16.02979 -18.15527,-30.74951 -22.84717,-44.14893c-4.69727,-13.39893 -7.04297,-26.97021 -7.04297,-40.71289c0,-25.42432 8.47119,-46.72559 25.42383,-63.90381c16.94775,-17.17871 37.90527,-25.76758 62.87354,-25.76758c25.19287,0 47.06885,8.93262 65.62158,26.79834c13.96826,13.28662 25.30615,33.10059 34.01318,59.4375c7.55859,-25.88037 18.20898,-45.57666 31.95215,-59.09424c19.00879,-18.32178 40.99707,-27.48535 65.96484,-27.48535c24.7373,0 45.69531,8.53564 62.87305,25.5957c17.17871,17.06592 25.76855,37.39551 25.76855,60.98389c0,20.61377 -5.04102,42.08691 -15.11719,64.41895c-10.08203,22.33203 -29.54687,51.59521 -58.40723,87.78271c-37.56738,47.41211 -64.93457,86.35352 -82.11328,116.8125c-13.51758,24.0498 -23.82422,49.24902 -30.9209,75.58594z');
heart.center = view.center;
heart.style = {
    fillColor: 'red',
    strokeColor: 'white',
    strokeWidth: 5
};

var textErika = new PointText({
	point: new Point(view.center.x, view.center.y * 0.9),
	justification: 'center',
	fontSize: 50,
	fontWeight: 'bold',
	content: 'ERIKAS',
	fillColor: 'white'
});

var raster = new Raster('images/logo.png');
raster.scale(0.5);
raster.position = new Point(view.center.x, view.center.y * 0.9);
raster.remove();

function onMouseDown(event) {
    project.activeLayer.addChild(raster);
    heart.fillColor = 'transparent';
    heart.strokeColor = 'red';
    textErika.fillColor = 'transparent';
}

function onMouseUp(event) {
    raster.remove();
    heart.fillColor = 'red';
    heart.strokeColor = 'white';
    textErika.fillColor = 'white';
}

function onResize(event) {
	heart.fitBounds(view.bounds);
	heart.scale(0.9);
	textErika.position = new Point(view.center.x, view.center.y * 0.9);
	raster.position = new Point(view.center.x, view.center.y * 0.9);
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-104378372-2', 'auto');
ga('send', 'pageview');
