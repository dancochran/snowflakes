function randInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randColor(colors) {
    var color;
    var rand = Math.random();
    for (var i=0; i < colors.length; i++) {
        if (rand <= i / colors.length + 1 / colors.length) {
            return colors[i];
        }
    }
    return colors([colors.length - 1]);
}


function rad(deg) {
    return deg * Math.PI / 180;
}


function deg(rad) {
    return rad * 180 / Math.PI;
}
