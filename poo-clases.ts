class Movie {
  name : string;
  actors : string[];
  release : string;
  cost : number | null;
  isInTheaters : boolean 

  constructor(name : string, realease : string, cost : number, isInTheathers : boolean) {
    this.name = name,
    this.actors = [],
    this.release = realease,
    this.cost = cost,
    this.isInTheaters = isInTheathers
  }

  info() {
    console.log(`Name: ${this.name} Release: ${this.cost}`);
  }
}

let movie = new Movie('Invinsible', '2022/5/1', 100000, false);
movie.info();