const Bag = require('../../classes/Bag')
const Person = require('../../classes/Person')


describe('Bag Class Tests', () => {

    const b1 = new Bag (25, 265)

    test('Has Weight', () => {
        expect(b1.weight).toBe(25)
    })

    test('Has ID', () => {
        expect(b1.id).toBe(265)
    })

    test('Owner is a private property and null', () => {
        expect(b1.getOwner()).toBe(null)
    })

    test('Updates owner with Person instance', () => {
        const b2 = new Person ('John Willis')
        expect(b2).toBeInstanceOf(Person)
    })

})