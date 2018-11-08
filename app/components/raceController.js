//private
import RaceService from "./raceService.js";

let _raceService = new RaceService()

function drawRacers() {
  let template = ''
  let frogs = _raceService.getRacers()
  frogs.forEach((frog, index) => {
    template += `
  <div class="col racer">
  <img src="${frog.img}"/>
  <h5>${frog.name}</h5>
  <button class="btn btn-secondary" onclick="app.controllers.raceController.bet(${index})">Bet: ${frog.bet}</button>
  </div>
  `
  });
  document.getElementById('frog').innerHTML = template
}
function drawMoney() {
  let balance = _raceService.getBalance()
  document.getElementById("balance").innerText = balance
}


//public
export default class RaceController {
  constructor() {
    drawMoney()
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
    form.reset()
  }
  bet(index) {
    _raceService.bet(index)
    drawMoney()
    drawRacers()
  }

}