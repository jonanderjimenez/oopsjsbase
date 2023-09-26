import { jokalari } from "./jokalari"

export {estralurtar}

class estralurtar extends jokalari {
    constructor(name) {
        super(izena(name),Math.floor(Math.random*85),150)
    }
    
    //Method
    izena(name){
    return name.split("").reverse().join("")
}
}
