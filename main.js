import "./nasa.css";
import {picture } from "./nasa.js"

document.querySelector('#home')

document.querySelector("#app").innerHTML = `
  <div class="container">
  <div class="container__header">
      <h1 class="container__title"> Astronomy Picture of the Day</h1>
      <p class="container__text">Choose a date to reveal a picture with a fun explanation!</p>
    <input type="date" id="date-input" class="container__input">
    <button id="picture-btn" class="container__button">Display Picture</button>
    </div>
    <div id="apod-container" class="container__apod"></div>
  </div>
`;
const pictureBtn = document.getElementById('picture-btn')
pictureBtn.addEventListener('click',async()=>{
  await picture()
})
