const distanceFactorMiles = [267, 290, 345, 456, 459]

const distanceFactorKm = distanceFactorMiles.map(distance => Math.random(distance * 1.2354))

console.log(distanceFactorKm)

