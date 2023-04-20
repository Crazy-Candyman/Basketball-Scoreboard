# Basketball Scoreboard 🏀

## About the Project

This web app is a simple basketball scoreboard that keeps track of the games score. For a freethrow you tap **+1**, for a lay-up or shot from inside the paint, tap **+2**. For a distant three-point shot tap the **+3** and the scoreboard will increment the count appropriately.

## Screenshot

![](/screenshots/Basketball_Scoreboard.png)

## Links

Live URL: [Preview Site](https://crazy-candyman.github.io/Basketball-Scoreboard/)

## Built With

    - HTML
    - CSS
    - JavaScript

**JavaScript code from the solution**

```javascript
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
```

## Atrribution

This is a solo project by Scrimba that challenges a students skills upon completing the Learn JavaScript Course.

Challenged by Scrimba <br/>
Created by [@Crazy-Candyman](https://github.com/Crazy-Candyman)
