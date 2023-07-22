// Array that stores Show information

const key = "b994eb8f-d0fe-4daf-a14b-5f837da0315e";

const showList = axios.get(
  "https://project-1-api.herokuapp.com/showdates?api_key=" + key
);

// variable that holds Show Table and number of rows-1 (for Index)
const showTable = document.querySelector(".shows__table");
let count = 0;

// Function for populating Shows Table

showList
  // If promise is true, will populate table with all show information
  .then((result) => {
    result.data.forEach((showInfo) => {
      let showDate = new Date(showInfo.date).toDateString();
      let showVenue = showInfo.place;
      let showLocation = showInfo.location;

      let newRow = document.createElement("tr");
      newRow.classList.add("shows__row");
      let newDate = document.createElement("td");
      newDate.innerHTML = showDate;
      newDate.classList.add("shows__date");
      let newVenue = document.createElement("td");
      newVenue.innerHTML = showVenue;
      newVenue.classList.add("shows__venue");
      let newLocation = document.createElement("td");
      newLocation.innerHTML = showLocation;
      newLocation.classList.add("shows__location");
      let newButtonRow = document.createElement("td");
      newButtonRow.classList.add("shows__button-row");

      let newButton = document.createElement("button");
      newButton.classList.add("shows__button");
      newButton.innerHTML = "Buy Tickets";
      newButton.addEventListener("click", buttonClick);

      showTable.appendChild(newRow);
      newRow.appendChild(newDate);
      newRow.appendChild(newVenue);
      newRow.appendChild(newLocation);
      newRow.appendChild(newButtonRow);
      newButtonRow.appendChild(newButton);
    });
  })

  .catch((error) => {
    console.log(error);
  });

// Function for changing row if buy tickets button is clicked

const buttons = document.querySelectorAll(".shows__button");

function buttonClick(event) {
  event.preventDefault();
  // checks if selected class has already been added to a row
  let check = document.querySelectorAll(".shows__row--selected").length > 0;

  // if selected class is present in table, removes class and add class to new row
  if (check == true) {
    let closestRow = event.target.closest("tr");
    if (closestRow.classList.contains("shows__row--selected") == true) {
      closestRow.classList.remove("shows__row--selected");
    } else {
      let removeSelect = document.querySelectorAll(".shows__row--selected");
      removeSelect.forEach((show) => {
        show.classList.remove("shows__row--selected");
      });
      let selectRow = event.target.closest("tr");
      selectRow.classList.add("shows__row--selected");
    }
  } else {
    let selectRow = event.target.closest("tr");
    selectRow.classList.add("shows__row--selected");
  }
  //   console.log(event.target.class);
}
