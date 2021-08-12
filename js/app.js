// ELEMENT SELECTORS
const body = document.getElementById("body");
const form = document.querySelector('form');
const nameChange = document.getElementById('name-change')
const notice = document.getElementById("notice");
const tempRefresh = document.getElementById("temp-refresh");


// PERSONALISE NAME 
let userName = nameChange.value
userName = nameChange.value

if (userName.length === 0) {
  userName = `friend`
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  saveName()

  userName = nameChange.value
  if (userName.length === 0) {
    userName = `friend`
  } else {
    userName = nameChange.value
  }

  nameChange.value = ``
})

// SAVE & RETRIEVE NAME TO LOCAL STORAGE
const saveName = () => {
  localStorage.setItem('name', JSON.stringify(userName))
}

const getSavedName = () => {
  const savedName = localStorage.getItem('name')

  try {
    return savedName ? JSON.parse(savedName) : void (0)
  } catch {
    return void (0)
  }
}

window.addEventListener('load', getSavedName)

// GET TIME & DATE
const startTime = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString("default", {
    month: "short"
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

  changePic(hours);
};

// CHANGE BACKGROUND IMAGE AT SET TIMES
const changePic = (hours) => {
  if (hours >= 0 && hours < 7) {
    body.classList.add("moon");
    notice.innerHTML = `You should be sleeping, ${userName}`;
  } else if (hours >= 7 && hours < 12) {
    body.classList.remove("moon");
    body.classList.add("morning-village");
    notice.innerHTML = `Good morning, ${userName}`;
  } else if (hours >= 12 && hours < 19) {
    body.classList.remove("morning-village");
    body.classList.add("afternoon-stream");
    notice.innerHTML = `Good afternoon, ${userName}`;
  } else if (hours >= 19) {
    body.classList.remove("afternoon-stream");
    body.classList.add("night-street");
    notice.innerHTML = `Good evening, ${userName}`;
  }
};

// ADD ZERO TO HOUR DISPLAY WHEN NEEDED
const checkTime = (i) => {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
};
window.addEventListener("load", startTime);

// RETURN TEMPERATURE FROM THIRD PARTY API
// const getTemp = async () => {
//   const response = await fetch(
//     `https://dark-sky.p.rapidapi.com/53.483959,-2.244644?lang=en&units=auto`,
//     {
//       method: "GET",
//       headers: {
//         "x-rapidapi-key": "154d28321dmshef816df30582daep125366jsne132ed97e91c",
//         "x-rapidapi-host": "dark-sky.p.rapidapi.com"
//       }
//     }
//   );

//   if (response.status === 200) {
//     const data = await response.json();

//     return data.currently.temperature;
//   } else {
//     throw new Error(`Unable to get temperature`);
//   }
// };

// const displayTemp = async () => {
//   const temp = await getTemp();

//   document.getElementById("temp-num").innerHTML = `${Math.round(
//     temp.toString()
//   )}`;
// };

// displayTemp();

// UPDATE TEMPERATURE WHEN REFRESH BUTTON IS CLICKED
tempRefresh.addEventListener("click", () => {
  // displayTemp();
  tempRefresh.classList.toggle("spin");
});
