// Array that stores Show information

const key = "b994eb8f-d0fe-4daf-a14b-5f837da0315e";

const showlist = axios.get(
  "https://project-1-api.herokuapp.com/showdates?api_key=" + key
);

// variable that holds Show Table and number of rows-1 (for Index)
const showtable = document.querySelector(".shows__table");
let count = 0;

// Function for populating Shows Table

showlist
  .then((result) => {
    result.data.forEach((showinfo) => {
      let showdate = showinfo.date;
      let showvenue = showinfo.place;
      let showlocation = showinfo.location;

      let newrow = document.createElement("tr");
      newrow.classList.add("shows__row");
      let newdate = document.createElement("td");
      newdate.innerHTML = showdate;
      newdate.classList.add("shows__date");
      let newvenue = document.createElement("td");
      newvenue.innerHTML = showvenue;
      newvenue.classList.add("shows__venue");
      let newlocation = document.createElement("td");
      newlocation.innerHTML = showlocation;
      newlocation.classList.add("shows__location");
      let newbuttonrow = document.createElement("td");
      newbuttonrow.classList.add("shows__button-row");

      let newbutton = document.createElement("button");
      newbutton.classList.add("shows__button");
      newbutton.innerHTML = "Buy Tickets";
      newbutton.addEventListener("click", buttonclick);

      showtable.appendChild(newrow);
      newrow.appendChild(newdate);
      newrow.appendChild(newvenue);
      newrow.appendChild(newlocation);
      newrow.appendChild(newbuttonrow);
      newbuttonrow.appendChild(newbutton);
    });
  })

  .catch((error) => {
    console.log(error);
  });

// Function for changing row if buy tickets button is clicked

const buttons = document.querySelectorAll(".shows__button");

function buttonclick(event) {
  event.preventDefault();
  // checks if selected class has already been added to a row
  let check = document.querySelectorAll(".shows__row--selected").length > 0;

  // if selected class is present in table, removes class and add class to new row
  if (check == true) {
    let closesttr = event.target.closest("tr");
    if (closesttr.classList.contains("shows__row--selected") == true) {
      closesttr.classList.remove("shows__row--selected");
    } else {
      let removeselect = document.querySelectorAll(".shows__row--selected");
      removeselect.forEach((show) => {
        show.classList.remove("shows__row--selected");
      });
      let selectrow = event.target.closest("tr");
      selectrow.classList.add("shows__row--selected");
    }
  } else {
    let selectrow = event.target.closest("tr");
    selectrow.classList.add("shows__row--selected");
  }
  //   console.log(event.target.class);
}
