(function() {
  // All code NOT referencing DOM elements can go here
  var title = document.querySelector("[data-js='title']");
  var loginName = document.querySelector("[data-js='login']");
  var ownerName = document.querySelector("[data-js='owner_name']");
  var blogName = document.querySelector("[data-js='blog_name']");
  var location = document.querySelector("[data-js='location']");
  var email = document.querySelector("[data-js='email']");
  var avatarURL = document.querySelector("[data-js='avatar_url']");
  var htmlURL = document.querySelector("[data-js='html_url']");
  var repoList = document.querySelector("[data-js='repo_list']");
  var repoURL = document.querySelector("[data-js='repo_url']");
  var joinDate = document.querySelector("[data-js='join_date']");

  var githubXHR = new XMLHttpRequest();
  var repoXHR = new XMLHttpRequest();

  document.addEventListener("DOMContentLoaded", function(e){
    // ALL DOM RELATED QUERYING GOES HERE

    githubXHR.addEventListener("load", function(e){
      data = JSON.parse(e.target.responseText);
      console.log(data);
      joinDate.innerHTML = "Joined on " + "<time datetime='" + data.created_at + "'></time>";
      loginName.innerHTML = data.login;
      ownerName.innerHTML = data.name;
      blogName.innerHTML = data.blog;
      location.innerHTML = data.location;
      email.innerHTML = "<a href='mailto:" + data.email + "'>" + data.email + "</a>";
      avatarURL.innerHTML = "<img class='profile__avatar' alt='avatar of user' src='" + data.avatar_url + "'/>";
      htmlURL.innerHTML = data.html_url;
      title.innerHTML = data.login + " (" + data.name + ")";
    })

    repoXHR.addEventListener("load", function(e){
      repoData = JSON.parse(e.target.responseText);

      repoData.forEach(function(repoName){
        repoList.innerHTML += "<a href='" + repoName.html_url + "'>" + repoName.name + "</a></br>";
      })
    })
  });

  githubXHR.open("GET", "https://api.github.com/users/paullazo19");
  githubXHR.send();

  repoXHR.open("GET", "https://api.github.com/users/paullazo19/repos");
  repoXHR.send();

}());
