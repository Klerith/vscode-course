//*
//*    Objetivo:
//*        Ver rápidamente las definiciones de la clase
//*        También funciona con archivos HTML y otros
//*
//*    Tips:
//*        ⌘ P => luego escribir la @
//*        ⇧ ⌘ O
//*
//*        Ctrl + P => luego escribir la @
//*        Ctrl + Shift = O
//*
//*        Se pueden agrupar si después de la @, se escriben :
//*


class SuperHero {

    name   : string = '';
    power  : string = '';
    age    : number = 0;
    hobbies: string[] = [];

    // tslint:disable-next-line:variable-name
    private _secretName: string = '';

    constructor() { }

    usePower() {}

    fly() {}

    run() {}

    walk() {}

    revive() {}

    // Sólo para demostración

    name2: string = '';

    power2: string = '';

    age2: number = 0;

    hobbies2: string[] = [];

    set secretName(value: string) {
        this._secretName = value;
    }

    get secretName() {
        return this._secretName;
    }
}
