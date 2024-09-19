import "./nasa.css";
import {picture } from "./nasa.js"

document.querySelector("#app").innerHTML = `
  <div class="container">
    <h1 class="container__h1"> Astronomy Picture of the Day</h1>
    <input type="date" id="date-input">
    <button id="picture-btn">Display Picture</button>
    <div id="apod-container"></div>
  </div>
`;
const pictureBtn = document.getElementById('picture-btn')
pictureBtn.addEventListener('click',async()=>{
  await picture()
})
