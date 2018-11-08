import RaceService from "./raceService.js";

let _raceService = new RaceService()

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
  }
}