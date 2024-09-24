const Person = require('../../classes/Person')
const Bag = require()

describe('Person Class Tests', () => {

    const p1 = new Person('Rex Rexington', 'NY, New York')

    test('Creates instance of Person class', () => {
        expect(p1).toBeInstanceOf(Person)
    })

    test('Name and Destination have been assigned correctly', () => {
        expect(p1.name).toBe('Rex Rexington')
        expect(p1.destination).toBe('NY, New York')
    })

    test('Bags initializes empty array', () => {
        expect(p1.getBags()).toEqual([])
    })

    test('addBag adds a bag to the bags array', () => {
        p1.addBag('Venci')
        expect(p1.getBags().length).toEqual(1)
    })
})