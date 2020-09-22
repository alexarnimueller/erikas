function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

var textErika = new PointText({
	point: view.center,
	justification: 'center',
	fontSize: 50,
	fontWeight: 'bold',
	content: 'ERIKAS',
	fillColor: 'white'
});

// start point = center
var path = new Path(new Point(view.center));
path.strokeColor = 'white';

function onFrame(event) {
    path.add(new Point.random() * view.size);
    sleep(100);
}

function onResize(event) {
    textErika.point = view.center;
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-104378372-2', 'auto');
ga('send', 'pageview');
