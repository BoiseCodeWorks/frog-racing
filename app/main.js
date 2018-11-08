import RaceController from "./components/raceController.js"
class App {
  constructor() {
    this.controllers = {
      raceController: new RaceController()
    }

  }
}

window.app = new App()