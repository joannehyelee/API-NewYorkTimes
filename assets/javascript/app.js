$(document).ready(function(){

    $("#clear-button").on("click", function(){
        $("form").trigger("reset");
    });

    $("#search-button").on("click", function(event){

        event.preventDefault();

        var APIKey = "3cc43660d00548d99f08fcf543e88dde";
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey;

        console.log('hi');

        // https://api.nytimes.com/svc/search/v2/articlesearch.json?q=obama&api-key=3cc43660d00548d99f08fcf543e88dde
    
        // Make AJAX call to New York Times API
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(res){
            console.log(res.response.docs.length);
            var results = res.response.docs;

            for (var i = 0; i < results.length; i++) {
                console.log(results[i]);

                var articleDiv = $("<div>");

                // Article Title
                var articleTitle = $("<h4>").html(i+1 + ") " + results[i].headline.main);
                articleDiv.append(articleTitle);

                // Author
                var author = $("<p>").text(results[i].byline.original);
                articleDiv.append(author);

                // Date Published
                var datePublished = $("<p>").text(results[i].pub_date);
                articleDiv.append(datePublished);

                // Article URL
                var articleURL = $("<p>").html('<a href="' + results[i].web_url + '">' + results[i].web_url + '</a>');
                articleDiv.append(articleURL);

                $("#top-articles").append(articleDiv);
            }

        });


    });


});

