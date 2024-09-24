const Person = require('../classes/Person')
const Plane = require('../classes/Plane')

describe('Plane Class Tests', () => {

    const p1 = new Plane('Rex Rexington', 'NY, New York')

    test('company, origin, and destination are assigned to the correct value', () => {
        expect(p1).toBeInstanceOf(Person)
        expect(p1).toBeInstanceOf(Person)
        expect(p1).toBeInstanceOf(Person)
    })

    test('passengers array initializes as an empty array', () => {
        expect(p1.name).toBe('Rex Rexington')
        expect(p1.destination).toBe('NY, New York')
    })

    test('can add a Person to the passengers array using addPassenger', () => {
        expect(p1.getBags()).toEqual([])
    })


})