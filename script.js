$(document).ready(function(){
	var $starwriting = $("#starwriting");	
	var hash=window.location.hash;
	if (hash!="") {
		$starwriting.val(hash.substring(1)); //first character is #
	}	
	$starwriting.bind('input propertychange', function () {
		
		var text=encodeURIComponent($starwriting.val());
		console.log(text);
		window.location.hash=text;
		
		
		
	});

});