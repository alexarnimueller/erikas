$(document).ready(function(){

    setTimeout(function () {
        RunNetworkAnim();
    }, 500);

    var resizeTimeout;
    window.onresize = function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(RunNetworkAnim, 500);
    };

    var currentGlobalID = -1;

    function RunNetworkAnim() {
        var currentScopeID = ++currentGlobalID;
        var canvas = document.querySelector("#artcanvas");
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        var ctx = canvas.getContext("2d");

        var MAIN_COLOR = "#2084a3",
            SEC_COLOR = "#0d556b",
            BORDER_COLOR = "#0d556b",
            NUM_BALLS = 60, // higher is less
            BALL_RAD = 9,
            BALL_RAD_MIN = 3,
            SPEED = 0.2,
            GLOB_ALPHA = 0.7,
            MOUSE_RAD = 100,
            CONN_DIST = 100;

        var TAU = 2 * Math.PI;

        function loop() {
            if (currentGlobalID === currentScopeID) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                update();
                draw();
                requestAnimationFrame(loop);
            }
        }

        function Ball(Xstart, Ystart, VXstart, VYstart) {
            this.x = Xstart || Math.random() * canvas.width;
            this.y = Ystart || Math.random() * canvas.height;
            this.vel = {
                x: VXstart || Math.random() * SPEED * 2 - SPEED,
                y: VYstart || Math.random() * SPEED * 2 - SPEED
            };
            this.update = function (canvas) {
                if (this.x > canvas.width + 50 || this.x < -50) {
                    this.vel.x = -this.vel.x;
                }
                if (this.y > canvas.height + 50 || this.y < -50) {
                    this.vel.y = -this.vel.y;
                }
                this.x += this.vel.x;
                this.y += this.vel.y;
            };
            this.draw = function (ctx) {
                ctx.beginPath();
                var distM = distMouse(this);
                if (distM > MOUSE_RAD) {
                    ctx.fillStyle = MAIN_COLOR;
                    ctx.strokeStyle = BORDER_COLOR;
                    ctx.globalAlpha = GLOB_ALPHA;
                    ctx.arc((0.5 + this.x) | 0, (0.5 + this.y) | 0, BALL_RAD_MIN, 0, TAU, false);
                } else {
                    ctx.fillStyle = SEC_COLOR;
                    ctx.strokeStyle = BORDER_COLOR;
                    ctx.globalAlpha = 1;
                    var BALL_RAD_DYN = (distM > CONN_DIST ? BALL_RAD_MIN : BALL_RAD * (1 - distM / CONN_DIST));
                    ctx.arc((0.5 + this.x) | 0, (0.5 + this.y) | 0, BALL_RAD_DYN, 0, TAU, false);
                    ctx.stroke();
                }
                ctx.fill();
            }
        }

        var balls = [];
        for (var i = 0; i < canvas.width * canvas.height / (NUM_BALLS * NUM_BALLS); i++) {
            balls.push(new Ball(Math.random() * canvas.width, Math.random() * canvas.height));
        }

        var lastTime = Date.now();

        function update() {
            var diff = Date.now() - lastTime;
            for (var frame = 0; frame * 16.6667 < diff; frame++) {
                for (var index = 0; index < balls.length; index++) {
                    balls[index].update(canvas);
                }
            }
            lastTime = Date.now();
        }

        var mouseX = -1e9, mouseY = -1e9;
        document.addEventListener('mousemove', function (event) {
            mouseX = event.clientX;
            mouseY = event.clientY;
        });

        function distMouse(ball) {
            return Math.hypot(ball.x - mouseX, ball.y - mouseY);
        }

        function draw() {
            for (var index = 0; index < balls.length; index++) {
                var ball = balls[index];
                ctx.beginPath();
                for (var index2 = balls.length - 1; index2 > index; index2 += -1) {
                    var ball2 = balls[index2];
                    var dist = Math.hypot(ball.x - ball2.x, ball.y - ball2.y);
                    if (dist < CONN_DIST) {
                        var distM = distMouse(ball2);
                        if (distM > MOUSE_RAD) {
                            ctx.strokeStyle = MAIN_COLOR;
                            ctx.globalAlpha = ctx.globalAlpha = 1 - (dist > CONN_DIST ? .8 : dist / CONN_DIST);
                        } else {
                            ctx.strokeStyle = SEC_COLOR;
                            ctx.globalAlpha = 1;
                        }
                        ctx.moveTo((0.5 + ball.x) | 0, (0.5 + ball.y) | 0);
                        ctx.lineTo((0.5 + ball2.x) | 0, (0.5 + ball2.y) | 0);
                    }
                }
                ctx.stroke();
                ball.draw(ctx, canvas);
            }
        }
        loop();
    }
    RunNetworkAnim();
});
