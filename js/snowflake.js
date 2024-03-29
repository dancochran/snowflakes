var INCREMENT_MIN = 3;
var INCREMENT_MAX = 9;
var ARMLENGTH_MIN = 10;
var ARMLENGTH_MAX = 60;
var LINEWIDTH = 2;

function Snowflake() {
    var color = 'rgb(200, 200, 200)';

    ctx.strokeStyle = color;
    ctx.lineWidth = LINEWIDTH;
}

Snowflake.prototype = {
    draw: function () {
        //ctx.strokeStyle = "#fff";
        //ctx.lineWidth = 1;

        var cx = canvasWidth / 2;
        var cy = canvasHeight / 2;
        var cw = canvasWidth * .9;
        var ch = canvasHeight * .9;
        var delta;
        if (cw > ch) {
            cw = ch;
            delta = ch - cy;
        }
        else {
            ch = cw;
            delta = cw - cx;
        }

        var dx = Math.cos(Math.PI / 4) * delta;
        var dy = Math.sin(Math.PI / 4) * delta;
        // draw the spokes
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx, cy - delta);
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx, cy + delta);
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx - delta, cy);
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + delta, cy);
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx - dx, cy - dy);
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx - dx, cy + dy);
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + dx, cy + dy);
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + dx, cy - dy);


        ctx.stroke();

        // now work out the arms
        var increment = randInt(INCREMENT_MIN, INCREMENT_MAX);
        var armLength = randInt(ARMLENGTH_MIN, ARMLENGTH_MAX);
        var armDir = randInt(1, 2); // 1 = armsOut, 2 = armsIn
        var lx, ly;
        var active_cx, active_cy;

        while (increment <= delta) {
            // draw a chevron <increment> away from the center
            dx = Math.cos(Math.PI / 4) * increment;
            dy = Math.sin(Math.PI / 4) * increment;
            lx = Math.cos(Math.PI / 4) * armLength;
            ly = Math.sin(Math.PI / 4) * armLength;

            // vertical spoke up
            active_cx = cx;
            active_cy = cy - increment;
            ctx.moveTo(active_cx, active_cy);
            if (armDir == 1) {
                ctx.lineTo(active_cx - lx, active_cy - ly);
                ctx.moveTo(active_cx, active_cy);
                ctx.lineTo(active_cx + lx, active_cy - ly);
            }
            else {
                ctx.lineTo(active_cx - lx, active_cy + ly);
                ctx.moveTo(active_cx, active_cy);
                ctx.lineTo(active_cx + lx, active_cy + ly);
            }

            // -pi/4
            active_cx = cx - dx;
            active_cy = cy - dy;
            ctx.moveTo(active_cx, active_cy);
            if (armDir == 1) {
                ctx.lineTo(active_cx, active_cy - armLength);
                ctx.moveTo(active_cx, active_cy);
                ctx.lineTo(active_cx - armLength, active_cy);
            }
            else {
                ctx.lineTo(active_cx + armLength, active_cy);
                ctx.moveTo(active_cx, active_cy);
                ctx.lineTo(active_cx, active_cy + armLength);
            }

            // horizontal spoke left
            active_cx = cx - increment;
            active_cy = cy;
            ctx.moveTo(active_cx, active_cy);
            if (armDir == 1) {
                ctx.lineTo(active_cx - lx, active_cy - ly);
                ctx.moveTo(active_cx, active_cy);
                ctx.lineTo(active_cx - lx, active_cy + ly);
            }
            else {
                ctx.lineTo(active_cx + lx, active_cy - ly);
                ctx.moveTo(active_cx, active_cy);
                ctx.lineTo(active_cx + lx, active_cy + ly);
            }

            // -3pi/4
            active_cx = cx - dx;
            active_cy = cy + dy;
            ctx.moveTo(active_cx, active_cy);
            if (armDir == 1) {
                ctx.lineTo(active_cx - armLength, active_cy);
                ctx.moveTo(active_cx, active_cy);
                ctx.lineTo(active_cx, active_cy + armLength);
            }
            else {
                ctx.lineTo(active_cx, active_cy - armLength);
                ctx.moveTo(active_cx, active_cy);
                ctx.lineTo(active_cx + armLength, active_cy);
            }

            // vertical spoke down
            active_cx = cx;
            active_cy = cy + increment;
            ctx.moveTo(active_cx, active_cy);
            if (armDir == 1) {
                ctx.lineTo(active_cx - lx, active_cy + ly);
                ctx.moveTo(active_cx, active_cy);
                ctx.lineTo(active_cx + lx, active_cy + ly);
            }
            else {
                ctx.lineTo(active_cx - lx, active_cy - ly);
                ctx.moveTo(active_cx, active_cy);
                ctx.lineTo(active_cx + lx, active_cy - ly);
            }

            // 3pi/4
            active_cx = cx + dx;
            active_cy = cy + dy;
            ctx.moveTo(active_cx, active_cy);
            if (armDir == 1) {
                ctx.lineTo(active_cx + armLength, active_cy);
                ctx.moveTo(active_cx, active_cy);
                ctx.lineTo(active_cx, active_cy + armLength);
            }
            else {
                ctx.lineTo(active_cx, active_cy - armLength);
                ctx.moveTo(active_cx, active_cy);
                ctx.lineTo(active_cx - armLength, active_cy);
            }

            // horizontal spoke right
            active_cx = cx + increment;
            active_cy = cy;
            ctx.moveTo(active_cx, active_cy);
            if (armDir == 1) {
                ctx.lineTo(active_cx + lx, active_cy - ly);
                ctx.moveTo(active_cx, active_cy);
                ctx.lineTo(active_cx + lx, active_cy + ly);
            }
            else {
                ctx.lineTo(active_cx - lx, active_cy - ly);
                ctx.moveTo(active_cx, active_cy);
                ctx.lineTo(active_cx - lx, active_cy + ly);
            }

            // pi/4
            active_cx = cx + dx;
            active_cy = cy - dy;
            ctx.moveTo(active_cx, active_cy);
            if (armDir == 1) {
                ctx.lineTo(active_cx + armLength, active_cy);
                ctx.moveTo(active_cx, active_cy);
                ctx.lineTo(active_cx, active_cy - armLength);
            }
            else {
                ctx.lineTo(active_cx, active_cy + armLength);
                ctx.moveTo(active_cx, active_cy);
                ctx.lineTo(active_cx - armLength, active_cy);
            }

            // TODO - armLength max increases as you go out
            increment += randInt(INCREMENT_MIN, INCREMENT_MAX);
            armLength = randInt(ARMLENGTH_MIN, ARMLENGTH_MAX);
            //armLength = randInt(ARMLENGTH_MIN, ARMLENGTH_MAX) + (20 * increment / delta);
            armDir = randInt(1, 2);
        }

        ctx.stroke();
    }

};


