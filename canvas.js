
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = document.width;
canvas.height = document.height;
document.body.appendChild(canvas);

var draw = function() {
  for (var i = 0; i < canvas.height / 10; i++) {
    for(var j = 0; j < canvas.width / 10; j++) {
      context.fillStyle = 'rgb(' + ~~(Math.random() * 255) + ',' + ~~(Math.random() * 255) + ',' + ~~(Math.random() * 255) + ')';
      context.fillRect( j * 10, i * 10,10,10);
    }
  }
};

setInterval(draw, 17);
