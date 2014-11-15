$(document).ready(function() {
	var active = true;
	$('#statusButton').click(function(logo) {
	    var currentStatus = document.getElementById('#You');
		if (active) {
			var newStatusRed = "<img src='img/red_circle.png' class = 'logo' id = 'You'>";		
			$('#You').remove();
			$('#yourStatus').append(newStatusRed);
			active = !(active);
		}
		else {
			var newStatusGreen = "<img src='img/green_circle.png' class = 'logo' id = 'You'>";
			$('#You').remove();
			$('#yourStatus').append(newStatusGreen);
			active = !(active)
		}
	});
	$("#exitButton").click(function() {
		myWindow = window.self;
        myWindow.alert("Are you sure?");
	});
	//if currentStatus
});