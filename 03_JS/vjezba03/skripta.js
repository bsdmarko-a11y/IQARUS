// operatori

// vjezba02 = == ===

// aritmetički operatori
// + - * /

// NAŠ PRVI PROGRAM
// ULAZ
const a = 7 //parseInt(prompt('Unesi prvi broj'))
const b = 3 //parseInt(prompt('Unesi drugi broj'))

// ALGORITAM

let rez = a + b


// IZLAZ
console.log(a, '+', b, '=', rez)

console.log(`${a} + ${b} = ${rez}`) // ovo je bolje


// modulo operator (%)
// ostatak nakon cjelobrojnog djeljenja

// 9 % 2 = 1
// 4 * 2 = 8
// 9 - 8 = 1 <- ovo je rezultat

console.log(9 % 2) // 1
console.log(8 % 2) // 0

// modulo se koristi najčešće za identifikaciju parnih/neparnih brojeva


// operatori dodjele =

// rez ima vrijednost 10
rez = rez + 2

console.log(rez) // 12

// kraće
rez += 2

console.log(rez) // 14

// isto vrijedi i za -=, *= i /=

// Vjerovali ili ne!!!!
// Najčešća operacija u programiranju je uvećenje varijable za 1

let i = 0 // i od increment

i = i + 1 // 1

i += 1 // 2

// najkraći način ali ovdje nepotpuno iskorišten
i++ // 3    --> ovo ne bi trebalo nikada pisati samo u redu

console.log(i)


// operatori increment (++) i decrement (--)
// oni imaju dvojaku ulogu
// prva uloga je korištenje a druga je uvećanje/umanjenje

i = 0

// prvo koristi pa uvećaj
console.log(i++) // 0    -> nakon ove linije i=1

// prvo uvećaj pa koristi
console.log(++i) // 2

// ista pravila vrijede i za --

// zna biti na razgovorima za posao

i = 2
let j = 1
i = j++ - i   // 1 - 2 = -1, i = -1, j = 2
j += --i - ++j  // -2 - 3 = -5, 3 + -5 = -2,  i = -2   j=-3
console.log(i - j) // -2 - -3   1

// operatori uspoređivanja == ===
// != različito po vrijednosti
// !== po vrijednosti i tipu

console.log('5' != 4) // true
console.log(5 != 5) // false
console.log('5' !== 5) //true

const uvjet = '5' !== '5'

console.log('uvjet', typeof uvjet, uvjet) // false

// <, >, <= i >=

const godine = 18

console.log(godine > 18) //false
console.log(godine >= 18) // true

// logički operatori
// AND, OR i NOT (I, ILI i NE)
// AND: &&, OR: || (Alt Gr + W) i NOT: !      --> U JS se ne smije koristiti & za logičko i jer je & binarno množenje


const punoljetan = godine >= 18 // true

console.log(uvjet && punoljetan) // false

// vrijede pravila booleovih tablica
// https://introcs.cs.princeton.edu/java/71boolean/images/truth-table.png

console.log(uvjet || punoljetan) //true

console.log(uvjet, !uvjet) // false true


// operator spajanja - nadoljepljivanja (concatination)
// +
// kada se + koristi kod dva broj zbaraja se
// kada se + koristi kod različitih tipova podataka, spajaju se

console.log('Pero ima ' + godine + ' godina') // ovo nije poželjan stil sintakse

console.log(`Pero ima ${godine} godina`)

const x = '7', y = 5


console.log(x + y) // 75


// spread operator - operator proširivanja (...)

const niz = [1,2]

console.table(niz)

const noviNiz = [0, ...niz, 3]

console.table(noviNiz)


const osoba = {
    ime: 'Pero',
    prezime: 'Perić'
}

console.table(osoba)

const polaznik = {
    ...osoba,
    edukacija: 'FD'
}

console.table(polaznik)


// suprotno od spread je destructing operator - operator destrukcije

const [prvi, drugi] = [1,2] 
// varijabla prvi ima vrijednost 1 a varijabla drugi ima vrijednost 2

console.log(prvi, drugi)


// destrukcija objekta

const {prezime, ...meniBitno} = polaznik

// prezime je u ovom slučaju škart

console.table(meniBitno)


// nullish calescing operator (??)

let sifra

console.log(sifra ?? 'Šifra nije postavljena')

sifra = '30900836-d3e2-44a4-baa7-745fe308f4ec'

console.log(sifra ?? 'Šifra nije postavljena')


// optional chaining operator ?.

// prije toga idemo vidjeti što radi .

const korisnik = {
    adresa: {
        grad: 'Osijek',
        ulica: 'Trg'
    }
}
// . služi da pristupam svojstvima i metodama (funkcijama) na objektima
console.log(korisnik.adresa.grad.toUpperCase())

// ?. omogućava da kod "ne pukne"
console.log(korisnik?.adresa?.ulica?.toUpperCase() ?? 'Nije postavljeno')









