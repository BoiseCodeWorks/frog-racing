import User from "../models/user.js";
import Frog from "../models/frog.js";
let _racers = []
let _user = new User()
export default class RaceService {
  constructor() {
    console.log("race service working")
  }
  addFrog(frogData) {
    let frog = new Frog(frogData)
    _racers.push(frog)
  }
  getRacers() {
    return JSON.parse(JSON.stringify(_racers))
  }
  getBalance() {
    return _user.accountBalance
  }
  bet(index) {
    if (_user.accountBalance >= 10 && _racers[index]) {
      _racers[index].bet += 10
      _user.accountBalance -= 10
    }
  }
}