interface Animal {
  name : string,
  locations : string[],
  age : number,
  isRegistered : boolean | null
}

let lion : Animal = {
  name: 'Manfred',
  locations: ['Africa', 'Europa'],
  age: 25,
  isRegistered: false
}