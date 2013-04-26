
(function() {
	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");
	canvas.width = document.width;
	canvas.height = document.height;
	document.body.appendChild(canvas);

	window.square = {
		box: 10,

		size : function(size) {
			context.clearRect(0, 0, canvas.width, canvas.height);
			square.box = size;
		},

		get: function() {
			return square.box;
		}
	};

	var draw = function() {
	  for (var i = 0; i < canvas.height / square.get(); i++) {
	    for (var j = 0; j < canvas.width / square.get(); j++) {
	      context.fillStyle = 'rgb(' + ~~(Math.random() * 255) + ',' + ~~(Math.random() * 255) + ',' + ~~(Math.random() * 255) + ')';
	      context.fillRect( j * square.get(), i * square.get(), square.get(), square.get());
	    }
	  }
	};

	setInterval(draw, 17);

}())
