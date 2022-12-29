function updateTime() {
  // Nairobi, Kenya
  let nairobiElement = document.querySelector("#city-nairobi");
  let nairobiDateElement = nairobiElement.querySelector(".date");
  let nairobiTimeElement = nairobiElement.querySelector(".time");
  let nairobiTime = moment().tz("Africa/Nairobi");
  nairobiDateElement.innerHTML = nairobiTime.format("MMMM Do YYYY");
  nairobiTimeElement.innerHTML = nairobiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Lagos, Nigeria
  let lagosElement = document.querySelector("#city-lagos");
  let lagosDateElement = lagosElement.querySelector(".date");
  let lagosTimeElement = lagosElement.querySelector(".time");
  let lagosTime = moment().tz("Africa/Lagos");
  lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
  lagosTimeElement.innerHTML = lagosTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
