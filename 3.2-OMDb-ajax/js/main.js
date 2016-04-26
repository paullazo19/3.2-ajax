(function() {
  // All code NOT referencing DOM elements can go here
  var omdbXHR = new XMLHttpRequest();

  document.addEventListener("DOMContentLoaded", function(e){
    var moviesElement = document.querySelector("[data-js='movies']");

    // ALL DOM RELATED QUERYING GOES HERE
    omdbXHR.addEventListener("load", function(e){
      searchData = JSON.parse(e.target.responseText);
      searchDataResultsArray = searchData.Search;

      // For Each - Array reference dot forEach then callback with
      // Argument of reference to current context
      searchDataResultsArray.forEach(function(result){
        var resultArticleHTML = "";
        // Start article tag
        resultArticleHTML += "<article class='movie'>"
        // Add title in the form of a heading
        resultArticleHTML += "<h2 class='movie__title'>" + result.Title + "</h2>"
        // Add image (poster)
        resultArticleHTML += "<img src='" + result.Poster + "'/>"
        resultArticleHTML += "</article>"

        moviesElement.innerHTML += resultArticleHTML;
        // End article tag
      });
    });
  });

  omdbXHR.open("GET", "http://www.omdbapi.com/?s=avengers")
  omdbXHR.send()

}());
