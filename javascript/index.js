function updateTime() {
  // Nairobi, Kenya
  let nairobiElement = document.querySelector("#city-nairobi");
  if (nairobiElement) {
    let nairobiDateElement = nairobiElement.querySelector(".date");
    let nairobiTimeElement = nairobiElement.querySelector(".time");
    let nairobiTime = moment().tz("Africa/Nairobi");
    nairobiDateElement.innerHTML = nairobiTime.format("MMMM Do YYYY");
    nairobiTimeElement.innerHTML = nairobiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Lagos, Nigeria
  let lagosElement = document.querySelector("#city-lagos");
  if (lagosElement) {
    let lagosDateElement = lagosElement.querySelector(".date");
    let lagosTimeElement = lagosElement.querySelector(".time");
    let lagosTime = moment().tz("Africa/Lagos");
    lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
    lagosTimeElement.innerHTML = lagosTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // Lagos, Accra
  let accraElement = document.querySelector("#city-accra");
  if (accraElement) {
    let accraDateElement = accraElement.querySelector(".date");
    let accraTimeElement = accraElement.querySelector(".time");
    let accraTime = moment().tz("Africa/Accra");
    accraDateElement.innerHTML = accraTime.format("MMMM Do YYYY");
    accraTimeElement.innerHTML = accraTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
