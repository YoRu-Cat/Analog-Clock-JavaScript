//create number hours

//create bar seconds

/* -------------------------------------------------------
60 seconds = 360deg so 1 sec = 360 / 60 = 6deg
60 minutes = 360deg so 1 min = 360 / 60 = 6deg
12 hours = 360deg so 1 hrs = 360 / 12 = 30deg

1 hrs = 30deg that means 60 min = 30deg so 1 min = 30 / 60 = 0.5 or 1/2 deg

so formula for hours is (hours * 30 + minutes / 2)
------------------------------------------------------- */

//call getCurrentTime function on page load

//call getCurrentTime to set clock hands every second

const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');
const numberElement = [];
const barElement = [];
//Create number hours

for (let i = 1; i <= 12; i++) {
  numberElement.push(
    `<span style="--index:${i}"><p>${i}</p></span>`
  );
}
numberHours.insertAdjacentHTML("afterbegin",numberElement.join(""));

// Create bar seconds
for (let i = 1; i <= 60; i++) {
  barElement.push(
    `<span style="--index:${i}"><p></p></span>`
  );
}
barSeconds.insertAdjacentHTML("afterbegin",barElement.join(""));