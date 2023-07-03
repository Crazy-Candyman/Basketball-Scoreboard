let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let homeBtnOne = document.getElementById("home-btn-one");
let homeBtnTwo = document.getElementById("home-btn-two");
let homeBtnThree = document.getElementById("home-btn-three");
let guestBtnOne = document.getElementById("guest-btn-one");
let guestBtnTwo = document.getElementById("guest-btn-two");
let guestBtnThree = document.getElementById("guest-btn-three");
let newGameBtn = document.getElementById("newGame-btn");
let homeCount = 0;
let guestCount = 0;

homeBtnOne.addEventListener("click", function () {
  homeCount += 1;
  render(scoreHome, homeCount);
});

homeBtnTwo.addEventListener("click", function () {
  homeCount += 2;
  render(scoreHome, homeCount);
});
homeBtnThree.addEventListener("click", function () {
  homeCount += 3;
  render(scoreHome, homeCount);
});

guestBtnOne.addEventListener("click", function () {
  guestCount += 1;
  render(scoreGuest, guestCount);
});

guestBtnTwo.addEventListener("click", function () {
  guestCount += 2;
  render(scoreGuest, guestCount);
});
guestBtnThree.addEventListener("click", function () {
  guestCount += 3;
  render(scoreGuest, guestCount);
});

function render(where, what) {
  where.textContent = what;
}

newGameBtn.addEventListener("click", function () {
  homeCount = 0;
  guestCount = 0;
  render(scoreHome, homeCount);
  render(scoreGuest, guestCount);
});

// End of File
