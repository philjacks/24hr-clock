const startTime = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString("default", {
    month: "short",
  });
  const date = today.getDate();

  const fullDate = `${date} ${month} ${year}`;

  let hours = today.getHours();
  let mins = today.getMinutes();
  let secs = today.getSeconds();

  hours = checkTime(hours);
  mins = checkTime(mins);
  secs = checkTime(secs);

  document.getElementById("date").innerHTML = fullDate;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = mins;
  document.getElementById("secs").innerHTML = secs;
  setTimeout(startTime, 1000);

  if (hours < 12) {
    document.getElementById("am-pm").innerHTML = "am";
  } else {
    document.getElementById("am-pm").innerHTML = "pm";
  }
};

const checkTime = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};

window.addEventListener("load", startTime);