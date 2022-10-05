("use strict");

// DOM
const header = document.querySelector(".header");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const dateToLaunch = new Date("Dec 27, 2022 22:22:22").getTime();

// countdown
const countdown = setInterval(() => {
  const now = new Date().getTime();

  const timeLeft = dateToLaunch - now;

  days.textContent = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  hours.textContent = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  minutes.textContent = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  seconds.textContent = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if (timeLeft < 0) {
    header.innerHTML = "countdown is over!";
  }
}, 1000);
