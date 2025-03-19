class Lottery<T> {
  private ticket? : T;

  constructor(private name : string) {
    
  }

  setTicket(ticket : T) {
    this.ticket = ticket;
  }

  getTicket() {
    return this.ticket;
  }

  public result() : string {
    return `For: ${this.name} the ticket is ${this.ticket}`;
  }
}

let lottery = new Lottery<number>('Jhon');
lottery.setTicket(7);
console.log(lottery.result());

