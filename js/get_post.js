
function FileHelper()

{
    FileHelper.readStringFromFileAtPath = function(pathOfFileToReadFrom)
    {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
		var el = document.getElementById("blog_post");
        el.innerHTML = request.responseText;
		print(request.responseText);
    }
}


FileHelper.readStringFromFileAtPath ( "../blog_posts/test_post.txt" );
