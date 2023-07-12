const key = "b994eb8f-d0fe-4daf-a14b-5f837da0315e";

const comments = axios.get(
  "https://project-1-api.herokuapp.com/comments?api_key=" + key
);

function loadComments(comments) {
  let commentcontainer = document.querySelector(".comment__container");

  // Creating post__item div
  let commentsection = document.createElement("div");
  commentsection.classList.add("comment__section");

  let commentimage = document.createElement("div");
  commentimage.classList.add("comment__image--grey");

  let newpostsitem = document.createElement("div");
  newpostsitem.classList.add("comment__post");

  let newpostsinfo = document.createElement("div");
  newpostsinfo.classList.add("comment__info");

  let newpostsuname = document.createElement("p");
  newpostsuname.classList.add("comment__user");
  newpostsuname.innerHTML = comments.name;

  let newpostdate = document.createElement("p");
  newpostdate.classList.add("comment__date");
  newpostdate.innerHTML = comments.timestamp;

  let newcomment = document.createElement("p");
  newcomment.classList.add("comment__body");
  newcomment.innerHTML = comments.comment;

  let newline = document.createElement("hr");
  newline.classList.add("comment__divide--solid");

  // Prepend new comment in comment section
  commentcontainer.appendChild(commentsection);
  commentcontainer.appendChild(newline);
  commentsection.prepend(newpostsitem);
  commentsection.prepend(commentimage);
  newpostsitem.appendChild(newpostsinfo);
  newpostsinfo.appendChild(newpostsuname);
  newpostsinfo.appendChild(newpostdate);
  newpostsitem.appendChild(newcomment);
}

const comment = document.getElementById("CommentForm");

// Function creates new post
comment.addEventListener("submit", function (e) {
  e.preventDefault();
  let commentcontainer = document.querySelector(".comment__container");
  let uname = e.target.name.value;
  let commentinput = e.target.comment.value;
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let fulldate = month + "/" + day + "/" + year;
  //   console.log(fulldate);
  //   console.log(commentinput);

  if (uname != "" && commentinput != "") {
    // Creating post__item div
    let commentsection = document.createElement("div");
    commentsection.classList.add("comment__section");

    let newuserimage = document.createElement("img");
    newuserimage.classList.add("comment__image");
    newuserimage.src = "../assets/images/Mohan-muruge.jpg";

    let newpostsitem = document.createElement("div");
    newpostsitem.classList.add("comment__post");

    let newpostsinfo = document.createElement("div");
    newpostsinfo.classList.add("comment__info");

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
    commentcontainer.prepend(newline);
    commentcontainer.prepend(commentsection);
    commentsection.appendChild(newpostsitem);
    commentsection.prepend(newuserimage);
    newpostsitem.appendChild(newpostsinfo);
    newpostsinfo.appendChild(newpostsuname);
    newpostsinfo.appendChild(newpostdate);
    newpostsitem.appendChild(newcomment);

    e.target.name.value = "";
    e.target.comment.value = "";
  } else {
    console.log("Input value");
  }
});

// calls loadComments function for every entry in comments
comments
  .then((result) => {
    result.data.forEach(loadComments);
  })
  .catch((error) => {
    console.log(error);
  });
