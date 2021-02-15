let hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
let dateElement = document.getElementById("currentDate");
let momentCurrentDate = moment().format("dddd, MMM Do YYYY");
let currentTime = moment().format("hh");
dateElement.innerHTML = momentCurrentDate;

for (let i = 0; i < hours.length; i++) {
  let divEl = document.createElement("div");
  divEl.className = "input-group mb-2";
  let prependGroupEl = document.createElement("div");
  prependGroupEl.className = "input-group-prepend";
  let prependSpanEl = document.createElement("span");
  prependSpanEl.className = "input-group-text time-box";
  prependSpanEl.textContent = hours[i];
  prependGroupEl.append(prependSpanEl);
  let inputEl = document.createElement("input");
  inputEl.className = "form-control enter-text";
  inputEl.value = localStorage.getItem(hours[i]) ?? "";
  if (i < currentTime) {
    inputEl.classList.add("past");
  } else if (i > currentTime) {
    inputEl.classList.add("future");
  } else {
    inputEl.classList.add("present");
  }
  let appendGroupEl = document.createElement("div");
  appendGroupEl.className = "input-group-append";
  let appendButtonEl = document.createElement("button");
  appendButtonEl.className = "btn btn-primary save-btn";
  appendButtonEl.addEventListener("click", function () {
    localStorage.setItem(hours[i], inputEl.value);
  });
  let appendButtonIconEl = document.createElement("i");
  appendButtonIconEl.className = "far fa-calendar-check";
  appendButtonEl.append(appendButtonIconEl);
  appendGroupEl.append(appendButtonEl);
  divEl.append(prependGroupEl, inputEl, appendGroupEl);
  document.getElementById("timeBlocks").append(divEl);
}

$(document).ready(function () {
  // function that changes the color of the schedule (past/grey, current/red, future/green)
  function changeColor() {
    // pass in the time-box
    // use method moment to grab current hours, create a for loop (.each method)
    // moment().hours()
  }
});
