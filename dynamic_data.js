export class Skill {
    #name;
    #profeciency;
    #experience;

    constructor(name, proficiency, experience) {
        this.#name = name;
        this.#profeciency = proficiency;
        this.#experience = experience;
    }
}

export const skills = [];
