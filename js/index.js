$("#profileDiv").hover(displayText, hideText);
$("#portfolioDiv").hover(displayText, hideText);
$("#resumeDiv").hover(displayText, hideText);
$("#contactDiv").hover(displayText, hideText);

function displayText(){
	var textChild = $(this).children().attr("id");
	$("#"+textChild).css('visibility','visible')
	// $(".actualText").css('opacity','100 !important')
}

function hideText(){
	var textChild = $(this).children().attr("id");
	$("#"+textChild).css('visibility','hidden')
}
