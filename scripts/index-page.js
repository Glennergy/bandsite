const comment = document.getElementById("CommentForm");

// Function creates new post
comment.addEventListener("submit", function (e) {
  e.preventDefault();
  let commentsection = document.querySelector(".comment__section");
  let uname = e.target.name.value;
  let commentinput = e.target.comment.value;
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let fulldate = month + "/" + day + "/" + year;
  //   console.log(fulldate);
  //   console.log(commentinput);

  // Creating post__item div
  let newpostsitem = document.createElement("div");
  newpostsitem.classList.add("comment__post");

  let newpostsinfo = document.createElement("div");
  newpostsitem.classList.add("comment__info");

  let newpostsuname = document.createElement("p");
  newpostsuname.classList.add("comment__user");
  newpostsuname.innerHTML = uname;

  let newpostdate = document.createElement("p");
  newpostdate.classList.add("comment__date");
  newpostdate.innerHTML = fulldate;

  let newcomment = document.createElement("p");
  newcomment.classList.add("comment__body");
  newcomment.innerHTML = commentinput;

  let newline = document.createElement("hr");
  newline.classList.add("comment__divide--solid");

  // Prepend new comment in comment section

  commentsection.prepend(newpostsitem);
  newpostsitem.appendChild(newpostsinfo);
  newpostsinfo.appendChild(newpostsuname);
  newpostsinfo.appendChild(newpostdate);
  newpostsitem.appendChild(newcomment);
  newpostsitem.appendChild(newline);
});
