const Airport = require('../../classes/Airport')
const Plane = require('../../classes/Plane')

describe('Airport Class Tests', () => {

    const airport = new Airport('John F Kennedy', 'JFK')
    const plane = new Plane('AirBus','NYC','Miami' )

    test('name and planes are assigned to the correct value', () => {
        expect(airport.name).toBe('John F Kennedy')
    })

    test('airportCode is the correct value', () => {
        expect(airport.airportCode).toBe('JFK')
    })

    test('planes array initializes as an empty array', () => {
        expect(airport.getPlanes()).toEqual([])
    })

    test('add Plane objects to the planes array using addPlane', () => {
        airport.addPlane(plane)
        expect(airport.getPlanes()).toContain(plane)
    })
})