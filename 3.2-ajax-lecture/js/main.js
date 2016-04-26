(function(){
  // creating a new _instance_ of the
  // XML Http Request to use for later
  // methods
  var reposXHR = new XMLHttpRequest();
  var githubProfileXHR = new XMLHttpRequest();
  // Remember square brackets `[]` == "attribute selectors"
  var repoNavElement = document.querySelector("[data-js='repo__navigation']");
  var repoOwnerElement = document.querySelector("[data-js='repo__owner']");

  // Listening for the _load_ event to occur
  // with a callback in the form of an
  // anonymous function
  reposXHR.addEventListener("load", function(e){
    // _e_ here is equal to the object data sent
    // through the "load" event
    var data = JSON.parse(e.target.responseText);
    data.forEach(function(repo){
      repoNavElement.innerHTML += "<a class='repo__navItem' href='" + repo.html_url + "'>" + repo.name + "</a>"
    })
  });

  githubProfileXHR.addEventListener("load", function(e){
    // Have reference to DOM element
    // Update either text content or inner html with new val
    var profileData = JSON.parse(e.target.responseText);
    repoOwnerElement.textContent += profileData.name + "'s ";
  });

  // First argument is the _type_ of request (GET, POST)
  // Second argument was the URL of service to
  // get info from
  reposXHR.open('GET', 'https://api.github.com/users/ernestodls/repos');
  reposXHR.send();

  githubProfileXHR.open('GET', "https://api.github.com/users/ernestodls");
  githubProfileXHR.send();

})();
