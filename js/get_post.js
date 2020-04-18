for (i = 1; i <= 3; i++) {
  get_num_post(i);


}


function get_num_post(x) {

  $.ajax("blog_posts/" + x + ".txt").done(displayText).fail(showError);

}


function displayText(data) {
  $("#blog_post").append(data);
  $("#blog_post").append("<br/><br/><br/>");
}

function showError(data) {
  var mess = "An error occured!";
  $("#blog_post").text(mess);
}
