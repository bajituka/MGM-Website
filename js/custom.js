$(document).ready(function() {
	
	$(".nav a").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 400);
	});
	$(".btn").click(function(){
		var releaseCount = $("#counter").html();
		$("#counter").html(+releaseCount+1);
		if (releaseCount == 1) {
			$("#satisfactionLow").toggleClass("hidden show", 500).toggleClass("hidden", 2000)}
			else if (releaseCount == 2) {
				$("#satisfactionMedium").toggleClass("hidden show").toggleClass("hidden", 2000)}
			else if (releaseCount == 3) {
				$("#satisfactionHigh").toggleClass("hidden show", 500)}
	});
});
