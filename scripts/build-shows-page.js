// Array that stores Show information
let showlist = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco",
  },
];

// variable that holds Show Table and number of rows-1 (for Index)
const showtable = document.querySelector(".shows__table");
let count = 0;

// Function for populating Shows Table
showlist.forEach((showinfo) => {
  let showdate = showinfo.date;
  let showvenue = showinfo.venue;
  let showlocation = showinfo.location;

  let newrow = document.createElement("tr");
  newrow.classList.add("shows__row");
  let newdate = document.createElement("td");
  newdate.innerHTML = showdate;
  let newvenue = document.createElement("td");
  newvenue.innerHTML = showvenue;
  let newlocation = document.createElement("td");
  newlocation.innerHTML = showlocation;
  let newbuttonrow = document.createElement("td");

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

// Function for changing row if buy tickets button is clicked

const buttons = document.querySelectorAll(".shows__button");

function buttonclick(event) {
  event.preventDefault();

  let selectrow = event.target.closest("tr");
  selectrow.classList.add("shows__row--selected");

  //   console.log(event.target.class);
}
