import "./nasa.css";
import {picture } from "./nasa.js"

document.querySelector("#app").innerHTML = `
  <div class="container">
    <h1 class="container__title"> Astronomy Picture of the Day</h1>
    <input type="date" id="date-input" class="container__input">
    <button id="picture-btn" class="container__button">Display Picture</button>
    <div id="apod-container" class="container__apod"></div>
  </div>
`;
const pictureBtn = document.getElementById('picture-btn')
pictureBtn.addEventListener('click',async()=>{
  await picture()
})
