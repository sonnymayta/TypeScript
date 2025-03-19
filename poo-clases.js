"use strict";
class Movie {
    constructor(name, realease, cost, isInTheathers) {
        this.name = name,
            this.actors = [],
            this.release = realease,
            this.cost = cost,
            this.isInTheaters = isInTheathers;
    }
    info() {
        console.log(`Name: ${this.name} Release: ${this.cost}`);
    }
}
let movie = new Movie('Invinsible', '2022/5/1', 100000, false);
movie.info();
