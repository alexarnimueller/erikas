var nodes = [];
var edges = new Group();
if (window.innerWidth > window.innerHeight) {
    var bigdist = window.innerWidth;
} else {
    var bigdist = window.innerHeight;
};
var numPoints = (window.innerWidth * window.innerHeight) / 20000;
var radiusGlob = 4;
var distGlob = bigdist / 7;

var textErika = new PointText({
	point: new Point(view.center.x, view.center.y * 0.9),
	justification: 'center',
	fontSize: 50,
	fontWeight: 'bold',
	content: 'ERIKAS',
	fillColor: new Color(10., 100., 100.)
});

for (var p = 0; p < numPoints; p++) {
    var position = Point.random() * view.size;
    nodes.push(new Path.Circle({
        center: position,
        radius: radiusGlob,
        destination: Point.random() * view.size,
        fillColor: 'white'
    }));
}


function drawEdges(event) {
    for (var index = 0; index < nodes.length; index++) {
        var node1 = nodes[index];
        for (var index2 = nodes.length - 1; index2 > index; index2 += -1) {
            var node2 = nodes[index2];
            var dist = node1.position - node2.position;
            if (dist.length < distGlob) {
                var edge = new Path.Line(new Point(node1.position), new Point(node2.position));
                edge.strokeColor = new Color(0.31, 0.74, 0.9, (distGlob / dist.length));
                edge.strokeWidth = 2;
                edges.addChild(edge);
            }
        }
    }
}

function moveNodes(event) {
    for (var n = 0; n < nodes.length; n++) {
        var vector = nodes[n].destination - nodes[n].position;
        nodes[n].position += vector / 1000;
    }
}

function onFrame(event) {
    moveNodes();
    edges.removeChildren();
    drawEdges();
	console.log(view.size);
}

function onMouseDown(event) {
    for (var n = 0, l = nodes.length; n < l; n++) {
        nodes[n].destination = Point.random() * view.size;
    }
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-104378372-2', 'auto');
ga('send', 'pageview');
