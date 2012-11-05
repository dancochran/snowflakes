var canvas, ctx, canvasHeight, canvasWidth;

$(document).ready(function () {

    canvas = $('#canvas').get(0);
    ctx = canvas.getContext('2d');
    canvasHeight = canvas.height;
    canvasWidth = canvas.width;

    ctx.fillStyle = "#0011ff";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    var sf = new Snowflake();
    sf.draw();
});
