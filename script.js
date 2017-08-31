function querySites(query) {
	$.ajax({
		type: "GET",
		url: "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search="+query,
		success: function(results) {
			for (var i = 0; i < results[1].length; i++) {
				$("#results").append('<a href="'+results[3][i]+'"><div class="result">'
				+'<h3>'+results[1][i]+'</h3>'
				+'<p>'+results[2][i]+'</p>'
				+'</div></a>');
			}
		}
	});
}

$( document ).ready(function() {
	var query = "Main Page";
	$("#results").empty();
	
	$("#query").keyup(function() {
		query = $( this ).val();
		$("#results").empty();
		if (query !== "") {
			querySites(query);
		}
	});
	
	$("#search-btn").click(function() {
		query = $( "#query" ).val();
		$("#results").empty();
		if (query !== "") {
			querySites(query);
		}
	});
	
});
