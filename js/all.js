$(document).ready(function() {
	$('.bars').click(function(event) {
		event.preventDefault();
		$('.sidebar').toggle();
	});
	$('.icon a').click(function(event) {
		event.preventDefault();
	});
	$('.pc-menu ul a').click(function(event) {
		event.preventDefault();
	});
	$('.sidebar ul a').click(function(event) {
		event.preventDefault();
	});
	$('.commodity-search ul a').click(function(event) {
		event.preventDefault();
	});
	$('.search a').click(function(event) {
		event.preventDefault();
	});
	$('.commodity-box ul a').click(function(event) {
		event.preventDefault();
	});
});