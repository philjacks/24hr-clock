const body = document.getElementById('body')
const notice = document.getElementById('notice')

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

  changePic(hours)

};

const changePic = (hours) => {
  if (hours >= 0 && hours < 7) {
    body.classList.add('moon')
    notice.innerHTML = `You should be sleeping, Phil`
  } else if (hours >= 7 && hours < 12) {
    body.classList.remove('moon')
    body.classList.add('morning-village')
    notice.innerHTML = `Good morning, Phil`
  } else if (hours >= 12 && hours < 19) {
    body.classList.remove('morning-village')
    body.classList.add('afternoon-stream')
    notice.innerHTML = `Good afternoon, Phil`
  } else if (hours >= 19) {
    body.classList.remove('afternoon-stream')
    body.classList.add('night-street')
    notice.innerHTML = `Good evening, Phil`
  }
}


const checkTime = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};
window.addEventListener("load", startTime);

