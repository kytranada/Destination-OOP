const Person = require('../classes/Person')

class Bag extends Person{
#owner = null
    constructor(weight, id ){
        super()
        this.weight = weight
        this.id = id
    }

     getOwner() {
        return this.#owner
    }

    assignOwner(person) {
        if (person instanceof Person){
        this.#owner = person
    } else {
        throw Error('Owner must be an instance of Person')
    }
}
}


module.exports = Bag;