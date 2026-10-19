// varijabla je prostor u radnoj memoriji
// varijabla ima svoj naziv
// u JS postoje tri vrste varijabli

// 1. vrsta const

const ime = 'Pero' //prompt('Unesi ime')
// simuliram da je korisnik uvijek unio Pero

console.log(ime)

console.log('ime', typeof ime, ime) // ime string <ono što korisnik unese>

console.log(`
    Dobar dan ${ime} !!!!!!!
    `)

// tip podatka number
const unosBroj = '2026' // string

// želim prebaciti (konvertirati) u broj
const broj = Number(unosBroj)

console.log('unosBroj', typeof unosBroj, unosBroj)
console.log('broj', typeof broj, broj)

const pi = parseFloat('3.14') // točka je zbog amerikanaca

console.log('pi', typeof pi, pi)

// tip podatka je boolean

const lv = true // lv -> skraćeno od logickaVrijednost

console.log('lv', typeof lv, lv)

// pi = 3.1426 Uncaught TypeError: Assignment to constant variable.

// 2. način deklariranja varijable (prava varijabla)

let x = 7
console.log('x', typeof x, x)
x = 8
console.log('x', typeof x, x)
x = 'Osijek' // mogu promjeniti tip podatka
console.log('x', typeof x, x)

// let x = 7 // ne mogu ga redeklarirati

const vb = 1263761236512341263763n // bigint

console.log('vb', typeof vb, vb)

// const se ne može deklarirati bez vrijednosti
// const i; Uncaught SyntaxError: Missing initializer in const declaration


let varijabla;

console.log('varijabla', typeof varijabla, varijabla) // i tip i vrijednost su undefined

varijabla = 7

console.log('varijabla', typeof varijabla, varijabla)

// 3. STARI način deklariranja varijable - nećemo koristiti
var t = 5
t = 'Osijek' // dozvoljava promjenu tipa
var t = true // dozvoljava redeklaraciju varijable


// tip podatka object
// JSON -> JavaScript Object Notation
const osoba = {
    id: 1,
    ime: 'Pero',
    visina: 182.5,
    znaProgramirati: true
}

console.log('osoba', typeof osoba /*, osoba*/) // komentar u kodu
console.table(osoba)


// tip podatka Array
// niz, polje, a JS to zove object

const niz = [2, 3, 4, 3, 4, 3] // Alt Gr + F

console.log('niz', typeof niz)
console.table(niz)


const json = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]

console.table(json)

// tip podatka function

// stari način definiranja funckije
function pozdrav(){
    console.log('Pozdrav iz stare funkcije')
}

console.log('pozdrav', typeof pozdrav)


// novi način
const pozdravi = () => console.log('Pozdrav iz nove funkcije')

console.log('pozdravi', typeof pozdravi)

// izvođenje funkcija
pozdrav()
pozdravi()

// tip podatka Symbol

const id1 = Symbol('edunova') // edunova je opis ali je vrijednost jedinstvena i nije vidljiva
const id2 = Symbol('edunova')

// = je operator dodjeljivanja

// operator uspoređivanja vrijednosti

// == provjerava po vrijednosti
// === provjerava po tipu i po vrijenosti

console.log('7' == 7) // true
console.log('7' === 7) //false
console.log(7 === 7) // true

console.log(id1 == id2) //false
console.log(id1 === id2) // false