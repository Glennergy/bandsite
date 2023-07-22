const key = "b994eb8f-d0fe-4daf-a14b-5f837da0315e";

const comments = axios.get(
  "https://project-1-api.herokuapp.com/comments?api_key=" + key
);

function loadComments(comments) {
  let commentContainer = document.querySelector(".comment__container");

  // Creating post__item div
  let commentSection = document.createElement("div");
  commentSection.classList.add("comment__section");

  let commentImage = document.createElement("div");
  commentImage.classList.add("comment__image--grey");

  let newPostsItem = document.createElement("div");
  newPostsItem.classList.add("comment__post");

  let newPostsInfo = document.createElement("div");
  newPostsInfo.classList.add("comment__info");

  let newPostsUname = document.createElement("p");
  newPostsUname.classList.add("comment__user");
  newPostsUname.innerHTML = comments.name;

  let newPostDate = document.createElement("p");
  newPostDate.classList.add("comment__date");
  newPostDate.innerHTML = new Date(comments.timestamp).toDateString();

  let newComment = document.createElement("p");
  newComment.classList.add("comment__body");
  newComment.innerHTML = comments.comment;

  let newLine = document.createElement("hr");
  newLine.classList.add("comment__divide--solid");

  let newLike = document.createElement("button");
  newLike.classList.add("comment__like");
  newLike.innerHTML = comments.likes + " Likes";
  newLike.setAttribute("id", comments.id);
  newLike.addEventListener("click", likeComment);

  // Prepend new comment in comment section
  commentContainer.prepend(newLine);
  commentContainer.prepend(commentSection);
  commentSection.prepend(newPostsItem);
  commentSection.prepend(commentImage);
  newPostsItem.appendChild(newPostsInfo);
  newPostsInfo.appendChild(newPostsUname);
  newPostsInfo.appendChild(newPostDate);
  newPostsItem.appendChild(newComment);
  newPostsItem.appendChild(newLike);
}

const commentForm = document.getElementById("CommentForm");

// Function creates new post
commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let uName = e.target.name.value;
  let commentInput = e.target.comment.value;

  if (uName != "" && commentInput != "") {
    // Post to API
    axios
      .post("https://project-1-api.herokuapp.com/comments?api_key=" + key, {
        name: uName,
        comment: commentInput,
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

// Function adds like to comment
function likeComment() {
  axios
    .put(
      "https://project-1-api.herokuapp.com/comments/" +
        this.id +
        "/like?api_key=" +
        key
    )

    // updates information in like button
    .then((result) => {
      this.innerHTML = result.data.likes + " Likes";
    });
}

// calls loadComments function for every entry in comments
comments
  .then((result) => {
    result.data.forEach(loadComments);
  })
  .catch((error) => {
    console.log(error);
  });
