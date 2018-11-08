//private
import RaceService from "./raceService.js";

let _raceService = new RaceService()

function drawRacers() {
  let template = ''
  let frogs = _raceService.getRacers()
  frogs.forEach(frog => {
    template += `
  <div class="racer">
  <img src="${frog.img}"/>
  <h5>${frog.name}</h5>
  <button>Bet: ${frog.bet}</button>
  </div>
  `
  });
  document.getElementById('frog').innerHTML = template
}
//public
export default class RaceController {
  constructor() {
    console.log("race controller working")
  }
  addFrog(event) {
    event.preventDefault();
    let form = event.target
    let frogData = {
      name: form.name.value,
      img: form.img.value
    }
    _raceService.addFrog(frogData)
    drawRacers()
  }

}