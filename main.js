import "./nasa.css";
import { picture } from "./nasa.js";
import { loadHomePage } from "./home.js";

const isHomePage = window.location.pathname.endsWith("/");

console.log(window.location.pathname,isHomePage)

if (isHomePage) {
    loadHomePage();
}
else{
  document.querySelector("#home").innerHTML = `
    <div class="container">
    <div class="container__header">
        <h1 class="container__title"> Astronomy Picture of the Day</h1>
        <p class="container__text">Choose a date to reveal a picture with a fun explanation!</p>
      <input type="date" id="date-input" class="container__input">
      <button id="picture-btn" class="container__button">Display Picture</button>
      </div>
      <div id="apod-container" class="container__apod">
      </div>
      
      </div>
    </div>
  `
  const pictureBtn = document.getElementById('picture-btn')
  pictureBtn.addEventListener('click',async()=>{
    await picture()
  })
}


