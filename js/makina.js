import {jokalari} from "./jokalari.js";

class Makina extends jokalari {
    constructor(name) {
        super(name,Math.floor(Math.random()*100,130)); // call the super class constructor and pass in the name parameter
    }
}
export {makina}
