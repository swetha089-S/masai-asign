let time = Number(prompt("Enter countdown time in seconds:"));

const intervalId = setInterval(() => {
  if (time > 0) {
    console.log(time);
    time--;
  } else {
    console.log("Countdown Complete!");
    clearInterval(intervalId);
  }
}, 1000);

document.addEventListener("keydown", (e) => {
  if (e.key === "s") {
    clearInterval(intervalId);
    console.log("Countdown stopped by user");
  }
});
