const Person = require('../../classes/Person')
const Bag = require('../../classes/Bag')

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
        const bag = new Bag (45, 7451)
        p1.addBag(bag)
        expect(p1.getBags()).toContain(bag)
    })

})