function Movie (name, type, rating) {
    this.name = name
    this.type = type
    this.rating = rating
}

let movie1 = new Movie('Young Guns', 'Western', 'R')
let movie2 = new Movie('The Dark Knight', 'Action', 'pg-13')
let movie3 = new Movie('Talladega Nights', 'Comedy', 'pg-13')

console.log(movie1)
console.log(movie2)
console.log(movie3)



function Song (name, type, artist) {
    this.name = name
    this.type = type
    this.rating = artist
}

let song1 = new Song('housefire', 'country', 'Turnpike Traboudours')
let song2 = new Song('Your Eye', 'EDM', 'Kaivon')
let song3 = new Song('18 Libras', 'Corridos', 'Los Hijos de Garcia')

console.log(song1)
console.log(song2)
console.log(song3)



function Food (name, type, method) {
    this.name = name
    this.type = type
    this.rating = method
}

let food1 = new Food('wings', 'American', 'fried')
let food2 = new Food('tacos', 'Mexican', 'grilled')
let food3 = new Food('Orange Chicken', 'Asian', 'Wok')

console.log(food1)
console.log(food2)
console.log(food3)