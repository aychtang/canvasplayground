
(function() {
	console.log('The console method is size(padding, size); If the second parameter isn\'t passed in, it will assume the size of the first.')
	var canvas = document.createElement("canvas");
	var context = canvas.getContext("2d");
	canvas.width = document.width;
	canvas.height = document.height;
	document.body.appendChild(canvas);

	var square = {
		pad: 10,
		box: 10,

		getPadding : function() {
			return square.pad;
		},

		getSize: function() {
			return square.box;
		}
	};

	window.size = function(padding, size) {
		if (padding === 0) return 'Please don\'t do that';
		context.clearRect(0, 0, canvas.width, canvas.height);
		square.box = size || padding;
		square.pad = padding;
	};

	var draw = function() {
	  for (var i = 0; i < canvas.height / square.getPadding(); i++) {
	    for (var j = 0; j < canvas.width / square.getPadding(); j++) {
	      context.fillStyle = 'rgb(' + ~~(Math.random() * 255) + ',' + ~~(Math.random() * 255) + ',' + ~~(Math.random() * 255) + ')';
	      context.fillRect(j * square.getPadding(), i * square.getPadding(), square.getSize(), square.getSize());
	    }
	  }
	};

	setInterval(draw, 17);

}())
