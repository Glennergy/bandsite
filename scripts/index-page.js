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
  newpostdate.innerHTML = JSON.parse(comments.timestamp);

  let newcomment = document.createElement("p");
  newcomment.classList.add("comment__body");
  newcomment.innerHTML = comments.comment;

  let newline = document.createElement("hr");
  newline.classList.add("comment__divide--solid");

  // Prepend new comment in comment section
  commentcontainer.prepend(newline);
  commentcontainer.prepend(commentsection);
  commentsection.prepend(newpostsitem);
  commentsection.prepend(commentimage);
  newpostsitem.appendChild(newpostsinfo);
  newpostsinfo.appendChild(newpostsuname);
  newpostsinfo.appendChild(newpostdate);
  newpostsitem.appendChild(newcomment);
}

const commentform = document.getElementById("CommentForm");

// Function creates new post
commentform.addEventListener("submit", function (e) {
  e.preventDefault();
  let uname = e.target.name.value;
  let commentinput = e.target.comment.value;
  //   console.log(fulldate);
  //   console.log(commentinput);

  if (uname != "" && commentinput != "") {
    // Post to API
    axios
      .post("https://project-1-api.herokuapp.com/comments?api_key=" + key, {
        name: uname,
        comment: commentinput,
      })

      .then((result) => {
        loadComments(result.data);
        e.target.name.value = "";
        e.target.comment.value = "";
      });
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
