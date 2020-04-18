

	$.ajax("blog_posts/"+3+".txt").done(displayText).fail(showError);




function displayText(data){
    $("#latest_post").append(data);
}
function showError(data){
   var mess = "An error occured!";
   $("#latest_post").text(mess);
}