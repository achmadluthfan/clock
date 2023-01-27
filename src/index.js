// catch the HTML elements
const secondElement = document.querySelector(".second");
const minuteElement = document.querySelector(".minute");
const hourElement = document.querySelector(".hour");

const clockDigital = document.querySelectorAll('.clock-digital > span');

// function get time now
function getTime() {
  let date = new Date();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  return [hours, minute, second];
}

setInterval(() => {
  let time = getTime();

  time[1] < 10 ? clockDigital[2].innerHTML = '0' + time[1] : clockDigital[2].innerHTML = time[1];
  time[2] < 10 ? clockDigital[4].innerHTML = '0' + time[2] : clockDigital[4].innerHTML = time[2]

  clockDigital[0].innerHTML = time[0];  

  let hour = time[0];
  let minute = time[1];
  let second = time[2];

  secondElement.style.transform = `rotate(${second * 6 - 90}deg)`;
  minuteElement.style.transform = `rotate(${minute * 6 - 90}deg)`;
  hourStyle = hour * 30 - 90;
  hourElement.style.transform = `rotate(${hourStyle}deg)`;

  if (minute > 6 && minute <= 12) {
    hourElement.style.transform = `rotate(${hourStyle}deg)`;
  } else if (minute > 12 && minute <= 24) {
    hourElement.style.transform = `rotate(${hourStyle + 12}deg)`;
  } else if (minute > 24 && minute <= 36) {
    hourElement.style.transform = `rotate(${hourStyle + 18}deg)`;
  } else if (minute > 36 && minute <= 48) {
    hourElement.style.transform = `rotate(${hourStyle + 24}deg)`;
  } else if (minute > 48 && minute <= 60) {
    hourElement.style.transform = `rotate(${hourStyle + 30}deg)`;
  }
}, 1000);
