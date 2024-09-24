const Person = require('../../classes/Person')
const Plane = require('../../classes/Plane')

describe('Plane Class Tests', () => {

    const pl1 = new Plane('JetBlue', 'New York', 'Miami')

    test('company, origin, and destination are assigned to the correct value', () => {
        expect(pl1.company).toBe('JetBlue')
        expect(pl1.origin).toBe('New York')
        expect(pl1.destination).toBe('Miami')
    })

    test('passengers array initializes as an empty array', () => {
        expect(pl1.getPassengers()).toEqual([])
    })

    test('can add a Person to the passengers array using addPassenger', () => {
        const per = new Person('Rex Rexington', 'Miami')
        pl1.addPassenger(per)
        expect(pl1.getPassengers()).toContain(per)
    })


})