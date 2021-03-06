$(document).ready(function() {
	var $starwriting = $("#starwriting");	
	var hash = window.location.hash;

	/* If a hash is present, add the message to the textarea */
	if ( hash != "" ) {
		//first character of hash is '#'
		var decoded = deobfuscate(hash.substring(1));
		$starwriting.val(decoded);
	}

	/* Update hash when message is changed */
	// JQuery's .change() doesn't do the trick for <textarea>
	// http://stackoverflow.com/questions/11338592/how-can-i-bind-to-the-change-event-of-a-textarea-in-jquery
	$starwriting.bind('input change', function() {
		var coded = obfuscate($(this).val());
		window.location.hash = coded;
	});
	
	$('#download').click(function() {
		$(this).hide();
		download();	
		$(this).show();
	});
});

/* Obfuscate messages, so they're not immediately readable */
function obfuscate(message) {
	return btoa(encodeURI(message));
}

function deobfuscate(message) {
	return decodeURI(atob(message));
}

function download() {
	html2canvas(document.body).then(function(canvas) {
		canvas.toBlob(function(blob) {
			saveAs(blob, "es_steht_in_den_sternen.png");
		});
	});
}
