class C {
    static create(){
        return new C();
    }
    constructor() {
        console.log('Constructor');
    }
}

let c = C.create(); // Logs Constructor

c.create(); // Throws TypeError

