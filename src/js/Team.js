export default class Team {
  constructor() {
    this.members = [];
  }

  add(character) {
    this.members.push(character);
  }

  * [Symbol.iterator]() {
    for (const character of this.members) {
      yield character;
    }
  }
}
